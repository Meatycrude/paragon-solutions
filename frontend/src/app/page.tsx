import {
  TrendingUp, Users, Package, DollarSign,
  ArrowUpRight, ArrowDownRight, Briefcase
} from "lucide-react";

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Enterprise Overview</h1>
        <p className="text-slate-500">Welcome back. Here is what&apos;s happening across your branches.</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Total Revenue" value="$452,100" icon={<DollarSign size={20} />} trend="+12.5%" positive />
        <StatCard title="Active Leads" value="1,284" icon={<Users size={20} />} trend="+3.1%" positive />
        <StatCard title="Stock Value" value="$89,000" icon={<Package size={20} />} trend="-1.5%" positive={false} />
        <StatCard title="Total Employees" value="482" icon={<Briefcase size={20} />} trend="+24" positive />
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Recent Transactions Table */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Recent Vouchers</h2>
            <button className="text-sm font-medium text-indigo-600 hover:underline">View all</button>
          </div>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center justify-between border-b border-slate-50 pb-4 last:border-0">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-indigo-50 p-2 text-indigo-600">
                    <TrendingUp size={16} />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Sales Invoice #INV-00{i}</p>
                    <p className="text-xs text-slate-500">Corporate Branch • 2 hours ago</p>
                  </div>
                </div>
                <p className="text-sm font-bold text-slate-700">$1,200.00</p>
              </div>
            ))}
          </div>
        </div>

        {/* Inventory Alert Card */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Low Stock Alerts</h2>
          <div className="space-y-4">
            {['Industrial Pump', 'O-Ring Kit', 'Steel Shaft'].map((item) => (
              <div key={item} className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                <span className="text-sm font-medium text-red-700">{item}</span>
                <span className="text-xs font-bold px-2 py-1 bg-white text-red-600 rounded">5 units left</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function StatCard({ title, value, icon, trend, positive }: any) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-hover hover:shadow-md">
      <div className="flex items-center justify-between">
        <div className="rounded-lg bg-slate-100 p-2 text-slate-600">{icon}</div>
        <div className={`flex items-center text-xs font-medium ${positive ? 'text-emerald-600' : 'text-rose-600'}`}>
          {positive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />} {trend}
        </div>
      </div>
      <div className="mt-4">
        <p className="text-sm font-medium text-slate-500">{title}</p>
        <h3 className="text-2xl font-bold">{value}</h3>
      </div>
    </div>
  );
}