import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Award, History, Target, Heart, Lightbulb, Zap } from "lucide-react";

const About = () => {
  const timeline = [
    { year: "1999", event: "Création de l'agence", description: "Naissance dans l'écosystème digital français" },
    { year: "2005", event: "Première certification Google", description: "Reconnaissance de notre expertise SEA" },
    { year: "2010", event: "Expansion nationale", description: "Ouverture de bureaux dans toute la France" },
    { year: "2015", event: "100 collaborateurs", description: "Croissance de l'équipe et des compétences" },
    { year: "2020", event: "Leader digital", description: "Plus de 500 clients accompagnés" },
    { year: "2024", event: "Innovation IA", description: "Intégration de l'IA dans nos processus" }
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Transparence",
      description: "Une communication claire et honnête avec tous nos partenaires, clients et collaborateurs.",
      color: "bg-red-100"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Créativité",
      description: "L'innovation et la créativité au cœur de chaque stratégie pour des résultats exceptionnels.",
      color: "bg-yellow-100"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Agilité",
      description: "Adaptation rapide aux évolutions du marché digital et aux besoins spécifiques de chaque client.",
      color: "bg-blue-100"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Innovation",
      description: "Recherche constante des meilleures technologies et méthodes pour optimiser les performances.",
      color: "bg-green-100"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-8 text-primary border-primary/30">
            Nous découvrir
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            Une agence digitale qui fait{" "}
            <span className="yellow-highlight">la différence</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Depuis plus de 25 ans, WeClaim accompagne les entreprises dans leur transformation digitale 
            avec passion, expertise et innovation. Découvrez notre histoire, nos valeurs et notre vision.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="btn-noiise text-lg px-8 py-4">
              <Link to="/contact">
                Travaillons ensemble
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild className="btn-secondary text-lg px-8 py-4">
              <Link to="/team">Rencontrer l'équipe</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Notre Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Faire entendre la voix de nos clients dans le brouhaha digital actuel. 
                Nous créons des stratégies sur-mesure qui génèrent de la valeur et des performances mesurables.
              </p>
              <p className="text-lg text-muted-foreground">
                Chaque projet est une symphonie où discipline, subtilité et excellence 
                s'orchestrent pour créer une mélodie parfaite entre votre marque et votre public.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop"
                alt="Notre mission"
                className="w-full h-80 object-cover rounded-lg shadow-soft"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Nos Valeurs
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Les piliers qui guident chacune de nos actions et décisions au quotidien
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-white shadow-soft hover:shadow-medium transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 ${value.color} rounded-2xl flex items-center justify-center text-primary mx-auto mb-4`}>
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Prêt à faire partie de notre histoire ?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Rejoignez les 500+ entreprises qui nous font confiance pour leur croissance digitale.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4">
              <Link to="/contact">
                Démarrer un projet
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
              <Link to="/case-studies">Voir nos réalisations</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;