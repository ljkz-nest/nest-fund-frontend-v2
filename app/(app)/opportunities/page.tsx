'use client';
import OpportunityCard from '@/components/OpportunityCard';

export default function OpportunitiesPage() {
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-2xl font-semibold mb-6">Browse Opportunities</h1>
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <form className="grid grid-cols-1 md:grid-cols-4 gap-4" aria-label="Filters">
          <label className="text-sm font-medium text-gray-700">Region
            <select className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-brand-500 focus:border-brand-500 text-sm">
              <option>All</option><option>East Asia</option><option>Southeast Asia</option><option>South America</option>
            </select>
          </label>
          <label className="text-sm font-medium text-gray-700">Loan Grade
            <select className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-brand-500 focus:border-brand-500 text-sm">
              <option>All</option><option>A</option><option>B</option><option>C</option>
            </select>
          </label>
          <label className="text-sm font-medium text-gray-700">Est. APR
            <select className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-brand-500 focus:border-brand-500 text-sm">
              <option>Any</option><option>8-10%</option><option>10-12%</option><option>12%+</option>
            </select>
          </label>
          <div className="self-end">
            <button className="w-full bg-brand-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-brand-700 transition">Filter</button>
          </div>
        </form>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <OpportunityCard city="Ulaanbaatar, Mongolia" grade="A-" apr={9.2} amount={20000} termYears={15} funded={0.6} img="/sample-1.jpg" />
        <OpportunityCard city="Ho Chi Minh, Vietnam" grade="A" apr={8.2} amount={40000} termYears={20} funded={0.4} img="/sample-2.jpg" />
        <OpportunityCard city="Manila, Philippines" grade="A-" apr={8.9} amount={25000} termYears={15} funded={0.75} img="/sample-5.jpg" />
      </div>
    </div>
  );
}