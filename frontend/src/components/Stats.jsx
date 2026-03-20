function Stats({ players, prizePool }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
      <div className="bg-cyber-dark border border-cyber-purple/30 rounded-xl p-6 hover:border-cyber-purple/50 transition-all duration-300">
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-400 text-sm">Total Players</span>
          <span className="text-2xl">👥</span>
        </div>
        <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyber-purple-light to-cyber-green-light">
          {players}
        </p>
      </div>

      <div className="bg-cyber-dark border border-cyber-green/30 rounded-xl p-6 hover:border-cyber-green/50 transition-all duration-300">
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-400 text-sm">Prize Pool</span>
          <span className="text-2xl">💰</span>
        </div>
        <p className="text-3xl font-bold neon-text-green">
          {prizePool} XLM
        </p>
      </div>

      <div className="bg-cyber-dark border border-cyber-blue/30 rounded-xl p-6 hover:border-cyber-blue/50 transition-all duration-300">
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-400 text-sm">Lottery Status</span>
          <div className="w-3 h-3 bg-cyber-green rounded-full animate-pulse"></div>
        </div>
        <p className="text-lg font-semibold text-cyber-green-light">
          ACTIVE
        </p>
      </div>
    </div>
  );
}

export default Stats;
