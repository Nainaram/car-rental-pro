import React from 'react';
import { Star, Users, Fuel, Settings } from 'lucide-react';

interface CarCardProps {
  name: string;
  image: string;
  price: number;
  rating: number;
  seats: number;
  transmission: string;
  fuelType: string;
}

export default function CarCard({ name, image, price, rating, seats, transmission, fuelType }: CarCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105">
      <div className="relative h-48">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
        <div className="flex items-center mt-2">
          <Star className="w-5 h-5 text-yellow-400 fill-current" />
          <span className="ml-1 text-gray-600">{rating.toFixed(1)}</span>
        </div>
        <div className="mt-4 flex justify-between items-center text-gray-600">
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-1" />
            <span>{seats} seats</span>
          </div>
          <div className="flex items-center">
            <Settings className="w-4 h-4 mr-1" />
            <span>{transmission}</span>
          </div>
          <div className="flex items-center">
            <Fuel className="w-4 h-4 mr-1" />
            <span>{fuelType}</span>
          </div>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-2xl font-bold text-gray-800">${price}/day</span>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
            Rent Now
          </button>
        </div>
      </div>
    </div>
  );
}