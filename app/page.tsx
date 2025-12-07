"use client"

import { useEffect, useState } from "react"
import { SocialLinks } from "@/components/social-links"
import { MusicPlayer } from "@/components/music-player"
import Image from "next/image"

// 🎯 CUSTOMIZE: Change your rotating phrases here
const PHRASES = ["24", "aircraft engineer", "american airlines", "roblox scripter", "fivem developer"]

export default function Home() {
  const [showIntro, setShowIntro] = useState(true)
  const [fadeInMain, setFadeInMain] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)
  const [introText, setIntroText] = useState("")
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
          setFadeOut(true)
          setTimeout(() => {
            setShowIntro(false)
          }, 1000)
        }, 1000)
      }
    }, 150)

    return () => clearInterval(typingInterval)
  }, [showIntro])

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
      {/* Intro Screen */}
      <main
        className={`min-h-screen flex items-center justify-center bg-black text-white fixed inset-0 transition-opacity duration-1000 ${
          fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
        style={{ zIndex: fadeOut ? 10 : 20 }}
      >
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-semibold italic tracking-tight inline-flex items-center">
            <span>{introText}</span>
            <span
              className={`inline-block w-[3px] h-[1.2em] bg-white ${showCursor ? "opacity-100" : "opacity-0"}`}
              style={{ transition: "opacity 0.1s" }}
            />
          </h1>
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

        <div className="relative z-10 flex flex-col items-center gap-8 md:gap-12 px-4 py-8">
          <div className="relative w-[140px] h-[140px] md:w-[180px] md:h-[180px] rounded-full overflow-hidden border-2 border-white/20 shadow-2xl">
            <Image src="/profile.jpg" alt="Profile" fill className="object-cover" priority />
          </div>

          <div className="text-center w-full max-w-[90vw] md:max-w-[600px]">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold italic tracking-tight inline-flex items-center whitespace-nowrap">
              <span>{text}</span>
              <span
                className={`inline-block w-[2px] md:w-[3px] h-[1.2em] bg-white ${
                  showCursor ? "opacity-100" : "opacity-0"
                }`}
                style={{ transition: "opacity 0.1s" }}
              />
            </h1>
          </div>

          <SocialLinks />
          <MusicPlayer autoPlay={!showIntro} />
        </div>
      </main>
    </>
  )
}
