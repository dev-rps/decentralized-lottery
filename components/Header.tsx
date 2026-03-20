'use client'

import { useState } from 'react'

export default function Header() {
  const [isConnected, setIsConnected] = useState(false)
  const [walletAddress, setWalletAddress] = useState('')

  const handleConnect = async () => {
    try {
      // Simulate wallet connection
      console.log('Connecting to Freighter Wallet...')
      setIsConnected(true)
      setWalletAddress('G...XXXXXXX')
    } catch (error) {
      console.error('Failed to connect wallet:', error)
    }
  }

  return (
    <header className="relative z-10 border-b border-border-color/30 bg-background/80 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-neon-purple to-primary-purple flex items-center justify-center font-bold text-white text-lg glow-text">
              ⚡
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-neon-purple to-neon-green bg-clip-text text-transparent">
                STELLAR LOTTERY
              </h1>
              <p className="text-xs text-foreground/50">Decentralized Gaming</p>
            </div>
          </div>

          {/* Wallet Connection Button */}
          <button
            onClick={handleConnect}
            className={`relative group px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
              isConnected
                ? 'bg-accent-green/20 text-neon-green border border-neon-green/50'
                : 'bg-neon-purple/20 text-neon-purple border border-neon-purple/50 hover:bg-neon-purple/30'
            }`}
          >
            <span>
              {isConnected ? `✓ ${walletAddress}` : '🔗 Connect Freighter'}
            </span>
          </button>
        </div>
      </div>

      {/* Top Glow Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-purple to-transparent opacity-50" />
    </header>
  )
}
