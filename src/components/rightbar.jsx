import { useState } from 'react'

export default function RightSidebar() {

  return (
    <>
          <div className="fixed right-0 top-0 z-10 w-100 border-l border-gray-600 h-screen bg-black text-white p-4 space-y-4 scrollbar-none overflow-y-auto">

      
      <div className="border border-gray-600 rounded-xl p-4 mt-20">
        <h2 className="font-semibold">Subscribe to Premium</h2>
        <p className="text-sm text-gray-400 my-2">
          Get rid of ads and unlock features.
        </p>
        <button className="bg-blue-500 px-3 py-1 rounded-full text-sm mt-4">
          Subscribe
        </button>
      </div>

      
      <div className="border border-gray-600 rounded-xl p-4 space-y-3">
        <h2 className="font-semibold">Today’s News</h2>

        <div>
          <p className="text-sm">
            Liverpool Part Ways with Arne Slot
          </p>
          <span className="text-xs text-gray-500">
            3 hours ago
          </span>
        </div>

        <div>
          <p className="text-sm">
            Toddler Sings First Words
          </p>
          <span className="text-xs text-gray-500">
            2 hours ago
          </span>
        </div>

        <div>
          <p className="text-sm">
            BTS Members Return Home
          </p>
          <span className="text-xs text-gray-500">
            7 hours ago
          </span>
        </div>

      </div>

      <div className="border border-gray-600 rounded-xl p-4 space-y-3">
        <h2 className="font-semibold">Tranding</h2>

        <div>
          <span className="text-xs text-gray-500">
            tranding in Indonesia
          </span>
          <p className="text-sm">
            Rp 18.000
          </p>
        </div>

        <div>
          <span className="text-xs text-gray-500">
            tranding in Indonesia
          </span>
          <p className="text-sm">
            Sarwendah
          </p>
        </div>

        <div>
          <span className="text-xs text-gray-500">
            entertainment in Indonesia
          </span>
          <p className="text-sm">
            Logan
          </p>
        </div>

      </div>
    </div>
    </>
    
  );
}  