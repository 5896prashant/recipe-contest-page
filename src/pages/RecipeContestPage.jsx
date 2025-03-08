import React, { useState } from "react";
import Header from "../components/Header";
import RecipeList from "../components/RecipeList";
import SearchBar from "../components/SearchBar";
import FilterSidebar from "../components/FilterSidebar";
import "../index.css";
import { recipes } from "../data/recipes";




const RecipeContestPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({});
  const [sortBy, setSortBy] = useState("");

  const applyFilters = (recipes) => {
    return recipes.filter(recipe =>
      Object.keys(filters).every(filterKey => {
        if (Array.isArray(filters[filterKey])) {
          return filters[filterKey].includes(recipe[filterKey]);
        }
        return filters[filterKey] === recipe[filterKey];
      })
    );
  };

  const sortRecipes = (recipes) => {
    return [...recipes].sort((a, b) => {
      if (sortBy === "date-newest") return new Date(b.uploadedOn) - new Date(a.uploadedOn);
      if (sortBy === "date-oldest") return new Date(a.uploadedOn) - new Date(b.uploadedOn);
      if (sortBy === "rating-highest") return b.avgRating - a.avgRating;
      if (sortBy === "rating-lowest") return a.avgRating - b.avgRating;
      return 0;
    });
  };

  const filteredRecipes = sortRecipes(applyFilters(recipes)).filter(recipe =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    recipe.chef.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="p-6">
        <div className="flex flex-col md:flex-row gap-6 mt-6">
          <FilterSidebar filters={filters} setFilters={setFilters} setSortBy={setSortBy} />
          <div className="flex-1">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <RecipeList recipes={filteredRecipes} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeContestPage;
