import PropTypes from 'prop-types';

const Teams = () => {
  const teams = [
    { name: 'Lions FC', division: 'Division A', rank: '#1', players: 18, winRate: '85%', logo: 'shield' },
    { name: 'Eagles United', division: 'Division A', rank: '#2', players: 20, winRate: '78%', logo: 'bolt' },
    { name: 'Wolves City', division: 'Division B', rank: '#3', players: 19, winRate: '72%', logo: 'pets' },
    { name: 'Hawks SC', division: 'Division A', rank: '#4', players: 22, winRate: '68%', logo: 'air' },
    { name: 'Bears Academy', division: 'Division B', rank: '#5', players: 21, winRate: '65%', logo: 'eco' },
    { name: 'Sharks FC', division: 'Division C', rank: '#6', players: 17, winRate: '60%', logo: 'water' },
  ];

  return (
    <div className="flex-1 p-8 overflow-y-auto">
      <header className="mb-8 flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-black text-white mb-2">Teams</h1>
          <p className="text-white/40 font-medium">Explore all teams participating in the UniFootball League Season 2024.</p>
        </div>
        <button className="bg-primary text-background-dark font-black px-6 py-3 rounded-xl hover:bg-white transition-all flex items-center gap-2">
          <span className="material-symbols-outlined">add</span>
          REGISTER TEAM
        </button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teams.map((team) => (
          <div key={team.name} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/50 transition-all group cursor-pointer relative overflow-hidden">
            <div className="flex justify-between items-start mb-6">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary text-4xl">{team.logo}</span>
              </div>
              <span className="text-2xl font-black text-white/10 group-hover:text-primary/20 transition-colors">{team.rank}</span>
            </div>

            <h3 className="text-xl font-black text-white mb-1">{team.name}</h3>
            <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-6">{team.division}</p>

            <div className="grid grid-cols-2 gap-4 py-4 border-t border-white/5">
              <div>
                <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-1">Squad Size</p>
                <p className="text-lg font-black text-white">{team.players} Players</p>
              </div>
              <div>
                <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-1">Win Rate</p>
                <p className="text-lg font-black text-primary">{team.winRate}</p>
              </div>
            </div>

            <button className="w-full mt-4 py-3 bg-white/5 border border-white/10 rounded-lg text-xs font-bold hover:bg-white hover:text-background-dark transition-all">
              VIEW TEAM DETAILS
            </button>

            <span className="material-symbols-outlined absolute -bottom-6 -right-6 text-white/5 text-9xl pointer-events-none group-hover:text-primary/5 transition-colors">
              {team.logo}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

Teams.propTypes = {
  onNavigate: PropTypes.func,
};

export default Teams;
