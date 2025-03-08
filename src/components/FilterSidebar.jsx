// import React from "react";

// const FilterSidebar = ({ filters, setFilters, setSortBy }) => {
//   return (
//     <aside className="w-full md:w-1/4 bg-white p-4 rounded-lg shadow-md">
//       <h2 className="text-lg font-bold mb-4">Filters</h2>
//       <label className="block mb-2">
//         <span className="text-sm font-medium text-gray-700">Sort By:</span>
//         <select onChange={(e) => setSortBy(e.target.value)} className="w-full p-2 border rounded-md">
//           <option value="">Select</option>
//           <option value="date-newest">Newest</option>
//           <option value="date-oldest">Oldest</option>
//           <option value="rating-highest">Highest Rated</option>
//           <option value="rating-lowest">Lowest Rated</option>
//         </select>
//       </label>
//       <button
//         onClick={() => setFilters({})}
//         className="mt-4 w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600"
//       >
//         Clear Filters
//       </button>
//     </aside>
//   );
// };

// export default FilterSidebar;



import React, { useState } from "react";

const FilterSidebar = ({ filters, setFilters, setSortBy }) => {
  const [localFilters, setLocalFilters] = useState(filters);

  // Handle filter changes
  const handleFilterChange = (category, value) => {
    setLocalFilters((prev) => ({
      ...prev,
      [category]: prev[category]?.includes(value)
        ? prev[category].filter((item) => item !== value)
        : [...(prev[category] || []), value],
    }));
  };

  // Apply filters
  const applyFilters = () => {
    setFilters(localFilters);
  };

  // Clear filters function
  const clearFilters = () => {
    setLocalFilters({});
    setFilters({});
    setSortBy(""); // Also reset sorting
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-lg font-bold mb-2">Filters</h2>

      {/* Filter Options */}
      <div className="mb-4">
        <h3 className="font-semibold">Attributes</h3>
        <label className="block">
          <input
            type="checkbox"
            checked={localFilters.contestWinner?.includes(true) || false}
            onChange={() => handleFilterChange("contestWinner", true)}
          />
          Contest Winner
        </label>
        <label className="block">
          <input
            type="checkbox"
            checked={localFilters.featured?.includes(true) || false}
            onChange={() => handleFilterChange("featured", true)}
          />
          Featured
        </label>
        <label className="block">
          <input
            type="checkbox"
            checked={localFilters.testKitchenApproved?.includes(true) || false}
            onChange={() => handleFilterChange("testKitchenApproved", true)}
          />
          Test Kitchen Approved
        </label>
      </div>

      {/* Sort By */}
      <div className="mb-4">
        <h3 className="font-semibold">Sort By</h3>
        <select
          className="w-full border p-2 rounded"
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="">None</option>
          <option value="date-newest">Upload Date (Newest)</option>
          <option value="date-oldest">Upload Date (Oldest)</option>
          <option value="rating-highest">Average Rating (Highest)</option>
          <option value="rating-lowest">Average Rating (Lowest)</option>
        </select>
      </div>

      {/* Buttons */}
      <div className="flex space-x-2">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={applyFilters}
        >
          Apply Filters
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          onClick={clearFilters}
        >
          Clear All Filters
        </button>
      </div>
    </div>
  );
};

export default FilterSidebar;
