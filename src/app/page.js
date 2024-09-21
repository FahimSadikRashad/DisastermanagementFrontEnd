import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FundSection from './components/FundSection';
import CrisisSection from './components/CrisisSection';
import VolunteerSection from './components/VolunteerSection';
import MottoSection from './components/MottoSection'; 

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <MottoSection /> 
      <main className="flex-grow container mx-auto p-6 mt-4"> {/* Added margin-top to ensure spacing */}
        <h1 className="text-4xl font-bold text-center mb-8">
          Donation Management Dashboard
        </h1>

        <FundSection />
        <CrisisSection />
        <VolunteerSection />
      </main>
      <Footer />
    </div>
  );
}
