import Image from "next/image"

// 🎯 CUSTOMIZE: Update your social media links here
const socials = [
  { icon: "/github.png", href: "https://github.com/zextrah", label: "GitHub" },
  {
    icon: "/spotify.png",
    href: "https://open.spotify.com/user/31grd3gc3b2ea4gqlmwrtfzjrvtu?si=7acda8b035aa4b48",
    label: "Spotify",
  },
  { icon: "/discord.png", href: "https://discord.com/users/332590503176437771", label: "Discord" },
  { icon: "/steam.png", href: "https://steamcommunity.com/id/Zextrah", label: "Steam" },
]

export function SocialLinks() {
  return (
    <div className="grid grid-cols-2 gap-3 md:gap-4 w-fit mx-auto">
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 md:gap-3 px-4 py-2.5 md:px-6 md:py-3 rounded-full border-2 border-white/20 bg-transparent hover:bg-white/10 hover:border-white/40 transition-all duration-300 text-white font-normal w-[140px] md:w-[160px]"
          aria-label={social.label}
        >
          <Image
            src={social.icon || "/placeholder.svg"}
            alt={social.label}
            width={20}
            height={20}
            className="w-4 h-4 md:w-5 md:h-5"
          />
          <span className="text-sm md:text-base">{social.label}</span>
        </a>
      ))}
    </div>
  )
}
