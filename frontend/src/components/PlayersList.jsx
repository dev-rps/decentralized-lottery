function PlayersList({ players }) {
  return (
    <div className="bg-cyber-dark border border-cyber-purple/30 rounded-2xl p-6 md:p-8 hover:border-cyber-purple/50 transition-all duration-300">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyber-purple-light to-cyber-green-light">
          Current Players
        </h3>
        <div className="px-4 py-2 bg-cyber-purple/20 rounded-lg border border-cyber-purple/40">
          <span className="text-cyber-purple-light font-bold text-lg">{players.length}</span>
        </div>
      </div>

      <div className="space-y-3 max-h-96 overflow-y-auto custom-scrollbar">
        {players.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4 opacity-20">👥</div>
            <p className="text-gray-500">No players yet. Be the first!</p>
          </div>
        ) : (
          players.map((player, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-cyber-darker/50 border border-cyber-purple/20 rounded-lg hover:border-cyber-purple/40 hover:bg-cyber-darker transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-cyber-purple to-cyber-blue rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold">{index + 1}</span>
                </div>
                <span className="font-mono text-gray-300">{player}</span>
              </div>
              <div className="px-3 py-1 bg-cyber-green/10 border border-cyber-green/30 rounded text-cyber-green-light text-xs">
                ACTIVE
              </div>
            </div>
          ))
        )}
      </div>

      {players.length > 0 && (
        <div className="mt-6 pt-6 border-t border-cyber-purple/20">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-400">Your Odds</span>
            <span className="text-cyber-green-light font-semibold">
              {players.length > 0 ? `1 in ${players.length}` : 'N/A'}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default PlayersList;
