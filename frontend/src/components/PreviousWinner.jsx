function PreviousWinner({ winner }) {
  return (
    <div className="bg-cyber-dark border border-cyber-green/30 rounded-2xl p-6 md:p-8 hover:border-cyber-green/50 transition-all duration-300">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-3xl">🏆</span>
        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyber-green-light to-cyber-purple-light">
          Previous Winner
        </h3>
      </div>

      {!winner ? (
        <div className="text-center py-12">
          <div className="text-6xl mb-4 opacity-20">🎯</div>
          <p className="text-gray-500">No previous draw yet</p>
          <p className="text-sm text-gray-600 mt-2">First round in progress</p>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="relative bg-gradient-to-br from-cyber-green/20 to-cyber-purple/20 border border-cyber-green/40 rounded-xl p-6 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyber-green/10 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-wider text-gray-400">Winner Address</span>
                <span className="text-xs text-gray-500">{winner.date}</span>
              </div>

              <p className="font-mono text-lg text-cyber-green-light mb-4 break-all">
                {winner.address}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-cyber-green/20">
                <span className="text-gray-400">Prize Won</span>
                <span className="text-2xl font-bold neon-text-green">
                  {winner.prize}
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-cyber-darker/50 border border-cyber-purple/20 rounded-lg p-4">
              <p className="text-xs text-gray-500 mb-1">Draw Method</p>
              <p className="text-sm text-gray-300">On-Chain PRNG</p>
            </div>
            <div className="bg-cyber-darker/50 border border-cyber-purple/20 rounded-lg p-4">
              <p className="text-xs text-gray-500 mb-1">Status</p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-cyber-green rounded-full animate-pulse"></div>
                <p className="text-sm text-cyber-green-light">Verified</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PreviousWinner;
