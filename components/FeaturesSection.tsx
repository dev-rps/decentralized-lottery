export default function FeaturesSection() {
  const features = [
    {
      icon: '🔒',
      title: 'Fully Decentralized',
      description: 'Smart contracts handle all draws fairly and transparently on the blockchain.',
    },
    {
      icon: '⚡',
      title: 'Instant Payouts',
      description: 'Winners receive their prizes instantly via smart contract execution.',
    },
    {
      icon: '🌍',
      title: 'Global Access',
      description: 'Play from anywhere in the world with just a Freighter wallet.',
    },
    {
      icon: '💰',
      title: 'Low Fees',
      description: 'Minimal platform fees mean more prize money stays in the pot.',
    },
  ]

  return (
    <section className="relative z-10 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-border-color/30">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-neon-purple to-neon-green bg-clip-text text-transparent mb-4">
            Why Stellar Lottery?
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Experience the future of gaming with blockchain technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-border-color/30 bg-dark-card/50 backdrop-blur-sm hover:border-neon-purple/50 hover:shadow-glow-purple transition-all duration-300 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
