"use client";

import localFont from "next/font/local";
import "./styles/globals.css";
import { DonationProvider } from "./context/DonationContext"; // Import the provider
import { useRouter } from "next/navigation"; // Correctly import useRouter
import Navbar from "./components/Navbar"; // Import Navbar
import Footer from "./components/Footer"; // Import Footer
import { AdminProvider } from "./context/AdminContext";
import { AuthProvider } from "./context/AuthContext";
import { CrisisProvider } from "./context/CrisisContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// export const metadata = {
//   title: "Disaster Management",
//   description: "A web app for managing disaster relief efforts",
// };

export default function RootLayout({ children }) {
  const router = useRouter(); // Access router object
  const noHeaderFooterRoutes = ["/login", "/register"]; // Define routes without header/footer

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100`}
      >
        <AuthProvider>

          <AdminProvider>
            <CrisisProvider>

            <DonationProvider>
              {/* Conditionally render Navbar */}
              {!noHeaderFooterRoutes.includes(router.pathname) && <Navbar />}

              <main className="flex flex-col min-h-screen">{children}</main>

              {/* Conditionally render Footer */}
              {!noHeaderFooterRoutes.includes(router.pathname) && <Footer />}
            </DonationProvider>
            </CrisisProvider>
          </AdminProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
