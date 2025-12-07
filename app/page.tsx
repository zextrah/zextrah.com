"use client"

import { useEffect, useState } from "react"
import { SocialLinks } from "@/components/social-links"
import { MusicPlayer } from "@/components/music-player"
import Image from "next/image"

// 🎯 CUSTOMIZE: Change your rotating phrases here
const PHRASES = ["24", "aircraft engineer", "american airlines", "roblox scripter", "fivem developer"]

export default function Home() {
  const [showIntro, setShowIntro] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)
  const [introText, setIntroText] = useState("")
  const [showClickPrompt, setShowClickPrompt] = useState(false)
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [text, setText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const [isDeleting, setIsDeleting] = useState(false)

  const introFullText = "zextrah"

  useEffect(() => {
    if (!showIntro) return

    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= introFullText.length) {
        setIntroText(introFullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
        setTimeout(() => {
          setShowClickPrompt(true)
        }, 500)
      }
    }, 150)

    return () => clearInterval(typingInterval)
  }, [showIntro])

  const handleIntroClick = () => {
    if (!showClickPrompt) return
    setFadeOut(true)
    setTimeout(() => {
      setShowIntro(false)
    }, 1000)
  }

  useEffect(() => {
    if (showIntro) return

    const currentPhrase = PHRASES[currentPhraseIndex]

    const typingSpeed = isDeleting ? 50 : 150
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (text.length < currentPhrase.length) {
          setText(currentPhrase.slice(0, text.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (text.length > 0) {
          setText(currentPhrase.slice(0, text.length - 1))
        } else {
          setIsDeleting(false)
          setCurrentPhraseIndex((prev) => (prev + 1) % PHRASES.length)
        }
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [text, isDeleting, currentPhraseIndex, showIntro])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)

    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <>
      {/* Intro Screen - Just "zextrah" with glow and click prompt */}
      <main
        onClick={handleIntroClick}
        className={`min-h-screen flex items-center justify-center bg-black text-white fixed inset-0 transition-opacity duration-1000 ${
          fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
        } ${showClickPrompt ? "cursor-pointer" : ""}`}
        style={{ zIndex: fadeOut ? 10 : 20 }}
      >
        <div className="text-center flex flex-col items-center gap-6">
          <h1
            className="text-5xl md:text-7xl font-semibold italic tracking-tight inline-flex items-center"
            style={{
              textShadow:
                "0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.5), 0 0 60px rgba(255, 255, 255, 0.3)",
            }}
          >
            <span>{introText}</span>
            <span
              className={`inline-block w-[3px] h-[1.2em] bg-white ${showCursor ? "opacity-100" : "opacity-0"}`}
              style={{ transition: "opacity 0.1s" }}
            />
          </h1>
          {showClickPrompt && (
            <p
              className="text-sm md:text-base text-white/60 animate-pulse"
              style={{ animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite" }}
            >
              click to enter...
            </p>
          )}
        </div>
      </main>

      {/* Main Content */}
      <main
        className={`min-h-screen flex items-center justify-center bg-black text-white relative overflow-hidden fixed inset-0 transition-opacity duration-1000 ${
          showIntro && !fadeOut ? "opacity-0" : "opacity-100"
        }`}
        style={{ zIndex: 10 }}
      >
        <div className="absolute inset-0 z-0">
          <Image src="/background.gif" alt="Background" fill className="object-cover opacity-40" priority unoptimized />
        </div>

        <div className="relative z-10 flex flex-col items-center gap-4 md:gap-12 px-4 py-8">
          <div className="relative w-[140px] h-[140px] md:w-[180px] md:h-[180px] rounded-full overflow-hidden border-2 border-white/20 shadow-2xl">
            <Image src="/profile.jpg" alt="Profile" fill className="object-cover" priority />
          </div>

          <div className="text-center flex flex-col items-center gap-6 md:gap-8 -mt-4 md:-mt-6">
            <h1
              className="text-4xl md:text-6xl font-semibold italic tracking-tight"
              style={{
                textShadow:
                  "0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.5), 0 0 60px rgba(255, 255, 255, 0.3)",
              }}
            >
              zextrah
            </h1>
            <div className="text-base md:text-lg font-light text-white/90 inline-flex items-center h-7 md:h-8">
              <span>{text}</span>
              <span
                className={`inline-block w-[2px] h-[1.2em] bg-white ml-1 ${showCursor ? "opacity-100" : "opacity-0"}`}
                style={{ transition: "opacity 0.1s" }}
              />
            </div>
          </div>

          <SocialLinks />
          <MusicPlayer autoPlay={!showIntro} />
        </div>
      </main>
    </>
  )
}