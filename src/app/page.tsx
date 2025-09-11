import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { categories } from "@/lib/categories";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6">
              Discover Amazing
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                Categories
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
              Explore curated collections of products across health, technology, food, lifestyle, travel, and education. 
              Find exactly what you need in our organized categories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 py-6">
                <Link href="/categories">Browse All Categories</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
                <Link href="/categories?category=health">Explore Health</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-indigo-200 rounded-full opacity-20 animate-pulse delay-500"></div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Featured Categories
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Discover our most popular categories with hand-picked products and services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/categories?category=${category.slug}`}
                className="group"
              >
                <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-0 bg-white/70 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                      <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-10`}></div>
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 text-3xl bg-white/90 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center">
                        {category.icon}
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {category.name}
                    </CardTitle>
                    <CardDescription className="text-slate-600">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-500">
                        {category.items.length} items available
                      </span>
                      <div className="flex items-center text-blue-600 font-medium text-sm group-hover:text-blue-700 transition-colors">
                        Explore
                        <svg
                          className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl px-8 py-16 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-4">
                Ready to Explore?
              </h2>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Browse through our comprehensive categories and find products that match your interests and needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
                  <Link href="/categories">View All Categories</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-slate-900">
                  <Link href="/categories?category=technology">Start with Technology</Link>
                </Button>
              </div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-20 translate-x-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-16 -translate-x-16"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-slate-900 mb-2">{categories.length}</div>
              <div className="text-slate-600">Categories</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-slate-900 mb-2">
                {categories.reduce((total, category) => total + category.items.length, 0)}
              </div>
              <div className="text-slate-600">Products</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-slate-900 mb-2">4.7</div>
              <div className="text-slate-600">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-slate-900 mb-2">24/7</div>
              <div className="text-slate-600">Support</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}