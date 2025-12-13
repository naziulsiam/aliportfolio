# Assets Folder

This folder contains static assets for the portfolio website.

## Favicon Images

The site is configured to use multiple favicon sizes for different devices. You'll need to generate these images:

### Required Favicon Files:

1. **favicon.ico** (16x16, 32x32, 48x48) - Traditional favicon
2. **favicon-16x16.png** - Small icon for browser tabs
3. **favicon-32x32.png** - Standard favicon size
4. **apple-touch-icon.png** (180x180) - iOS home screen icon
5. **android-chrome-192x192.png** - Android home screen (small)
6. **android-chrome-512x512.png** - Android home screen (large)

### How to Generate Favicons

#### Option 1: Online Tools (Easiest)

1. Create a square image (512x512 or larger) with your logo/icon
   - Use the shield emoji 🔐 or create a custom cybersecurity-themed icon
   - Tools: Canva, Figma, Adobe Illustrator, or any graphic design tool

2. Use a favicon generator:
   - **[Favicon.io](https://favicon.io/)** - Generate from text, emoji, or image
   - **[RealFaviconGenerator](https://realfavicongenerator.net/)** - Comprehensive generator
   - **[Favicon Generator](https://www.favicon-generator.org/)** - Simple and fast

3. Download all generated files
4. Place them in this `assets/` folder

#### Option 2: Using ImageMagick (Command Line)

```bash
# Install ImageMagick first
# Ubuntu/Debian: sudo apt-get install imagemagick
# macOS: brew install imagemagick

# Generate from a source image (source.png)
convert source.png -resize 16x16 favicon-16x16.png
convert source.png -resize 32x32 favicon-32x32.png
convert source.png -resize 180x180 apple-touch-icon.png
convert source.png -resize 192x192 android-chrome-192x192.png
convert source.png -resize 512x512 android-chrome-512x512.png

# Create .ico file with multiple sizes
convert source.png -resize 16x16 -colors 256 16.png
convert source.png -resize 32x32 -colors 256 32.png
convert source.png -resize 48x48 -colors 256 48.png
convert 16.png 32.png 48.png favicon.ico
rm 16.png 32.png 48.png
```

#### Option 3: Using Figma/Design Tool

1. Create a 512x512px canvas
2. Design your icon with cybersecurity theme
3. Export at different sizes:
   - 16x16, 32x32, 180x180, 192x192, 512x512
4. Use an online ICO converter for favicon.ico

### Temporary Placeholder

Until you generate proper favicons, the site uses an inline SVG emoji (🔐) as a temporary favicon. This works in modern browsers but won't appear on all devices.

### Design Recommendations

- **Color Scheme**: Use cyan (#00f3ff) and purple (#bd00ff) to match the portfolio theme
- **Style**: Minimalist, tech-focused, cybersecurity-related
- **Ideas**:
  - Shield with code brackets
  - Lock with circuit board pattern
  - Terminal window icon
  - Abstract security symbol
- **Format**: PNG with transparent background for best results

### After Adding Favicons

Update the `<head>` section in `index.html` to reference the actual files:

```html
<!-- Replace the temporary SVG favicon with: -->
<link rel="icon" type="image/x-icon" href="/assets/favicon.ico">
<link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-touch-icon.png">
<link rel="manifest" href="/assets/site.webmanifest">
```

---

## Other Assets

This folder can also contain:

- **preview.png** - Social media preview image (1200x630px recommended)
- **profile.jpg** - Profile photo (if you want to add one to the hero section)
- **project-screenshots/** - Screenshots for project showcases
- **certificates/** - Certification badges or images

## Notes

- Keep file sizes optimized (use TinyPNG or similar for compression)
- Use WebP format for better performance when possible
- Ensure images are optimized for web (sRGB color space)
