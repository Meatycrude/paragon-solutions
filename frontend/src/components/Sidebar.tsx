"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    LayoutDashboard, Building2, Wallet,
    Box, UserCircle, BarChart3, Settings, ShieldCheck
} from 'lucide-react';

const menuItems = [
    { label: 'Dashboard', icon: LayoutDashboard, href: '/' },
    {
        label: 'Enterprise',
        group: true,
        children: [
            { label: 'Companies', icon: Building2, href: '/companies' },
            { label: 'Users & Roles', icon: ShieldCheck, href: '/users' },
        ]
    },
    {
        label: 'Operations',
        group: true,
        children: [
            { label: 'Financials', icon: Wallet, href: '/finance' },
            { label: 'Inventory', icon: Box, href: '/inventory' },
            { label: 'HR Management', icon: UserCircle, href: '/hr' },
        ]
    },
    { label: 'Reports', icon: BarChart3, href: '/reports' },
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="w-64 bg-slate-900 text-white flex flex-col hidden lg:flex">
            <div className="p-6">
                <div className="flex items-center gap-2 px-2">
                    <div className="h-8 w-8 rounded-lg bg-indigo-500 flex items-center justify-center font-bold text-white">P</div>
                    <span className="text-xl font-bold tracking-tight">Paragon</span>
                </div>
            </div>

            <nav className="flex-1 px-4 space-y-8 overflow-y-auto">
                {menuItems.map((item, idx) => (
                    <div key={idx}>
                        {item.group ? (
                            <div className="space-y-1">
                                <p className="px-3 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                                    {item.label}
                                </p>
                                {item.children?.map((child) => (
                                    <NavLink key={child.href} item={child} active={pathname === child.href} />
                                ))}
                            </div>
                        ) : (
                            <NavLink item={item} active={pathname === item.href} />
                        )}
                    </div>
                ))}
            </nav>

            <div className="p-4 border-t border-slate-800">
                <NavLink item={{ label: 'Settings', icon: Settings, href: '/settings' }} active={false} />
            </div>
        </aside>
    );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function NavLink({ item, active }: any) {
    const Icon = item.icon;
    return (
        <Link
            href={item.href}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${active
                ? 'bg-indigo-600 text-white'
                : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                }`}
        >
            <Icon size={18} />
            <span className="text-sm font-medium">{item.label}</span>
        </Link>
    );
}