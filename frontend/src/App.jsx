import { useState, useEffect } from 'react';
import Header from './components/Header';
import BuyTicket from './components/BuyTicket';
import PlayersList from './components/PlayersList';
import PreviousWinner from './components/PreviousWinner';
import Stats from './components/Stats';

function App() {
  const [walletAddress, setWalletAddress] = useState(null);
  const [players, setPlayers] = useState([]);
  const [previousWinner, setPreviousWinner] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadPlayers();
    loadPreviousWinner();
  }, []);

  const loadPlayers = async () => {
    const mockPlayers = [
      'GABC...XYZ1',
      'GDEF...XYZ2',
      'GHIJ...XYZ3',
      'GKLM...XYZ4',
    ];
    setPlayers(mockPlayers);
  };

  const loadPreviousWinner = async () => {
    const mockWinner = {
      address: 'GWINNER...ABC',
      prize: '450 XLM',
      date: new Date().toLocaleDateString(),
    };
    setPreviousWinner(mockWinner);
  };

  const handleBuyTicket = async () => {
    if (!walletAddress) {
      alert('Please connect your Freighter wallet first!');
      return;
    }

    setIsLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));

      const newPlayer = `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`;
      setPlayers([...players, newPlayer]);

      alert('Ticket purchased successfully!');
    } catch (error) {
      console.error('Error buying ticket:', error);
      alert('Failed to buy ticket. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyber-darker via-cyber-dark to-cyber-darker">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyber-purple/10 via-transparent to-transparent pointer-events-none"></div>

      <div className="relative z-10">
        <Header
          walletAddress={walletAddress}
          setWalletAddress={setWalletAddress}
        />

        <main className="container mx-auto px-4 py-8 md:py-12">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 neon-text">
              SOROBAN LOTTERY
            </h1>
            <p className="text-xl md:text-2xl text-gray-400">
              Decentralized. Transparent. Fair.
            </p>
            <div className="mt-4 flex justify-center gap-2">
              <div className="h-1 w-12 bg-gradient-to-r from-cyber-purple to-cyber-green rounded-full animate-pulse-slow"></div>
              <div className="h-1 w-12 bg-gradient-to-r from-cyber-green to-cyber-purple rounded-full animate-pulse-slow"></div>
            </div>
          </div>

          <Stats players={players.length} prizePool={players.length * 10} />

          <BuyTicket
            onBuyTicket={handleBuyTicket}
            isLoading={isLoading}
            isConnected={!!walletAddress}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mt-8 md:mt-12">
            <PlayersList players={players} />
            <PreviousWinner winner={previousWinner} />
          </div>
        </main>

        <footer className="relative z-10 border-t border-cyber-purple/20 mt-16 py-8">
          <div className="container mx-auto px-4 text-center text-gray-500">
            <p className="mb-2">Built on Stellar Network with Soroban</p>
            <p className="text-sm">Contract: CBLTMT...EJT7OV</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
