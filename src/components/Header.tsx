import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  const navigation = [
    {
      name: "Expertises",
      href: "/services",
      hasDropdown: true,
      submenu: [
        { name: "Ads - SEA & Social", href: "/services/ads" },
        { name: "Création de site internet", href: "/services/web-creation" },
        { name: "Social Media", href: "/services/social-media" },
        { name: "Webdesign", href: "/services/webdesign" },
        { name: "Web Analytics & Datas", href: "/services/analytics" },
        { name: "Marketing Digital", href: "/services/marketing-digital" }
      ]
    },
    { name: "Agences", href: "/agences", hasDropdown: false },
    { name: "Cas clients", href: "/case-studies", hasDropdown: false },
    {
      name: "Ressources",
      href: "/resources",
      hasDropdown: true,
      submenu: [
        { name: "Blog", href: "/blog" }
      ]
    },
    {
      name: "Nous découvrir",
      href: "/about",
      hasDropdown: true,
      submenu: [
        { name: "Notre histoire", href: "/about/history" },
        { name: "Nos récompenses", href: "/about/awards" },
        { name: "L'équipe", href: "/team" }
      ]
    }
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Noiise style */}
          <Link to="/" className="flex items-center">
            <span className="text-3xl font-bold text-foreground tracking-tight">
              WeClaim
            </span>
          </Link>

          {/* Desktop Navigation - Noiise style */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div 
                key={item.name} 
                className="relative group"
                onMouseEnter={() => item.hasDropdown && setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={item.href}
                  className={`text-sm font-medium transition-colors hover:text-primary flex items-center ${
                    isActive(item.href) ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {item.name}
                  {item.hasDropdown && <ChevronDown className="ml-1 h-4 w-4" />}
                </Link>
                
                {/* Dropdown Menu */}
                {item.hasDropdown && item.submenu && openDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-border py-2 z-50">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.href}
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button - Noiise style */}
          <div className="hidden lg:flex items-center">
            <Button asChild className="btn-noiise">
              <Link to="/contact">Contactez-nous !</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-muted-foreground hover:text-foreground transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-border">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button asChild className="btn-noiise w-full">
                  <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                    Contactez-nous !
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;