export default function VouchersPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold">Financial Vouchers</h1>
                    <p className="text-slate-500">Manage sales, purchases, and journal entries.</p>
                </div>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors">
                    + Create Voucher
                </button>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="p-4 border-b border-slate-100 flex gap-4">
                    <input
                        type="text"
                        placeholder="Search vouchers..."
                        className="flex-1 bg-slate-50 border border-slate-200 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <select className="bg-slate-50 border border-slate-200 rounded-md px-3 py-2 text-sm">
                        <option>All Types</option>
                        <option>Sales</option>
                        <option>Purchase</option>
                        <option>Journal</option>
                    </select>
                </div>

                <table className="w-full text-left text-sm">
                    <thead className="bg-slate-50 text-slate-600 font-medium">
                        <tr>
                            <th className="px-6 py-4">Date</th>
                            <th className="px-6 py-4">Voucher No</th>
                            <th className="px-6 py-4">Type</th>
                            <th className="px-6 py-4">Account</th>
                            <th className="px-6 py-4">Amount</th>
                            <th className="px-6 py-4">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {[1, 2, 3, 4, 5].map((row) => (
                            <tr key={row} className="hover:bg-slate-50 transition-colors cursor-pointer">
                                <td className="px-6 py-4 text-slate-500">Oct 24, 2023</td>
                                <td className="px-6 py-4 font-mono font-bold text-indigo-600">VCH-2023-00{row}</td>
                                <td className="px-6 py-4"><span className="px-2 py-1 bg-slate-100 rounded text-xs">Sales</span></td>
                                <td className="px-6 py-4 font-medium text-slate-700">Accounts Receivable</td>
                                <td className="px-6 py-4 font-bold text-slate-900">$2,450.00</td>
                                <td className="px-6 py-4">
                                    <span className="flex items-center gap-1 text-emerald-600 text-xs font-bold uppercase">
                                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-600"></span> Posted
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}