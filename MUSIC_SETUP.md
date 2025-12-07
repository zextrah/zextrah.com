# Music Player Setup Guide

## How to Add Music

1. **Create a music folder**:
   - In your project, create a folder at `/public/music/`

2. **Add your music files**:
   - Place your MP3 files in `/public/music/`
   - Example: `/public/music/track1.mp3`, `/public/music/chill-vibes.mp3`

3. **Update the music list**:
   - Open `components/music-player.tsx`
   - Find the `MUSIC_TRACKS` array at the top
   - Add your tracks:

\`\`\`typescript
const MUSIC_TRACKS = [
  { title: "Chill Vibes", file: "/music/chill-vibes.mp3" },
  { title: "Night Drive", file: "/music/night-drive.mp3" },
  { title: "Focus Mode", file: "/music/focus-mode.mp3" },
]
\`\`\`

## Features

- **Auto-play**: Music will attempt to auto-play after the intro (some browsers block this)
- **Auto-advance**: Automatically moves to the next track when one finishes
- **Loop**: Cycles through all tracks continuously
- **Subtle UI**: Small play/pause button with track title below social links

## Customization

To change the music player appearance, edit `components/music-player.tsx`:
- Adjust text size, spacing, or colors
- Change icon sizes or styling
- Modify the button hover effects
