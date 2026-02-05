import PropTypes from 'prop-types';

const Sidebar = ({ currentView, onNavigate }) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
    { id: 'leaderboard', label: 'Leaderboard', icon: 'emoji_events' },
    { id: 'teams', label: 'Teams', icon: 'groups' },
    { id: 'players', label: 'Players', icon: 'person' },
    { id: 'market', label: 'Market', icon: 'trending_up' },
  ];

  return (
    <aside className="w-64 h-screen bg-background-dark border-r border-white/5 flex flex-col shrink-0">
      <div className="p-8">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-background-dark">
            <span className="material-symbols-outlined text-xl">sports_football</span>
          </div>
          <div>
            <h2 className="text-white text-sm font-black leading-tight uppercase tracking-tight">Uni League</h2>
            <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest">Season 2024</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${
              currentView === item.id
                ? 'bg-primary/10 text-primary border border-primary/20'
                : 'text-white/60 hover:text-white hover:bg-white/5'
            }`}
          >
            <span className="material-symbols-outlined">{item.icon}</span>
            <span className="text-sm font-bold">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="p-4 mt-auto">
        <div className="p-4 bg-white/5 border border-white/10 rounded-xl flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-primary/50">
            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Admin" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white text-xs font-black truncate">Admin Panel</p>
            <p className="text-white/40 text-[10px] font-bold truncate">League Manager</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

Sidebar.propTypes = {
  currentView: PropTypes.string.isRequired,
  onNavigate: PropTypes.func.isRequired,
};

export default Sidebar;
