import tamil from './tamil.json';

export function translator(language) {
  return (text, values = {}) => {
    const translated = language === 'ta' ? (tamil[text] ?? text) : text;
    return translated.replace(/\{(\w+)\}/g, (match, key) => values[key] ?? match);
  };
}
