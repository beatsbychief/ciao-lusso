import React, { useState } from 'react';
import { TrendingUp, TrendingDown, Bell, Search, Plus, Camera, Menu, X, Home, BarChart3, User, ChevronRight, Settings } from 'lucide-react';

export default function LuxyApp() {
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
            className="text-neutral-500 hover:text-neutral-900 text-sm mb-4 flex items-center"
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

  const AddWatchView = () => (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-xl border border-neutral-200 shadow-sm p-8">
        <h1 className="text-2xl font-light text-neutral-900 mb-6">Add Watch to Portfolio</h1>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-neutral-900 mb-2">
              Watch Photo
            </label>
            <div className="border-2 border-dashed border-neutral-300 rounded-xl p-12 text-center hover:border-neutral-900 transition-colors cursor-pointer">
              <Camera className="w-12 h-12 text-neutral-400 mx-auto mb-3" />
              <p className="text-neutral-600 font-medium mb-1">Click to upload or drag and drop</p>
              <p className="text-neutral-400 text-sm">AI will identify your watch automatically</p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-neutral-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-neutral-500">OR ENTER MANUALLY</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-neutral-900 mb-2">Brand</label>
              <input
                type="text"
                placeholder="e.g. Rolex"
                className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-900 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-900 mb-2">Model</label>
              <input
                type="text"
                placeholder="e.g. Submariner"
                className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-900 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-900 mb-2">Reference Number</label>
            <input
              type="text"
              placeholder="e.g. 116610LN"
              className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-900 transition-colors"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-neutral-900 mb-2">Purchase Price</label>
              <input
                type="number"
                placeholder="$12,000"
                className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-900 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-900 mb-2">Purchase Date</label>
              <input
                type="date"
                className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-900 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-900 mb-2">
              Condition
            </label>
            <select className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-2.5 text-sm text-neutral-900 focus:outline-none focus:border-neutral-900 transition-colors">
              <option>Excellent</option>
              <option>Very Good</option>
              <option>Good</option>
              <option>Fair</option>
            </select>
          </div>

          <div className="flex gap-3 pt-4">
            <button 
              onClick={() => setActiveTab('portfolio')}
              className="flex-1 border border-neutral-300 hover:bg-neutral-50 text-neutral-900 py-3 rounded-lg text-sm font-medium transition-colors"
            >
              Cancel
            </button>
            <button className="flex-1 bg-neutral-900 hover:bg-neutral-800 text-white py-3 rounded-lg text-sm font-medium transition-colors">
              Add to Portfolio
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const AlertPreferencesView = () => (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-xl border border-neutral-200 shadow-sm p-8">
        <h1 className="text-2xl font-light text-neutral-900 mb-6">Alert Preferences</h1>
        
        <div className="space-y-6">
          <div>
            <h2 className="text-sm font-medium text-neutral-900 mb-4">ALERT TYPES</h2>
            <div className="space-y-3">
              {[
                { label: 'Price Drop Alerts', desc: 'When tracked watches drop in price' },
                { label: 'Buy Signals', desc: 'AI-powered buying opportunities' },
                { label: 'Portfolio Updates', desc: 'Daily valuation changes' },
                { label: 'Market Insights', desc: 'Weekly market trends and analysis' },
                { label: 'Social Activity', desc: 'When collectors buy watches you\'re tracking' }
              ].map((alert, idx) => (
                <div key={idx} className="flex items-center justify-between py-3 border-b border-neutral-200 last:border-0">
                  <div>
                    <div className="text-neutral-900 font-medium text-sm mb-1">{alert.label}</div>
                    <div className="text-neutral-500 text-xs">{alert.desc}</div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-neutral-900"></div>
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6">
            <h2 className="text-sm font-medium text-neutral-900 mb-4">NOTIFICATION CHANNELS</h2>
            <div className="space-y-3">
              {[
                { label: 'Email', desc: 'alerts@luxy.com' },
                { label: 'Push Notifications', desc: 'Mobile and desktop' },
                { label: 'SMS', desc: '+1 (555) 123-4567' }
              ].map((channel, idx) => (
                <div key={idx} className="flex items-center justify-between py-3 border-b border-neutral-200 last:border-0">
                  <div>
                    <div className="text-neutral-900 font-medium text-sm mb-1">{channel.label}</div>
                    <div className="text-neutral-500 text-xs">{channel.desc}</div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-neutral-900"></div>
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6">
            <h2 className="text-sm font-medium text-neutral-900 mb-4">ALERT FREQUENCY</h2>
            <select className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-2.5 text-sm text-neutral-900 focus:outline-none focus:border-neutral-900 transition-colors">
              <option>Real-time (as they happen)</option>
              <option>Daily digest (once per day)</option>
              <option>Weekly digest (once per week)</option>
            </select>
          </div>

          <button className="w-full bg-neutral-900 hover:bg-neutral-800 text-white py-3 rounded-lg text-sm font-medium transition-colors mt-6">
            Save Preferences
          </button>
        </div>
      </div>
    </div>
  );

  const ProfileView = () => (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl border border-neutral-200 shadow-sm p-8 mb-6">
        <div className="flex items-start justify-between mb-6">
          <div className="flex gap-6">
            <div className="w-24 h-24 bg-neutral-200 rounded-full flex items-center justify-center text-4xl">
              👤
            </div>
            <div>
              <h1 className="text-2xl font-light text-neutral-900 mb-1">James Mitchell</h1>
              <p className="text-neutral-500 mb-3">Collector since 2021</p>
              <div className="flex items-center gap-2 text-sm">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${isPublicProfile ? 'bg-emerald-100 text-emerald-700' : 'bg-neutral-100 text-neutral-700'}`}>
                  {isPublicProfile ? 'Public Profile' : 'Private Profile'}
                </span>
                <button 
                  onClick={() => setIsPublicProfile(!isPublicProfile)}
                  className="text-neutral-600 hover:text-neutral-900 text-xs font-medium"
                >
                  Change
                </button>
              </div>
            </div>
          </div>
          <button className="border border-neutral-300 hover:bg-neutral-50 text-neutral-900 px-5 py-2 rounded-lg text-sm font-medium transition-colors">
            Edit Profile
          </button>
        </div>

        <div className="grid grid-cols-3 gap-6 pt-6 border-t border-neutral-200">
          <div>
            <div className="text-neutral-500 text-xs font-medium mb-1">COLLECTION VALUE</div>
            <div className="text-2xl font-light text-neutral-900">$31,900</div>
          </div>
          <div>
            <div className="text-neutral-500 text-xs font-medium mb-1">WATCHES OWNED</div>
            <div className="text-2xl font-light text-neutral-900">3</div>
          </div>
          <div>
            <div className="text-neutral-500 text-xs font-medium mb-1">TRACKING</div>
            <div className="text-2xl font-light text-neutral-900">12</div>
          </div>
        </div>
      </div>

      {isPublicProfile && (
        <div className="bg-white rounded-xl border border-neutral-200 shadow-sm p-8 mb-6">
          <h2 className="text-lg font-light text-neutral-900 mb-4">Public Collection</h2>
          <p className="text-neutral-500 text-sm mb-6">Your collection is visible to other Luxy members</p>
          <div className="space-y-3">
            {portfolio.map((item, idx) => (
              <div key={idx} className="flex justify-between items-center py-3 border-b border-neutral-200 last:border-0">
                <div>
                  <h3 className="text-neutral-900 font-medium text-sm">{item.brand} {item.model}</h3>
                  <p className="text-neutral-500 text-xs">Added 2 years ago</p>
                </div>
                <div className="text-emerald-600 text-sm font-medium">+{item.change}%</div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="bg-white rounded-xl border border-neutral-200 shadow-sm p-8">
        <h2 className="text-lg font-light text-neutral-900 mb-4">Activity</h2>
        <div className="space-y-4">
          {[
            { action: 'Added Rolex Daytona to watchlist', time: '2 hours ago' },
            { action: 'Received buy signal for Patek Philippe Nautilus', time: '5 hours ago' },
            { action: 'Portfolio value increased by $1,200', time: '1 day ago' }
          ].map((activity, idx) => (
            <div key={idx} className="flex justify-between items-center py-3 border-b border-neutral-200 last:border-0">
              <p className="text-neutral-900 text-sm">{activity.action}</p>
              <span className="text-neutral-400 text-xs">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const SettingsView = () => (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-xl border border-neutral-200 shadow-sm p-8 mb-6">
        <h1 className="text-2xl font-light text-neutral-900 mb-6">Settings</h1>
        
        <div className="space-y-6">
          <div>
            <h2 className="text-sm font-medium text-neutral-900 mb-4">ACCOUNT</h2>
            <div className="space-y-3">
              <div>
                <label className="block text-sm text-neutral-600 mb-2">Email</label>
                <input
                  type="email"
                  defaultValue="james.mitchell@email.com"
                  className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-2.5 text-sm text-neutral-900 focus:outline-none focus:border-neutral-900 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm text-neutral-600 mb-2">Password</label>
                <button className="text-neutral-900 text-sm font-medium hover:opacity-70">
                  Change Password
                </button>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-neutral-200">
            <h2 className="text-sm font-medium text-neutral-900 mb-4">SUBSCRIPTION</h2>
            <div className="bg-neutral-50 rounded-lg p-5 border border-neutral-200">
              <div className="flex justify-between items-center mb-2">
                <span className="text-neutral-900 font-medium">Luxy Pro</span>
                <span className="text-neutral-900 font-medium">$29/month</span>
              </div>
              <p className="text-neutral-500 text-sm mb-3">Next billing date: November 15, 2025</p>
              <button className="text-neutral-900 text-sm font-medium hover:opacity-70">
                Manage Subscription
              </button>
            </div>
          </div>

          <div className="pt-6 border-t border-neutral-200">
            <h2 className="text-sm font-medium text-neutral-900 mb-4">PRIVACY</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between py-3">
                <div>
                  <div className="text-neutral-900 text-sm mb-1">Public Profile</div>
                  <div className="text-neutral-500 text-xs">Allow others to see your collection</div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-neutral-900"></div>
                </label>
              </div>
              <div className="flex items-center justify-between py-3">
                <div>
                  <div className="text-neutral-900 text-sm mb-1">Anonymous Browsing</div>
                  <div className="text-neutral-500 text-xs">Hide your activity from others</div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked className="sr-only peer" />
                  <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-neutral-900"></div>
                </label>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-neutral-200">
            <h2 className="text-sm font-medium text-red-600 mb-4">DANGER ZONE</h2>
            <button className="text-red-600 text-sm font-medium hover:opacity-70">
              Delete Account
            </button>
          </div>

          <button className="w-full bg-neutral-900 hover:bg-neutral-800 text-white py-3 rounded-lg text-sm font-medium transition-colors mt-6">
            Save Changes
          </button>
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
            <button 
              onClick={() => setActiveTab('addwatch')}
              className="w-full bg-neutral-900 hover:bg-neutral-800 text-white py-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-center">
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
                className="bg-neutral-900 hover:bg-neutral-800 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center">
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

  return (
    <div className="min-h-screen bg-neutral-50">
      <nav className="bg-white border-b border-neutral-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div>
              <h1 className="text-2xl font-light tracking-tight text-neutral-900">
                Ciao Lusso
              </h1>
              <p className="text-[10px] text-neutral-500 tracking-wide">TIME MATTERS</p>
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
                onClick={() => { setActiveTab('alerts'); setSelectedWatch(null); }}
                className={`text-sm font-medium transition-colors ${activeTab === 'alerts' ? 'text-neutral-900' : 'text-neutral-400 hover:text-neutral-900'}`}
              >
                Alerts
              </button>
              <button 
                onClick={() => { setActiveTab('settings'); setSelectedWatch(null); }}
                className={`transition-colors ${activeTab === 'settings' ? 'text-neutral-900' : 'text-neutral-400 hover:text-neutral-900'}`}>
                <Settings className="w-5 h-5" />
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
            <button 
              onClick={() => { setActiveTab('settings'); setShowMenu(false); setSelectedWatch(null); }}
              className="w-full text-left px-4 py-3 text-neutral-600 hover:bg-neutral-50 rounded-lg"
            >
              Settings
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
        {!selectedWatch && activeTab === 'addwatch' && <AddWatchView />}
        {!selectedWatch && activeTab === 'alerts' && <AlertPreferencesView />}
        {!selectedWatch && activeTab === 'profile' && <ProfileView />}
        {!selectedWatch && activeTab === 'settings' && <SettingsView />}
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
          <button 
            onClick={() => { setActiveTab('alerts'); setSelectedWatch(null); }}
            className={`flex flex-col items-center gap-1 ${activeTab === 'alerts' ? 'text-neutral-900' : 'text-neutral-400'}`}
          >
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