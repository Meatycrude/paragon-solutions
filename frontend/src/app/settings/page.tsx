import { Settings as SettingsIcon, User, Bell, Lock, Database, Globe } from "lucide-react";

export default function SettingsPage() {
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
                            { label: "Profile Settings", icon: User, active: true },
                            { label: "Notifications", icon: Bell, active: false },
                            { label: "Security", icon: Lock, active: false },
                            { label: "Database", icon: Database, active: false },
                            { label: "Localization", icon: Globe, active: false },
                            { label: "General", icon: SettingsIcon, active: false },
                        ].map((item) => {
                            const Icon = item.icon;
                            return (
                                <button
                                    key={item.label}
                                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                                        item.active
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
                <div className="lg:col-span-2 space-y-6">
                    {/* Profile Information */}
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
                        </div>
                    </div>

                    {/* Preferences */}
                    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
                        <h2 className="text-lg font-semibold mb-4">Preferences</h2>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between py-3 border-b border-slate-100">
                                <div>
                                    <p className="font-medium text-slate-900">Email Notifications</p>
                                    <p className="text-sm text-slate-500">Receive email updates about your activity</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" className="sr-only peer" defaultChecked />
                                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                                </label>
                            </div>

                            <div className="flex items-center justify-between py-3 border-b border-slate-100">
                                <div>
                                    <p className="font-medium text-slate-900">Push Notifications</p>
                                    <p className="text-sm text-slate-500">Get push notifications in your browser</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" className="sr-only peer" />
                                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                                </label>
                            </div>

                            <div className="flex items-center justify-between py-3">
                                <div>
                                    <p className="font-medium text-slate-900">Weekly Reports</p>
                                    <p className="text-sm text-slate-500">Get a weekly summary of your activity</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" className="sr-only peer" defaultChecked />
                                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* System Configuration */}
                    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
                        <h2 className="text-lg font-semibold mb-4">System Configuration</h2>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Language</label>
                                <select className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                                    <option>English (US)</option>
                                    <option>English (UK)</option>
                                    <option>Spanish</option>
                                    <option>French</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Timezone</label>
                                <select className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                                    <option>UTC-05:00 Eastern Time</option>
                                    <option>UTC-08:00 Pacific Time</option>
                                    <option>UTC+00:00 GMT</option>
                                    <option>UTC+08:00 Singapore</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Currency</label>
                                <select className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                                    <option>USD ($)</option>
                                    <option>EUR (€)</option>
                                    <option>GBP (£)</option>
                                    <option>SGD (S$)</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Save Button */}
                    <div className="flex items-center justify-end gap-3">
                        <button className="px-6 py-2 border border-slate-200 rounded-lg font-medium text-slate-700 hover:bg-slate-50">
                            Cancel
                        </button>
                        <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700">
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
