
'use client';
export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Account Settings</h1>
      <div className="bg-white p-6 rounded-lg shadow">
        <form className="grid gap-4 max-w-xl">
          <label className="block">
            <span className="text-sm text-gray-700">Full Name</span>
            <input type="text" className="mt-1 block w-full border rounded px-3 py-2" placeholder="Your name"/>
          </label>
          <label className="block">
            <span className="text-sm text-gray-700">Email</span>
            <input type="email" className="mt-1 block w-full border rounded px-3 py-2" placeholder="you@example.com"/>
          </label>
          <label className="block">
            <span className="text-sm text-gray-700">Language</span>
            <select className="mt-1 block w-full border rounded px-3 py-2">
              <option>English</option>
              <option>日本語</option>
            </select>
          </label>
          <div>
            <button className="bg-gray-900 text-white px-4 py-2 rounded-lg">Save changes</button>
          </div>
        </form>
      </div>
    </div>
  );
}
