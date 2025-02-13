import React from 'react';
import { SiteHeader } from "@/components/site-header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bookmark, TrendingUp, Users, Clock } from "lucide-react";
import Link from "next/link";

const categories = [
  {
    name: "Technology",
    description: "Exploring the latest in tech innovations and digital trends",
    postCount: 24,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80",
    trending: true,
    featuredPost: {
      title: "The Future of AI in 2025",
      readTime: "8 min",
      authorCount: 2
    }
  },
  {
    name: "Lifestyle",
    description: "Tips and insights for balanced, mindful living",
    postCount: 18,
    image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&q=80",
    trending: false,
    featuredPost: {
      title: "Mindful Morning Routines",
      readTime: "6 min",
      authorCount: 1
    }
  },
  {
    name: "Writing",
    description: "Master the craft of writing and storytelling",
    postCount: 15,
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80",
    trending: true,
    featuredPost: {
      title: "Crafting Compelling Stories",
      readTime: "10 min",
      authorCount: 1
    }
  },
  {
    name: "Career Growth",
    description: "Strategies for professional development and success",
    postCount: 12,
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80",
    trending: false,
    featuredPost: {
      title: "Navigating Career Transitions",
      readTime: "7 min",
      authorCount: 3
    }
  },
  {
    name: "Personal Development",
    description: "Resources for continuous learning and growth",
    postCount: 20,
    image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80",
    trending: true,
    featuredPost: {
      title: "Building Better Habits",
      readTime: "5 min",
      authorCount: 1
    }
  },
  {
    name: "Book Reviews",
    description: "Thoughtful analysis of must-read books",
    postCount: 8,
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80",
    trending: false,
    featuredPost: {
      title: "Top Books of 2025",
      readTime: "12 min",
      authorCount: 2
    }
  }
];

export default function CategoriesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm mb-8">
          <ol className="list-none p-0 flex items-center">
            <li className="flex items-center">
              <Link href="/" className="text-muted-foreground hover:text-primary">
                Home
              </Link>
              <span className="mx-2 text-muted-foreground">/</span>
            </li>
            <li className="text-foreground font-medium">Categories</li>
          </ol>
        </nav>

        {/* Page Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore Topics</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover curated content across various categories, from technology insights to lifestyle tips
          </p>
        </div>

        {/* Featured Category */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <TrendingUp className="mr-2 h-6 w-6" />
            Trending Categories
          </h2>
          <div className="grid gap-6">
            {categories.filter(cat => cat.trending).map((category, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-64 md:h-80">
                  <div className="absolute inset-0">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-background/20" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary" className="bg-primary/10">
                        {category.postCount} Posts
                      </Badge>
                      <Badge variant="secondary" className="bg-accent/10">
                        Trending
                      </Badge>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                    <p className="text-muted-foreground mb-4">{category.description}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {category.featuredPost.readTime}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {category.featuredPost.authorCount} {category.featuredPost.authorCount === 1 ? 'Author' : 'Authors'}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* All Categories Grid */}
        <div>
          <h2 className="text-2xl font-bold mb-6">All Categories</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-48 object-cover rounded-md group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold">{category.name}</h3>
                        <Badge variant="secondary">
                          {category.postCount} Posts
                        </Badge>
                      </div>
                      <p className="text-muted-foreground">{category.description}</p>
                    </div>
                    <div className="pt-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Bookmark className="h-4 w-4 mr-1" />
                          Latest: {category.featuredPost.title}
                        </div>
                        <Button variant="ghost" size="sm" className="hover:bg-primary/10">
                          Explore
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}