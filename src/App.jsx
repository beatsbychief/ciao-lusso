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

  const WatchDetailView = () => (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-6">
        <div className="bg-white rounded-xl border border-neutral-200 shadow-sm p-8">
          <button 
            onClick={() => setSelectedWatch(null)}
            className="text-neutral-500 hover:text-neutral-900 text-sm mb-4 flex items-center cursor-pointer"
          >
            ← Back to Watchlist
          </button>
          
          <div className="flex gap-8 items-start">
            <div className="text-8xl">⌚</div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-light text-neutral-900">Rolex Daytona</h1>
                <span className="bg-emerald-600 text-white px-3 py-1 rounded text-xs font-medium">
                  BUY NOW
                </span>
              </div>
              <p className="text-neutral-500 mb-4">Reference: 116500LN</p>
              <div className="text-4xl font-light text-neutral-900 mb-2">$28,500</div>
              <div className="flex items-center text-emerald-600 font-medium">
                <TrendingDown className="w-4 h-4 mr-1" />
                <span>Down 3.2% this week</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-neutral-200 shadow-sm p-6">
          <h2 className="text-lg font-light text-neutral-900 mb-4">Price History</h2>
          <div className="h-64 bg-neutral-50 rounded-lg flex items-center justify-center border border-neutral-200">
            <p className="text-neutral-400 text-sm">Price chart visualization</p>
          </div>
          <div className="grid grid-cols-4 gap-4 mt-4">
            <div className="text-center">
              <div className="text-xs text-neutral-500 mb-1">1 WEEK</div>
              <div className="text-emerald-600 font-medium">-3.2%</div>
            </div>
            <div className="text-center">
              <div className="text-xs text-neutral-500 mb-1">1 MONTH</div>
              <div className="text-emerald-600 font-medium">-5.1%</div>
            </div>
            <div className="text-center">
              <div className="text-xs text-neutral-500 mb-1">3 MONTHS</div>
              <div className="text-emerald-600 font-medium">-8.4%</div>
            </div>
            <div className="text-center">
              <div className="text-xs text-neutral-500 mb-1">1 YEAR</div>
              <div className="text-red-600 font-medium">+2.1%</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-neutral-200">
            <h2 className="text-lg font-light text-neutral-900">Available Listings</h2>
          </div>
          <div className="divide-y divide-neutral-200">
            {[
              { seller: 'Chrono24', condition: 'Excellent', price: 28500, location: 'Switzerland' },
              { seller: 'WatchBox', condition: 'Very Good', price: 28200, location: 'USA' },
              { seller: 'Bob\'s Watches', condition: 'Excellent', price: 28900, location: 'USA' }
            ].map((listing, idx) => (
              <div key={idx} className="p-5 hover:bg-neutral-50 transition-colors">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-neutral-900 font-medium mb-1">{listing.seller}</h3>
                    <p className="text-neutral-500 text-sm">{listing.condition} • {listing.location}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-neutral-900 font-medium text-lg">${listing.price.toLocaleString()}</div>
                    <button className="text-neutral-900 text-sm font-medium hover:opacity-70 transition-opacity mt-1">
                      View →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-xl p-6 text-white shadow-lg">
          <h2 className="text-sm font-medium mb-4 opacity-80">AI RECOMMENDATION</h2>
          <div className="mb-4">
            <div className="text-2xl font-light mb-2">Strong Buy Signal</div>
            <div className="text-sm text-neutral-300 leading-relaxed">
              This model is at a 3-year low. Historical data suggests 15-20% appreciation within 6 months.
            </div>
          </div>
          <div className="pt-4 border-t border-neutral-700">
            <div className="text-xs opacity-70 mb-2">PREDICTED VALUE (6 MONTHS)</div>
            <div className="text-xl font-medium">$32,800 - $34,200</div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-neutral-200 shadow-sm p-5">
          <h2 className="text-sm font-medium text-neutral-900 mb-4">SOCIAL ACTIVITY</h2>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-neutral-500">Watching</span>
              <span className="text-neutral-900 font-medium">142 collectors</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-500">Purchases (7 days)</span>
              <span className="text-neutral-900 font-medium">3</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-500">Average Sale Price</span>
              <span className="text-neutral-900 font-medium">$28,650</span>
            </div>
          </div>
        </div>

        <button className="w-full bg-neutral-900 hover:bg-neutral-800 text-white py-3 rounded-lg text-sm font-medium transition-colors">
          Set Price Alert
        </button>
      </div>
    </div>
  );

  const ProfileView = () => (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-6">
        <div className="bg-white rounded-xl border border-neutral-200 shadow-sm p-6">
          <h2 className="text-2xl font-light text-neutral-900 mb-6">Profile Settings</h2>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">Full Name</label>
              <input
                type="text"
                defaultValue="John Collector"
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:border-neutral-900"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">Email</label>
              <input
                type="email"
                defaultValue="john@example.com"
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:border-neutral-900"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">Phone Number</label>
              <input
                type="tel"
                defaultValue="+1 (555) 123-4567"
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:border-neutral-900"
              />
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-neutral-200">
              <div>
                <h3 className="text-sm font-medium text-neutral-900">Public Profile</h3>
                <p className="text-xs text-neutral-500">Allow others to view your collection</p>
              </div>
              <button
                onClick={() => setIsPublicProfile(!isPublicProfile)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors cursor-pointer ${isPublicProfile ? 'bg-neutral-900' : 'bg-neutral-300'}`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isPublicProfile ? 'translate-x-6' : 'translate-x-1'}`} />
              </button>
            </div>

            <div className="pt-4">
              <button className="bg-neutral-900 hover:bg-neutral-800 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-colors">
                Save Changes
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-neutral-200 shadow-sm p-6">
          <h2 className="text-lg font-light text-neutral-900 mb-4">Notification Preferences</h2>

          <div className="space-y-4">
            {[
              { title: 'Price Alerts', desc: 'Get notified when tracked watches hit target prices' },
              { title: 'Market Updates', desc: 'Daily market trends and insights' },
              { title: 'Portfolio Changes', desc: 'Updates on your collection value' },
              { title: 'New Opportunities', desc: 'AI-detected buying opportunities' }
            ].map((pref, idx) => (
              <div key={idx} className="flex items-center justify-between py-3 border-b border-neutral-100 last:border-0">
                <div>
                  <h3 className="text-sm font-medium text-neutral-900">{pref.title}</h3>
                  <p className="text-xs text-neutral-500">{pref.desc}</p>
                </div>
                <input type="checkbox" defaultChecked className="w-4 h-4 cursor-pointer" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-white rounded-xl border border-neutral-200 shadow-sm p-5">
          <h2 className="text-sm font-medium text-neutral-900 mb-4">ACCOUNT STATS</h2>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-neutral-500">Member Since</span>
              <span className="text-neutral-900 font-medium">Jan 2024</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-neutral-500">Watches Tracked</span>
              <span className="text-neutral-900 font-medium">12</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-neutral-500">Portfolio Items</span>
              <span className="text-neutral-900 font-medium">3</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-neutral-500">Total Value</span>
              <span className="text-neutral-900 font-medium">$31,900</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-xl p-6 text-white">
          <h2 className="text-sm font-medium mb-3 opacity-80">UPGRADE TO PRO</h2>
          <p className="text-xs text-neutral-300 mb-4 leading-relaxed">
            Get advanced analytics, unlimited tracking, and priority alerts.
          </p>
          <button className="w-full bg-white text-neutral-900 py-2.5 rounded-lg text-sm font-medium hover:bg-neutral-100 transition-colors">
            Upgrade Now
          </button>
        </div>
      </div>
    </div>
  );

  const AddWatchView = () => (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-xl border border-neutral-200 shadow-sm p-8">
        <h2 className="text-2xl font-light text-neutral-900 mb-2">Add Watch to Portfolio</h2>
        <p className="text-neutral-500 text-sm mb-8">Upload a photo or enter details manually</p>

        <div className="space-y-6">
          <div className="border-2 border-dashed border-neutral-300 rounded-xl p-12 text-center hover:border-neutral-400 transition-colors">
            <Camera className="w-12 h-12 text-neutral-400 mx-auto mb-4" />
            <h3 className="text-neutral-900 font-medium mb-2">Upload Watch Photo</h3>
            <p className="text-neutral-500 text-sm mb-4">AI will identify the model and populate details</p>
            <button className="bg-neutral-900 hover:bg-neutral-800 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-colors">
              Choose File
            </button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-neutral-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-neutral-500">or enter manually</span>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">Brand</label>
              <input
                type="text"
                placeholder="e.g., Rolex, Patek Philippe"
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:border-neutral-900"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">Model</label>
              <input
                type="text"
                placeholder="e.g., Submariner, Nautilus"
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:border-neutral-900"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">Reference Number</label>
              <input
                type="text"
                placeholder="e.g., 116610LN"
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:border-neutral-900"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Purchase Price</label>
                <input
                  type="number"
                  placeholder="12000"
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:border-neutral-900"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Purchase Date</label>
                <input
                  type="date"
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:border-neutral-900"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">Condition</label>
              <select className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:border-neutral-900">
                <option>Excellent</option>
                <option>Very Good</option>
                <option>Good</option>
                <option>Fair</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">Notes (Optional)</label>
              <textarea
                rows="3"
                placeholder="Add any additional details..."
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:border-neutral-900"
              ></textarea>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              onClick={() => setActiveTab('portfolio')}
              className="flex-1 border border-neutral-300 hover:bg-neutral-50 text-neutral-900 py-3 rounded-lg text-sm font-medium transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={() => setActiveTab('portfolio')}
              className="flex-1 bg-neutral-900 hover:bg-neutral-800 text-white py-3 rounded-lg text-sm font-medium transition-colors"
            >
              Add to Portfolio
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const AlertsView = () => (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-6">
        <div className="bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-neutral-200">
            <h2 className="text-2xl font-light text-neutral-900 mb-1">Price Alerts</h2>
            <p className="text-neutral-500 text-sm">Get notified when watches hit your target price</p>
          </div>

          <div className="divide-y divide-neutral-200">
            {[
              { brand: 'Rolex', model: 'Submariner 116610LN', targetPrice: 14500, currentPrice: 15800, active: true },
              { brand: 'Omega', model: 'Speedmaster Professional', targetPrice: 6800, currentPrice: 7200, active: true },
              { brand: 'Patek Philippe', model: 'Nautilus 5711/1A', targetPrice: 85000, currentPrice: 87000, active: false }
            ].map((alert, idx) => (
              <div key={idx} className="p-5">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1">
                    <h3 className="text-neutral-900 font-medium mb-1">{alert.brand} {alert.model}</h3>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-neutral-500">Target: ${alert.targetPrice.toLocaleString()}</span>
                      <span className="text-neutral-500">Current: ${alert.currentPrice.toLocaleString()}</span>
                    </div>
                  </div>
                  <button
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${alert.active ? 'bg-neutral-900' : 'bg-neutral-300'}`}
                  >
                    <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${alert.active ? 'translate-x-6' : 'translate-x-1'}`} />
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  {alert.currentPrice > alert.targetPrice ? (
                    <span className="text-xs text-amber-600 bg-amber-50 px-2 py-1 rounded">
                      ${(alert.currentPrice - alert.targetPrice).toLocaleString()} above target
                    </span>
                  ) : (
                    <span className="text-xs text-emerald-600 bg-emerald-50 px-2 py-1 rounded">
                      Target reached!
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-neutral-200">
            <h2 className="text-lg font-light text-neutral-900">Recent Notifications</h2>
          </div>

          <div className="divide-y divide-neutral-200">
            {[
              { title: 'Price Drop Alert', message: 'Rolex Daytona dropped 3.2% to $28,500', time: '2 hours ago', type: 'price' },
              { title: 'Portfolio Update', message: 'Your collection value increased by $1,200', time: '1 day ago', type: 'portfolio' },
              { title: 'Market Insight', message: 'Cartier watches trending up 4% this week', time: '2 days ago', type: 'insight' },
              { title: 'Buy Signal', message: 'Strong buy signal for Patek Philippe Nautilus', time: '3 days ago', type: 'signal' }
            ].map((notif, idx) => (
              <div key={idx} className="p-5 hover:bg-neutral-50 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <Bell className={`w-4 h-4 ${notif.type === 'price' ? 'text-emerald-600' : 'text-neutral-400'}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-neutral-900 font-medium text-sm mb-1">{notif.title}</h3>
                    <p className="text-neutral-600 text-sm mb-2">{notif.message}</p>
                    <span className="text-neutral-400 text-xs">{notif.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-white rounded-xl border border-neutral-200 shadow-sm p-5">
          <h2 className="text-sm font-medium text-neutral-900 mb-4">CREATE NEW ALERT</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-neutral-700 mb-2">Watch Model</label>
              <input
                type="text"
                placeholder="Search for a watch..."
                className="w-full px-3 py-2 text-sm border border-neutral-300 rounded-lg focus:outline-none focus:border-neutral-900"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-neutral-700 mb-2">Target Price</label>
              <input
                type="number"
                placeholder="15000"
                className="w-full px-3 py-2 text-sm border border-neutral-300 rounded-lg focus:outline-none focus:border-neutral-900"
              />
            </div>
            <button className="w-full bg-neutral-900 hover:bg-neutral-800 text-white py-2.5 rounded-lg text-sm font-medium transition-colors">
              Create Alert
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-xl p-6 text-white">
          <h2 className="text-sm font-medium mb-3 opacity-80">ACTIVE ALERTS</h2>
          <div className="text-3xl font-light mb-2">3</div>
          <p className="text-xs text-neutral-300">Monitoring price movements</p>
        </div>
      </div>
    </div>
  );

  const PortfolioView = () => (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <div className="bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-neutral-200">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-2xl font-light text-neutral-900 mb-1">My Collection</h2>
                <p className="text-neutral-500 text-sm">Track your luxury watch portfolio</p>
              </div>
              <button
                onClick={() => setActiveTab('addwatch')}
                className="bg-neutral-900 hover:bg-neutral-800 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center cursor-pointer">
                <Camera className="w-4 h-4 mr-2" />
                Add Watch
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-neutral-50 rounded-lg p-4 border border-neutral-200">
                <div className="text-neutral-500 text-xs font-medium mb-1">TOTAL VALUE</div>
                <div className="text-2xl font-light text-neutral-900">$31,900</div>
              </div>
              <div className="bg-neutral-50 rounded-lg p-4 border border-neutral-200">
                <div className="text-neutral-500 text-xs font-medium mb-1">TOTAL GAIN</div>
                <div className="text-2xl font-light text-emerald-600">+$5,400</div>
              </div>
            </div>
          </div>

          <div className="divide-y divide-neutral-200">
            {portfolio.map((item, idx) => (
              <div key={idx} className="p-6 hover:bg-neutral-50 transition-colors">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-neutral-900 font-medium mb-1">{item.brand} {item.model}</h3>
                    <p className="text-neutral-500 text-sm">Purchase: ${item.purchasePrice.toLocaleString()}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-neutral-900 font-medium text-lg">${item.currentValue.toLocaleString()}</div>
                    <div className="text-emerald-600 text-sm font-medium">+{item.change}%</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-xl p-6 text-white shadow-lg">
          <h2 className="text-sm font-medium mb-4 opacity-80">PORTFOLIO ANALYSIS</h2>
          <div className="space-y-4">
            <div>
              <div className="text-xs opacity-70 mb-1">Best Performer</div>
              <div className="text-lg font-medium">Rolex Submariner</div>
              <div className="text-emerald-400 text-sm">+31.7% gain</div>
            </div>
            <div className="pt-4 border-t border-neutral-700">
              <div className="text-xs opacity-70 mb-1">Recommendation</div>
              <div className="text-sm leading-relaxed">Consider diversifying into Cartier watches, showing 4% growth trend.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

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
            <button className="flex items-center text-neutral-900 hover:text-neutral-600 text-sm font-medium transition-colors cursor-pointer">
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
              className="flex items-center text-neutral-900 hover:text-neutral-600 text-sm font-medium transition-colors cursor-pointer"
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
                <button className="text-xs font-medium hover:opacity-80 transition-opacity cursor-pointer">
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
            <button 
              onClick={() => setActiveTab('addwatch')}
              className="w-full bg-neutral-900 hover:bg-neutral-800 text-white py-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-center cursor-pointer">
              <Camera className="w-4 h-4 mr-2" />
              Add Watch to Portfolio
            </button>
            <button className="w-full border border-neutral-300 hover:bg-neutral-50 text-neutral-900 py-3 rounded-lg text-sm font-medium transition-colors cursor-pointer">
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
              <h1 className="text-2xl font-light tracking-tight text-neutral-900 cursor-pointer" onClick={() => { setActiveTab('dashboard'); setSelectedWatch(null); }}>
                Ciao Lusso
              </h1>
              <p className="text-[10px] text-neutral-500 tracking-wide">TIMING MATTERS</p>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => { setActiveTab('dashboard'); setSelectedWatch(null); }}
                className={`text-sm font-medium transition-colors cursor-pointer ${activeTab === 'dashboard' && !selectedWatch ? 'text-neutral-900' : 'text-neutral-400 hover:text-neutral-900'}`}
              >
                Dashboard
              </button>
              <button
                onClick={() => { setActiveTab('portfolio'); setSelectedWatch(null); }}
                className={`text-sm font-medium transition-colors cursor-pointer ${activeTab === 'portfolio' ? 'text-neutral-900' : 'text-neutral-400 hover:text-neutral-900'}`}
              >
                Portfolio
              </button>
              <button
                onClick={() => { setActiveTab('alerts'); setSelectedWatch(null); }}
                className={`text-sm font-medium transition-colors cursor-pointer ${activeTab === 'alerts' ? 'text-neutral-900' : 'text-neutral-400 hover:text-neutral-900'}`}
              >
                Alerts
              </button>
              <button
                onClick={() => { setActiveTab('profile'); setSelectedWatch(null); }}
                className={`transition-colors cursor-pointer ${activeTab === 'profile' ? 'text-neutral-900' : 'text-neutral-400 hover:text-neutral-900'}`}>
                <User className="w-5 h-5" />
              </button>
            </div>

            <button 
              onClick={() => setShowMenu(!showMenu)}
              className="md:hidden text-neutral-900 cursor-pointer"
            >
              {showMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {showMenu && (
          <div className="md:hidden bg-white border-t border-neutral-200 px-6 py-3">
            <button
              onClick={() => { setActiveTab('dashboard'); setShowMenu(false); setSelectedWatch(null); }}
              className="w-full text-left px-4 py-3 text-neutral-600 hover:bg-neutral-50 rounded-lg"
            >
              Dashboard
            </button>
            <button
              onClick={() => { setActiveTab('portfolio'); setShowMenu(false); setSelectedWatch(null); }}
              className="w-full text-left px-4 py-3 text-neutral-600 hover:bg-neutral-50 rounded-lg"
            >
              Portfolio
            </button>
            <button
              onClick={() => { setActiveTab('alerts'); setShowMenu(false); setSelectedWatch(null); }}
              className="w-full text-left px-4 py-3 text-neutral-600 hover:bg-neutral-50 rounded-lg"
            >
              Alerts
            </button>
            <button
              onClick={() => { setActiveTab('profile'); setShowMenu(false); setSelectedWatch(null); }}
              className="w-full text-left px-4 py-3 text-neutral-600 hover:bg-neutral-50 rounded-lg"
            >
              Profile
            </button>
          </div>
        )}
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
        {selectedWatch && <WatchDetailView />}
        {!selectedWatch && activeTab === 'dashboard' && <DashboardView />}
        {!selectedWatch && activeTab === 'portfolio' && <PortfolioView />}
        {!selectedWatch && activeTab === 'profile' && <ProfileView />}
        {!selectedWatch && activeTab === 'addwatch' && <AddWatchView />}
        {!selectedWatch && activeTab === 'alerts' && <AlertsView />}
      </main>

      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-neutral-200 px-4 py-3">
        <div className="flex justify-around">
          <button 
            onClick={() => { setActiveTab('dashboard'); setSelectedWatch(null); }}
            className={`flex flex-col items-center gap-1 cursor-pointer ${activeTab === 'dashboard' && !selectedWatch ? 'text-neutral-900' : 'text-neutral-400'}`}
          >
            <Home className="w-5 h-5" />
            <span className="text-xs font-medium">Home</span>
          </button>
          <button 
            onClick={() => { setActiveTab('portfolio'); setSelectedWatch(null); }}
            className={`flex flex-col items-center gap-1 cursor-pointer ${activeTab === 'portfolio' ? 'text-neutral-900' : 'text-neutral-400'}`}
          >
            <BarChart3 className="w-5 h-5" />
            <span className="text-xs font-medium">Portfolio</span>
          </button>
          <button
            onClick={() => { setActiveTab('alerts'); setSelectedWatch(null); }}
            className={`flex flex-col items-center gap-1 cursor-pointer ${activeTab === 'alerts' ? 'text-neutral-900' : 'text-neutral-400'}`}
          >
            <Bell className="w-5 h-5" />
            <span className="text-xs font-medium">Alerts</span>
          </button>
          <button 
            onClick={() => { setActiveTab('profile'); setSelectedWatch(null); }}
            className={`flex flex-col items-center gap-1 cursor-pointer ${activeTab === 'profile' ? 'text-neutral-900' : 'text-neutral-400'}`}
          >
            <User className="w-5 h-5" />
            <span className="text-xs font-medium">Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
}