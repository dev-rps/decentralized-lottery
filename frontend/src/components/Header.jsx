import { useState } from 'react';
import { isConnected, getPublicKey, requestAccess } from '@stellar/freighter-api';

function Header({ walletAddress, setWalletAddress }) {
  const [isConnecting, setIsConnecting] = useState(false);

  const connectWallet = async () => {
    setIsConnecting(true);

    try {
      const hasFreighter = await isConnected();

      if (!hasFreighter) {
        alert('Please install Freighter wallet extension!');
        window.open('https://www.freighter.app/', '_blank');
        return;
      }

      await requestAccess();
      const publicKey = await getPublicKey();
      setWalletAddress(publicKey);

    } catch (error) {
      console.error('Error connecting wallet:', error);
      alert('Failed to connect wallet. Please try again.');
    } finally {
      setIsConnecting(false);
    }
  };

  const disconnectWallet = () => {
    setWalletAddress(null);
  };

  return (
    <header className="border-b border-cyber-purple/20 backdrop-blur-sm bg-cyber-dark/50 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 md:py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-cyber-purple to-cyber-green rounded-lg flex items-center justify-center shadow-neon-purple">
              <span className="text-2xl">🎰</span>
            </div>
            <div className="hidden md:block">
              <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyber-purple-light to-cyber-green-light">
                Soroban Lottery
              </h2>
              <p className="text-xs text-gray-500">Stellar Network</p>
            </div>
          </div>

          {!walletAddress ? (
            <button
              onClick={connectWallet}
              disabled={isConnecting}
              className="relative group px-6 py-3 bg-gradient-to-r from-cyber-purple to-cyber-purple-light text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-neon-purple disabled:opacity-50"
            >
              <span className="relative z-10">
                {isConnecting ? 'Connecting...' : 'Connect Freighter'}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyber-purple-light to-cyber-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          ) : (
            <div className="flex items-center gap-3">
              <div className="hidden md:block px-4 py-2 bg-cyber-dark border border-cyber-green/30 rounded-lg">
                <p className="text-xs text-gray-500 mb-1">Connected</p>
                <p className="text-sm font-mono text-cyber-green-light">
                  {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
                </p>
              </div>
              <button
                onClick={disconnectWallet}
                className="px-4 py-2 bg-cyber-dark border border-red-500/30 text-red-400 rounded-lg hover:bg-red-500/10 hover:border-red-500/50 transition-all duration-300"
              >
                Disconnect
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
