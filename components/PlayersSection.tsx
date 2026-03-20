'use client'

interface Player {
  id: string
  address: string
  tickets: number
  joined: string
}

const currentPlayers: Player[] = [
  { id: '1', address: 'G...7A4K2', tickets: 5, joined: '2 hours ago' },
  { id: '2', address: 'G...3X9M1', tickets: 3, joined: '45 minutes ago' },
  { id: '3', address: 'G...8L5P0', tickets: 8, joined: '1 hour ago' },
  { id: '4', address: 'G...2Q7T4', tickets: 2, joined: '30 minutes ago' },
  { id: '5', address: 'G...9V3W8', tickets: 6, joined: '3 hours ago' },
  { id: '6', address: 'G...4R1S5', tickets: 4, joined: '15 minutes ago' },
]

export default function PlayersSection() {
  return (
    <section className="relative z-10 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Current Players */}
          <div className="rounded-2xl border border-neon-purple/30 bg-dark-card/50 p-6 sm:p-8 backdrop-blur-sm hover:border-neon-purple/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-8 w-8 rounded-lg bg-neon-purple/20 flex items-center justify-center">
                <span className="text-neon-purple font-bold">👥</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">Current Players</h3>
              <span className="ml-auto px-3 py-1 rounded-full bg-neon-purple/20 text-neon-purple text-sm font-semibold">
                {currentPlayers.length}
              </span>
            </div>

            <div className="space-y-3 max-h-96 overflow-y-auto">
              {currentPlayers.map((player) => (
                <div
                  key={player.id}
                  className="p-4 rounded-lg bg-background/50 border border-border-color/30 hover:border-neon-purple/50 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-gradient-to-br from-neon-purple to-primary-purple flex items-center justify-center text-white text-sm font-bold">
                        {player.id}
                      </div>
                      <div>
                        <p className="font-mono text-sm sm:text-base text-neon-green group-hover:text-neon-green/80 transition-colors">
                          {player.address}
                        </p>
                        <p className="text-xs text-foreground/50">{player.joined}</p>
                      </div>
                    </div>
                  </div>
                  <div className="ml-11 flex items-center gap-2">
                    <div className="h-1 flex-1 bg-gradient-to-r from-neon-purple/50 to-transparent rounded-full" />
                    <span className="text-sm font-bold text-neon-green">{player.tickets} ticket{player.tickets > 1 ? 's' : ''}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Previous Winner */}
          <div className="rounded-2xl border border-neon-green/30 bg-dark-card/50 p-6 sm:p-8 backdrop-blur-sm hover:border-neon-green/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-8 w-8 rounded-lg bg-neon-green/20 flex items-center justify-center">
                <span className="text-neon-green font-bold">🏆</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">Previous Winner</h3>
            </div>

            <div className="space-y-6">
              {/* Winner Card */}
              <div className="p-6 rounded-xl bg-gradient-to-br from-neon-green/10 to-accent-green/10 border border-neon-green/30">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-neon-green to-accent-green flex items-center justify-center text-white text-xl font-bold mb-3">
                      ⭐
                    </div>
                    <p className="text-sm text-foreground/60 mb-1">Winner Address</p>
                    <p className="font-mono text-lg font-bold text-neon-green">G...K7X2M</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-foreground/60 mb-1">Prize Amount</p>
                    <p className="text-3xl font-bold text-neon-green">$48,500</p>
                  </div>
                </div>
              </div>

              {/* Draw Info */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-background/50 border border-border-color/30">
                  <p className="text-xs text-foreground/60 mb-1">Draw Date</p>
                  <p className="text-sm font-bold text-foreground">Mar 18, 2025</p>
                </div>
                <div className="p-4 rounded-lg bg-background/50 border border-border-color/30">
                  <p className="text-xs text-foreground/60 mb-1">Winning Ticket</p>
                  <p className="text-sm font-bold text-neon-green">#4782195</p>
                </div>
              </div>

              {/* Winning Numbers */}
              <div className="p-4 rounded-lg bg-background/50 border border-border-color/30">
                <p className="text-xs text-foreground/60 mb-3">Winning Numbers</p>
                <div className="flex gap-2 flex-wrap">
                  {[7, 14, 23, 31, 42, 49].map((num) => (
                    <div
                      key={num}
                      className="h-10 w-10 rounded-full bg-gradient-to-br from-neon-green to-accent-green flex items-center justify-center font-bold text-white text-sm"
                    >
                      {num}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
