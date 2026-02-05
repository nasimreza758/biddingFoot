import PropTypes from 'prop-types';

const Leaderboard = () => {
  const transfers = [
    { rank: '#1', name: 'Marcus Thorne', team: 'Lions FC', price: '5,400', img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' },
    { rank: '#2', name: 'Elena Rodriguez', team: 'Eagle United', price: '4,950', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' },
    { rank: '#3', name: 'David Chen', team: 'Wolves City', price: '4,800', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' },
    { rank: '#4', name: 'Samson Okafor', team: 'Hawks SC', price: '4,600', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' },
    { rank: '#5', name: 'Leo Varkas', team: 'Bears Academy', price: '4,500', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' },
  ];

  const rankings = [
    { rank: '01', name: 'Stallions Elite', division: 'IVY LEAGUE DIVISION', score: '98.4' },
    { rank: '02', name: 'Tech Titans', division: 'METRO SOUTH', score: '94.2' },
    { rank: '03', name: 'Oceanic Blue', division: 'COASTAL REGION', score: '89.7' },
    { rank: '04', name: 'Northern Frost', division: 'ARCTIC DIVISION', score: '85.1' },
  ];

  return (
    <div className="flex-1 p-8 overflow-y-auto">
      <header className="mb-8">
        <h1 className="text-4xl font-black text-white mb-2">Leaderboard & Stats</h1>
        <p className="text-white/40 font-medium">Comprehensive data on player transfers and overall team power rankings.</p>
      </header>

      <section className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <span className="material-symbols-outlined text-primary">payments</span>
          <h2 className="text-xl font-black text-white uppercase tracking-tight">Top 10 Transfers</h2>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-white/5 text-white/40 text-[10px] font-bold uppercase tracking-widest border-b border-white/10">
                <th className="px-8 py-4">Rank</th>
                <th className="px-8 py-4">Player</th>
                <th className="px-8 py-4">Original Team</th>
                <th className="px-8 py-4 text-right">Sale Price</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {transfers.map((item) => (
                <tr key={item.rank} className="hover:bg-white/[0.02] transition-colors group">
                  <td className="px-8 py-6">
                    <span className="text-primary font-black italic">{item.rank}</span>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full border-2 border-primary overflow-hidden">
                        <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <span className="text-white font-bold">{item.name}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-white/60">{item.team}</td>
                  <td className="px-8 py-6 text-right">
                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full font-black text-xs ${item.rank === '#1' ? 'bg-primary text-background-dark' : 'text-white'}`}>
                      {item.price} <span className="text-[10px] opacity-70">CR</span>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <span className="material-symbols-outlined text-primary">bolt</span>
          <h2 className="text-xl font-black text-white uppercase tracking-tight">Team Power Rankings</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {rankings.map((team) => (
            <div key={team.rank} className="bg-white/5 border border-white/10 p-6 rounded-xl hover:border-primary/50 transition-colors flex items-center justify-between">
              <div className="flex items-center gap-6">
                <span className="text-4xl font-black text-white/10">{team.rank}</span>
                <div>
                  <h3 className="text-white font-black text-lg leading-tight">{team.name}</h3>
                  <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">{team.division}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-black text-primary mb-2">{team.score}</div>
                <div className="w-24 h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-primary" style={{ width: `${team.score}%` }}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { label: 'Total Volume', value: '1.2M', unit: 'Credits' },
          { label: 'Active Deals', value: '142', unit: '' },
          { label: 'Avg Transfer', value: '3.4k', unit: 'Credits' },
        ].map((stat, i) => (
          <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-xl">
            <h3 className="text-primary text-[10px] font-black uppercase tracking-widest mb-2">{stat.label}</h3>
            <p className="text-3xl font-black text-white flex items-baseline gap-2">
              {stat.value} <span className="text-xs font-bold text-white/40">{stat.unit}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

Leaderboard.propTypes = {
  onNavigate: PropTypes.func,
};

export default Leaderboard;
