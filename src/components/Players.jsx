import PropTypes from 'prop-types';

const Players = () => {
  const players = [
    { name: 'Arlene McCoy', position: 'Forward', team: 'Lions FC', rating: 92, value: '2,400 CR', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' },
    { name: 'Cody Fisher', position: 'Midfield', team: 'Lions FC', rating: 88, value: '1,800 CR', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' },
    { name: 'Esther Howard', position: 'Defender', team: 'Lions FC', rating: 95, value: '3,100 CR', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' },
    { name: 'Marcus Thorne', position: 'Forward', team: 'Lions FC', rating: 98, value: '5,400 CR', img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' },
    { name: 'Elena Rodriguez', position: 'Midfield', team: 'Eagle United', rating: 94, value: '4,950 CR', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' },
    { name: 'David Chen', position: 'Defender', team: 'Wolves City', rating: 91, value: '4,800 CR', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' },
  ];

  return (
    <div className="flex-1 p-8 overflow-y-auto">
      <header className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-black text-white mb-2">Players</h1>
          <p className="text-white/40 font-medium">Browse the complete player database and analyze performance metrics.</p>
        </div>
        <div className="flex gap-3">
          <div className="relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-white/40">search</span>
            <input
              type="text"
              placeholder="Search by name, team..."
              className="bg-white/5 border border-white/10 rounded-xl pl-12 pr-6 py-3 text-white focus:outline-none focus:border-primary w-64 transition-all"
            />
          </div>
          <button className="bg-white/5 border border-white/10 p-3 rounded-xl hover:bg-white/10 transition-colors">
            <span className="material-symbols-outlined text-white/60">filter_list</span>
          </button>
        </div>
      </header>

      <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-white/5 text-white/40 text-[10px] font-bold uppercase tracking-widest">
              <th className="px-8 py-4">Player</th>
              <th className="px-8 py-4">Position</th>
              <th className="px-8 py-4">Current Team</th>
              <th className="px-8 py-4">Rating</th>
              <th className="px-8 py-4">Market Value</th>
              <th className="px-8 py-4"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {players.map((player, i) => (
              <tr key={i} className="hover:bg-white/[0.02] transition-colors group">
                <td className="px-8 py-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl overflow-hidden border border-white/10 group-hover:border-primary/50 transition-colors">
                      <img src={player.img} alt={player.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="text-white font-black">{player.name}</p>
                      <p className="text-white/40 text-[10px] font-bold uppercase">ID: 28491{i}</p>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-6">
                  <span className="text-sm font-bold text-white/60">{player.position}</span>
                </td>
                <td className="px-8 py-6">
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-white">
                    <span className="material-symbols-outlined text-primary text-sm">shield</span>
                    {player.team}
                  </span>
                </td>
                <td className="px-8 py-6">
                  <div className="flex items-center gap-3">
                    <div className="flex-1 w-20 h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: `${player.rating}%` }}></div>
                    </div>
                    <span className="text-sm font-black text-primary">{player.rating}</span>
                  </div>
                </td>
                <td className="px-8 py-6">
                  <span className="text-sm font-black text-white">{player.value}</span>
                </td>
                <td className="px-8 py-6 text-right">
                  <button className="text-white/40 hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">more_horiz</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

Players.propTypes = {
  onNavigate: PropTypes.func,
};

export default Players;
