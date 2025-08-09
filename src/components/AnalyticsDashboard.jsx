import React, { useState, useEffect } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line, PieChart, Pie, Cell
} from 'recharts';
import {
  TrendingUp, Users, Phone, Calendar, Eye, Mouse,
  Clock, Target, Star, Activity
} from 'lucide-react';

const AnalyticsDashboard = () => {
  const [timeRange, setTimeRange] = useState('7d');
  const [isLoading, setIsLoading] = useState(true);

  // Mock data - replace with real GA4 API calls
  const [dashboardData] = useState({
    overview: {
      totalBookings: 156,
      bookingGrowth: 12.5,
      phoneCallClicks: 89,
      callGrowth: 8.3,
      formCompletions: 78,
      formGrowth: 15.2,
      avgSessionDuration: 245,
      sessionGrowth: 5.7
    },
    conversions: [
      { date: '2025-08-01', bookings: 22, calls: 15, forms: 12 },
      { date: '2025-08-02', bookings: 18, calls: 12, forms: 9 },
      { date: '2025-08-03', bookings: 25, calls: 18, forms: 15 },
      { date: '2025-08-04', bookings: 20, calls: 14, forms: 11 },
      { date: '2025-08-05', bookings: 28, calls: 20, forms: 18 },
      { date: '2025-08-06', bookings: 24, calls: 16, forms: 14 },
      { date: '2025-08-07', bookings: 19, calls: 13, forms: 10 }
    ],
    treatmentInterest: [
      { name: 'Acupuncture', value: 35, color: '#16A34A' },
      { name: 'Ayurveda', value: 28, color: '#2563EB' },
      { name: 'Speech Therapy', value: 18, color: '#DC2626' },
      { name: 'Panchakarma', value: 12, color: '#7C3AED' },
      { name: 'Others', value: 7, color: '#F59E0B' }
    ],
    topPages: [
      { page: '/', views: 1250, conversions: 45, rate: '3.6%' },
      { page: '/services/acupuncture', views: 890, conversions: 32, rate: '3.6%' },
      { page: '/services/ayurveda', views: 720, conversions: 28, rate: '3.9%' },
      { page: '/services/speech-therapy', views: 650, conversions: 18, rate: '2.8%' },
      { page: '/booking', views: 480, conversions: 78, rate: '16.3%' }
    ],
    symptomChecker: {
      totalSessions: 234,
      completionRate: 68,
      topSymptoms: ['Back Pain', 'Anxiety', 'Speech Issues', 'Weight Management'],
      averageSteps: 4.2
    }
  });

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setIsLoading(false), 1000);
  }, [timeRange]);

  const StatCard = ({ icon: Icon, title, value, growth, suffix = '' }) => (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}{suffix}</p>
        </div>
        <div className="p-3 bg-blue-50 rounded-full">
          <Icon className="h-6 w-6 text-blue-600" />
        </div>
      </div>
      <div className="mt-4 flex items-center">
        <span className={`text-sm font-medium ${growth >= 0 ? 'text-green-600' : 'text-red-600'}`}>
          {growth >= 0 ? '+' : ''}{growth}%
        </span>
        <span className="text-sm text-gray-500 ml-1">vs last period</span>
      </div>
    </div>
  );

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Activity className="h-8 w-8 text-blue-600 animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Loading analytics data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Analytics Dashboard</h1>
          <p className="text-gray-600">KSK Healthcare - Performance Overview</p>

          {/* Time Range Selector */}
          <div className="mt-4">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
            </select>
          </div>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            icon={Calendar}
            title="Total Bookings"
            value={dashboardData.overview.totalBookings}
            growth={dashboardData.overview.bookingGrowth}
          />
          <StatCard
            icon={Phone}
            title="Phone Call Clicks"
            value={dashboardData.overview.phoneCallClicks}
            growth={dashboardData.overview.callGrowth}
          />
          <StatCard
            icon={Target}
            title="Form Completions"
            value={dashboardData.overview.formCompletions}
            growth={dashboardData.overview.formGrowth}
          />
          <StatCard
            icon={Clock}
            title="Avg. Session Duration"
            value={Math.floor(dashboardData.overview.avgSessionDuration / 60)}
            growth={dashboardData.overview.sessionGrowth}
            suffix="m"
          />
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Conversion Trends */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Conversion Trends</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={dashboardData.conversions}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" tickFormatter={(value) => new Date(value).toLocaleDateString()} />
                <YAxis />
                <Tooltip labelFormatter={(value) => new Date(value).toLocaleDateString()} />
                <Line type="monotone" dataKey="bookings" stroke="#16A34A" strokeWidth={2} name="Bookings" />
                <Line type="monotone" dataKey="calls" stroke="#2563EB" strokeWidth={2} name="Phone Calls" />
                <Line type="monotone" dataKey="forms" stroke="#DC2626" strokeWidth={2} name="Form Submissions" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Treatment Interest */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Treatment Interest</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={dashboardData.treatmentInterest}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {dashboardData.treatmentInterest.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Top Pages & Symptom Checker */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Top Performing Pages */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Performing Pages</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2 text-sm font-medium text-gray-600">Page</th>
                    <th className="text-right py-2 text-sm font-medium text-gray-600">Views</th>
                    <th className="text-right py-2 text-sm font-medium text-gray-600">Conversions</th>
                    <th className="text-right py-2 text-sm font-medium text-gray-600">Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {dashboardData.topPages.map((page, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="py-3 text-sm text-gray-900">{page.page}</td>
                      <td className="py-3 text-sm text-gray-600 text-right">{page.views.toLocaleString()}</td>
                      <td className="py-3 text-sm text-gray-600 text-right">{page.conversions}</td>
                      <td className="py-3 text-sm font-medium text-green-600 text-right">{page.rate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Symptom Checker Analytics */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Symptom Checker Analytics</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-600">Total Sessions</span>
                <span className="text-lg font-bold text-gray-900">{dashboardData.symptomChecker.totalSessions}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-600">Completion Rate</span>
                <span className="text-lg font-bold text-green-600">{dashboardData.symptomChecker.completionRate}%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-600">Avg. Steps</span>
                <span className="text-lg font-bold text-gray-900">{dashboardData.symptomChecker.averageSteps}</span>
              </div>

              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-600 mb-2">Top Symptoms</h4>
                <div className="space-y-2">
                  {dashboardData.symptomChecker.topSymptoms.map((symptom, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-sm text-gray-700">{symptom}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 text-left transition-colors">
              <TrendingUp className="h-6 w-6 text-blue-600 mb-2" />
              <h4 className="font-medium text-gray-900">View Detailed Reports</h4>
              <p className="text-sm text-gray-600">Access comprehensive analytics</p>
            </button>
            <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 text-left transition-colors">
              <Users className="h-6 w-6 text-green-600 mb-2" />
              <h4 className="font-medium text-gray-900">Audience Insights</h4>
              <p className="text-sm text-gray-600">Understand your visitors better</p>
            </button>
            <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 text-left transition-colors">
              <Target className="h-6 w-6 text-purple-600 mb-2" />
              <h4 className="font-medium text-gray-900">A/B Test Results</h4>
              <p className="text-sm text-gray-600">Review testing outcomes</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
