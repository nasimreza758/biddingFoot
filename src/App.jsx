import { useState } from 'react';
import Dashboard from './components/Dashboard';

function App() {
  const [role, setRole] = useState('Player');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (isLoggedIn) {
    return <Dashboard onLogout={() => setIsLoggedIn(false)} />;
  }

  return (
    <div className="relative flex h-screen w-full flex-col overflow-hidden stadium-bg">
      {/* Top Navigation */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-white/10 px-10 py-4 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="text-primary">
            <span className="material-symbols-outlined text-4xl">sports_football</span>
          </div>
          <h2 className="text-white text-xl font-black leading-tight tracking-tight uppercase">
            UniFootball <span className="text-primary">League</span>
          </h2>
        </div>
        <div className="flex items-center gap-8">
          <nav className="hidden md:flex items-center gap-8">
            <a className="text-white/80 hover:text-primary text-sm font-medium transition-colors" href="#">Leagues</a>
            <a className="text-white/80 hover:text-primary text-sm font-medium transition-colors" href="#">Teams</a>
            <a className="text-white/80 hover:text-primary text-sm font-medium transition-colors" href="#">Draft</a>
            <a className="text-white/80 hover:text-primary text-sm font-medium transition-colors" href="#">News</a>
          </nav>
          <div className="flex gap-3">
            <button className="flex min-w-[100px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-primary text-background-dark text-sm font-bold tracking-wide hover:bg-primary/90 transition-all">
              Sign In
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 relative z-10 py-12 overflow-y-auto">
        <div className="w-full max-w-[480px] space-y-6 my-auto">
          {/* Hero Text */}
          <div className="text-center space-y-2">
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-white">
              THE <span className="text-primary">ARENA</span> AWAITS
            </h1>
            <p className="text-white/60 text-sm md:text-base">Select your role and enter the gridiron.</p>
          </div>

          {/* Authentication Card */}
          <div className="bg-background-dark/80 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-xl shadow-2xl">
            {/* Role Selection Toggle */}
            <div className="flex mb-8">
              <div className="flex h-12 flex-1 items-center justify-center rounded-lg bg-white/5 p-1 border border-white/10">
                {['Player', 'Owner', 'Committee'].map((r) => (
                  <label
                    key={r}
                    className={`flex cursor-pointer h-full grow items-center justify-center rounded-lg px-2 text-sm font-bold transition-all ${
                      role === r ? 'bg-primary text-background-dark' : 'text-white/60'
                    }`}
                  >
                    <span className="truncate uppercase">{r}</span>
                    <input
                      type="radio"
                      name="role"
                      value={r}
                      checked={role === r}
                      onChange={() => setRole(r)}
                      className="hidden"
                    />
                  </label>
                ))}
              </div>
            </div>

            {/* Input Fields */}
            <div className="space-y-4">
              <div className="flex flex-col gap-2">
                <label className="text-white/80 text-xs font-bold uppercase tracking-widest px-1">University Email</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-white/40">alternate_email</span>
                  <input
                    className="w-full pl-12 pr-4 py-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    placeholder="name@university.edu"
                    type="email"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-white/80 text-xs font-bold uppercase tracking-widest px-1">Password</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-white/40">lock</span>
                  <input
                    className="w-full pl-12 pr-4 py-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    placeholder="••••••••"
                    type="password"
                  />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 space-y-4">
              <button
                onClick={() => setIsLoggedIn(true)}
                className="w-full h-14 bg-primary text-background-dark font-black text-lg rounded-lg shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                ENTER THE LEAGUE <span className="material-symbols-outlined">bolt</span>
              </button>
              <div className="relative py-4 flex items-center">
                <div className="flex-grow border-t border-white/10"></div>
                <span className="flex-shrink mx-4 text-xs font-bold text-white/40 uppercase tracking-widest">or</span>
                <div className="flex-grow border-t border-white/10"></div>
              </div>
              <button className="w-full h-12 bg-white/5 border border-white/20 text-white font-bold rounded-lg hover:bg-white/10 transition-all flex items-center justify-center gap-3">
                <span className="material-symbols-outlined text-primary">school</span>
                Login with University ID
              </button>
            </div>

            {/* Footer Links */}
            <div className="mt-6 flex justify-between px-1">
              <a className="text-xs font-medium text-white/40 hover:text-primary transition-colors uppercase tracking-tight" href="#">Forgot Password?</a>
              <a className="text-xs font-medium text-white/40 hover:text-primary transition-colors uppercase tracking-tight" href="#">Need help?</a>
            </div>
          </div>
        </div>
      </main>

      {/* Draft Day Countdown Ticker */}
      <footer className="absolute bottom-0 w-full h-12 bg-primary/90 text-background-dark flex items-center overflow-hidden z-20">
        <div className="ticker-scroll flex gap-20 items-center">
          <div className="flex items-center gap-4">
            <span className="font-black text-sm uppercase tracking-tighter">Draft Day Countdown: 04d 12h 45m 12s</span>
            <span className="material-symbols-outlined text-lg">timer</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-black text-sm uppercase tracking-tighter">Registration closes in 48 hours</span>
            <span className="material-symbols-outlined text-lg">warning</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-black text-sm uppercase tracking-tighter">Upcoming Combine: State Stadium Sunday 9AM</span>
            <span className="material-symbols-outlined text-lg">event</span>
          </div>
          {/* Duplicate for seamless loop */}
          <div className="flex items-center gap-4">
            <span className="font-black text-sm uppercase tracking-tighter">Draft Day Countdown: 04d 12h 45m 12s</span>
            <span className="material-symbols-outlined text-lg">timer</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-black text-sm uppercase tracking-tighter">Registration closes in 48 hours</span>
            <span className="material-symbols-outlined text-lg">warning</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
