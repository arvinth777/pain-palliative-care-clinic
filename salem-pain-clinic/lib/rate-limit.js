export function createRateLimit(limit, windowSeconds) {
  const requests = new Map();
  let resetAt = 0;

  return function retryAfter(headers, now = Date.now()) {
    // shortcut: one counter per server process, use a shared firewall when traffic spans instances
    if (now >= resetAt) {
      requests.clear();
      resetAt = now + windowSeconds * 1000;
    }

    // Vercel overwrites this header. On other hosts, do not trust a client-supplied IP.
    const client = process.env.VERCEL === '1'
      ? headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
      : 'local';
    const count = requests.get(client) ?? 0;
    if (count >= limit || (count === 0 && requests.size >= 4096)) {
      return Math.ceil((resetAt - now) / 1000);
    }

    requests.set(client, count + 1);
    return 0;
  };
}
