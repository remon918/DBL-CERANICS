"use client";

import { useState } from "react";
import TilesCard from "./TilesCard";
import Link from "next/link";

const TilesPage = ({ tiles }) => {
  const [search, setSearch] = useState("");

  const filteredTiles = tiles.filter((tile) =>
    tile.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4">
      
      {/* Top bar */}
      <div className="flex items-center justify-between my-6">
        
        {/* Back button */}
        <Link href="/" className="text-gray-600 font-medium hover:border-b-2 border-gray-300">
          ← Back to Home
        </Link>

        {/* Search input */}
        <input
          type="text"
          placeholder="Search tiles..."
          className="border px-4 py-2 rounded-md w-60 md:w-80 outline-none border-gray-300 focus:ring-2 focus:ring-purple-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Tiles Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-2">
        {filteredTiles.map((tile) => (
          <TilesCard key={tile.id} tiles={tile} />
        ))}
      </div>
    </div>
  );
};

export default TilesPage;