import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { CategoryItem } from "@/lib/categories";

interface CategoryCardProps {
  item: CategoryItem;
}

export function CategoryCard({ item }: CategoryCardProps) {
  return (
    <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-0 bg-white/80 backdrop-blur-sm">
      <CardHeader className="pb-3">
        <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          {item.rating && (
            <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-sm font-medium flex items-center">
              <span className="text-yellow-500 mr-1">★</span>
              {item.rating}
            </div>
          )}
        </div>
        <CardTitle className="text-lg font-semibold text-slate-900">
          {item.title}
        </CardTitle>
        <CardDescription className="text-slate-600 text-sm">
          {item.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex flex-wrap gap-2 mb-4">
          {item.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex items-center justify-between">
          {item.price && (
            <span className="text-xl font-bold text-slate-900">
              ${item.price}
            </span>
          )}
          <button className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors flex items-center">
            View Details
            <svg
              className="w-4 h-4 ml-1 transition-transform hover:translate-x-1"
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
          </button>
        </div>
      </CardContent>
    </Card>
  );
}