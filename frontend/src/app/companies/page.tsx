import { Building2, MapPin, Users, Plus } from "lucide-react";

export default function CompaniesPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold">Company Management</h1>
                    <p className="text-slate-500">Manage multiple companies and their branches.</p>
                </div>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors flex items-center gap-2">
                    <Plus size={18} />
                    Add Company
                </button>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                    { name: "Paragon Industries Ltd.", branches: 12, employees: 245, location: "New York, USA" },
                    { name: "Zenith Manufacturing Co.", branches: 8, employees: 156, location: "London, UK" },
                    { name: "Atlas Trading Corp.", branches: 5, employees: 81, location: "Singapore" },
                ].map((company, idx) => (
                    <div key={idx} className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer">
                        <div className="flex items-start justify-between mb-4">
                            <div className="rounded-lg bg-indigo-50 p-3 text-indigo-600">
                                <Building2 size={24} />
                            </div>
                            <span className="px-2 py-1 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded">Active</span>
                        </div>
                        <h3 className="text-lg font-bold mb-2">{company.name}</h3>
                        <div className="space-y-2 text-sm text-slate-600">
                            <div className="flex items-center gap-2">
                                <MapPin size={16} />
                                <span>{company.location}</span>
                            </div>
                            <div className="flex items-center gap-4 pt-2 border-t border-slate-100">
                                <div className="flex items-center gap-1">
                                    <Building2 size={14} />
                                    <span className="font-medium">{company.branches}</span>
                                    <span className="text-slate-400">branches</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Users size={14} />
                                    <span className="font-medium">{company.employees}</span>
                                    <span className="text-slate-400">employees</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
                <div className="p-6 border-b border-slate-100">
                    <h2 className="text-lg font-semibold">Recent Activity</h2>
                </div>
                <div className="divide-y divide-slate-100">
                    {[
                        { action: "New branch created", company: "Paragon Industries Ltd.", location: "Miami Branch", time: "2 hours ago" },
                        { action: "Company profile updated", company: "Zenith Manufacturing Co.", location: "Headquarters", time: "5 hours ago" },
                        { action: "Department added", company: "Atlas Trading Corp.", location: "Singapore HQ", time: "1 day ago" },
                    ].map((activity, idx) => (
                        <div key={idx} className="p-4 hover:bg-slate-50 transition-colors">
                            <div className="flex items-start justify-between">
                                <div>
                                    <p className="font-medium text-slate-900">{activity.action}</p>
                                    <p className="text-sm text-slate-500">{activity.company} • {activity.location}</p>
                                </div>
                                <span className="text-xs text-slate-400">{activity.time}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
