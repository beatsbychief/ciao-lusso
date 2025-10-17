import { useState } from 'react';
import { TrendingUp, TrendingDown, Bell, Search, Plus, Camera, Menu, X, Home, BarChart3, User, ChevronRight, Settings } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showMenu, setShowMenu] = useState(false);
  const [selectedWatch, setSelectedWatch] = useState(null);
  const [isPublicProfile, setIsPublicProfile] = useState(false);

  const watchlist = [
    {
      id: 1,
      brand: 'Rolex',
      model: 'Daytona 116500LN',
      image: '⌚',
      currentPrice: 28500,
      priceChange: -3.2,
      buySignal: 'BUY NOW',
      signalColor: 'bg-emerald-600',
      watching: 142,
      recentActivity: '3 purchases this week'
    },
    {
      id: 2,
      brand: 'Patek Philippe',
      model: 'Nautilus 5711/1A',
      image: '⌚',
      currentPrice: 87000,
      priceChange: -5.8,
      buySignal: 'STRONG BUY',
      signalColor: 'bg-emerald-700',
      watching: 289,
      recentActivity: '7 purchases this week'
    },
    {
      id: 3,
      brand: 'Audemars Piguet',
      model: 'Royal Oak 15500ST',
      image: '⌚',
      currentPrice: 52000,
      priceChange: 1.2,
      buySignal: 'WAIT',
      signalColor: 'bg-amber-600',
      watching: 98,
      recentActivity: '1 purchase this week'
    }
  ];

  const portfolio = [
    { brand: 'Rolex', model: 'Submariner', purchasePrice: 12000, currentValue: 15800, change: 31.7 },
    { brand: 'Omega', model: 'Speedmaster', purchasePrice: 6500, currentValue: 7200, change: 10.8 },
    { brand: 'Cartier', model: 'Santos', purchasePrice: 8000, currentValue: 8900, change: 11.3 }
  ];

  const dailyRecommendations = [
    {
      title: 'Market Dip Alert',
      description: 'Rolex Daytona prices down 3.2% - historical low for 2025',
      action: 'View opportunities',
      type: 'opportunity'
    },
    {
      title: 'Your Portfolio Update',
      description: 'Your collection value increased $1,200 this week',
      action: 'View portfolio',
      type: 'update'
    }
  ];

  const marketInsights = [
    { metric: 'Market Trend', value: 'Buyer\'s Market', change: '-6% YTD' },
    { metric: 'Hot Brand', value: 'Cartier', change: '+4% Growth' },
    { metric: 'Best Time', value: 'Buy Now', change: 'Q4 2024 Low' }
  ];

  const DashboardView = () => (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-6">
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white rounded-xl p-5 border border-neutral-200 shadow-sm">
            <div className="text-neutral-500 text-xs font-medium mb-1">PORTFOLIO VALUE</div>
            <div className="text-2xl font-light text-neutral-900">$31,900</div>
            <div className="flex items-center text-emerald-600 text-xs mt-2 font-medium">
              <TrendingUp className="w-3 h-3 mr-1" />
              <span>+3.9%</span>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-5 border border-neutral-200 shadow-sm">
            <div className="text-neutral-500 text-xs font-medium mb-1">TRACKED</div>
            <div className="text-2xl font-light text-neutral-900">12</div>
            <div className="text-neutral-500 text-xs mt-2">3 buy signals</div>
          </div>
          
          <div className="bg-white rounded-xl p-5 border border-neutral-200 shadow-sm">
            <div className="text-neutral-500 text-xs font-medium mb-1">THIS WEEK</div>
            <div className="text-2xl font-light text-neutral-900">+$1.2K</div>
            <div className="text-emerald-600 text-xs mt-2 font-medium">Portfolio gain</div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden">
          <div className="flex justify-between items-center p-6 border-b border-neutral-200">
            <h2 className="text-lg font-light text-neutral-900">Your Watchlist</h2>
            <button className="flex items-center text-neutral-900 hover:text-neutral-600 text-sm font-medium transition-colors">
              <Plus className="w-4 h-4 mr-1" />
              Add
            </button>
          </div>
          
          <div className="divide-y divide-neutral-200">
            {watchlist.map(watch => (
              <div key={watch.id} className="p-5 hover:bg-neutral-50 transition-colors cursor-pointer" onClick={() => setSelectedWatch(watch)}>
                <div className="flex items-center justify-between">
                  <div className="flex gap-4 items-center flex-1">
                    <div className="text-4xl">{watch.image}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-neutral-900 font-medium">{watch.brand}</h3>
                        <span className={`${watch.signalColor} text-white px-2 py-0.5 rounded text-xs font-medium`}>
                          {watch.buySignal}
                        </span>
                      </div>
                      <p className="text-neutral-500 text-sm mb-2">{watch.model}</p>
                      <div className="flex items-center gap-3 text-xs text-neutral-400">
                        <span>{watch.watching} watching</span>
                        <span>•</span>
                        <span>{watch.recentActivity}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right ml-4">
                    <div className="text-neutral-900 font-medium text-lg">
                      ${watch.currentPrice.toLocaleString()}
                    </div>
                    <div className={`flex items-center justify-end text-sm mt-1 ${watch.priceChange < 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                      {watch.priceChange < 0 ? <TrendingDown className="w-3 h-3 mr-1" /> : <TrendingUp className="w-3 h-3 mr-1" />}
                      <span className="font-medium">{Math.abs(watch.priceChange)}%</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden">
          <div className="flex justify-between items-center p-6 border-b border-neutral-200">
            <h2 className="text-lg font-light text-neutral-900">Portfolio Summary</h2>
            <button 
              onClick={() => setActiveTab('portfolio')}
              className="flex items-center text-neutral-900 hover:text-neutral-600 text-sm font-medium transition-colors"
            >
              View All
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>
          <div className="p-6 space-y-3">
            {portfolio.slice(0, 2).map((item, idx) => (
              <div key={idx} className="flex justify-between items-center">
                <div>
                  <h3 className="text-neutral-900 font-medium text-sm">{item.brand} {item.model}</h3>
                  <p className="text-neutral-500 text-xs">Purchase: ${item.purchasePrice.toLocaleString()}</p>
                </div>
                <div className="text-right">
                  <div className="text-neutral-900 font-medium">${item.currentValue.toLocaleString()}</div>
                  <div className="text-emerald-600 text-xs font-medium">+{item.change}%</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-xl p-6 text-white shadow-lg">
          <h2 className="text-sm font-medium mb-4 opacity-80">TODAY'S INSIGHTS</h2>
          <div className="space-y-4">
            {dailyRecommendations.map((rec, idx) => (
              <div key={idx} className="pb-4 border-b border-neutral-700 last:border-0 last:pb-0">
                <h3 className="font-medium mb-1 text-sm">{rec.title}</h3>
                <p className="text-neutral-300 text-xs mb-2 leading-relaxed">{rec.description}</p>
                <button className="text-xs font-medium hover:opacity-80 transition-opacity">
                  {rec.action} →
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden">
          <div className="p-5 border-b border-neutral-200">
            <h2 className="text-sm font-medium text-neutral-900">MARKET INSIGHTS</h2>
          </div>
          <div className="p-5 space-y-4">
            {marketInsights.map((insight, idx) => (
              <div key={idx}>
                <div className="text-xs text-neutral-500 mb-1">{insight.metric}</div>
                <div className="flex justify-between items-baseline">
                  <div className="text-neutral-900 font-medium">{insight.value}</div>
                  <div className="text-xs text-neutral-500">{insight.change}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl border border-neutral-200 shadow-sm p-5">
          <h2 className="text-sm font-medium text-neutral-900 mb-4">QUICK ACTIONS</h2>
          <div className="space-y-2">
            <button className="w-full bg-neutral-900 hover:bg-neutral-800 text-white py-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-center">
              <Camera className="w-4 h-4 mr-2" />
              Add Watch to Portfolio
            </button>
            <button className="w-full border border-neutral-300 hover:bg-neutral-50 text-neutral-900 py-3 rounded-lg text-sm font-medium transition-colors">
              Browse Opportunities
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-neutral-50">
      <nav className="bg-white border-b border-neutral-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div>
              <h1 className="text-2xl font-light tracking-tight text-neutral-900">
                Ciao Lusso
              </h1>
              <p className="text-[10px] text-neutral-500 tracking-wide">TIMING MATTERS</p>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <button 
                onClick={() => { setActiveTab('dashboard'); setSelectedWatch(null); }}
                className={`text-sm font-medium transition-colors ${activeTab === 'dashboard' && !selectedWatch ? 'text-neutral-900' : 'text-neutral-400 hover:text-neutral-900'}`}
              >
                Dashboard
              </button>
              <button 
                onClick={() => { setActiveTab('portfolio'); setSelectedWatch(null); }}
                className={`text-sm font-medium transition-colors ${activeTab === 'portfolio' ? 'text-neutral-900' : 'text-neutral-400 hover:text-neutral-900'}`}
              >
                Portfolio
              </button>
              <button 
                onClick={() => { setActiveTab('profile'); setSelectedWatch(null); }}
                className={`transition-colors ${activeTab === 'profile' ? 'text-neutral-900' : 'text-neutral-400 hover:text-neutral-900'}`}>
                <User className="w-5 h-5" />
              </button>
            </div>

            <button 
              onClick={() => setShowMenu(!showMenu)}
              className="md:hidden text-neutral-900"
            >
              {showMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      <div className="bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search Rolex, Patek Philippe, Audemars Piguet..."
              className="w-full bg-neutral-50 border border-neutral-200 rounded-lg pl-11 pr-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-900 transition-colors"
            />
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <DashboardView />
      </main>

      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-neutral-200 px-4 py-3 safe-area-bottom">
        <div className="flex justify-around">
          <button 
            onClick={() => { setActiveTab('dashboard'); setSelectedWatch(null); }}
            className={`flex flex-col items-center gap-1 ${activeTab === 'dashboard' && !selectedWatch ? 'text-neutral-900' : 'text-neutral-400'}`}
          >
            <Home className="w-5 h-5" />
            <span className="text-xs font-medium">Home</span>
          </button>
          <button 
            onClick={() => { setActiveTab('portfolio'); setSelectedWatch(null); }}
            className={`flex flex-col items-center gap-1 ${activeTab === 'portfolio' ? 'text-neutral-900' : 'text-neutral-400'}`}
          >
            <BarChart3 className="w-5 h-5" />
            <span className="text-xs font-medium">Portfolio</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-neutral-400">
            <Bell className="w-5 h-5" />
            <span className="text-xs font-medium">Alerts</span>
          </button>
          <button 
            onClick={() => { setActiveTab('profile'); setSelectedWatch(null); }}
            className={`flex flex-col items-center gap-1 ${activeTab === 'profile' ? 'text-neutral-900' : 'text-neutral-400'}`}
          >
            <User className="w-5 h-5" />
            <span className="text-xs font-medium">Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
}