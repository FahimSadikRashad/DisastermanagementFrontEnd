import Navbar from './components/Navbar';  // Assuming you have a Navbar component
import Footer from './components/Footer';  // Assuming you have a Footer component



export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">


      <Navbar />
      <main className="flex-grow container mx-auto p-6">
        <h1 className="text-4xl font-bold text-center mb-8">Disaster Management Dashboard</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Donation Fund</h2>
          {/* You can add a chart here */}
          <p>Total donations: $XXXX</p>
          <a
            href="/donation"
            className="mt-4 inline-block text-blue-500 hover:underline"
          >
            View Donation Details &raquo;
          </a>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Crisis Management</h2>
          <p>View ongoing crises and respond to urgent calls for help.</p>
          <a
            href="/crisis"
            className="mt-4 inline-block text-blue-500 hover:underline"
          >
            View Crisis Details &raquo;
          </a>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Volunteer Management</h2>
          <p>Join our volunteers in providing relief to affected areas.</p>
          <a
            href="/volunteer"
            className="mt-4 inline-block text-blue-500 hover:underline"
          >
            View Volunteers &raquo;
          </a>
        </section>
      </main>
      <Footer />
    </div>
  );
}
