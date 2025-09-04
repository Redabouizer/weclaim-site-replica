import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white mt-16">
      {/* CTA Section - Noiise Style */}
      <section className="bg-gradient-to-r from-primary to-primary/90 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Vous êtes arrivé jusqu'ici ?
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            N'en restons pas là.
          </h3>
          <p className="text-lg mb-8 max-w-3xl mx-auto text-white/90">
            Vous souhaitez en savoir plus sur nos expertises, notre agence digitale et les talents qui l'animent 
            ? Venez discuter avec eux de votre projet et obtenir des solutions pertinentes !
          </p>
          <div className="bg-white rounded-lg inline-block">
            <Link 
              to="/contact" 
              className="inline-flex items-center text-primary font-semibold px-6 py-3 hover:text-primary/80 transition-colors"
            >
              Demandez un devis
              <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-3xl font-bold text-foreground tracking-tight">
                WeClaim
              </span>
            </Link>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Agences */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Les Agences WeClaim</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/agences" className="text-muted-foreground hover:text-primary transition-colors">Lyon</Link></li>
              <li><Link to="/agences" className="text-muted-foreground hover:text-primary transition-colors">Paris</Link></li>
              <li><Link to="/agences" className="text-muted-foreground hover:text-primary transition-colors">Casablanca</Link></li>
            </ul>
          </div>

          {/* Guides */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Guides</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/resources" className="text-muted-foreground hover:text-primary transition-colors">Qu'est-ce que le SEO ?</Link></li>
              <li><Link to="/resources" className="text-muted-foreground hover:text-primary transition-colors">Qu'est-ce que le SEA ?</Link></li>
            </ul>
          </div>

          {/* Ressources */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Ressources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/resources" className="text-muted-foreground hover:text-primary transition-colors">Livres blancs</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 WeClaim. Tous droits réservés.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Politique de confidentialité
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Mentions légales
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Politique de cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;