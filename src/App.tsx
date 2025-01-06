import React from 'react';
import { Search } from 'lucide-react';
import CarCard from './components/CarCard';
import Footer from './components/Footer';

const cars = [
  {
    id: 1,
    name: "Tesla Model 3",
    image: "https://images.unsplash.com/photo-1536700503339-1e4b06520771?auto=format&fit=crop&q=80",
    price: 150,
    rating: 4.8,
    seats: 5,
    transmission: "Auto",
    fuelType: "Electric"
  },
  {
    id: 2,
    name: "BMW 5 Series",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80",
    price: 200,
    rating: 4.7,
    seats: 5,
    transmission: "Auto",
    fuelType: "Petrol"
  },
  {
    id: 3,
    name: "Mercedes C-Class",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80",
    price: 180,
    rating: 4.9,
    seats: 5,
    transmission: "Auto",
    fuelType: "Hybrid"
  },
  {
    id: 3,
    name: "Mercedes C-Class",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80",
    price: 180,
    rating: 4.9,
    seats: 5,
    transmission: "Auto",
    fuelType: "Hybrid"
  },
  {
    id: 3,
    name: "Mercedes C-Class",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80",
    price: 180,
    rating: 4.9,
    seats: 5,
    transmission: "Auto",
    fuelType: "Hybrid"
  },
  {
    id: 3,
    name: "Mercedes C-Class",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80",
    price: 180,
    rating: 4.9,
    seats: 5,
    transmission: "Auto",
    fuelType: "Hybrid"
  },
  // Add more cars to make up 12 total...
];

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section */}
      <div className="relative h-[600px] bg-gradient-to-r from-blue-500 to-blue-600">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center items-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">
            Find Your Perfect Ride
          </h1>
          <p className="text-xl md:text-2xl text-center mb-12">
            Luxury and comfort at unbeatable prices
          </p>
          <div className="w-full max-w-2xl bg-white rounded-lg p-2 flex">
            <input
              type="text"
              placeholder="Search for cars..."
              className="flex-1 px-4 py-2 text-gray-800 focus:outline-none"
            />
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md flex items-center">
              <Search className="w-5 h-5 mr-2" />
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Car Listings */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Featured Cars</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => (
            <CarCard key={car.id} {...car} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;