"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { CategoryCard } from "@/components/CategoryCard";
import { CategoryFilter } from "@/components/CategoryFilter";
import { SearchBar } from "@/components/SearchBar";
import { categories, getFilteredCategories, searchCategories, type Category } from "@/lib/categories";

function CategoriesPageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [displayedCategories, setDisplayedCategories] = useState<Category[]>(categories);
  const [searchQuery, setSearchQuery] = useState("");
  const selectedCategory = searchParams?.get("category") || undefined;

  useEffect(() => {
    let filteredCategories = categories;

    // Apply category filter
    if (selectedCategory) {
      filteredCategories = getFilteredCategories(selectedCategory);
    }

    // Apply search filter
    if (searchQuery.trim()) {
      filteredCategories = searchCategories(searchQuery);
      if (selectedCategory) {
        // If both category and search are active, intersect the results
        const categoryFiltered = getFilteredCategories(selectedCategory);
        filteredCategories = filteredCategories.filter(cat => 
          categoryFiltered.some(c => c.id === cat.id)
        );
      }
    }

    setDisplayedCategories(filteredCategories);
  }, [selectedCategory, searchQuery]);

  const handleCategoryChange = (category: string | undefined) => {
    const params = new URLSearchParams(searchParams || '');
    if (category) {
      params.set('category', category);
    } else {
      params.delete('category');
    }
    router.push(`/categories${params.toString() ? '?' + params.toString() : ''}`);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const totalItems = displayedCategories.reduce((total, category) => total + category.items.length, 0);

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            {selectedCategory 
              ? `${categories.find(c => c.slug === selectedCategory)?.name || 'Category'} Products`
              : 'All Categories'
            }
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {selectedCategory
              ? categories.find(c => c.slug === selectedCategory)?.description || 'Explore products in this category'
              : 'Discover amazing products across all our curated categories'
            }
          </p>
        </div>

        {/* Search */}
        <SearchBar onSearch={handleSearch} />

        {/* Category Filter */}
        <CategoryFilter
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />

        {/* Results Summary */}
        <div className="flex items-center justify-between mb-8">
          <div className="text-slate-600">
            Showing <span className="font-medium text-slate-900">{displayedCategories.length}</span> categories 
            with <span className="font-medium text-slate-900">{totalItems}</span> products
            {searchQuery && (
              <span> matching "<span className="font-medium text-slate-900">{searchQuery}</span>"</span>
            )}
          </div>
        </div>

        {/* Categories Grid */}
        {displayedCategories.length > 0 ? (
          <div className="space-y-16">
            {displayedCategories.map((category) => (
              <div key={category.id} className="space-y-6">
                {/* Category Header */}
                <div className="flex items-center space-x-4 pb-4 border-b border-slate-200">
                  <div className="text-3xl">{category.icon}</div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">{category.name}</h2>
                    <p className="text-slate-600">{category.description}</p>
                  </div>
                  <div className="ml-auto">
                    <span className="text-sm text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                      {category.items.length} items
                    </span>
                  </div>
                </div>

                {/* Category Items */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {category.items.map((item) => (
                    <CategoryCard key={item.id} item={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">No results found</h3>
            <p className="text-slate-600 mb-6">
              {searchQuery 
                ? `No categories or products found matching "${searchQuery}"`
                : selectedCategory 
                  ? `No products found in the ${selectedCategory} category`
                  : "No categories available"
              }
            </p>
            <div className="space-x-4">
              {searchQuery && (
                <button
                  onClick={() => handleSearch("")}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Clear search
                </button>
              )}
              {selectedCategory && (
                <button
                  onClick={() => handleCategoryChange(undefined)}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  View all categories
                </button>
              )}
            </div>
          </div>
        )}

        {/* Back to Home */}
        <div className="text-center mt-16">
          <a
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}

export default function CategoriesPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen py-12 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-slate-600">Loading categories...</p>
        </div>
      </div>
    }>
      <CategoriesPageContent />
    </Suspense>
  );
}