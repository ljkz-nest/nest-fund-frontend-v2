'use client'

import Image from 'next/image';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import OpportunityCard from '@/components/OpportunityCard';
import { jsonLd } from '@/lib/csp';
import { site } from '@/lib/seo';
import { useI18n } from '@/lib/i18n';

export default function LandingPage() {
  const { t } = useI18n();
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'How does Nest Fund work?', acceptedAnswer: { '@type': 'Answer', text: 'Investors allocate into vetted mortgages; repayments flow back monthly.' } },
      { '@type': 'Question', name: 'Is FX hedging available?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, you can opt-in per investment for a fee to lock exchange rates.' } }
    ]
  };
  return (
    <>
      <NavBar />
      <main id="main">
        <section className="relative text-white">
          <Image src="/hero-1600.jpg" alt="" priority fetchPriority="high" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" aria-hidden />
          <div className="relative container mx-auto px-6 py-24 md:py-32">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight max-w-3xl">{t.hero.title}</h1>
            <p className="mt-4 max-w-2xl text-lg md:text-xl text-gray-100">{t.hero.subtitle}</p>
            <a href="#opportunities" className="mt-8 inline-flex items-center bg-white text-teal-700 font-semibold py-3 px-6 rounded-lg shadow hover:shadow-md focus:shadow-md transition">{t.hero.cta}</a>
          </div>
        </section>

        <section aria-labelledby="how" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 id="how" className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">A New Way to Invest in Real Estate</h2>
              <p className="text-lg text-gray-600">Three simple steps to start building your global portfolio.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-10 text-center">
              {[
                { title: 'Browse Opportunities', icon: 'search', desc: 'Explore curated mortgages with transparent risk and return data.' },
                { title: 'Invest & Fund', icon: 'wallet', desc: 'Start from $100; fund fractions or full loans securely.' },
                { title: 'Earn Returns', icon: 'trending-up', desc: 'Receive monthly repayments and track your impact.' }
              ].map((s, i) => (
                <div key={i} className="p-6">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-teal-100 text-teal-700 mx-auto mb-5">
                    <span aria-hidden className="i" data-icon={s.icon} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{i + 1}. {s.title}</h3>
                  <p className="text-gray-600">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="opportunities" aria-labelledby="feat" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 id="feat" className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Featured Investment Opportunities</h2>
              <p className="text-lg text-gray-600">Hand-picked opportunities offering strong returns and social impact.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <OpportunityCard city="Ulaanbaatar, Mongolia" grade="A-" apr={9.2} amount={20000} termYears={15} funded={0.6} img="/sample-1.jpg" />
              <OpportunityCard city="Ho Chi Minh, Vietnam" grade="A" apr={8.2} amount={40000} termYears={20} funded={0.4} img="/sample-2.jpg" />
              <OpportunityCard city="Medellín, Colombia" grade="B+" apr={10.1} amount={15000} termYears={10} funded={0.95} img="/sample-3.jpg" />
            </div>
          </div>
        </section>

        <section aria-labelledby="impact" className="bg-white py-20">
          <div className="container mx-auto px-6 grid md:grid-cols-2 items-center gap-12">
            <div>
              <Image src="/sample-4.jpg" alt="Happy family at their new home" width={600} height={400} className="rounded-lg shadow" />
            </div>
            <div>
              <span className="font-semibold text-teal-700 uppercase">Invest with purpose</span>
              <h2 id="impact" className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">Your Investment is a Foundation</h2>
              <p className="text-gray-600 mb-4">Beyond financial returns, your investment provides families with a stable home—a foundation for health, education, and opportunity.</p>
              <div className="flex mt-6 gap-8">
                <div><p className="text-3xl font-bold text-teal-700">3,000+</p><p className="text-gray-500">Families Housed</p></div>
                <div><p className="text-3xl font-bold text-teal-700">$50M+</p><p className="text-gray-500">Capital Deployed</p></div>
                <div><p className="text-3xl font-bold text-teal-700">12</p><p className="text-gray-500">Countries</p></div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd({
        '@context': 'https://schema.org',
        '@type': 'FinancialService',
        name: site.name,
        url: site.url,
        areaServed: ['JP','US','MN','SG'],
        serviceType: 'Mortgage investment'
      })} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'How does Nest Fund work?', acceptedAnswer: { '@type': 'Answer', text: 'Investors allocate into vetted mortgages; repayments flow back monthly.' } },
          { '@type': 'Question', name: 'Is FX hedging available?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, you can opt-in per investment for a fee to lock exchange rates.' } }
        ]
      })} />
    </>
  );
}