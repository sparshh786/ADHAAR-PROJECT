import React, { useState } from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, Users, Building2, GraduationCap, Heart, Banknote, Sprout, AlertCircle } from 'lucide-react';

const SAKSHAMDashboard = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedSettlement, setSelectedSettlement] = useState('All');
  const [literacySlider, setLiteracySlider] = useState(65);

  const tabs = [
    { id: 0, label: 'Executive Overview', icon: TrendingUp },
    { id: 1, label: 'Literacy Driver', icon: GraduationCap },
    { id: 2, label: 'Healthcare', icon: Heart },
    { id: 3, label: 'Financial', icon: Banknote },
    { id: 4, label: 'Agriculture', icon: Sprout },
    { id: 5, label: 'Dropout', icon: AlertCircle },
    { id: 6, label: 'Cross-Sector', icon: Users },
    { id: 7, label: 'Recommendations', icon: Building2 },
  ];

  const kpiData = {
    'All': { literacy: 65, healthcare: 42, credit: 38, dropout: 18 },
    'Village': { literacy: 58, healthcare: 35, credit: 28, dropout: 22 },
    'Suburban': { literacy: 68, healthcare: 46, credit: 42, dropout: 16 },
    'Tier-3 City': { literacy: 74, healthcare: 52, credit: 48, dropout: 12 }
  };

  const literacyImpactData = [
    { literacy: 40, healthcare: 25, dropout: 32 },
    { literacy: 50, healthcare: 32, dropout: 25 },
    { literacy: 60, healthcare: 40, dropout: 20 },
    { literacy: 70, healthcare: 48, dropout: 14 },
    { literacy: 80, healthcare: 58, dropout: 8 },
  ];

  const healthcareData = [
    { settlement: 'Village', early: 35, delayed: 65 },
    { settlement: 'Suburban', early: 46, delayed: 54 },
    { settlement: 'Tier-3', early: 52, delayed: 48 },
  ];

  const financialData = [
    { literacy: 'Below 50', institutional: 22, informal: 68 },
    { literacy: '50-65', institutional: 38, informal: 52 },
    { literacy: '65-75', institutional: 52, informal: 35 },
    { literacy: 'Above 75', institutional: 68, informal: 18 },
  ];

  const agricultureData = [
    { category: 'No Training', yield: 2.1 },
    { category: 'PM-KISAN Only', yield: 2.3 },
    { category: 'KVK Only', yield: 2.8 },
    { category: 'Both', yield: 3.6 },
  ];

  const dropoutData = [
    { factor: 'High Yield Volatility', rate: 28 },
    { factor: 'Healthcare Delay', rate: 24 },
    { factor: 'Informal Debt', rate: 31 },
    { factor: 'Low Literacy', rate: 26 },
  ];

  const currentKPI = kpiData[selectedSettlement];

  const renderContent = () => {
    if (activeTab === 0) {
      return (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-800">Executive Overview</h2>
            <select 
              value={selectedSettlement}
              onChange={(e) => setSelectedSettlement(e.target.value)}
              className="px-4 py-2 border-2 border-gray-300 rounded bg-white font-medium"
            >
              <option value="All">All Settlements</option>
              <option value="Village">Village</option>
              <option value="Suburban">Suburban</option>
              <option value="Tier-3 City">Tier-3 City</option>
            </select>
          </div>

          <div className="grid grid-cols-4 gap-4">
            <div className="bg-blue-50 border-2 border-blue-200 p-6 rounded">
              <div className="text-sm text-gray-600 mb-2">Average Literacy Rate</div>
              <div className="text-4xl font-bold text-blue-800">{currentKPI.literacy}%</div>
            </div>
            <div className="bg-green-50 border-2 border-green-200 p-6 rounded">
              <div className="text-sm text-gray-600 mb-2">Early Healthcare Access</div>
              <div className="text-4xl font-bold text-green-800">{currentKPI.healthcare}%</div>
            </div>
            <div className="bg-purple-50 border-2 border-purple-200 p-6 rounded">
              <div className="text-sm text-gray-600 mb-2">Institutional Credit</div>
              <div className="text-4xl font-bold text-purple-800">{currentKPI.credit}%</div>
            </div>
            <div className="bg-red-50 border-2 border-red-200 p-6 rounded">
              <div className="text-sm text-gray-600 mb-2">Student Dropout</div>
              <div className="text-4xl font-bold text-red-800">{currentKPI.dropout}%</div>
            </div>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6">
            <h3 className="font-bold text-gray-800 mb-2">Key Insight</h3>
            <p className="text-gray-700">
              {currentKPI.literacy < 60 
                ? "Low literacy areas show delayed healthcare and higher dropout despite scheme coverage. Priority: Adult literacy programs."
                : "Moderate outcomes observed. Continue monitoring and targeted interventions."}
            </p>
          </div>
        </div>
      );
    }

    if (activeTab === 1) {
      return (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">Literacy as the Root Driver</h2>
          
          <div className="bg-blue-50 border-2 border-blue-300 p-6 rounded">
            <h3 className="font-bold text-gray-800 mb-3">Policy Framework</h3>
            <p className="text-gray-700">Literacy enables informed decision-making across all household domains. This section establishes causal relationships between literacy and outcomes.</p>
          </div>

          <div className="bg-white border-2 border-gray-200 p-6 rounded">
            <h3 className="font-bold text-gray-800 mb-4">Literacy Impact Simulation</h3>
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Adjust Literacy Rate: {literacySlider}%</label>
              <input 
                type="range" 
                min="40" 
                max="85" 
                value={literacySlider}
                onChange={(e) => setLiteracySlider(parseInt(e.target.value))}
                className="w-full"
              />
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-green-50 border p-4 rounded text-center">
                <div className="text-sm text-gray-600">Healthcare Access</div>
                <div className="text-3xl font-bold text-green-700">{Math.round(25 + literacySlider * 0.45)}%</div>
              </div>
              <div className="bg-purple-50 border p-4 rounded text-center">
                <div className="text-sm text-gray-600">Credit Usage</div>
                <div className="text-3xl font-bold text-purple-700">{Math.round(15 + literacySlider * 0.55)}%</div>
              </div>
              <div className="bg-red-50 border p-4 rounded text-center">
                <div className="text-sm text-gray-600">Dropout Rate</div>
                <div className="text-3xl font-bold text-red-700">{Math.round(42 - literacySlider * 0.35)}%</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white border-2 border-gray-200 p-6 rounded">
              <h3 className="font-bold text-gray-800 mb-4">Literacy vs Healthcare</h3>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={literacyImpactData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="literacy" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="healthcare" stroke="#10b981" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white border-2 border-gray-200 p-6 rounded">
              <h3 className="font-bold text-gray-800 mb-4">Literacy vs Dropout</h3>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={literacyImpactData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="literacy" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="dropout" stroke="#ef4444" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      );
    }

    if (activeTab === 2) {
      return (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">Healthcare Outcomes</h2>

          <div className="bg-white border-2 border-gray-200 p-6 rounded">
            <h3 className="font-bold text-gray-800 mb-4">Early vs Delayed Healthcare</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={healthcareData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="settlement" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="early" fill="#10b981" name="Early Visits" />
                <Bar dataKey="delayed" fill="#ef4444" name="Delayed Care" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6">
            <h3 className="font-bold text-gray-800 mb-2">Policy Implication</h3>
            <p className="text-gray-700">Healthcare timing is an outcome of literacy and financial stability. Health outreach must be coupled with income stabilization programs.</p>
          </div>
        </div>
      );
    }

    if (activeTab === 3) {
      return (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">Financial Inclusion</h2>

          <div className="bg-white border-2 border-gray-200 p-6 rounded">
            <h3 className="font-bold text-gray-800 mb-4">Credit Source by Literacy</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={financialData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="literacy" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="institutional" fill="#8b5cf6" name="Institutional" />
                <Bar dataKey="informal" fill="#f59e0b" name="Informal" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white border-2 border-gray-200 p-6 rounded text-center">
              <div className="text-sm text-gray-600 mb-2">Bank Accounts</div>
              <div className="text-4xl font-bold text-blue-800">87%</div>
            </div>
            <div className="bg-white border-2 border-gray-200 p-6 rounded text-center">
              <div className="text-sm text-gray-600 mb-2">Active Savings</div>
              <div className="text-4xl font-bold text-purple-800">34%</div>
            </div>
            <div className="bg-white border-2 border-gray-200 p-6 rounded text-center">
              <div className="text-sm text-gray-600 mb-2">Institutional Loans</div>
              <div className="text-4xl font-bold text-green-800">41%</div>
            </div>
          </div>
        </div>
      );
    }

    if (activeTab === 4) {
      return (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">Agriculture & Schemes</h2>

          <div className="bg-white border-2 border-gray-200 p-6 rounded">
            <h3 className="font-bold text-gray-800 mb-4">Yield by Intervention</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={agricultureData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="yield" fill="#10b981" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6">
            <h3 className="font-bold text-gray-800 mb-2">Policy Implication</h3>
            <p className="text-gray-700">PM-KISAN shows limited impact without training. Combining with KVK training increases yield by 71%. Make training mandatory for beneficiaries.</p>
          </div>
        </div>
      );
    }

    if (activeTab === 5) {
      return (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">Student Dropout Signal</h2>

          <div className="bg-white border-2 border-gray-200 p-6 rounded">
            <h3 className="font-bold text-gray-800 mb-4">Dropout by Stress Factor</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={dropoutData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="factor" type="category" width={150} />
                <Tooltip />
                <Bar dataKey="rate" fill="#ef4444" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6">
            <h3 className="font-bold text-gray-800 mb-2">Policy Implication</h3>
            <p className="text-gray-700">Dropout is a household distress indicator, not education failure. Implement early warning systems with automatic welfare referrals.</p>
          </div>
        </div>
      );
    }

    if (activeTab === 6) {
      return (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">Cross-Sector Flow</h2>

          <div className="bg-white border-2 border-gray-200 p-6 rounded">
            <div className="space-y-4 flex flex-col items-center">
              <div className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold">Literacy & Knowledge</div>
              <div className="text-3xl text-gray-400">↓</div>
              <div className="bg-purple-600 text-white px-8 py-4 rounded-lg font-bold">Financial Decisions</div>
              <div className="text-3xl text-gray-400">↓</div>
              <div className="bg-green-600 text-white px-8 py-4 rounded-lg font-bold">Agriculture Decisions</div>
              <div className="text-3xl text-gray-400">↓</div>
              <div className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-bold">Income Stability</div>
              <div className="text-3xl text-gray-400">↓</div>
              <div className="bg-pink-600 text-white px-8 py-4 rounded-lg font-bold">Healthcare Timing</div>
              <div className="text-3xl text-gray-400">↓</div>
              <div className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-bold">Student Retention</div>
            </div>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6">
            <h3 className="font-bold text-gray-800 mb-2">Strategic Point</h3>
            <p className="text-gray-700">Literacy is the highest-leverage intervention. 10% literacy improvement correlates with 8.4% improvement in household wellbeing.</p>
          </div>
        </div>
      );
    }

    if (activeTab === 7) {
      return (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">Policy Recommendations</h2>

          <div className="space-y-4">
            <div className="bg-white border-l-4 border-blue-600 p-6 rounded shadow">
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">1</div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Adult Literacy Campaign</h3>
                  <p className="text-sm text-gray-700">Launch targeted programs in districts with literacy below 55%. Focus on functional literacy and numeracy.</p>
                </div>
              </div>
            </div>

            <div className="bg-white border-l-4 border-purple-600 p-6 rounded shadow">
              <div className="flex items-start">
                <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">2</div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Financial Literacy Integration</h3>
                  <p className="text-sm text-gray-700">Shift from account opening to product education. Train banking correspondents as financial counselors.</p>
                </div>
              </div>
            </div>

            <div className="bg-white border-l-4 border-green-600 p-6 rounded shadow">
              <div className="flex items-start">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">3</div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Mandatory KVK Training</h3>
                  <p className="text-sm text-gray-700">Make training mandatory for PM-KISAN beneficiaries. Target 70% coverage within 24 months.</p>
                </div>
              </div>
            </div>

            <div className="bg-white border-l-4 border-pink-600 p-6 rounded shadow">
              <div className="flex items-start">
                <div className="bg-pink-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">4</div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Health Before Education</h3>
                  <p className="text-sm text-gray-700">In high-delay districts, stabilize family health before classroom interventions.</p>
                </div>
              </div>
            </div>

            <div className="bg-white border-l-4 border-red-600 p-6 rounded shadow">
              <div className="flex items-start">
                <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">5</div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Dropout Early Warning</h3>
                  <p className="text-sm text-gray-700">Deploy attendance monitoring with automatic welfare triggers and 72-hour household visits.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white border-b-4 border-orange-500 shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">SAKSHAM-DI</h1>
              <p className="text-sm text-gray-600">System for Aadhaar-linked Knowledge, Stability & Household Outcome Monitoring</p>
            </div>
            <div className="text-right">
              <div className="text-sm font-semibold text-gray-800">Government of India</div>
              <div className="text-xs text-gray-600">UIDAI | NITI Aayog</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border-b-2 border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex space-x-1 overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-3 border-b-4 font-medium text-sm whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'border-orange-500 text-orange-600 bg-orange-50'
                      : 'border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {renderContent()}
      </div>

      <div className="bg-gray-800 text-white mt-12">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex justify-between items-center text-sm">
            <div>
              <p className="font-semibold">SAKSHAM-DI Dashboard v1.0</p>
              <p className="text-gray-400">Aadhaar Hackathon 2025</p>
            </div>
            <div className="text-right">
              <p className="text-gray-400">Data aggregated per UIDAI guidelines</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SAKSHAMDashboard;