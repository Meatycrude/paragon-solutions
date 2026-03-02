import { ShieldCheck, UserPlus, Mail, Phone } from "lucide-react";

export default function UsersPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold">Users & Roles Management</h1>
                    <p className="text-slate-500">Manage user accounts and role-based access control.</p>
                </div>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors flex items-center gap-2">
                    <UserPlus size={18} />
                    Add User
                </button>
            </div>

            {/* Role Summary Cards */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                {[
                    { role: "Administrator", count: 8, color: "indigo" },
                    { role: "Manager", count: 24, color: "purple" },
                    { role: "Employee", count: 156, color: "blue" },
                    { role: "Guest", count: 12, color: "slate" },
                ].map((roleData) => (
                    <div key={roleData.role} className={`bg-${roleData.color}-50 rounded-xl border border-${roleData.color}-100 p-6`}>
                        <div className={`rounded-lg bg-${roleData.color}-100 p-2 w-fit mb-3`}>
                            <ShieldCheck className={`text-${roleData.color}-600`} size={20} />
                        </div>
                        <h3 className="text-2xl font-bold mb-1">{roleData.count}</h3>
                        <p className={`text-sm font-medium text-${roleData.color}-700`}>{roleData.role}</p>
                    </div>
                ))}
            </div>

            {/* Users Table */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="p-4 border-b border-slate-100 flex gap-4">
                    <input
                        type="text"
                        placeholder="Search users..."
                        className="flex-1 bg-slate-50 border border-slate-200 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <select className="bg-slate-50 border border-slate-200 rounded-md px-3 py-2 text-sm">
                        <option>All Roles</option>
                        <option>Administrator</option>
                        <option>Manager</option>
                        <option>Employee</option>
                    </select>
                </div>

                <table className="w-full text-left text-sm">
                    <thead className="bg-slate-50 text-slate-600 font-medium">
                        <tr>
                            <th className="px-6 py-4">User</th>
                            <th className="px-6 py-4">Role</th>
                            <th className="px-6 py-4">Company</th>
                            <th className="px-6 py-4">Contact</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {[
                            { name: "John Anderson", role: "Administrator", company: "Paragon Industries", email: "john.anderson@paragon.com", phone: "+1 234-567-8901", status: "Active" },
                            { name: "Sarah Mitchell", role: "Manager", company: "Zenith Manufacturing", email: "sarah.mitchell@zenith.com", phone: "+44 20 1234 5678", status: "Active" },
                            { name: "Michael Chen", role: "Employee", company: "Atlas Trading", email: "michael.chen@atlas.com", phone: "+65 6123 4567", status: "Active" },
                            { name: "Emily Rodriguez", role: "Manager", company: "Paragon Industries", email: "emily.r@paragon.com", phone: "+1 234-567-8902", status: "Inactive" },
                        ].map((user, idx) => (
                            <tr key={idx} className="hover:bg-slate-50 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center font-semibold text-indigo-700">
                                            {user.name.split(' ').map(n => n[0]).join('')}
                                        </div>
                                        <div>
                                            <p className="font-medium text-slate-900">{user.name}</p>
                                            <p className="text-xs text-slate-500 flex items-center gap-1">
                                                <Mail size={12} />
                                                {user.email}
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="px-2 py-1 bg-indigo-50 text-indigo-700 rounded text-xs font-medium">
                                        {user.role}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-slate-700">{user.company}</td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-1 text-slate-600">
                                        <Phone size={12} />
                                        <span className="text-xs">{user.phone}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`flex items-center gap-1 text-xs font-bold uppercase ${user.status === 'Active' ? 'text-emerald-600' : 'text-slate-400'}`}>
                                        <span className={`h-1.5 w-1.5 rounded-full ${user.status === 'Active' ? 'bg-emerald-600' : 'bg-slate-400'}`}></span>
                                        {user.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <button className="text-indigo-600 hover:text-indigo-800 font-medium text-xs">
                                        Edit
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
