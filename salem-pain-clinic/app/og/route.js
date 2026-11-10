/* eslint-disable @next/next/no-img-element -- ImageResponse renders an image, not an HTML page. */
import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { DOCTOR_FULL_NAME, DOCTOR_DEGREES } from '@/lib/constants';

export const dynamic = 'force-static';

export async function GET() {
  const logo = await readFile(join(process.cwd(), 'public/images/clinic-logo-refined.png'));
  return new ImageResponse(
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', background: '#ffffff', color: '#152b44', padding: '68px 72px', borderBottom: '24px solid #1754a7' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flex: 1 }}>
        <div style={{ display: 'flex', flexDirection: 'column', width: 730 }}>
          <div style={{ fontSize: 70, fontWeight: 700, lineHeight: 1.05, letterSpacing: '-2px' }}>Salem Pain Clinic</div>
          <div style={{ fontSize: 34, marginTop: 24, color: '#1754a7', lineHeight: 1.3 }}>Pain management &amp; palliative care</div>
          <div style={{ fontSize: 26, marginTop: 44 }}>{DOCTOR_FULL_NAME}</div>
          <div style={{ fontSize: 22, marginTop: 9 }}>{DOCTOR_DEGREES}</div>
        </div>
        <img src={`data:image/png;base64,${logo.toString('base64')}`} width="230" height="230" alt="" />
      </div>
      <div style={{ display: 'flex', fontSize: 24, color: '#475b70', borderTop: '1px solid #c5d5e5', paddingTop: 24, marginTop: 32 }}>Swarnapuri, Salem · Tamil Nadu</div>
    </div>,
    { width: 1200, height: 630 },
  );
}
