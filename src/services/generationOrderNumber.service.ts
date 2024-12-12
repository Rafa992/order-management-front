export function generationOrderNumber() {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const firstLetter = letters[Math.floor(Math.random() * letters.length)];

  const numbers = Math.floor(100000 + Math.random() * 900000).toString().slice(0, 5);
  return `${firstLetter}${numbers}`;
}
