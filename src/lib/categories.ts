export interface CategoryItem {
  id: string;
  title: string;
  description: string;
  image: string;
  price?: number;
  rating?: number;
  tags: string[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  items: CategoryItem[];
  color: string;
  icon: string;
}

export const categories: Category[] = [
  {
    id: 'health',
    name: 'Health & Wellness',
    slug: 'health',
    description: 'Discover products and services for your physical and mental well-being',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/bc5174f1-ec2c-4d70-969c-10cf8d87f3cf.png',
    color: 'from-green-400 to-emerald-600',
    icon: '🏥',
    items: [
      {
        id: 'h1',
        title: 'Organic Supplements',
        description: 'Natural vitamins and minerals for daily health support',
        image: 'https://placehold.co/300x200?text=Organic+vitamin+supplements+bottles+natural+ingredients',
        price: 29.99,
        rating: 4.8,
        tags: ['organic', 'vitamins', 'natural']
      },
      {
        id: 'h2',
        title: 'Yoga Equipment Set',
        description: 'Complete yoga starter kit with mat, blocks, and straps',
        image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/623e2604-7c71-491c-8f93-62165248c4ce.png',
        price: 49.99,
        rating: 4.6,
        tags: ['yoga', 'fitness', 'meditation']
      },
      {
        id: 'h3',
        title: 'Mental Health Guide',
        description: 'Comprehensive guide to managing stress and anxiety',
        image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f7a5e648-a150-4aee-b706-e81fbc374c5d.png',
        price: 19.99,
        rating: 4.9,
        tags: ['mental health', 'guide', 'stress relief']
      }
    ]
  },
  {
    id: 'technology',
    name: 'Technology',
    slug: 'technology',
    description: 'Latest gadgets and tech innovations for modern living',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/fe5e4597-a0e9-4aa4-b9db-55f7a7248a67.png',
    color: 'from-blue-400 to-indigo-600',
    icon: '💻',
    items: [
      {
        id: 't1',
        title: 'Smart Watch Pro',
        description: 'Advanced fitness tracking with health monitoring features',
        image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d680cade-edd6-408a-969a-7e82f6adb33b.png',
        price: 299.99,
        rating: 4.7,
        tags: ['smartwatch', 'fitness', 'health tracking']
      },
      {
        id: 't2',
        title: 'Wireless Earbuds',
        description: 'Premium sound quality with noise cancellation',
        image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/70b7a1cb-b3f1-4c03-ad61-d524ee65af1a.png',
        price: 149.99,
        rating: 4.5,
        tags: ['audio', 'wireless', 'noise cancellation']
      },
      {
        id: 't3',
        title: 'Laptop Stand Ergonomic',
        description: 'Adjustable aluminum stand for better posture',
        image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b0e480d9-a8a8-4c7b-b9f8-eded7eb175ad.png',
        price: 59.99,
        rating: 4.4,
        tags: ['ergonomic', 'desk accessories', 'aluminum']
      }
    ]
  },
  {
    id: 'food',
    name: 'Food & Nutrition',
    slug: 'food',
    description: 'Healthy and delicious food options for every lifestyle',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b657aad5-fd3e-4c4e-98f1-a193ecc32f37.png',
    color: 'from-orange-400 to-red-600',
    icon: '🍎',
    items: [
      {
        id: 'f1',
        title: 'Organic Meal Kit',
        description: 'Fresh ingredients for healthy home-cooked meals',
        image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8e96b4cd-d824-4b93-87c1-7eaafa562c04.png',
        price: 39.99,
        rating: 4.8,
        tags: ['organic', 'meal kit', 'healthy cooking']
      },
      {
        id: 'f2',
        title: 'Protein Powder Blend',
        description: 'Plant-based protein for post-workout nutrition',
        image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/489a7a59-ddd5-41ef-b91d-9b4673509d53.png',
        price: 34.99,
        rating: 4.6,
        tags: ['protein', 'plant-based', 'fitness']
      },
      {
        id: 'f3',
        title: 'Superfood Smoothie Mix',
        description: 'Nutrient-rich blend of berries and superfoods',
        image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/bcf40365-4ec0-40d6-89b4-a2d7bd0e0b14.png',
        price: 24.99,
        rating: 4.7,
        tags: ['superfood', 'smoothie', 'antioxidants']
      }
    ]
  },
  {
    id: 'lifestyle',
    name: 'Lifestyle',
    slug: 'lifestyle',
    description: 'Enhance your daily life with curated lifestyle products',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ec2f9e13-f5c2-4127-8986-68075a43e164.png',
    color: 'from-purple-400 to-pink-600',
    icon: '✨',
    items: [
      {
        id: 'l1',
        title: 'Aromatherapy Diffuser',
        description: 'Create a relaxing atmosphere with essential oils',
        image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a250a97b-e2f7-4038-895e-87f9345e2252.png',
        price: 45.99,
        rating: 4.5,
        tags: ['aromatherapy', 'wellness', 'home decor']
      },
      {
        id: 'l2',
        title: 'Minimalist Wallet',
        description: 'Slim design with RFID protection for modern living',
        image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/616aae84-e872-463f-9d6c-f797a24e64ab.png',
        price: 29.99,
        rating: 4.3,
        tags: ['minimalist', 'wallet', 'RFID protection']
      },
      {
        id: 'l3',
        title: 'Indoor Plant Collection',
        description: 'Low-maintenance plants for better air quality',
        image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ba0bc329-78a8-4435-ac5e-9220d6be38e5.png',
        price: 89.99,
        rating: 4.9,
        tags: ['plants', 'air purifying', 'home decor']
      }
    ]
  },
  {
    id: 'travel',
    name: 'Travel & Adventure',
    slug: 'travel',
    description: 'Essential gear and accessories for your next adventure',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a201c041-d720-4986-a36d-296205e1ba97.png',
    color: 'from-teal-400 to-cyan-600',
    icon: '🌍',
    items: [
      {
        id: 'tr1',
        title: 'Travel Backpack Pro',
        description: 'Durable backpack with multiple compartments for travel',
        image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/20de33b9-8246-4e71-861a-353b819e5ece.png',
        price: 89.99,
        rating: 4.6,
        tags: ['backpack', 'travel', 'durable']
      },
      {
        id: 'tr2',
        title: 'Portable Water Filter',
        description: 'Clean drinking water anywhere you go',
        image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e1ef8ef3-8fb9-4c3e-b509-2b3110179a3e.png',
        price: 39.99,
        rating: 4.8,
        tags: ['water filter', 'outdoor', 'camping']
      },
      {
        id: 'tr3',
        title: 'Travel Photography Kit',
        description: 'Capture memories with professional-grade equipment',
        image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1125fa58-322c-4204-9c7d-513ab9dd9650.png',
        price: 199.99,
        rating: 4.7,
        tags: ['photography', 'travel', 'professional']
      }
    ]
  },
  {
    id: 'education',
    name: 'Education & Learning',
    slug: 'education',
    description: 'Resources and tools for continuous learning and growth',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1e11f483-b1c9-4183-b2dd-c92af1f29011.png',
    color: 'from-amber-400 to-yellow-600',
    icon: '📚',
    items: [
      {
        id: 'e1',
        title: 'Online Course Bundle',
        description: 'Comprehensive learning package for skill development',
        image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/157d8660-1b4f-422d-b93e-855ad109a24a.png',
        price: 99.99,
        rating: 4.8,
        tags: ['online learning', 'skills', 'courses']
      },
      {
        id: 'e2',
        title: 'Study Planner Set',
        description: 'Organize your learning journey with structured planning',
        image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/61dc214a-de79-4cfd-bba1-949b98d0d5c9.png',
        price: 24.99,
        rating: 4.5,
        tags: ['planning', 'organization', 'study']
      },
      {
        id: 'e3',
        title: 'Language Learning Kit',
        description: 'Interactive tools for mastering new languages',
        image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/04b5814e-4797-47bb-89a3-0005a507d18c.png',
        price: 49.99,
        rating: 4.6,
        tags: ['language', 'interactive', 'multilingual']
      }
    ]
  }
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(category => category.slug === slug);
}

export function searchCategories(query: string): Category[] {
  if (!query.trim()) return categories;
  
  const lowercaseQuery = query.toLowerCase();
  return categories.filter(category => 
    category.name.toLowerCase().includes(lowercaseQuery) ||
    category.description.toLowerCase().includes(lowercaseQuery) ||
    category.items.some(item => 
      item.title.toLowerCase().includes(lowercaseQuery) ||
      item.description.toLowerCase().includes(lowercaseQuery) ||
      item.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
    )
  );
}

export function getFilteredCategories(categorySlug?: string): Category[] {
  if (!categorySlug) return categories;
  const category = getCategoryBySlug(categorySlug);
  return category ? [category] : [];
}