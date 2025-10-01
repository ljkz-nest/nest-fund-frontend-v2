import Image from 'next/image';
import ProgressBar from './ProgressBar';

export default function OpportunityCard({ city, grade, apr, amount, termYears, funded, img }: { city: string; grade: string; apr: number; amount: number; termYears: number; funded: number; img: string; }) {
  return (
    <article className="bg-white rounded-lg shadow overflow-hidden transition will-change-transform hover:-translate-y-1">
      <Image src={img} alt={`Home in ${city}`} width={600} height={400} className="w-full h-48 object-cover" loading="lazy" />
      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-bold">{city}</h3>
          <span className="text-sm font-semibold text-gray-500">Loan Grade: {grade}</span>
        </div>
        <p className="text-gray-600 mb-4">Vetted mortgage opportunity with transparent borrower data.</p>
        <div className="grid grid-cols-3 gap-4 text-center my-4">
          <div><span className="font-bold text-teal-700 text-lg">{apr.toFixed(1)}%</span><p className="text-xs text-gray-500">Est. APR</p></div>
          <div><span className="font-bold text-teal-700 text-lg">${amount.toLocaleString()}</span><p className="text-xs text-gray-500">Loan Amount</p></div>
          <div><span className="font-bold text-teal-700 text-lg">{termYears} yrs</span><p className="text-xs text-gray-500">Term</p></div>
        </div>
        <ProgressBar value={funded} />
        <a href="/opportunities" className="mt-6 block text-center bg-teal-600 text-white font-semibold py-2 rounded-lg hover:bg-teal-700">View Details</a>
      </div>
    </article>
  );
}