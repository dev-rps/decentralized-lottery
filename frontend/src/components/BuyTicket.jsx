function BuyTicket({ onBuyTicket, isLoading, isConnected }) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-cyber-purple via-cyber-green to-cyber-purple rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>

        <div className="relative bg-cyber-dark border border-cyber-purple/30 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-cyber-purple-light to-cyber-green-light">
              Enter the Draw
            </h2>
            <p className="text-gray-400">One ticket = One chance to win the entire pool</p>
          </div>

          <div className="bg-cyber-darker/50 border border-cyber-purple/20 rounded-xl p-6 mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400">Ticket Price</span>
              <span className="text-2xl font-bold neon-text-green">10 XLM</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">Network Fee</span>
              <span className="text-gray-400">~0.00001 XLM</span>
            </div>
          </div>

          <button
            onClick={onBuyTicket}
            disabled={isLoading || !isConnected}
            className="w-full relative group/btn bg-gradient-to-r from-cyber-green to-cyber-green-light text-cyber-darker font-bold text-xl py-6 rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-neon-green disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              {isLoading ? (
                <>
                  <svg className="animate-spin h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : !isConnected ? (
                'Connect Wallet First'
              ) : (
                <>
                  <span className="text-2xl">🎫</span>
                  Buy Ticket (10 XLM)
                </>
              )}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyber-green-light to-cyber-green opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
          </button>

          {!isConnected && (
            <p className="text-center text-yellow-500 text-sm mt-4">
              ⚠️ Please connect your Freighter wallet to participate
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default BuyTicket;
