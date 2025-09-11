import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Categories Hub - Discover Amazing Products",
  description: "Explore curated categories of health, technology, food, lifestyle, travel, and education products.",
  keywords: "categories, health, technology, food, lifestyle, travel, education, products",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
          <Navigation />
          <main className="relative">
            {children}
          </main>
          <footer className="bg-slate-900 text-white py-12 mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="col-span-1 md:col-span-2">
                  <h3 className="text-xl font-bold mb-4">Categories Hub</h3>
                  <p className="text-slate-300 max-w-md">
                    Discover amazing products across multiple categories. From health and wellness to cutting-edge technology, we have everything you need.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Quick Links</h4>
                  <ul className="space-y-2 text-slate-300">
                    <li><a href="/categories" className="hover:text-white transition-colors">All Categories</a></li>
                    <li><a href="/categories?category=health" className="hover:text-white transition-colors">Health</a></li>
                    <li><a href="/categories?category=technology" className="hover:text-white transition-colors">Technology</a></li>
                    <li><a href="/categories?category=food" className="hover:text-white transition-colors">Food</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Support</h4>
                  <ul className="space-y-2 text-slate-300">
                    <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
                <p>&copy; 2024 Categories Hub. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}