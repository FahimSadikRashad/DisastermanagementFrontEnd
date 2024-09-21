"use client";

export default function MottoSection() {
  return (
    <section className="relative bg-200 py-24"> {/* Increased padding for height */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: "url('https://c7.alamy.com/comp/WBC69T/sengkol-lombok-indonesia-september-20-2017-four-preschool-aged-children-posing-in-rural-indonesian-village-WBC69T.jpg')",
          inset: '-101px' // Adjusting the inset to -101 for the image
        }}
      />
      <div className="relative z-5 container mx-auto p-12 text-center"> {/* Increased padding for text section */}
        <h2 className="text-5xl font-semibold text-black italic mb-6 transition-transform transform hover:scale-105">
          Together, We Rise
        </h2>
        <p className="text-xl text-black italic mb-8"> {/* Increased font size */}
          Empowering communities through unity and compassion.
        </p>
        <a href="/learn-more" className="inline-block bg-blue-500 text-white py-3 px-6 rounded-full shadow hover:bg-blue-600 transition"> {/* Adjusted padding */}
          Learn More
        </a>
      </div>
    </section>
  );
}
