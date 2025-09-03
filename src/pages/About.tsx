import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Users, Award, Shield, Target, Heart, Scale } from "lucide-react";
import teamMember1 from "@/assets/team-member-1.jpg";
import teamMember2 from "@/assets/team-member-2.jpg";
import teamMember3 from "@/assets/team-member-3.jpg";
import teamMember4 from "@/assets/team-member-4.jpg";
import teamMember5 from "@/assets/team-member-5.jpg";
import teamMember6 from "@/assets/team-member-6.jpg";

const About = () => {
  const team = [
    {
      name: "Robert Wilson",
      role: "Managing Partner",
      image: teamMember6,
      bio: "25+ years of experience in corporate law and litigation with a proven track record of successful case outcomes."
    },
    {
      name: "Michelle Davis", 
      role: "Senior Partner",
      image: teamMember3,
      bio: "Expert in personal injury and insurance claims with over $20M recovered for clients in the past 5 years."
    },
    {
      name: "Sarah Johnson",
      role: "Senior Claims Manager", 
      image: teamMember1,
      bio: "Specialized in complex insurance claims and settlements with 15+ years of industry experience."
    },
    {
      name: "Carlos Rodriguez",
      role: "Lead Legal Counsel",
      image: teamMember2,
      bio: "Corporate legal expert with extensive experience in business law, contracts, and compliance matters."
    },
    {
      name: "David Kim",
      role: "Corporate Attorney",
      image: teamMember4,
      bio: "Focuses on mergers & acquisitions, corporate governance, and business dispute resolution."
    },
    {
      name: "Emily Chen",
      role: "Associate Attorney",
      image: teamMember5,
      bio: "Rising talent in employment law and civil litigation with a passion for client advocacy."
    }
  ];

  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "We maintain the highest ethical standards in all our professional dealings."
    },
    {
      icon: Target,
      title: "Excellence", 
      description: "We strive for exceptional results in every case we handle."
    },
    {
      icon: Heart,
      title: "Compassion",
      description: "We understand the personal impact of legal challenges and provide empathetic support."
    },
    {
      icon: Scale,
      title: "Justice",
      description: "We are committed to fighting for fair and just outcomes for all our clients."
    }
  ];

  const stats = [
    { value: "15+", label: "Years in Business" },
    { value: "500+", label: "Cases Won" },
    { value: "$50M+", label: "Recovered for Clients" },
    { value: "98%", label: "Success Rate" }
  ];

  return (
    <Layout showFloatingTeam={false}>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">About WeClaim</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Trusted Legal Experts Since 2009
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              WeClaim was founded with a simple mission: to provide exceptional legal services 
              and claims management while putting our clients' needs first. Today, we're proud 
              to be one of the most trusted legal firms in the region.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">Our Story</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Building Trust Through Excellence
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Founded in 2009 by Robert Wilson and Michelle Davis, WeClaim began as a small 
                practice focused on helping individuals navigate complex insurance claims. Over the 
                years, we've grown into a full-service legal firm while never losing sight of our 
                core values: integrity, excellence, and client-first service.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Today, our team of experienced attorneys and claims specialists has successfully 
                recovered over $50 million for our clients and maintained a 98% success rate 
                across all practice areas. We're proud to be the go-to legal partner for 
                businesses and individuals throughout the region.
              </p>
              <Button asChild className="btn-hero">
                <Link to="/contact">Work With Us</Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center">
                <Users className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Client-Focused</h3>
                <p className="text-sm text-muted-foreground">Every decision we make puts our clients first</p>
              </Card>
              <Card className="p-6 text-center">
                <Award className="h-8 w-8 text-secondary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Award-Winning</h3>
                <p className="text-sm text-muted-foreground">Recognized for excellence in legal services</p>
              </Card>
              <Card className="p-6 text-center">
                <Shield className="h-8 w-8 text-accent mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Trusted</h3>
                <p className="text-sm text-muted-foreground">15+ years of reliable legal representation</p>
              </Card>
              <Card className="p-6 text-center">
                <Target className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Results-Driven</h3>
                <p className="text-sm text-muted-foreground">Proven track record of successful outcomes</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Our Values</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Drives Us Every Day
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our core values guide every interaction, every case, and every decision we make.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-medium transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Our Team</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Our Expert Legal Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our experienced attorneys and legal professionals are dedicated to achieving 
              the best possible outcomes for our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-large transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <Badge variant="secondary" className="mb-4">{member.role}</Badge>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Work With Our Expert Team?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Contact us today for a free consultation and discover how our experienced 
            legal team can help you achieve your goals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              <Link to="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;