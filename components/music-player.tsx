"use client"

import { useEffect, useRef, useState } from "react"
import { Pause, Play } from 'lucide-react'

// 🎯 CUSTOMIZE: Add your music files here
// Place your music files in the /public/music folder
// Example: /public/music/song1.mp3, /public/music/song2.mp3
const MUSIC_TRACKS = [
  { title: "Entry Four - Jaydes Archive", file: "/music/track1.mp3" },
  // Add more tracks here
]

interface MusicPlayerProps {
  autoPlay?: boolean
}

export function MusicPlayer({ autoPlay = false }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTrackIndex, setCurrentTrackIndex] = useState(() => Math.floor(Math.random() * MUSIC_TRACKS.length))
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.1
    }

    if (autoPlay && audioRef.current) {
      const playPromise = audioRef.current.play()

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true)
          })
          .catch(() => {
            // Browser blocked autoplay, user will need to click play
            setIsPlaying(false)
          })
      }
    }
  }, [autoPlay])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const handleEnded = () => {
      // Move to next track when current one ends
      setCurrentTrackIndex((prev) => (prev + 1) % MUSIC_TRACKS.length)
      setIsPlaying(true)
      audio.play()
    }

    audio.addEventListener("ended", handleEnded)
    return () => audio.removeEventListener("ended", handleEnded)
  }, [])

  const togglePlay = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      audioRef.current.play()
      setIsPlaying(true)
    }
  }

  const currentTrack = MUSIC_TRACKS[currentTrackIndex]

  return (
    <div className="flex flex-col items-center gap-2 mt-6">
      <audio ref={audioRef} src={currentTrack?.file} preload="metadata" />

      <button
        onClick={togglePlay}
        className="flex items-center gap-2 px-4 py-2 text-white/70 hover:text-white transition-colors duration-200 text-sm"
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        <span className="font-light">{currentTrack?.title || "No track"}</span>
      </button>
    </div>
  )
}