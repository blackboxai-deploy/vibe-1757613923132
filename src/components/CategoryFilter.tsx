"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { categories } from "@/lib/categories";

interface CategoryFilterProps {
  selectedCategory?: string;
  onCategoryChange: (category: string | undefined) => void;
}

export function CategoryFilter({ selectedCategory, onCategoryChange }: CategoryFilterProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="mb-8">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-slate-900">Filter by Category</h3>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="md:hidden"
          >
            {isExpanded ? "Hide" : "Show"} Filters
          </Button>
        </div>
        
        <div className={`${isExpanded ? "block" : "hidden"} md:block`}>
          <div className="flex flex-wrap gap-3">
            <Button
              variant={selectedCategory ? "outline" : "default"}
              size="sm"
              onClick={() => onCategoryChange(undefined)}
              className="flex items-center gap-2"
            >
              <span>🌟</span>
              All Categories
            </Button>
            
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.slug ? "default" : "outline"}
                size="sm"
                onClick={() => onCategoryChange(category.slug)}
                className="flex items-center gap-2"
              >
                <span>{category.icon}</span>
                {category.name}
              </Button>
            ))}
          </div>
          
          {selectedCategory && (
            <div className="mt-4 p-4 bg-slate-50 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600">
                    Currently viewing:{" "}
                    <span className="font-medium text-slate-900">
                      {categories.find(c => c.slug === selectedCategory)?.name}
                    </span>
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    {categories.find(c => c.slug === selectedCategory)?.description}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onCategoryChange(undefined)}
                  className="text-slate-500 hover:text-slate-700"
                >
                  Clear
                </Button>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}