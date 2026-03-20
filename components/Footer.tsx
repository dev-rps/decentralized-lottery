export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-border-color/30 bg-background/50 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-neon-purple to-primary-purple flex items-center justify-center font-bold text-white">
                ⚡
              </div>
              <span className="font-bold text-foreground">STELLAR LOTTERY</span>
            </div>
            <p className="text-sm text-foreground/60">
              Decentralized lottery platform on Stellar blockchain
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-foreground/60 hover:text-neon-purple transition-colors">
                  How to Play
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/60 hover:text-neon-purple transition-colors">
                  Smart Contracts
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/60 hover:text-neon-purple transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Community</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-foreground/60 hover:text-neon-green transition-colors">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/60 hover:text-neon-green transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/60 hover:text-neon-green transition-colors">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border-color/30 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-foreground/50">
            © 2025 Stellar Lottery. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-foreground/50">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
