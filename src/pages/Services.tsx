import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Shield, Users, Award, FileText, Scale, Briefcase, CheckCircle, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: "Claims Management",
      description: "Comprehensive handling of insurance claims, from initial filing to final settlement.",
      features: ["Insurance Claims Processing", "Dispute Resolution", "Settlement Negotiation", "Claims Analysis"],
      price: "Starting at $500"
    },
    {
      icon: Scale,
      title: "Legal Consultation",
      description: "Expert legal advice from experienced attorneys across multiple practice areas.",
      features: ["Legal Strategy Development", "Case Assessment", "Risk Analysis", "Compliance Review"],
      price: "Starting at $300"
    },
    {
      icon: Briefcase,
      title: "Corporate Legal Services",
      description: "Complete legal support for businesses including contracts, compliance, and litigation.",
      features: ["Contract Drafting", "Corporate Compliance", "Employment Law", "Business Litigation"],
      price: "Custom Pricing"
    },
    {
      icon: FileText,
      title: "Document Review",
      description: "Thorough analysis and review of legal documents and contracts.",
      features: ["Contract Analysis", "Legal Document Preparation", "Risk Assessment", "Compliance Checking"],
      price: "Starting at $200"
    },
    {
      icon: Users,
      title: "Personal Injury Claims",
      description: "Specialized representation for personal injury and accident claims.",
      features: ["Accident Investigation", "Medical Record Review", "Settlement Negotiation", "Court Representation"],
      price: "Contingency Fee"
    },
    {
      icon: Award,
      title: "Litigation Support",
      description: "Complete litigation support services from case preparation to trial.",
      features: ["Case Strategy", "Evidence Gathering", "Expert Witnesses", "Trial Preparation"],
      price: "Custom Pricing"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "Free 30-minute consultation to understand your case and determine the best approach."
    },
    {
      step: "02", 
      title: "Case Assessment",
      description: "Thorough analysis of your situation with detailed strategy development."
    },
    {
      step: "03",
      title: "Action Plan",
      description: "Implementation of tailored legal strategy with regular progress updates."
    },
    {
      step: "04",
      title: "Resolution",
      description: "Successful case completion with maximum benefit for our clients."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-4">Our Services</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Comprehensive Legal Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            From claims management to complex litigation, our expert team provides 
            professional legal services tailored to your specific needs.
          </p>
          <Button asChild size="lg" className="btn-hero">
            <Link to="/contact">
              Get Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-8 hover:shadow-large transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-primary">{service.price}</span>
                  <Button asChild variant="outline">
                    <Link to="/contact">Learn More</Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Our Process</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How We Work With You
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our proven 4-step process ensures you get the best possible outcome for your case.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Expert Legal Help?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Don't navigate complex legal challenges alone. Our experienced team is here to help you achieve the best possible outcome.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="btn-hero">
              <Link to="/contact">Schedule Free Consultation</Link>
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

export default Services;