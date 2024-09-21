"use-client";
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-8">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Disaster Management. All rights reserved.
        </p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="/privacy-policy" className="hover:text-blue-400">
            Privacy Policy
          </a>
          <a href="/terms-of-service" className="hover:text-blue-400">
            Terms of Service
          </a>
          <a href="/contact" className="hover:text-blue-400">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
}
