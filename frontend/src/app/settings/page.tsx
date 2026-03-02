"use client";
import { useState } from "react";
import { Settings as SettingsIcon, User, Bell, Lock, Database, Globe, Shield } from "lucide-react";

type SettingsTab = "profile" | "notifications" | "security" | "database" | "localization" | "general";

export default function SettingsPage() {
    const [activeTab, setActiveTab] = useState<SettingsTab>("profile");

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold">Settings</h1>
                <p className="text-slate-500">Manage your application preferences and configurations.</p>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                {/* Settings Navigation */}
                <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 h-fit">
                    <nav className="space-y-1">
                        {[
                            { id: "profile", label: "Profile Settings", icon: User },
                            { id: "notifications", label: "Notifications", icon: Bell },
                            { id: "security", label: "Security", icon: Lock },
                            { id: "database", label: "Database", icon: Database },
                            { id: "localization", label: "Localization", icon: Globe },
                            { id: "general", label: "General", icon: SettingsIcon },
                        ].map((item) => {
                            const Icon = item.icon;
                            return (
                                <button
                                    key={item.id}
                                    onClick={() => setActiveTab(item.id as SettingsTab)}
                                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                                        activeTab === item.id
                                            ? 'bg-indigo-50 text-indigo-700 font-medium'
                                            : 'text-slate-600 hover:bg-slate-50'
                                    }`}
                                >
                                    <Icon size={18} />
                                    <span className="text-sm">{item.label}</span>
                                </button>
                            );
                        })}
                    </nav>
                </div>

                {/* Settings Content */}
                <div className="lg:col-span-2">
                    {activeTab === "profile" && <ProfileSettings />}
                    {activeTab === "notifications" && <NotificationSettings />}
                    {activeTab === "security" && <SecuritySettings />}
                    {activeTab === "database" && <DatabaseSettings />}
                    {activeTab === "localization" && <LocalizationSettings />}
                    {activeTab === "general" && <GeneralSettings />}
                </div>
            </div>
        </div>
    );
}

function ProfileSettings() {
    return (
        <div className="space-y-6">
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
                <h2 className="text-lg font-semibold mb-4">Profile Information</h2>
                <div className="space-y-4">
                    <div className="flex items-center gap-6">
                        <div className="h-20 w-20 rounded-full bg-indigo-100 flex items-center justify-center">
                            <span className="text-2xl font-bold text-indigo-700">AU</span>
                        </div>
                        <div>
                            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700">
                                Change Photo
                            </button>
                            <p className="text-xs text-slate-500 mt-2">JPG, GIF or PNG. Max size 2MB</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                            <input
                                type="text"
                                defaultValue="Admin"
                                className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                            <input
                                type="text"
                                defaultValue="User"
                                className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                        <input
                            type="email"
                            defaultValue="admin@paragon.com"
                            className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                        <input
                            type="tel"
                            defaultValue="+1 (555) 123-4567"
                            className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Role</label>
                        <input
                            type="text"
                            value="Administrator"
                            disabled
                            className="w-full px-4 py-2 border border-slate-200 rounded-lg bg-slate-50 text-slate-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Bio</label>
                        <textarea
                            rows={4}
                            placeholder="Tell us about yourself..."
                            className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                </div>
            </div>

            <SaveButtons />
        </div>
    );
}

function NotificationSettings() {
    return (
        <div className="space-y-6">
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
                <h2 className="text-lg font-semibold mb-4">Email Notifications</h2>
                <div className="space-y-4">
                    <ToggleItem
                        title="New Voucher Created"
                        description="Get notified when a new voucher is created in the system"
                        defaultChecked
                    />
                    <ToggleItem
                        title="Stock Alerts"
                        description="Receive alerts when inventory reaches low stock levels"
                        defaultChecked
                    />
                    <ToggleItem
                        title="Leave Requests"
                        description="Get notified about new leave requests from employees"
                        defaultChecked
                    />
                    <ToggleItem
                        title="Weekly Reports"
                        description="Receive a weekly summary of business metrics and KPIs"
                        defaultChecked
                    />
                </div>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
                <h2 className="text-lg font-semibold mb-4">Push Notifications</h2>
                <div className="space-y-4">
                    <ToggleItem
                        title="Browser Notifications"
                        description="Enable push notifications in your browser"
                    />
                    <ToggleItem
                        title="Desktop Notifications"
                        description="Show notifications on your desktop"
                    />
                    <ToggleItem
                        title="Sound Alerts"
                        description="Play a sound when receiving notifications"
                        defaultChecked
                    />
                </div>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
                <h2 className="text-lg font-semibold mb-4">Mobile Notifications</h2>
                <div className="space-y-4">
                    <ToggleItem
                        title="SMS Alerts"
                        description="Receive critical alerts via SMS"
                    />
                    <ToggleItem
                        title="Mobile App Notifications"
                        description="Get notifications on your mobile device"
                        defaultChecked
                    />
                </div>
            </div>

            <SaveButtons />
        </div>
    );
}

function SecuritySettings() {
    return (
        <div className="space-y-6">
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
                <h2 className="text-lg font-semibold mb-4">Change Password</h2>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Current Password</label>
                        <input
                            type="password"
                            className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">New Password</label>
                        <input
                            type="password"
                            className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Confirm New Password</label>
                        <input
                            type="password"
                            className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-700">
                        Update Password
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
                <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Shield size={20} />
                    Two-Factor Authentication
                </h2>
                <p className="text-sm text-slate-600 mb-4">
                    Add an extra layer of security to your account by enabling two-factor authentication.
                </p>
                <ToggleItem
                    title="Enable 2FA"
                    description="Require a verification code in addition to your password"
                />
            </div>

            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
                <h2 className="text-lg font-semibold mb-4">Active Sessions</h2>
                <div className="space-y-4">
                    {[
                        { device: "Chrome on Windows", location: "New York, USA", lastActive: "Current session" },
                        { device: "Safari on iPhone", location: "New York, USA", lastActive: "2 hours ago" },
                    ].map((session, idx) => (
                        <div key={idx} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                            <div>
                                <p className="font-medium text-slate-900">{session.device}</p>
                                <p className="text-sm text-slate-500">{session.location} • {session.lastActive}</p>
                            </div>
                            {idx !== 0 && (
                                <button className="text-sm text-red-600 hover:text-red-800 font-medium">
                                    Revoke
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <SaveButtons />
        </div>
    );
}

function DatabaseSettings() {
    return (
        <div className="space-y-6">
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
                <h2 className="text-lg font-semibold mb-4">Database Connection</h2>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Database Host</label>
                        <input
                            type="text"
                            defaultValue="localhost"
                            className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Database Port</label>
                        <input
                            type="text"
                            defaultValue="3306"
                            className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Database Name</label>
                        <input
                            type="text"
                            defaultValue="paragon_erp"
                            className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Username</label>
                        <input
                            type="text"
                            defaultValue="admin"
                            className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                        <span className="text-sm text-emerald-600 font-medium">Connected</span>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
                <h2 className="text-lg font-semibold mb-4">Backup & Restore</h2>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Automatic Backups</label>
                        <select className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                            <option>Daily at 2:00 AM</option>
                            <option>Weekly on Sunday</option>
                            <option>Monthly on 1st</option>
                            <option>Disabled</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Backup Retention</label>
                        <select className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                            <option>Keep for 7 days</option>
                            <option>Keep for 30 days</option>
                            <option>Keep for 90 days</option>
                            <option>Keep forever</option>
                        </select>
                    </div>
                    <div className="flex gap-3 pt-2">
                        <button className="flex-1 bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-700">
                            Backup Now
                        </button>
                        <button className="flex-1 border border-slate-200 px-4 py-2 rounded-lg font-medium hover:bg-slate-50">
                            Restore from Backup
                        </button>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
                <h2 className="text-lg font-semibold mb-4">Recent Backups</h2>
                <div className="space-y-3">
                    {[
                        { name: "backup_2026_03_02.sql", size: "45.2 MB", date: "Mar 2, 2026 02:00 AM" },
                        { name: "backup_2026_03_01.sql", size: "44.8 MB", date: "Mar 1, 2026 02:00 AM" },
                        { name: "backup_2026_02_29.sql", size: "44.5 MB", date: "Feb 29, 2026 02:00 AM" },
                    ].map((backup, idx) => (
                        <div key={idx} className="flex items-center justify-between p-3 border border-slate-200 rounded-lg">
                            <div>
                                <p className="font-medium text-slate-900 text-sm">{backup.name}</p>
                                <p className="text-xs text-slate-500">{backup.size} • {backup.date}</p>
                            </div>
                            <button className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">
                                Download
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            <SaveButtons />
        </div>
    );
}

function LocalizationSettings() {
    return (
        <div className="space-y-6">
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
                <h2 className="text-lg font-semibold mb-4">Regional Settings</h2>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Language</label>
                        <select className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                            <option>English (US)</option>
                            <option>English (UK)</option>
                            <option>Spanish</option>
                            <option>French</option>
                            <option>German</option>
                            <option>Chinese (Simplified)</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Timezone</label>
                        <select className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                            <option>UTC-05:00 Eastern Time (US & Canada)</option>
                            <option>UTC-08:00 Pacific Time (US & Canada)</option>
                            <option>UTC+00:00 London (GMT)</option>
                            <option>UTC+01:00 Paris, Berlin</option>
                            <option>UTC+08:00 Singapore, Hong Kong</option>
                            <option>UTC+09:00 Tokyo</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Date Format</label>
                        <select className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                            <option>MM/DD/YYYY (03/02/2026)</option>
                            <option>DD/MM/YYYY (02/03/2026)</option>
                            <option>YYYY-MM-DD (2026-03-02)</option>
                            <option>DD MMM YYYY (02 Mar 2026)</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Time Format</label>
                        <select className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                            <option>12-hour (2:30 PM)</option>
                            <option>24-hour (14:30)</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
                <h2 className="text-lg font-semibold mb-4">Currency Settings</h2>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Default Currency</label>
                        <select className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                            <option>USD - US Dollar ($)</option>
                            <option>EUR - Euro (€)</option>
                            <option>GBP - British Pound (£)</option>
                            <option>SGD - Singapore Dollar (S$)</option>
                            <option>JPY - Japanese Yen (¥)</option>
                            <option>CNY - Chinese Yuan (¥)</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Currency Display</label>
                        <select className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                            <option>$1,234.56 (Symbol before, comma separator)</option>
                            <option>1,234.56$ (Symbol after, comma separator)</option>
                            <option>$1.234,56 (Symbol before, dot separator)</option>
                            <option>1.234,56$ (Symbol after, dot separator)</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Decimal Places</label>
                        <select className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                            <option>2 decimal places</option>
                            <option>3 decimal places</option>
                            <option>4 decimal places</option>
                        </select>
                    </div>
                </div>
            </div>

            <SaveButtons />
        </div>
    );
}

function GeneralSettings() {
    return (
        <div className="space-y-6">
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
                <h2 className="text-lg font-semibold mb-4">Application Settings</h2>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Company Name</label>
                        <input
                            type="text"
                            defaultValue="Paragon Solutions"
                            className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Company Logo</label>
                        <div className="flex items-center gap-4">
                            <div className="h-16 w-16 rounded-lg bg-indigo-500 flex items-center justify-center font-bold text-white text-2xl">
                                P
                            </div>
                            <button className="px-4 py-2 border border-slate-200 rounded-lg font-medium hover:bg-slate-50">
                                Upload Logo
                            </button>
                        </div>
                        <p className="text-xs text-slate-500 mt-2">Recommended size: 200x200px</p>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Theme</label>
                        <select className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                            <option>Light Mode</option>
                            <option>Dark Mode</option>
                            <option>Auto (System Preference)</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Items Per Page</label>
                        <select className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                            <option>10 items</option>
                            <option>25 items</option>
                            <option>50 items</option>
                            <option>100 items</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
                <h2 className="text-lg font-semibold mb-4">System Preferences</h2>
                <div className="space-y-4">
                    <ToggleItem
                        title="Show Tooltips"
                        description="Display helpful tooltips throughout the application"
                        defaultChecked
                    />
                    <ToggleItem
                        title="Enable Animations"
                        description="Use smooth transitions and animations"
                        defaultChecked
                    />
                    <ToggleItem
                        title="Compact Mode"
                        description="Display more information in less space"
                    />
                    <ToggleItem
                        title="Auto-save Forms"
                        description="Automatically save form data as you type"
                        defaultChecked
                    />
                </div>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
                <h2 className="text-lg font-semibold mb-4 text-red-600">Danger Zone</h2>
                <div className="space-y-4">
                    <div className="p-4 border border-red-200 rounded-lg bg-red-50">
                        <h3 className="font-medium text-red-900 mb-2">Clear Application Cache</h3>
                        <p className="text-sm text-red-700 mb-3">
                            This will clear all cached data. You may need to log in again.
                        </p>
                        <button className="px-4 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 text-sm">
                            Clear Cache
                        </button>
                    </div>

                    <div className="p-4 border border-red-200 rounded-lg bg-red-50">
                        <h3 className="font-medium text-red-900 mb-2">Reset to Defaults</h3>
                        <p className="text-sm text-red-700 mb-3">
                            Reset all settings to their default values. This action cannot be undone.
                        </p>
                        <button className="px-4 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 text-sm">
                            Reset Settings
                        </button>
                    </div>
                </div>
            </div>

            <SaveButtons />
        </div>
    );
}

// Helper Components
function ToggleItem({ title, description, defaultChecked = false }: { title: string; description: string; defaultChecked?: boolean }) {
    return (
        <div className="flex items-center justify-between py-3 border-b border-slate-100 last:border-0">
            <div>
                <p className="font-medium text-slate-900">{title}</p>
                <p className="text-sm text-slate-500">{description}</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked={defaultChecked} />
                <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
            </label>
        </div>
    );
}

function SaveButtons() {
    return (
        <div className="flex items-center justify-end gap-3">
            <button className="px-6 py-2 border border-slate-200 rounded-lg font-medium text-slate-700 hover:bg-slate-50">
                Cancel
            </button>
            <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700">
                Save Changes
            </button>
        </div>
    );
}
