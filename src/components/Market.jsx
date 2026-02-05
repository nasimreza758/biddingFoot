import PropTypes from 'prop-types';

const Market = () => {
  const listings = [
    { name: 'Arlene McCoy', team: 'Lions FC', position: 'Forward', price: '2,400 CR', time: '12h 45m', bids: 8, img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' },
    { name: 'Cody Fisher', team: 'Eagles United', position: 'Midfield', price: '1,800 CR', time: '04h 20m', bids: 12, img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' },
    { name: 'Esther Howard', team: 'Wolves City', position: 'Defender', price: '3,100 CR', time: '01h 15m', bids: 5, img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' },
    { name: 'Marcus Thorne', team: 'Hawks SC', position: 'Forward', price: '5,400 CR', time: '22h 10m', bids: 15, img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' },
  ];

  return (
    <div className="flex-1 p-8 overflow-y-auto">
      <header className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-black text-white mb-2">Transfer Market</h1>
          <p className="text-white/40 font-medium">Acquire new talent for your squad through active bidding and direct transfers.</p>
        </div>
        <div className="flex gap-4">
          <div className="bg-white/5 border border-white/10 px-6 py-3 rounded-xl">
            <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Your Balance</p>
            <p className="text-xl font-black text-primary">12,450 <span className="text-xs">CR</span></p>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
        {listings.map((item, i) => (
          <div key={i} className="bg-background-dark border border-white/10 rounded-2xl overflow-hidden hover:border-primary transition-all group">
            <div className="h-32 bg-gradient-to-br from-primary/20 to-transparent relative">
              <img src={item.img} alt={item.name} className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50" />
              <div className="absolute top-4 right-4 bg-background-dark/80 backdrop-blur-md px-2 py-1 rounded text-[10px] font-black text-primary border border-primary/20">
                {item.time} LEFT
              </div>
            </div>

            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-black text-white leading-tight">{item.name}</h3>
                  <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">{item.position} • {item.team}</p>
                </div>
              </div>

              <div className="flex justify-between items-end pt-4 border-t border-white/5">
                <div>
                  <p className="text-white/40 text-[10px] font-bold uppercase mb-1">Current Bid</p>
                  <p className="text-xl font-black text-white">{item.price}</p>
                </div>
                <div className="text-right">
                  <p className="text-white/40 text-[10px] font-bold uppercase mb-1">{item.bids} Bids</p>
                  <button className="bg-primary text-background-dark text-[10px] font-black px-4 py-2 rounded-lg hover:scale-105 active:scale-95 transition-all">
                    PLACE BID
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-black text-white uppercase tracking-tight flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">history</span>
            Recent Activity
          </h2>
          <button className="text-primary text-xs font-bold hover:underline">VIEW ALL HISTORY</button>
        </div>
        <div className="space-y-3">
          {[
            { action: 'Bid Placed', player: 'Leo Varkas', amount: '+4,500 CR', time: '2 mins ago', status: 'pending' },
            { action: 'Transfer Complete', player: 'Samson Okafor', amount: '-4,600 CR', time: '15 mins ago', status: 'success' },
            { action: 'Bid Outdone', player: 'David Chen', amount: '4,800 CR', time: '1 hour ago', status: 'error' },
          ].map((log, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  log.status === 'success' ? 'bg-green-500/10 text-green-500' :
                  log.status === 'error' ? 'bg-red-500/10 text-red-500' : 'bg-primary/10 text-primary'
                }`}>
                  <span className="material-symbols-outlined text-xl">
                    {log.status === 'success' ? 'check_circle' : log.status === 'error' ? 'cancel' : 'gavel'}
                  </span>
                </div>
                <div>
                  <p className="text-white text-sm font-bold">{log.action}: {log.player}</p>
                  <p className="text-white/40 text-[10px] font-bold uppercase">{log.time}</p>
                </div>
              </div>
              <p className={`font-black ${
                log.amount.startsWith('+') ? 'text-green-500' :
                log.amount.startsWith('-') ? 'text-red-500' : 'text-white'
              }`}>{log.amount}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

Market.propTypes = {
  onNavigate: PropTypes.func,
};

export default Market;
