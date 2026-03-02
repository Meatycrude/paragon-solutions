import { FileText, Download, Filter, TrendingUp } from "lucide-react";

export default function ReportsPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold">Reports & Analytics</h1>
                    <p className="text-slate-500">Generate and download comprehensive business reports.</p>
                </div>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors flex items-center gap-2">
                    <Filter size={18} />
                    Custom Report
                </button>
            </div>

            {/* Report Categories */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {/* Financial Reports */}
                <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                    <div className="bg-indigo-50 p-6 border-b border-indigo-100">
                        <div className="rounded-lg bg-indigo-100 p-2 w-fit mb-3">
                            <FileText className="text-indigo-600" size={20} />
                        </div>
                        <h3 className="text-lg font-bold text-indigo-900">Financial Reports</h3>
                        <p className="text-sm text-indigo-700 mt-1">Accounting and financial statements</p>
                    </div>
                    <div className="p-4 space-y-2">
                        {[
                            "Trial Balance",
                            "Profit & Loss Statement",
                            "Balance Sheet",
                            "Cash Flow Statement",
                            "Accounts Receivable Aging",
                        ].map((report) => (
                            <button
                                key={report}
                                className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 transition-colors group"
                            >
                                <span className="text-sm font-medium text-slate-700">{report}</span>
                                <Download size={16} className="text-slate-400 group-hover:text-indigo-600" />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Inventory Reports */}
                <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                    <div className="bg-emerald-50 p-6 border-b border-emerald-100">
                        <div className="rounded-lg bg-emerald-100 p-2 w-fit mb-3">
                            <TrendingUp className="text-emerald-600" size={20} />
                        </div>
                        <h3 className="text-lg font-bold text-emerald-900">Inventory Reports</h3>
                        <p className="text-sm text-emerald-700 mt-1">Stock and inventory analysis</p>
                    </div>
                    <div className="p-4 space-y-2">
                        {[
                            "Stock Summary",
                            "Stock Movement",
                            "Low Stock Report",
                            "Inventory Valuation",
                            "Product Performance",
                        ].map((report) => (
                            <button
                                key={report}
                                className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 transition-colors group"
                            >
                                <span className="text-sm font-medium text-slate-700">{report}</span>
                                <Download size={16} className="text-slate-400 group-hover:text-emerald-600" />
                            </button>
                        ))}
                    </div>
                </div>

                {/* HR Reports */}
                <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                    <div className="bg-purple-50 p-6 border-b border-purple-100">
                        <div className="rounded-lg bg-purple-100 p-2 w-fit mb-3">
                            <FileText className="text-purple-600" size={20} />
                        </div>
                        <h3 className="text-lg font-bold text-purple-900">HR Reports</h3>
                        <p className="text-sm text-purple-700 mt-1">Employee and attendance data</p>
                    </div>
                    <div className="p-4 space-y-2">
                        {[
                            "Employee Directory",
                            "Attendance Summary",
                            "Leave Report",
                            "Payroll Summary",
                            "Department Analysis",
                        ].map((report) => (
                            <button
                                key={report}
                                className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 transition-colors group"
                            >
                                <span className="text-sm font-medium text-slate-700">{report}</span>
                                <Download size={16} className="text-slate-400 group-hover:text-purple-600" />
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Recent Reports */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
                <div className="p-6 border-b border-slate-100">
                    <h2 className="text-lg font-semibold">Recently Generated Reports</h2>
                </div>
                <table className="w-full text-left text-sm">
                    <thead className="bg-slate-50 text-slate-600 font-medium">
                        <tr>
                            <th className="px-6 py-4">Report Name</th>
                            <th className="px-6 py-4">Type</th>
                            <th className="px-6 py-4">Generated By</th>
                            <th className="px-6 py-4">Date</th>
                            <th className="px-6 py-4">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {[
                            { name: "Monthly P&L Statement", type: "Financial", user: "John Anderson", date: "Mar 1, 2026" },
                            { name: "Q1 Inventory Analysis", type: "Inventory", user: "Sarah Mitchell", date: "Feb 28, 2026" },
                            { name: "February Attendance", type: "HR", user: "Emily Rodriguez", date: "Feb 28, 2026" },
                            { name: "Balance Sheet 2025", type: "Financial", user: "Michael Chen", date: "Feb 25, 2026" },
                        ].map((report, idx) => (
                            <tr key={idx} className="hover:bg-slate-50 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <FileText size={18} className="text-slate-400" />
                                        <span className="font-medium text-slate-900">{report.name}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="px-2 py-1 bg-slate-100 rounded text-xs">{report.type}</span>
                                </td>
                                <td className="px-6 py-4 text-slate-700">{report.user}</td>
                                <td className="px-6 py-4 text-slate-500">{report.date}</td>
                                <td className="px-6 py-4">
                                    <button className="flex items-center gap-1 text-indigo-600 hover:text-indigo-800 font-medium">
                                        <Download size={14} />
                                        Download
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
