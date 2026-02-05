import PropTypes from 'prop-types';

const Dashboard = ({ onLogout, onEnterDraft }) => {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-white font-display">
      {/* Top Navigation */}
      <header className="flex items-center justify-between border-b border-white/10 px-8 py-4 bg-background-dark/50 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-3xl">sports_football</span>
            <h2 className="text-xl font-black uppercase tracking-tight">UniFootball <span className="text-primary">League</span></h2>
          </div>
          <nav className="hidden lg:flex items-center gap-6">
            <a href="#" className="text-primary text-sm font-bold border-b-2 border-primary pb-1">Dashboard</a>
            <a href="#" className="text-white/60 hover:text-white text-sm font-bold transition-colors">Fixtures</a>
            <a href="#" className="text-white/60 hover:text-white text-sm font-bold transition-colors">Teams</a>
            <a href="#" className="text-white/60 hover:text-white text-sm font-bold transition-colors">Players</a>
            <button
              onClick={onEnterDraft}
              className="text-white/60 hover:text-white text-sm font-bold transition-colors cursor-pointer"
            >
              Draft
            </button>
          </nav>
        </div>
        <div className="flex items-center gap-6">
          <div className="relative hidden md:block">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-white/40 text-sm">search</span>
            <input
              type="text"
              placeholder="Search players, teams..."
              className="bg-white/5 border border-white/10 rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-primary w-64 transition-all"
            />
          </div>
          <div className="flex items-center gap-4">
            <button className="relative text-white/60 hover:text-white transition-colors">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-0 right-0 w-2 h-2 bg-primary rounded-full border-2 border-background-dark"></span>
            </button>
            <div
              onClick={onLogout}
              className="w-10 h-10 rounded-full border-2 border-primary overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
              title="Logout"
            >
              <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </header>

      <main className="p-8 max-w-7xl mx-auto">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-black italic tracking-tighter uppercase">WELCOME BACK, <span className="text-primary">CAMERON</span></h1>
          <p className="text-white/40 text-sm font-medium uppercase tracking-widest">Season 2024 • Week 12 • Finalist Contender</p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Current Rank', value: '#14', trend: '↑ 2', icon: 'trending_up' },
            { label: 'Total Matches', value: '24', trend: 'Season', icon: 'sports_soccer' },
            { label: 'Goals Scored', value: '18', trend: 'Top Scorer', icon: 'military_tech' },
            { label: 'Win Rate', value: '72%', trend: 'Last 5 games', icon: 'leaderboard' },
          ].map((stat, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-xl hover:border-primary/50 transition-colors group">
              <div className="flex justify-between items-start mb-4">
                <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg">{stat.icon}</span>
                <span className="text-xs font-bold text-green-500 bg-green-500/10 px-2 py-1 rounded">{stat.trend}</span>
              </div>
              <h3 className="text-white/40 text-xs font-bold uppercase tracking-widest mb-1">{stat.label}</h3>
              <p className="text-3xl font-black text-white">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Profile Card */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-background-dark border border-white/10 rounded-xl overflow-hidden relative group">
              <div className="h-24 bg-gradient-to-r from-primary/20 to-primary/5"></div>
              <div className="px-6 pb-6 -mt-12 text-center relative z-10">
                <div className="w-24 h-24 rounded-2xl border-4 border-background-dark mx-auto mb-4 overflow-hidden shadow-2xl group-hover:scale-105 transition-transform">
                  <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="Avatar" className="w-full h-full object-cover" />
                </div>
                <h2 className="text-xl font-black text-white">Cameron Williamson</h2>
                <p className="text-primary text-sm font-bold mb-6">Captain • Lions FC</p>

                <div className="grid grid-cols-3 gap-2 py-4 border-y border-white/5">
                  <div>
                    <p className="text-white/40 text-[10px] font-bold uppercase tracking-tighter">Draft Rank</p>
                    <p className="text-lg font-black text-white">#14</p>
                  </div>
                  <div>
                    <p className="text-white/40 text-[10px] font-bold uppercase tracking-tighter">Fitness</p>
                    <p className="text-lg font-black text-white">98%</p>
                  </div>
                  <div>
                    <p className="text-white/40 text-[10px] font-bold uppercase tracking-tighter">Grade</p>
                    <p className="text-lg font-black text-primary">A+</p>
                  </div>
                </div>

                <button className="w-full mt-6 py-3 bg-white/5 border border-white/10 rounded-lg text-sm font-bold hover:bg-primary hover:text-background-dark transition-all">
                  VIEW FULL PROFILE
                </button>
              </div>
              <span className="material-symbols-outlined absolute -bottom-4 -right-4 text-white/5 text-8xl pointer-events-none">shield</span>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-sm font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                League Status
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-white/60">Season Progress</span>
                  <span className="text-white font-bold">85%</span>
                </div>
                <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                  <div className="w-[85%] h-full bg-primary shadow-[0_0_10px_rgba(249,188,6,0.5)]"></div>
                </div>
                <p className="text-xs text-white/40 italic">You&apos;re in the top 5% of players this season!</p>
              </div>
            </div>
          </div>

          {/* Right Column: Squad and Fixtures */}
          <div className="lg:col-span-2 space-y-8">
            {/* Squad Overview */}
            <section>
              <div className="flex justify-between items-end mb-4">
                <h2 className="text-lg font-black uppercase tracking-widest border-l-4 border-primary pl-3 leading-none">Squad Overview</h2>
                <a href="#" className="text-primary text-xs font-bold hover:underline">VIEW ALL TEAM</a>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl overflow-x-auto">
                <table className="w-full text-left min-w-[500px]">
                  <thead className="bg-white/5 text-white/40 text-[10px] font-bold uppercase tracking-widest">
                    <tr>
                      <th className="px-6 py-4">Player</th>
                      <th className="px-6 py-4">Position</th>
                      <th className="px-6 py-4">Performance</th>
                      <th className="px-6 py-4">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {[
                      { name: 'Arlene McCoy', role: 'Forward', perf: '92%', status: 'Active', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' },
                      { name: 'Cody Fisher', role: 'Midfield', perf: '88%', status: 'Active', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' },
                      { name: 'Esther Howard', role: 'Defender', perf: '95%', status: 'Training', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' },
                    ].map((player, i) => (
                      <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <img src={player.img} alt={player.name} className="w-8 h-8 rounded-lg object-cover" />
                            <span className="text-sm font-bold">{player.name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-xs text-white/60">{player.role}</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <div className="flex-1 h-1.5 w-16 bg-white/5 rounded-full overflow-hidden">
                              <div className="h-full bg-primary" style={{ width: player.perf }}></div>
                            </div>
                            <span className="text-xs font-bold">{player.perf}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`text-[10px] font-black uppercase px-2 py-1 rounded ${player.status === 'Active' ? 'bg-green-500/10 text-green-500' : 'bg-primary/10 text-primary'}`}>
                            {player.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Upcoming Fixtures */}
            <section>
              <div className="flex justify-between items-end mb-4">
                <h2 className="text-lg font-black uppercase tracking-widest border-l-4 border-primary pl-3 leading-none">Upcoming Fixtures</h2>
                <button className="bg-primary text-background-dark text-[10px] font-black px-3 py-1 rounded hover:bg-white transition-colors">FULL SCHEDULE</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { opponent: 'Eagles FC', date: 'Oct 24, 2024', time: '18:00', venue: 'State Stadium', home: true },
                  { opponent: 'Wolves United', date: 'Oct 28, 2024', time: '15:30', venue: 'North Arena', home: false },
                ].map((match, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 p-5 rounded-xl hover:bg-white/[0.08] transition-all cursor-pointer group">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">{match.date} • {match.time}</span>
                      <span className="material-symbols-outlined text-white/20 group-hover:text-primary transition-colors">event</span>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <div className="text-center flex-1">
                        <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                          <span className="material-symbols-outlined text-primary">shield</span>
                        </div>
                        <p className="text-xs font-black uppercase tracking-tight">Lions FC</p>
                      </div>
                      <div className="text-primary font-black italic">VS</div>
                      <div className="text-center flex-1">
                        <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                          <span className="material-symbols-outlined text-white/40">shield</span>
                        </div>
                        <p className="text-xs font-black uppercase tracking-tight">{match.opponent}</p>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-white/5 text-center">
                      <p className="text-[10px] font-medium text-white/40 uppercase tracking-widest flex items-center justify-center gap-1">
                        <span className="material-symbols-outlined text-xs">location_on</span>
                        {match.venue}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Quick Actions Floating Button */}
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-primary text-background-dark rounded-full shadow-2xl shadow-primary/20 flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-40 group">
        <span className="material-symbols-outlined font-black group-hover:rotate-90 transition-transform">add</span>
      </button>
    </div>
  );
};

Dashboard.propTypes = {
  onLogout: PropTypes.func.isRequired,
  onEnterDraft: PropTypes.func.isRequired,
};

export default Dashboard;
