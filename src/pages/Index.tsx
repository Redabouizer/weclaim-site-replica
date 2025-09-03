import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Users, Award, CheckCircle } from "lucide-react";
import heroBuildingImage from "@/assets/hero-building.jpg";

const Index = () => {
  const services = [
    {
      icon: Shield,
      title: "Claims Management",
      description: "Expert handling of insurance claims and disputes with proven results."
    },
    {
      icon: Users,
      title: "Legal Consultation",
      description: "Professional legal advice from experienced attorneys and counselors."
    },
    {
      icon: Award,
      title: "Corporate Services",
      description: "Comprehensive legal support for businesses of all sizes."
    }
  ];

  const stats = [
    { value: "98%", label: "Success Rate" },
    { value: "500+", label: "Cases Won" },
    { value: "15+", label: "Years Experience" },
    { value: "$50M+", label: "Claims Recovered" }
  ];

  const awards = [
    { year: "2024", title: "Best Claims Management Firm" },
    { year: "2023", title: "Excellence in Legal Services" },
    { year: "2022", title: "Top Corporate Law Practice" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBuildingImage}
            alt="Professional office building"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/80"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
            Professional Claims Services
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Your Claims Journey
            <br />
            <span className="gradient-text bg-gradient-to-r from-accent to-yellow-400 bg-clip-text text-transparent">
              Starts Here!
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90">
            WeClaim specializes in comprehensive claims management and legal services. 
            Our expert team helps businesses and individuals navigate complex legal challenges with proven expertise.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg" className="btn-hero text-lg px-8 py-6">
              <Link to="/contact">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Our Services</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Legal Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From claims management to corporate legal services, we provide expert solutions 
              tailored to your specific needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-medium transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Recognition</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Award-Winning Excellence
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {awards.map((award, index) => (
              <Card key={index} className="p-6 text-center border-l-4 border-l-primary">
                <div className="flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-accent mr-3" />
                  <Badge variant="secondary">{award.year}</Badge>
                </div>
                <h3 className="font-semibold">{award.title}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact our expert team today for a free consultation and discover how 
            WeClaim can help with your legal and claims management needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="btn-hero">
              <Link to="/contact">
                Schedule Consultation
                <CheckCircle className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/case-studies">View Success Stories</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
