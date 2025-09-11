"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { categories } from "@/lib/categories";

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">CH</span>
            </div>
            <span className="text-xl font-bold text-slate-900">Categories Hub</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-slate-700 hover:text-slate-900 transition-colors font-medium"
            >
              Home
            </Link>
            <Link 
              href="/categories" 
              className="text-slate-700 hover:text-slate-900 transition-colors font-medium"
            >
              All Categories
            </Link>
            
            {/* Quick Category Links */}
            <div className="flex items-center space-x-4">
              {categories.slice(0, 3).map((category) => (
                <Link
                  key={category.id}
                  href={`/categories?category=${category.slug}`}
                  className="text-slate-600 hover:text-slate-900 transition-colors text-sm"
                >
                  {category.name}
                </Link>
              ))}
            </div>

            <Button asChild>
              <Link href="/categories">Browse All</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-700 hover:text-slate-900 transition-colors"
              aria-label="Toggle mobile menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-slate-200">
              <Link
                href="/"
                className="block px-3 py-2 text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/categories"
                className="block px-3 py-2 text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                All Categories
              </Link>
              
              {/* Mobile Category Links */}
              <div className="border-t border-slate-100 pt-2 mt-2">
                <p className="px-3 py-1 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Quick Access
                </p>
                {categories.map((category) => (
                  <Link
                    key={category.id}
                    href={`/categories?category=${category.slug}`}
                    className="block px-3 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors text-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {category.icon} {category.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}