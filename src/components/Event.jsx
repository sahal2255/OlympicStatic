import React from 'react';

const medalImage = 'https://media.assettype.com/outlookindia/2024-02/a35fff32-dd1a-40f3-a5f5-04642c0c732f/GFzlyA4W4AAkzxb.jpg?rect=1,0,678,383&w=680&auto=format%2Ccompress&fit=max&format=webp&dpr=1.0';

export default function Event() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="relative h-48">
          <img src={medalImage} alt="Medal" className="w-full h-full object-cover" />
        </div>

        <div className="p-6">
          <div className="text-center mb-4">
            <h1 className="text-2xl font-bold text-gray-800">Medal Tally</h1>
          </div>
          <div className="text-gray-600">
            <p className="text-base">
              Here you can find the latest medal tally for the Olympics. This section will provide detailed information about the performance of various countries.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
