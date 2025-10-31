import sharp from 'sharp';
import { readFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const svgPath = join(__dirname, '..', 'public', 'icons', 'logo.svg');
const outputDir = join(__dirname, '..', 'public', 'images');

// Read the SVG file
const svgContent = readFileSync(svgPath, 'utf-8');

// Extract the SVG content between <svg> tags (the actual content)
const svgMatch = svgContent.match(/<svg[^>]*>([\s\S]*)<\/svg>/);
if (!svgMatch) {
  throw new Error('Invalid SVG format');
}

const svgBody = svgMatch[1];
const svgTag = svgMatch[0].match(/<svg[^>]*>/)[0];

// Create normal version (black shape, transparent background) - use original SVG
const normalSvg = svgContent;

// Create inverted version (white shape, dark background)
// Replace black fill with white and add dark background
const invertedSvgBody = svgBody.replace(/fill="#000000"/g, 'fill="#ffffff"');

const invertedSvg =
  svgTag.replace(/<svg/, '<svg style="background-color: #1a1a1a"').replace('>', '>') +
  '<rect width="3246.000000" height="3245.000000" fill="#1a1a1a"/>' +
  invertedSvgBody +
  '</svg>';

// Convert normal version to PNG (transparent background, black shape)
await sharp(Buffer.from(normalSvg))
  .resize(560, null, {
    fit: 'contain',
    background: { r: 255, g: 255, b: 255, alpha: 0 }, // Transparent background
  })
  .png()
  .toFile(join(outputDir, 'logo-light.png'));

// Convert inverted version to PNG (dark background, white shape)
await sharp(Buffer.from(invertedSvg))
  .resize(560, null, {
    fit: 'contain',
    background: { r: 26, g: 26, b: 26, alpha: 1 }, // Dark background #1a1a1a
  })
  .png()
  .toFile(join(outputDir, 'logo-dark.png'));

console.log('✅ Logo PNGs created successfully!');
console.log('   - public/images/logo-light.png (transparent background, black shape)');
console.log('   - public/images/logo-dark.png (dark background, white shape)');
