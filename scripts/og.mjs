// Genera public/og.png (1200×630), la imagen Open Graph de todo el sitio.
// Uso: npm run og
import sharp from 'sharp';

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
	<rect width="1200" height="630" fill="#17181c"/>
	<rect x="80" y="200" width="12" height="150" fill="#8b8cf5"/>
	<text x="124" y="265" font-family="Helvetica, Arial, sans-serif" font-size="72" font-weight="700" fill="#ffffff">Germán Talón Lab</text>
	<text x="124" y="335" font-family="Helvetica, Arial, sans-serif" font-size="36" fill="#c0c2c7">Paso a paso y con casos reales</text>
	<text x="124" y="540" font-family="Helvetica, Arial, sans-serif" font-size="32" fill="#8b8cf5">lab.germantalon.com</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile('public/og.png');
console.log('public/og.png generada');
