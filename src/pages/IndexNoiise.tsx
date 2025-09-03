import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const IndexNoiise = () => {
  // Noiise.com client logos mockup
  const clientLogos = [
    "LES ARCS", "LEROY MERLIN Studio", "ClubMed", "vertbaudet", 
    "Les Galeries Lafayette Voyage", "BARNES", "King MARCEL"
  ];

  const awards = [
    { year: "2024", title: "Meilleure campagne SEA", category: "Gold" },
    { year: "2024", title: "Meilleure campagne search marketing", category: "Gold" },
    { year: "2022", title: "Meilleure campagne SEO", category: "Gold" },
    { year: "2020", title: "Meilleure campagne content marketing", category: "Gold" }
  ];

  return (
    <Layout>
      {/* Hero Section - Exact Noiise.com Layout */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
        
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Main Heading */}
          <div className="mb-6">
            <Badge variant="outline" className="mb-8 text-primary border-primary/30">
              Agence Digitale
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-foreground">
              Votre stratégie digitale va faire
              <br />
              <span className="inline-block">
                du{" "}
                <span className="yellow-highlight font-black">
                  claiiiiiim !
                </span>
              </span>
            </h1>
          </div>
          
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg md:text-xl mb-2 text-foreground">
              L'agence de marketing digital WeClaim accompagne les entreprises de toutes tailles et de tous les secteurs grâce à 
              ses <strong>expertises en acquisition et en création</strong>. Nos 85 consultants web passionnés imaginent et déploient votre
            </p>
            <p className="text-lg md:text-xl text-foreground">
              <strong>stratégie digitale dans une logique de performances et de rentabilité</strong>. Depuis 1999, au gré de la fusion d'acteurs 
              majeurs du web, notre agence digitale <strong>fait entendre la voix de ses clients et développe leur croissance</strong> sur 
              l'ensemble des leviers digitaux.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button asChild className="btn-noiise text-lg px-8 py-4">
              <Link to="/contact">
                Contactez-nous !
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button asChild className="btn-secondary text-lg px-8 py-4">
              <Link to="/about">Nous découvrir</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Client Logos - Noiise Style */}
      <section className="py-12 bg-white border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60">
            {clientLogos.map((logo, index) => (
              <div key={index} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section - Noiise Style */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-12">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2 text-primary">
                ✨ Nos expertises récompensées
              </h2>
            </div>
          </div>

          {/* Awards with Profile Image (Noiise style) */}
          <div className="flex items-center justify-center mb-16">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-team bg-primary">
              <img 
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
                alt="Award Winner"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="space-y-4">
              {awards.map((award, index) => (
                <div key={index} className="flex items-center justify-between bg-muted/50 rounded-lg p-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold">🏆</span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{award.year}</div>
                      <div className="text-sm text-muted-foreground">{award.title}</div>
                    </div>
                  </div>
                  <Badge variant="secondary">{award.category}</Badge>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Noiise Style */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Prêt à faire du{" "}
            <span className="yellow-highlight font-black">claiiiiiim</span> ?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contactez notre équipe d'experts dès aujourd'hui pour une consultation gratuite 
            et découvrez comment WeClaim peut transformer votre stratégie digitale.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="btn-noiise text-lg px-8 py-4">
              <Link to="/contact">
                Planifier une consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild className="btn-secondary text-lg px-8 py-4">
              <Link to="/case-studies">Voir nos succès</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IndexNoiise;