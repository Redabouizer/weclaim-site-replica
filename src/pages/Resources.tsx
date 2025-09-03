import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { FileText, Download, Clock, User, BookOpen, Video, Headphones, ArrowRight, Scale, Shield, Users } from "lucide-react";

const Resources = () => {
  const resources = [
    {
      category: "Guides & Whitepapers",
      icon: BookOpen,
      items: [
        {
          title: "Complete Guide to Insurance Claims",
          description: "Comprehensive 40-page guide covering everything from filing to settlement.",
          type: "PDF Guide",
          downloadCount: "2.3k",
          readTime: "15 min"
        },
        {
          title: "Understanding Personal Injury Law",
          description: "Essential information for accident victims and their families.",
          type: "Whitepaper", 
          downloadCount: "1.8k",
          readTime: "12 min"
        },
        {
          title: "Corporate Legal Compliance Checklist",
          description: "Step-by-step checklist for businesses to ensure legal compliance.",
          type: "Checklist",
          downloadCount: "3.1k",
          readTime: "8 min"
        }
      ]
    },
    {
      category: "Legal Templates",
      icon: FileText,
      items: [
        {
          title: "Employment Contract Template", 
          description: "Professionally drafted template for standard employment agreements.",
          type: "Template",
          downloadCount: "4.2k",
          readTime: "5 min"
        },
        {
          title: "Non-Disclosure Agreement (NDA)",
          description: "Comprehensive NDA template for business relationships.",
          type: "Template",
          downloadCount: "5.7k", 
          readTime: "3 min"
        },
        {
          title: "Demand Letter Templates",
          description: "Collection of professional demand letter templates for various situations.",
          type: "Template Pack",
          downloadCount: "2.9k",
          readTime: "10 min"
        }
      ]
    },
    {
      category: "Video Resources",
      icon: Video,
      items: [
        {
          title: "How to File an Insurance Claim",
          description: "Step-by-step video walkthrough of the claims filing process.",
          type: "Video",
          downloadCount: "8.1k",
          readTime: "18 min"
        },
        {
          title: "Understanding Your Legal Rights",
          description: "Educational video series covering fundamental legal rights.",
          type: "Video Series",
          downloadCount: "6.4k",
          readTime: "45 min"
        },
        {
          title: "Workplace Injury: Know Your Options",
          description: "Comprehensive overview of options following workplace injuries.",
          type: "Webinar",
          downloadCount: "3.7k",
          readTime: "35 min"
        }
      ]
    }
  ];

  const blogPosts = [
    {
      title: "5 Common Mistakes in Insurance Claims That Cost You Money",
      excerpt: "Learn about the most frequent errors people make when filing insurance claims and how to avoid them.",
      category: "Insurance",
      author: "Sarah Johnson",
      readTime: "6 min read",
      date: "March 15, 2024"
    },
    {
      title: "Understanding Statute of Limitations in Personal Injury Cases", 
      excerpt: "Important deadlines every accident victim needs to know to protect their legal rights.",
      category: "Personal Injury",
      author: "Carlos Rodriguez",
      readTime: "8 min read", 
      date: "March 12, 2024"
    },
    {
      title: "Corporate Compliance: New Regulations for 2024",
      excerpt: "Stay ahead of the curve with our breakdown of important regulatory changes affecting businesses.",
      category: "Corporate Law",
      author: "Michelle Davis",
      readTime: "10 min read",
      date: "March 8, 2024"
    }
  ];

  const faqs = [
    {
      question: "How long do I have to file a personal injury claim?",
      answer: "The statute of limitations varies by state and type of case, but typically ranges from 1-3 years from the date of injury. It's crucial to consult with an attorney as soon as possible to protect your rights."
    },
    {
      question: "What should I do immediately after an accident?",
      answer: "Seek medical attention first, then document the scene, gather witness information, report the incident to relevant authorities, and contact a qualified attorney to discuss your options."
    },
    {
      question: "How much does it cost to hire WeClaim?",
      answer: "We offer free initial consultations for most cases. Our fee structure varies by case type - many personal injury cases are handled on contingency (no fee unless we win), while other services may have hourly or flat fees."
    },
    {
      question: "Can you help with cases outside your local area?",
      answer: "Yes, we handle cases across multiple states and have a network of qualified associates. We can advise you on jurisdiction and the best approach for your specific situation."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-4">Legal Resources</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Knowledge is Your Best Defense
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Access our comprehensive library of legal guides, templates, and educational 
            materials designed to help you understand your rights and make informed decisions.
          </p>
          <Button asChild size="lg" className="btn-hero">
            <Link to="#resources">
              Explore Resources
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Resource Categories */}
      <section id="resources" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {resources.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <category.icon className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">{category.category}</h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, itemIndex) => (
                  <Card key={itemIndex} className="p-6 hover:shadow-medium transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <Badge variant="secondary">{item.type}</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Download className="h-4 w-4 mr-1" />
                        {item.downloadCount}
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{item.description}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" />
                        {item.readTime}
                      </div>
                      <Button size="sm" variant="outline">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Latest Articles</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Legal Insights & Updates
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stay informed with our latest articles on legal trends, case updates, and practical advice.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-large transition-shadow">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline">{post.category}</Badge>
                    <span className="text-sm text-muted-foreground">{post.readTime}</span>
                  </div>

                  <h3 className="text-lg font-semibold mb-3">{post.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>{post.author}</span>
                    </div>
                    <span className="text-muted-foreground">{post.date}</span>
                  </div>

                  <Button variant="outline" size="sm" className="w-full mt-4">
                    Read Article
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="#blog">View All Articles</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">FAQ</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find answers to common legal questions and concerns.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-semibold mb-3 flex items-start">
                  <Scale className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  {faq.question}
                </h3>
                <p className="text-muted-foreground ml-8">{faq.answer}</p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Don't see your question answered?
            </p>
            <Button asChild className="btn-hero">
              <Link to="/contact">Ask Our Experts</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Personalized Legal Advice?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            While our resources provide valuable information, every legal situation is unique. 
            Get personalized advice from our experienced attorneys.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Free Consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              <Link to="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Resources;