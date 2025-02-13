import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  const featuredPosts = [
    {
      slug: "future-of-web-development",
      title: "The Future of Web Development",
      description:
        "Exploring the latest trends and technologies shaping the web development landscape in 2025.",
      category: "Technology",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
      date: "April 1, 2024",
    },
    {
      slug: "mindful-living-digital-age",
      title: "Mindful Living in a Digital Age",
      description:
        "Finding balance and maintaining wellness in our increasingly connected world.",
      category: "Lifestyle",
      image:
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80",
      date: "March 28, 2024",
    },
    {
      slug: "writing-tips-for-beginners",
      title: "Writing Tips for Beginners",
      description:
        "Essential writing techniques and practices for aspiring writers and content creators.",
      category: "Writing",
      image:
        "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80",
      date: "March 25, 2024",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="px-4 py-20 md:py-32 bg-gradient-to-b from-background to-muted">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
              Welcome to WinLeiEi's Blog
            </h1>
            <p className="text-xl text-muted-foreground max-w-[600px] mx-auto mb-8">
              Exploring ideas, sharing insights, and documenting the journey
              through technology, lifestyle, and creative writing.
            </p>
            <Button size="lg" asChild>
              <Link href="/latest">Start Reading</Link>
            </Button>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold tracking-tight mb-8">
              Featured Stories
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {featuredPosts.map((post, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="aspect-video relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm text-muted-foreground">
                        {post.date}
                      </span>
                      <span className="text-sm font-medium px-2 py-1 rounded-full bg-primary/10">
                        {post.category}
                      </span>
                    </div>
                    <CardTitle>{post.title}</CardTitle>
                    <CardDescription>{post.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="ghost" className="w-full" asChild>
                      <Link href={`/post/${post.slug}`}>Read More</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
