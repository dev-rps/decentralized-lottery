'use client'

import { useState } from 'react'

export default function HeroSection() {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <section className="relative z-10 py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-neon-green/30 bg-neon-green/5">
            <span className="h-2 w-2 rounded-full bg-neon-green animate-pulse" />
            <p className="text-sm text-neon-green font-medium">Live on Stellar Network</p>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-neon-purple via-primary-purple to-neon-green bg-clip-text text-transparent">
            Win Life-Changing Prizes
          </h2>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-foreground/70 mb-12 max-w-3xl mx-auto leading-relaxed">
            Enter the decentralized lottery on Stellar blockchain. Fair, transparent, and instant payouts to winners.
          </p>

          {/* Main CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className={`relative px-8 sm:px-12 py-4 sm:py-5 rounded-xl font-bold text-lg transition-all duration-300 ${
                isHovering
                  ? 'bg-neon-purple text-white scale-105'
                  : 'bg-neon-purple/20 text-neon-purple border border-neon-purple/50'
              }`}
            >
              <span className="flex items-center justify-center gap-2">
                🎰 Buy Ticket (10 XLM)
              </span>
            </button>

            <button className="px-8 sm:px-12 py-4 sm:py-5 rounded-xl font-bold text-lg border-2 border-neon-green/50 text-neon-green hover:bg-neon-green/10 transition-all duration-300">
              📊 View Rules
            </button>
          </div>

          {/* Stats Row */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="p-4 rounded-lg bg-dark-card/50 border border-border-color/30 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-bold text-neon-green mb-2">$50,000</div>
              <p className="text-sm sm:text-base text-foreground/60">Current Jackpot</p>
            </div>

            <div className="p-4 rounded-lg bg-dark-card/50 border border-border-color/30 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-bold text-neon-purple mb-2">1,247</div>
              <p className="text-sm sm:text-base text-foreground/60">Active Players</p>
            </div>

            <div className="p-4 rounded-lg bg-dark-card/50 border border-border-color/30 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-bold text-primary-purple mb-2">15h 32m</div>
              <p className="text-sm sm:text-base text-foreground/60">Until Next Draw</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
