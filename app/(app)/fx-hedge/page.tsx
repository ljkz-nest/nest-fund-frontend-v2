'use client';
export default function FXHedgePage() {
  return (
    <div className="container mx-auto px-6 py-8 space-y-6">
      <h1 className="text-2xl font-semibold">Foreign Exchange (FX) Hedging</h1>
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-2">How FX Hedging Works on Nest Fund</h2>
        <p className="text-gray-600">Your investments are made in local currencies, which means returns can be affected by FX when converted back to USD. Activate a hedge per investment for a small fee to lock in rates.</p>
      </div>
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="text-xs font-semibold text-gray-500 bg-gray-50 uppercase">
              <th className="p-4">Property</th>
              <th className="p-4">Investment (USD)</th>
              <th className="p-4">Local Currency</th>
              <th className="p-4">Hedge Status</th>
              <th className="p-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y">
            <tr>
              <td className="p-4 font-semibold"><div>Ulaanbaatar, Mongolia</div><div className="text-xs text-gray-500 font-normal">MNT / USD: 3380.00</div></td>
              <td className="p-4">$2,500.00</td>
              <td className="p-4">8,450,000 MNT</td>
              <td className="p-4 text-orange-700">Unhedged</td>
              <td className="p-4 text-center"><button className="bg-brand-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-brand-700">Activate Hedge</button></td>
            </tr>
            <tr>
              <td className="p-4 font-semibold"><div>Ho Chi Minh, Vietnam</div><div className="text-xs text-gray-500 font-normal">VND / USD: 25,450.00</div></td>
              <td className="p-4">$3,000.00</td>
              <td className="p-4">76,350,000 VND</td>
              <td className="p-4 text-green-700 font-semibold">Hedged</td>
              <td className="p-4 text-center"><button className="bg-gray-200 text-gray-700 text-sm px-4 py-2 rounded-lg hover:bg-gray-300">Manage</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}