# 📝 Portfolio Customization Guide

Welcome! This guide will help you customize your zextrah.com-style portfolio website. Follow these steps to make it your own.

## 🎨 Quick Start Checklist

- [ ] Update profile photo
- [ ] Change the typing text title
- [ ] Update social media links
- [ ] Customize metadata (title, description)
- [ ] Replace background image (optional)
- [ ] Update favicon and icons

---

## 1️⃣ Profile Image

### `app/page.tsx`
- **Line 41**: Replace `/professional-headshot.png` with your profile photo path
- **Recommended**: Upload your photo to `public/` folder as `profile.jpg` or `profile.png`
- **Size**: 400x400px minimum (square, circular crop will be applied)
- **Format**: JPG or PNG

**Example**:
\`\`\`tsx
<Image src="/profile.jpg" alt="Profile" fill className="object-cover" priority />
\`\`\`

---

## 2️⃣ Typing Text Title

### `app/page.tsx`
- **Line 25**: Change `"developer"` to your title

**Examples**:
- `"designer"`
- `"creative"`
- `"engineer"`
- `"artist"`

\`\`\`tsx
const fullText = "your title here" // 🎯 CUSTOMIZE: Change your title here
\`\`\`

---

## 3️⃣ Social Media Links

### `components/social-links.tsx`
- **Lines 4-11**: Update all social media URLs with your actual profiles

\`\`\`tsx
const socials = [
  { icon: Youtube, href: "https://youtube.com/@YOUR_USERNAME", label: "Youtube" },
  { icon: Gamepad2, href: "https://steamcommunity.com/id/YOUR_ID", label: "Steam" },
  { icon: Twitter, href: "https://twitter.com/YOUR_USERNAME", label: "Twitter" },
  { icon: MessageCircle, href: "https://twitch.tv/YOUR_USERNAME", label: "Twitch" },
  { icon: Music, href: "https://open.spotify.com/user/YOUR_ID", label: "Spotify" },
  { icon: MessageCircle, href: "https://discord.com/users/YOUR_ID", label: "Discord" },
]
\`\`\`

**To add/remove platforms**:
- Add or delete items from the array
- Icons available from `lucide-react`: Github, Linkedin, Mail, Instagram, etc.

---

## 4️⃣ Metadata (SEO)

### `app/layout.tsx`
- **Line 13**: Update site title (appears in browser tab)
- **Line 14**: Update description (appears in search results)
- **Line 18**: Update your website URL
- **Line 21**: Update image path for social media previews

\`\`\`tsx
export const metadata: Metadata = {
  title: "Your Name",
  description: "Your bio or tagline",
}
\`\`\`

---

## 5️⃣ Background Image

### `app/page.tsx`
- **Line 38**: Replace background image path

**Current**: Dark cityscape aerial night view  
**To change**: Upload your image to `public/` and update the path

\`\`\`tsx
<Image src="/your-background.jpg" alt="Background" fill className="object-cover opacity-30" priority />
\`\`\`

**Recommended**:
- Size: 1920x1080px or larger
- Format: JPG (optimized for web)
- Style: Dark or moody images work best
- Opacity is set to 30% for readability

---

## 6️⃣ Favicon & Icons

### Files to replace in `public/` folder:
- `favicon.jpg` - Browser tab icon (32x32px)
- `apple-touch-icon.jpg` - iOS home screen icon (180x180px)

Upload your logo or profile photo with these names to replace them.

---

## 7️⃣ Colors (Advanced)

The site uses a pure black background with white text for the minimalist aesthetic.

### To customize colors, edit `app/globals.css`:
- **Background**: Currently pure black `oklch(0.145 0 0)` 
- **Text**: Currently white `oklch(0.985 0 0)`
- **Buttons**: Transparent with white borders

**Note**: The original zextrah.com design uses high contrast black/white. Changing colors may affect the aesthetic.

---

## 🎯 Quick Reference: What to Change

| What to Change | File Location | Line Number |
|----------------|---------------|-------------|
| Profile photo | `app/page.tsx` | 41 |
| Typing text | `app/page.tsx` | 25 |
| Social links | `components/social-links.tsx` | 4-11 |
| Site title | `app/layout.tsx` | 13 |
| Background image | `app/page.tsx` | 38 |
| Description | `app/layout.tsx` | 14 |

---

## 🚀 Deploy Your Site

### Via v0 (Easiest)
1. Click the "Publish" button in the top right
2. Connect to GitHub (if not already connected)
3. Deploy to Vercel automatically

### Manual Download
1. Click the three dots (...) in the top right
2. Select "Download ZIP"
3. Extract and run:
   \`\`\`bash
   npm install
   npm run dev
   \`\`\`

---

## 💡 Tips

1. **Profile photo**: Use a high-quality square image with good lighting
2. **Social links**: Only include platforms where you're active
3. **Background**: Keep it subtle - the original uses 30% opacity
4. **Title**: Keep it short (1-2 words) for the typing effect to look good
5. **Test**: Check on mobile devices - the design is fully responsive

---

## 🆘 Common Issues

**Typing effect not working?**
- Make sure you haven't removed the `"use client"` directive at the top of `app/page.tsx`

**Images not showing?**
- Check that images are in the `public/` folder
- Verify the file path starts with `/` (e.g., `/profile.jpg`)

**Social links opening in same tab?**
- Links have `target="_blank"` to open in new tabs by default

---

**All customization points are marked with 🎯 CUSTOMIZE comments in the code!**

**Happy customizing! 🚀**
