"use client";
import CrisisForm from '../components/CrisisForm';
import CrisisList from '../components/CrisisList';
import { CrisisProvider } from '../context/CrisisContext';

export default function CrisisPage() {
  return (
    <CrisisProvider>
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold mb-6 text-center">Crisis Management</h1>
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left: Crisis List (takes most of the width) */}
          <CrisisList />

          {/* Right: Crisis Form (smaller) */}
          <div className="lg:w-1/3">
            <CrisisForm />
          </div>
        </div>
      </div>
    </CrisisProvider>
  );
}
