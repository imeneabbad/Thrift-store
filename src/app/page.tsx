import Categories from '@/components/ui/Categories';
import CTA from '@/components/ui/CTA';
import Features from '@/components/ui/Features';
import Footer from '@/components/ui/Footer';
import Hero from '@/components/ui/Hero';
import Navbar from '@/components/ui/Navbar';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100">
      <Navbar/>
      <Hero/>
      <Features/>
      <Categories/>
      <CTA/>
      <Footer/>      
    </div>
  );
}