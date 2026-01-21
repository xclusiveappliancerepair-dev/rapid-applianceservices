import { Calendar, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Footer } from "@/components/footer"

const blogPosts = [
  {
    title: "The Ultimate Guide to Refrigerator Repair: Tips, Troubleshooting, and Professional Help",
    excerpt:
      "Professional Refrigerator Repair Services: Keeping Your Appliances Cool and Efficient. Refrigerators are essential household appliances that keep our food fresh and drinks cold. But like all appliances, they are prone to issues over time.",
    slug: "refrigerator-repair-professional-help",
    date: "November 19, 2024",
    image: "/refrigerator-repair.jpg",
  },
  {
    title:
      "What Type of Washing Machine Is Recommended for Home Use in Terms of Cost and Efficiency: Front Load or Top Load?",
    excerpt:
      "This article will explore the key differences between front-load and top-load washing machines to help you make an informed choice that balances cost and efficiency.",
    slug: "front-load-vs-top-load-washing-machine",
    date: "March 15, 2024",
    image: "/washing-machine-comparison.jpg",
  },
  {
    title: "Top 5 Common Cooktop Problems and How to Fix Them Yourself",
    excerpt:
      "Learn how to troubleshoot and fix common cooktop problems with step-by-step solutions. Save time and money with DIY cooktop repairs.",
    slug: "common-cooktop-problems-fix",
    date: "March 10, 2024",
    image: "/cooktop-repair.jpg",
  },
  {
    title: "Some Common Issues of Amana Appliance and Repair Solution",
    excerpt:
      "Discover common causes of Amana washer leaks and get professional repair solutions. Ensure a leak-free laundry experience.",
    slug: "amana-appliance-common-issues",
    date: "March 5, 2024",
    image: "/amana-appliance.jpg",
  },
  {
    title: "Essential Guide: Amana Appliance Care in Palm Springs",
    excerpt: "Amana Appliance Care – Troubleshooting, Maintenance and Finding Reliable Solutions for Your Home",
    slug: "amana-appliance-care-palm-springs",
    date: "February 28, 2024",
    image: "/appliance-maintenance.jpg",
  },
  {
    title: "The Dynamic Duo: The Crucial Role of Washer and Dryer Maintenance in Long-Term Savings",
    excerpt:
      "Let's explore why prioritizing maintenance for both washers and dryers is essential for long-term money-saving endeavors.",
    slug: "washer-dryer-maintenance-savings",
    date: "February 20, 2024",
    image: "/washer-dryer-maintenance.jpg",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white py-20">
        <div className="absolute inset-0 bg-[url('/abstract-tech-pattern.png')] opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Blog</h1>
            <p className="text-xl text-navy-100 text-pretty">
              Home & Commercial Appliance Repair Blog - Appliance Repair Service Palm Springs, CA
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-neutral-100 hover:shadow-xl transition-shadow group"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-neutral-500 mb-3">
                    <Calendar className="w-4 h-4" />
                    <time>{post.date}</time>
                  </div>
                  <h2 className="text-xl font-bold mb-3 text-navy-900 line-clamp-2 group-hover:text-coral-500 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-neutral-700 mb-4 line-clamp-3 leading-relaxed">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-coral-500 font-semibold hover:text-coral-600 transition-colors"
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
