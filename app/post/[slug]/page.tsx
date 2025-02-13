import React from "react";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Clock,
  Calendar,
  Share2,
  Twitter,
  Linkedin,
  Facebook,
  BookmarkPlus,
  ThumbsUp,
  MessageSquare,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// Mock data for all blog posts (in a real app, this would come from your data source)
const posts = [
  {
    slug: "future-of-ai-2025",
    title: "The Future of AI in 2025",
    subtitle:
      "Exploring the transformative impact of artificial intelligence on society and technology",
    coverImage:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80",
    author: {
      name: "WinLeiEi",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80",
      bio: "Tech enthusiast and writer passionate about AI, web development, and digital transformation.",
    },
    publishedAt: "April 1, 2024",
    readingTime: "8 min read",
    category: "Technology",
    content: `
      <p class="text-lg leading-relaxed mb-6">
        Artificial Intelligence has become an integral part of our daily lives, transforming how we work, communicate, and solve problems. As we look ahead to 2025, the potential impact of AI continues to expand across industries.
      </p>

      <h2 class="text-2xl font-bold mb-4">The Evolution of AI Technologies</h2>
      
      <p class="text-lg leading-relaxed mb-6">
        The rapid advancement of machine learning algorithms and neural networks has paved the way for more sophisticated AI applications. From healthcare diagnostics to autonomous vehicles, AI is revolutionizing traditional processes and creating new possibilities.
      </p>

      <blockquote class="border-l-4 border-primary pl-4 italic my-8">
        "The future of AI lies not in replacing human intelligence, but in augmenting our capabilities to solve complex problems and make better decisions."
      </blockquote>

      <h2 class="text-2xl font-bold mb-4">Key Trends to Watch</h2>

      <p class="text-lg leading-relaxed mb-6">
        Several emerging trends are shaping the future of AI:
      </p>

      <ul class="list-disc list-inside space-y-2 mb-6">
        <li>Enhanced Natural Language Processing</li>
        <li>Automated Decision Making Systems</li>
        <li>Edge Computing Integration</li>
        <li>Ethical AI Development</li>
      </ul>

      <div class="bg-muted p-6 rounded-lg my-8">
        <h3 class="text-xl font-bold mb-3">🔍 Key Insight</h3>
        <p class="text-lg">
          As AI continues to evolve, the focus will shift towards creating more transparent and explainable systems that can work alongside humans effectively.
        </p>
      </div>
    `,
    tags: ["AI", "Technology", "Future Tech", "Machine Learning"],
    relatedPosts: [
      {
        title: "Understanding Machine Learning Basics",
        image:
          "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80",
        category: "Technology",
        readTime: "6 min",
      },
      {
        title: "Ethics in Artificial Intelligence",
        image:
          "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80",
        category: "Technology",
        readTime: "10 min",
      },
    ],
  },
  // Add more posts here as needed
];

// Generate static paths for all blog posts
export function generateStaticParams() {
  const paths = posts.map((post) => ({ slug: post.slug }));
  console.log("Generated paths:", paths);
  return paths;
}

// Get post data by slug
function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug) || null;
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl font-semibold text-red-500">Post not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>

      <main className="flex-1 container mx-auto px-4 -mt-32 relative z-10">
        {/* Breadcrumb */}
        <nav className="text-sm mb-8">
          <ol className="list-none p-0 flex items-center">
            <li className="flex items-center">
              <Link
                href="/"
                className="text-muted-foreground hover:text-primary"
              >
                Home
              </Link>
              <span className="mx-2 text-muted-foreground">/</span>
            </li>
            <li className="flex items-center">
              <Link
                href="/categories"
                className="text-muted-foreground hover:text-primary"
              >
                {post.category}
              </Link>
              <span className="mx-2 text-muted-foreground">/</span>
            </li>
            <li className="text-foreground font-medium truncate">
              {post.title}
            </li>
          </ol>
        </nav>

        {/* Article Header */}
        <div className="bg-card rounded-lg shadow-lg p-8 mb-8">
          <div className="max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              {post.category}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
              {post.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              {post.subtitle}
            </p>

            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center space-x-4">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div className="font-medium">{post.author.name}</div>
                  <div className="text-sm text-muted-foreground">
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.publishedAt}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <span className="flex items-center text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 mr-1" />
                  {post.readingTime}
                </span>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="icon">
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Facebook className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <article className="lg:col-span-8">
            <div className="bg-card rounded-lg shadow-lg p-8">
              <div
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Tags */}
              <div className="mt-8 pt-8 border-t">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Engagement Buttons */}
              <div className="mt-8 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Button variant="outline" className="space-x-2">
                    <ThumbsUp className="h-4 w-4" />
                    <span>Like</span>
                  </Button>
                  <Button variant="outline" className="space-x-2">
                    <BookmarkPlus className="h-4 w-4" />
                    <span>Save</span>
                  </Button>
                </div>
                <Button variant="outline" className="space-x-2">
                  <MessageSquare className="h-4 w-4" />
                  <span>Comment</span>
                </Button>
              </div>
            </div>

            {/* Author Bio */}
            <Card className="mt-8">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <h3 className="text-lg font-bold mb-2">
                      About {post.author.name}
                    </h3>
                    <p className="text-muted-foreground">{post.author.bio}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            {/* Related Posts */}
            <div className="bg-card rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Related Posts</h3>
              <div className="space-y-4">
                {post.relatedPosts.map((relatedPost, index) => (
                  <Card key={index} className="overflow-hidden">
                    <CardContent className="p-4">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-40 object-cover rounded-md mb-4"
                      />
                      <h4 className="font-medium mb-2">{relatedPost.title}</h4>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>{relatedPost.category}</span>
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {relatedPost.readTime}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">
                  Subscribe to Newsletter
                </h3>
                <p className="text-muted-foreground mb-4">
                  Get the latest posts delivered right to your inbox.
                </p>
                <form className="space-y-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 rounded-md border bg-background"
                  />
                  <Button className="w-full">Subscribe</Button>
                </form>
              </CardContent>
            </Card>
          </aside>
        </div>

        {/* Navigation */}
        <div className="mt-8 grid grid-cols-2 gap-4">
          <Button variant="outline" className="justify-start">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Previous Post
          </Button>
          <Button variant="outline" className="justify-end">
            Next Post
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </main>
    </div>
  );
}
