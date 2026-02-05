import PropTypes from 'prop-types';

const LiveAuction = ({ onExit }) => {
  return (
    <div className="min-h-screen bg-[#1a160a] text-white font-display flex flex-col overflow-hidden">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-4 bg-[#231e0f] border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <span className="material-symbols-outlined text-background-dark text-xl">gavel</span>
          </div>
          <h1 className="text-xl font-black uppercase tracking-tight">Live Auction Room</h1>
        </div>

        <div className="flex-1 max-w-md mx-12">
          <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest mb-1">
            <span className="text-white/40">Available Credits</span>
            <span className="text-primary">6,500/10,000</span>
          </div>
          <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
            <div className="w-[65%] h-full bg-primary shadow-[0_0_10px_rgba(249,188,6,0.5)]"></div>
          </div>
        </div>

        <div className="flex items-center gap-8">
          <nav className="flex items-center gap-6">
            <a href="#" className="text-white/60 hover:text-white text-xs font-bold uppercase tracking-widest">Lobby</a>
            <a href="#" className="text-white/60 hover:text-white text-xs font-bold uppercase tracking-widest">My Squad</a>
            <div className="flex items-center gap-2 px-3 py-1 bg-red-500/10 border border-red-500/20 rounded-full">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              <span className="text-[10px] font-black text-red-500 uppercase">Live</span>
            </div>
          </nav>
          <button
            onClick={onExit}
            className="bg-primary text-background-dark px-6 py-2 rounded-lg text-sm font-black uppercase tracking-tight hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
          >
            Exit Room
          </button>
        </div>
      </header>

      {/* Main Content Layout */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar: Player Info */}
        <aside className="w-80 border-r border-white/5 p-6 overflow-y-auto bg-[#1e1a0d]">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 mb-6">
            <div className="aspect-[4/5] rounded-xl overflow-hidden mb-4 relative group">
              <img
                src="https://images.unsplash.com/photo-1566577739112-5180d4bf9390?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Marcus Jones"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark to-transparent opacity-60"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] font-black text-primary uppercase bg-primary/20 px-2 py-0.5 rounded">Featured Player</span>
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-2xl font-black text-white leading-none mb-1 uppercase italic tracking-tighter">Marcus &apos;The Wall&apos; Jones</h2>
              <p className="text-primary text-sm font-bold uppercase tracking-widest mb-1">Position: CB</p>
              <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">State Tech University</p>
            </div>

            <div className="grid grid-cols-2 gap-2 mt-6">
              {[
                { label: 'Pace', value: '92' },
                { label: 'Strength', value: '88' },
                { label: 'Interceptions', value: '95' },
                { label: 'Base Price', value: '500', isPrice: true },
              ].map((stat, i) => (
                <div key={i} className="bg-white/5 border border-white/5 p-3 rounded-lg">
                  <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1">{stat.label}</p>
                  <p className={`text-xl font-black ${stat.isPrice ? 'text-primary' : 'text-white'}`}>{stat.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 flex gap-3">
            <span className="material-symbols-outlined text-red-500">warning</span>
            <div>
              <p className="text-[10px] font-black text-red-500 uppercase tracking-widest mb-1">Scout&apos;s Warning</p>
              <p className="text-xs text-white/60 leading-relaxed font-medium">Highly contested player. Avg bid 1,400+.</p>
            </div>
          </div>
        </aside>

        {/* Center: Auction Area */}
        <main className="flex-1 flex flex-col items-center justify-center p-8 relative overflow-y-auto">
          <div className="text-center mb-8">
            <p className="text-primary text-xs font-black uppercase tracking-[0.3em] mb-4">Currently Active Bid</p>
            <div className="relative inline-block">
              <h1 className="text-[120px] font-black text-white leading-none tracking-tighter italic">1,250</h1>
              <div className="absolute -top-4 -right-8 bg-primary/20 text-primary text-xs font-black px-2 py-1 rounded-md rotate-12 border border-primary/30">TOP</div>
            </div>
            <p className="text-white/60 text-lg font-medium mt-2">Top Bidder: <span className="text-white font-black">@PhoenixRising</span></p>
          </div>

          {/* Timer Circle */}
          <div className="relative w-64 h-64 mb-12">
            <svg className="w-full h-full -rotate-90">
              <circle
                cx="128" cy="128" r="120"
                fill="none" stroke="currentColor" strokeWidth="8"
                className="text-white/5"
              />
              <circle
                cx="128" cy="128" r="120"
                fill="none" stroke="currentColor" strokeWidth="8"
                strokeDasharray="753.6"
                strokeDashoffset="188.4"
                className="text-primary drop-shadow-[0_0_8px_rgba(249,188,6,0.6)]"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-5xl font-black text-white tracking-tighter tabular-nums">00:<span className="text-primary">14</span></div>
              <div className="flex gap-8 text-[10px] font-black text-white/40 uppercase tracking-widest mt-2">
                <span>Min</span>
                <span>Sec</span>
              </div>
            </div>
          </div>

          {/* Bid Controls */}
          <div className="w-full max-w-2xl">
            <div className="grid grid-cols-3 gap-4 mb-4">
              {[
                { amount: '+50', total: '1,300' },
                { amount: '+100', total: '1,350' },
                { amount: '+250', total: '1,500' },
              ].map((bid, i) => (
                <button key={i} className="bg-white/5 border border-white/10 p-4 rounded-xl hover:bg-white/10 hover:border-primary/50 transition-all text-center group">
                  <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1 group-hover:text-primary transition-colors">{bid.amount} Credits</p>
                  <p className="text-2xl font-black text-white">{bid.total}</p>
                </button>
              ))}
            </div>
            <button className="w-full bg-primary text-background-dark py-6 rounded-2xl text-3xl font-black uppercase italic tracking-tighter hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_30px_rgba(249,188,6,0.3)] flex items-center justify-center gap-4">
              <span className="material-symbols-outlined text-4xl font-black">gavel</span>
              PLACE BID NOW
            </button>
          </div>
        </main>

        {/* Right Sidebar: Bidding War */}
        <aside className="w-80 border-l border-white/5 p-6 bg-[#1e1a0d] flex flex-col overflow-hidden">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-sm font-black uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              Bidding War
            </h2>
            <span className="material-symbols-outlined text-white/20">more_horiz</span>
          </div>

          <div className="flex-1 space-y-4 overflow-y-auto pr-2 custom-scrollbar">
            {[
              { user: 'PhoenixRising', amount: '1,250', time: '2s ago', top: true },
              { user: 'Grizzly_Stats', amount: '1,200', time: '8s ago' },
              { user: 'Cap_Space', amount: '1,150', time: '15s ago' },
              { user: 'UniChamp_01', amount: '1,000', time: '24s ago' },
              { user: 'PhoenixRising', amount: '950', time: '45s ago' },
            ].map((bid, i) => (
              <div key={i} className={`p-4 rounded-xl border transition-all ${bid.top ? 'bg-primary/10 border-primary/30' : 'bg-white/5 border-white/5'}`}>
                <div className="flex justify-between items-start mb-1">
                  <span className="text-xs font-black text-white">{bid.user}</span>
                  <span className="text-[10px] text-white/40 font-medium">{bid.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`text-lg font-black ${bid.top ? 'text-primary' : 'text-white/80'}`}>{bid.amount}</span>
                  {bid.top && <span className="text-[9px] font-black bg-primary text-background-dark px-1.5 py-0.5 rounded uppercase tracking-tighter">New Top Bid</span>}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-white/5">
            <div className="flex justify-between items-end mb-4">
              <div>
                <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1">Participants</p>
                <p className="text-xs font-black text-white uppercase">42 Owners Online</p>
              </div>
            </div>
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className={`w-8 h-8 rounded-full border-2 border-background-dark bg-white/10 flex items-center justify-center text-[10px] font-black text-primary`}>
                  {['PR', 'GS', 'CS', 'UC'][i]}
                </div>
              ))}
              <div className="w-8 h-8 rounded-full border-2 border-background-dark bg-white/5 flex items-center justify-center text-[10px] font-black text-white/40">
                +39
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* Footer Stats */}
      <footer className="bg-[#231e0f] border-t border-white/5 px-8 py-3 flex items-center justify-between">
        <div className="flex gap-12">
          <div>
            <p className="text-[9px] font-bold text-white/40 uppercase tracking-widest mb-0.5">Active Players in Auction</p>
            <p className="text-sm font-black text-white">1/18</p>
          </div>
          <div>
            <p className="text-[9px] font-bold text-white/40 uppercase tracking-widest mb-0.5">My Roster Slots</p>
            <p className="text-sm font-black text-white">4/11</p>
          </div>
          <div>
            <p className="text-[9px] font-bold text-white/40 uppercase tracking-widest mb-0.5">Average Bid Spent</p>
            <p className="text-sm font-black text-white">875 Credits</p>
          </div>
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 bg-green-500/10 border border-green-500/20 rounded-lg">
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
          <span className="text-[10px] font-black text-green-500 uppercase tracking-widest">System Status: Optimal Low Latency</span>
        </div>
      </footer>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(249, 188, 6, 0.2);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(249, 188, 6, 0.4);
        }
      `}</style>
    </div>
  );
};

LiveAuction.propTypes = {
  onExit: PropTypes.func.isRequired,
};

export default LiveAuction;
