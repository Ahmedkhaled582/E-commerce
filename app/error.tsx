'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      
      {/* Icon */}
      <div className="text-red-500 text-7xl mb-4 animate-pulse">
        ⚠️
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold mb-2">
        Something went wrong
      </h2>

      {/* Error Message */}
      <p className="text-gray-500 mb-6 max-w-md">
        {error.message || "Unexpected error occurred"}
      </p>

      {/* Buttons */}
      <div className="flex gap-3">
        <button
          onClick={() => reset()}
          className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
        >
          Try Again
        </button>

        <button
          onClick={() => window.location.href = '/'}
          className="px-6 py-2 border rounded-xl hover:bg-gray-100 transition"
        >
          Go Home
        </button>
      </div>
    </div>
  );
}