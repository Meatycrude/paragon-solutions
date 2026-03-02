import { UserCircle, Calendar, Clock, Plus } from "lucide-react";

export default function HRPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold">HR Management</h1>
                    <p className="text-slate-500">Manage employees, attendance, and leave requests.</p>
                </div>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors flex items-center gap-2">
                    <Plus size={18} />
                    Add Employee
                </button>
            </div>

            {/* HR Stats */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                        <div className="rounded-lg bg-indigo-50 p-2 text-indigo-600">
                            <UserCircle size={20} />
                        </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-1">482</h3>
                    <p className="text-sm text-slate-500">Total Employees</p>
                </div>
                <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                        <div className="rounded-lg bg-emerald-50 p-2 text-emerald-600">
                            <Clock size={20} />
                        </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-1">456</h3>
                    <p className="text-sm text-slate-500">Present Today</p>
                </div>
                <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                        <div className="rounded-lg bg-amber-50 p-2 text-amber-600">
                            <Calendar size={20} />
                        </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-1">18</h3>
                    <p className="text-sm text-slate-500">On Leave</p>
                </div>
                <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                        <div className="rounded-lg bg-red-50 p-2 text-red-600">
                            <UserCircle size={20} />
                        </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-1">8</h3>
                    <p className="text-sm text-slate-500">Absent</p>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                {/* Recent Leave Requests */}
                <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
                    <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                        <h2 className="text-lg font-semibold">Recent Leave Requests</h2>
                        <button className="text-sm font-medium text-indigo-600 hover:underline">View all</button>
                    </div>
                    <div className="divide-y divide-slate-100">
                        {[
                            { name: "David Park", type: "Annual Leave", dates: "Mar 10-12, 2026", status: "Pending" },
                            { name: "Lisa Wong", type: "Sick Leave", dates: "Mar 5, 2026", status: "Approved" },
                            { name: "James Taylor", type: "Annual Leave", dates: "Mar 15-20, 2026", status: "Pending" },
                        ].map((request, idx) => (
                            <div key={idx} className="p-4 hover:bg-slate-50 transition-colors">
                                <div className="flex items-start justify-between">
                                    <div className="flex items-start gap-3">
                                        <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center font-semibold text-indigo-700">
                                            {request.name.split(' ').map(n => n[0]).join('')}
                                        </div>
                                        <div>
                                            <p className="font-medium text-slate-900">{request.name}</p>
                                            <p className="text-sm text-slate-500">{request.type}</p>
                                            <p className="text-xs text-slate-400 mt-1">{request.dates}</p>
                                        </div>
                                    </div>
                                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                                        request.status === 'Approved' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'
                                    }`}>
                                        {request.status}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Department Overview */}
                <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
                    <div className="p-6 border-b border-slate-100">
                        <h2 className="text-lg font-semibold">Department Overview</h2>
                    </div>
                    <div className="p-6 space-y-4">
                        {[
                            { name: "Engineering", count: 124, percentage: 95 },
                            { name: "Sales & Marketing", count: 89, percentage: 92 },
                            { name: "Operations", count: 156, percentage: 98 },
                            { name: "Finance", count: 45, percentage: 100 },
                            { name: "Human Resources", count: 28, percentage: 96 },
                        ].map((dept) => (
                            <div key={dept.name}>
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm font-medium text-slate-700">{dept.name}</span>
                                    <span className="text-sm text-slate-500">{dept.count} employees • {dept.percentage}% attendance</span>
                                </div>
                                <div className="w-full bg-slate-100 rounded-full h-2">
                                    <div 
                                        className="bg-indigo-600 h-2 rounded-full transition-all"
                                        style={{ width: `${dept.percentage}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
