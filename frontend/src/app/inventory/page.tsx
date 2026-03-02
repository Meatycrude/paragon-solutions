import { Package, AlertTriangle, TrendingUp, Plus } from "lucide-react";

export default function InventoryPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold">Inventory Management</h1>
                    <p className="text-slate-500">Track and manage your product inventory across all locations.</p>
                </div>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors flex items-center gap-2">
                    <Plus size={18} />
                    Add Product
                </button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                        <div className="rounded-lg bg-blue-50 p-2 text-blue-600">
                            <Package size={20} />
                        </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-1">1,248</h3>
                    <p className="text-sm text-slate-500">Total Products</p>
                </div>
                <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                        <div className="rounded-lg bg-emerald-50 p-2 text-emerald-600">
                            <TrendingUp size={20} />
                        </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-1">$892,450</h3>
                    <p className="text-sm text-slate-500">Total Stock Value</p>
                </div>
                <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                        <div className="rounded-lg bg-amber-50 p-2 text-amber-600">
                            <AlertTriangle size={20} />
                        </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-1">23</h3>
                    <p className="text-sm text-slate-500">Low Stock Items</p>
                </div>
                <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                        <div className="rounded-lg bg-red-50 p-2 text-red-600">
                            <Package size={20} />
                        </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-1">8</h3>
                    <p className="text-sm text-slate-500">Out of Stock</p>
                </div>
            </div>

            {/* Inventory Table */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="p-4 border-b border-slate-100 flex gap-4">
                    <input
                        type="text"
                        placeholder="Search products..."
                        className="flex-1 bg-slate-50 border border-slate-200 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <select className="bg-slate-50 border border-slate-200 rounded-md px-3 py-2 text-sm">
                        <option>All Categories</option>
                        <option>Raw Materials</option>
                        <option>Finished Goods</option>
                        <option>Spare Parts</option>
                    </select>
                    <select className="bg-slate-50 border border-slate-200 rounded-md px-3 py-2 text-sm">
                        <option>All Locations</option>
                        <option>Warehouse A</option>
                        <option>Warehouse B</option>
                        <option>Retail Store</option>
                    </select>
                </div>

                <table className="w-full text-left text-sm">
                    <thead className="bg-slate-50 text-slate-600 font-medium">
                        <tr>
                            <th className="px-6 py-4">Product</th>
                            <th className="px-6 py-4">SKU</th>
                            <th className="px-6 py-4">Category</th>
                            <th className="px-6 py-4">Stock</th>
                            <th className="px-6 py-4">Unit Price</th>
                            <th className="px-6 py-4">Total Value</th>
                            <th className="px-6 py-4">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {[
                            { name: "Industrial Pump Model X200", sku: "IND-PUMP-X200", category: "Finished Goods", stock: 45, price: 1250.00, status: "In Stock" },
                            { name: "O-Ring Kit (Premium)", sku: "SPR-ORING-001", category: "Spare Parts", stock: 8, price: 45.50, status: "Low Stock" },
                            { name: "Steel Shaft 50mm", sku: "RAW-STLSHFT-50", category: "Raw Materials", stock: 0, price: 89.00, status: "Out of Stock" },
                            { name: "Hydraulic Valve Assembly", sku: "FIN-HYDVAL-A01", category: "Finished Goods", stock: 120, price: 340.00, status: "In Stock" },
                            { name: "Bearing Set Type B", sku: "SPR-BEAR-TB", category: "Spare Parts", stock: 15, price: 125.75, status: "Low Stock" },
                        ].map((product, idx) => (
                            <tr key={idx} className="hover:bg-slate-50 transition-colors cursor-pointer">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-lg bg-slate-100 flex items-center justify-center">
                                            <Package size={20} className="text-slate-400" />
                                        </div>
                                        <div>
                                            <p className="font-medium text-slate-900">{product.name}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 font-mono text-xs text-slate-600">{product.sku}</td>
                                <td className="px-6 py-4">
                                    <span className="px-2 py-1 bg-slate-100 rounded text-xs">{product.category}</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`font-bold ${product.stock === 0 ? 'text-red-600' : product.stock < 10 ? 'text-amber-600' : 'text-slate-900'}`}>
                                        {product.stock} units
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-slate-700">${product.price.toFixed(2)}</td>
                                <td className="px-6 py-4 font-bold text-slate-900">${(product.stock * product.price).toFixed(2)}</td>
                                <td className="px-6 py-4">
                                    <span className={`flex items-center gap-1 text-xs font-bold uppercase ${
                                        product.status === 'In Stock' ? 'text-emerald-600' : 
                                        product.status === 'Low Stock' ? 'text-amber-600' : 'text-red-600'
                                    }`}>
                                        <span className={`h-1.5 w-1.5 rounded-full ${
                                            product.status === 'In Stock' ? 'bg-emerald-600' : 
                                            product.status === 'Low Stock' ? 'bg-amber-600' : 'bg-red-600'
                                        }`}></span>
                                        {product.status}
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
