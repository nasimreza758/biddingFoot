import PropTypes from 'prop-types';

const LockerRoom = ({ onNavigate }) => {
  const players = [
    { name: 'Kylian Mbappé', team: 'Real Madrid CF', rank: 'S', pos: 'ST', ovr: 91, value: '4,500 CR', status: 'Active', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' },
    { name: 'Jude Bellingham', team: 'Real Madrid CF', rank: 'S', pos: 'CAM', ovr: 90, value: '4,000 CR', status: 'Active', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' },
    { name: 'William Saliba', team: 'Arsenal FC', rank: 'A', pos: 'CB', ovr: 87, value: '1,800 CR', status: 'Active', img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' },
  ];

  return (
    <div className="min-h-screen bg-background-dark text-white font-display overflow-y-auto">
      {/* Top Navigation */}
      <header className="flex items-center justify-between px-8 py-4 bg-[#1a160a] border-b border-white/5 sticky top-0 z-50">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-2xl">grid_view</span>
            <h2 className="text-lg font-black uppercase tracking-tight">Squad <span className="text-white font-normal">Management</span></h2>
          </div>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-white/20 text-sm">search</span>
            <input
              type="text"
              placeholder="Search roster..."
              className="bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-1.5 text-xs focus:outline-none focus:border-primary w-64 transition-all"
            />
          </div>
        </div>

        <nav className="flex items-center gap-8">
          <button onClick={() => onNavigate('locker')} className="text-primary text-xs font-bold uppercase tracking-widest border-b-2 border-primary pb-1">Locker Room</button>
          <button onClick={() => onNavigate('dashboard')} className="text-white/40 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors">Marketplace</button>
          <button className="text-white/40 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors">Tactics</button>
          <button className="text-white/40 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors">History</button>
        </nav>

        <div className="flex items-center gap-4">
          <button className="text-white/40 hover:text-white transition-colors">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <button className="text-white/40 hover:text-white transition-colors">
            <span className="material-symbols-outlined">settings</span>
          </button>
          <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center">
            <span className="text-[10px] font-black text-primary">JD</span>
          </div>
        </div>
      </header>

      <main className="p-8 max-w-[1400px] mx-auto space-y-8">
        {/* Page Header */}
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-4xl font-black text-white italic tracking-tighter uppercase mb-1">The Locker Room</h1>
            <p className="text-primary text-sm font-bold">Manage your tactical squad and visualize your roster distribution.</p>
          </div>
          <button className="bg-primary text-background-dark px-8 py-3 rounded-lg font-black uppercase tracking-tight hover:scale-105 transition-all shadow-lg shadow-primary/20">
            Save Formation
          </button>
        </div>

        {/* Tactical Pitch and Requirements */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Tactical Pitch */}
          <div className="lg:col-span-2 bg-white/[0.02] border border-white/5 rounded-2xl p-6 relative overflow-hidden">
            <div className="flex justify-between items-center mb-6 px-2">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-primary">Formation: 4-3-3 Attack</h3>
              <div className="bg-primary/10 border border-primary/20 px-3 py-1 rounded text-[10px] font-black text-primary uppercase">Team OVR: 88</div>
            </div>

            {/* Pitch Visualization */}
            <div className="aspect-[16/10] relative rounded-xl border border-white/5 bg-[#1e1a0d] overflow-hidden">
              {/* Pitch markings */}
              <div className="absolute inset-0 border-2 border-white/5 m-4 rounded-lg"></div>
              <div className="absolute top-1/2 left-0 right-0 h-px bg-white/5"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white/5 rounded-full"></div>

              {/* Players */}
              <div className="absolute inset-0 p-8 grid grid-rows-4 items-center justify-items-center">
                {/* Forwards */}
                <div className="grid grid-cols-3 w-full">
                  <div className="flex flex-col items-center gap-1 -mt-4">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-background-dark font-black text-xs border-2 border-primary/50 shadow-[0_0_15px_rgba(249,188,6,0.4)]">LW</div>
                    <p className="text-[10px] font-bold text-white/60">Vinicius</p>
                  </div>
                  <div className="flex flex-col items-center gap-1 -mt-8">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-background-dark font-black text-xs border-2 border-primary/50 shadow-[0_0_15px_rgba(249,188,6,0.4)]">ST</div>
                    <p className="text-[10px] font-bold text-white">Mbappe</p>
                  </div>
                  <div className="flex flex-col items-center gap-1 -mt-4">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-background-dark font-black text-xs border-2 border-primary/50 shadow-[0_0_15px_rgba(249,188,6,0.4)]">RW</div>
                    <p className="text-[10px] font-bold text-white/60">Saka</p>
                  </div>
                </div>

                {/* Midfield */}
                <div className="grid grid-cols-3 w-full">
                  <div className="flex flex-col items-center gap-1 mt-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 border-2 border-primary/50 flex items-center justify-center text-primary font-black text-xs">CM</div>
                    <p className="text-[10px] font-bold text-white/60">Pedri</p>
                  </div>
                  <div className="flex flex-col items-center gap-1 -mt-4">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-background-dark font-black text-xs border-2 border-primary/50 shadow-[0_0_15px_rgba(249,188,6,0.4)]">CAM</div>
                    <p className="text-[10px] font-bold text-white">Bellingham</p>
                  </div>
                  <div className="flex flex-col items-center gap-1 mt-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 border-2 border-primary/50 flex items-center justify-center text-primary font-black text-xs">CM</div>
                    <p className="text-[10px] font-bold text-white/60">Gavi</p>
                  </div>
                </div>

                {/* Defense */}
                <div className="grid grid-cols-4 w-full">
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-10 h-10 rounded-full bg-primary/20 border-2 border-primary/50 flex items-center justify-center text-primary font-black text-xs">LB</div>
                    <p className="text-[10px] font-bold text-white/60">Davies</p>
                  </div>
                  <div className="flex flex-col items-center gap-1 -mt-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 border-2 border-primary/50 flex items-center justify-center text-primary font-black text-xs">CB</div>
                    <p className="text-[10px] font-bold text-white/60">Saliba</p>
                  </div>
                  <div className="flex flex-col items-center gap-1 -mt-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 border-2 border-primary/50 flex items-center justify-center text-primary font-black text-xs">CB</div>
                    <p className="text-[10px] font-bold text-white/60">Dias</p>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-10 h-10 rounded-full bg-primary/20 border-2 border-primary/50 flex items-center justify-center text-primary font-black text-xs">RB</div>
                    <p className="text-[10px] font-bold text-white/60">James</p>
                  </div>
                </div>

                {/* Goalkeeper */}
                <div className="flex flex-col items-center gap-1">
                  <div className="w-10 h-10 rounded-full bg-primary/20 border-2 border-primary/50 flex items-center justify-center text-primary font-black text-xs">GK</div>
                  <p className="text-[10px] font-bold text-white/60">Alisson</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Requirements and Wallet */}
          <div className="space-y-6">
            <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6">
              <h3 className="text-sm font-black uppercase tracking-widest mb-6 flex items-center gap-2 text-primary">
                <span className="material-symbols-outlined text-sm">verified</span>
                Squad Requirements
              </h3>
              <div className="space-y-4">
                {[
                  { label: 'S-Rank Slots (2/2)', desc: 'Top-tier marquee players', done: true },
                  { label: 'A-Rank Slots (4/5)', desc: 'Core squad regulars', done: false },
                  { label: 'B-Rank Slots (10/10)', desc: 'Rotation & Bench strength', done: true },
                  { label: 'Developmental (3/5)', desc: 'Under-21 prospects', done: false },
                ].map((req, i) => (
                  <div key={i} className="flex items-center justify-between group">
                    <div>
                      <p className={`text-xs font-black uppercase tracking-tight ${req.done ? 'text-white' : 'text-white/60'}`}>{req.label}</p>
                      <p className="text-[9px] text-white/40 font-medium">{req.desc}</p>
                    </div>
                    <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${req.done ? 'bg-primary border-primary' : 'border-white/10 group-hover:border-primary/50'}`}>
                      {req.done && <span className="material-symbols-outlined text-background-dark text-sm font-black">check</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6">
              <h3 className="text-sm font-black uppercase tracking-widest mb-6 flex items-center gap-2 text-primary">
                <span className="material-symbols-outlined text-sm">payments</span>
                Wallet Balance
              </h3>
              <div className="mb-4">
                <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1">Remaining Credits</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black italic tracking-tighter">4,250</span>
                  <span className="text-primary font-black text-xs uppercase">CR</span>
                </div>
              </div>
              <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden mb-2">
                <div className="w-[75%] h-full bg-primary shadow-[0_0_10px_rgba(249,188,6,0.5)]"></div>
              </div>
              <p className="text-[10px] text-white/40 italic font-medium">Drafted value: 12,750 CR / 17,000 CR limit</p>
            </div>
          </div>
        </div>

        {/* Budget Breakdown */}
        <section className="bg-white/[0.02] border border-white/5 rounded-2xl p-8">
          <div className="mb-8">
            <h2 className="text-xl font-black uppercase tracking-tight mb-1">Budget Breakdown</h2>
            <p className="text-primary text-[10px] font-bold uppercase tracking-widest">Credit distribution per tactical position and player rank.</p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="relative w-48 h-48">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="12" className="text-white/5" />
                <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="12" strokeDasharray="251.2" strokeDashoffset="62.8" className="text-primary shadow-[0_0_20px_rgba(249,188,6,0.4)]" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <p className="text-3xl font-black italic">75%</p>
                <p className="text-[8px] font-black uppercase tracking-widest text-white/40">Utilized</p>
              </div>
            </div>

            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              {[
                { label: 'Forwards', value: '8,500 CR', color: 'bg-primary' },
                { label: 'Midfield', value: '4,200 CR', color: 'bg-primary/60' },
                { label: 'Defense', value: '2,100 CR', color: 'bg-primary/40' },
                { label: 'Reserves', value: '950 CR', color: 'bg-primary/20' },
              ].map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/5 p-4 rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${item.color}`}></div>
                    <div>
                      <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">{item.label}</p>
                      <p className="text-lg font-black text-white">{item.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Active Roster */}
        <section className="space-y-4">
          <div className="flex justify-between items-end">
            <h2 className="text-2xl font-black uppercase tracking-tighter italic">Active Roster</h2>
            <div className="flex gap-2">
              <button className="bg-white/5 border border-white/10 px-4 py-2 rounded-lg text-[10px] font-bold uppercase hover:bg-white/10 transition-colors">Export Stats</button>
              <button className="bg-white/5 border border-white/10 px-4 py-2 rounded-lg text-[10px] font-bold uppercase hover:bg-white/10 transition-colors">Sort by OVR</button>
            </div>
          </div>

          <div className="bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead className="bg-white/5 text-[10px] font-black uppercase tracking-[0.2em] text-white/40">
                <tr>
                  <th className="px-6 py-4">Player</th>
                  <th className="px-6 py-4">Rank</th>
                  <th className="px-6 py-4">Pos</th>
                  <th className="px-6 py-4">OVR</th>
                  <th className="px-6 py-4">Value</th>
                  <th className="px-6 py-4 text-center">Status</th>
                  <th className="px-6 py-4"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {players.map((player, i) => (
                  <tr key={i} className="group hover:bg-white/[0.02] transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img src={player.img} alt={player.name} className="w-10 h-10 rounded-lg object-cover" />
                        <div>
                          <p className="text-sm font-black uppercase">{player.name}</p>
                          <p className="text-[10px] text-white/40 font-bold uppercase">{player.team}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded text-[10px] font-black ${player.rank === 'S' ? 'bg-primary text-background-dark' : 'bg-white/10 text-white/60'}`}>
                        {player.rank}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-xs font-black uppercase tracking-widest text-white/60">{player.pos}</td>
                    <td className="px-6 py-4 text-lg font-black text-primary italic">{player.ovr}</td>
                    <td className="px-6 py-4 text-sm font-bold">{player.value}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                        <span className="text-[10px] font-black uppercase text-green-500">{player.status}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-white/20 hover:text-white transition-colors">
                        <span className="material-symbols-outlined">more_vert</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="p-4 border-t border-white/5 text-center">
              <button className="text-[10px] font-black uppercase tracking-widest text-primary hover:underline">View All 22 Squad Members</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

LockerRoom.propTypes = {
  onNavigate: PropTypes.func.isRequired,
};

export default LockerRoom;
