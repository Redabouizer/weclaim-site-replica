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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-soft transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Noiise style */}
          <Link to="/" className="flex items-center group">
            <span className="text-3xl font-bold text-foreground tracking-tight transition-all duration-300 group-hover:text-primary">
              <span className="gradient-text">We</span>Claim
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
                  className={`text-sm font-semibold transition-all duration-300 hover:text-primary flex items-center relative ${
                    isActive(item.href) ? "text-primary" : "text-muted-foreground"
                  } after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full`}
                >
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${
                      openDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  )}
                </Link>
                
                {/* Enhanced Dropdown Menu */}
                {item.hasDropdown && item.submenu && openDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-72 bg-white/95 backdrop-blur-md rounded-xl shadow-premium border border-border/50 py-3 z-50 animate-scale-in">
                    <div className="space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block px-5 py-3 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-200 rounded-lg mx-2 relative group"
                        >
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-primary/30 rounded-full mr-3 transition-all duration-200 group-hover:bg-primary group-hover:scale-150"></div>
                            {subItem.name}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button - Enhanced Noiise style */}
          <div className="hidden lg:flex items-center">
            <Button asChild className="btn-premium shadow-floating hover:shadow-premium transition-all duration-300">
              <Link to="/contact">
                <span className="relative z-10">Contactez-nous !</span>
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-300 shadow-soft hover:shadow-medium"
          >
            <div className="relative w-6 h-6">
              <Menu className={`h-6 w-6 absolute transition-all duration-300 ${isMenuOpen ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'}`} />
              <X className={`h-6 w-6 absolute transition-all duration-300 ${isMenuOpen ? 'rotate-0 opacity-100' : 'rotate-180 opacity-0'}`} />
            </div>
          </button>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden animate-slide-in-right">
            <div className="px-4 pt-4 pb-6 space-y-3 bg-white/95 backdrop-blur-md border-t border-border shadow-premium rounded-b-xl">
              {navigation.map((item, index) => (
                <div key={item.name} className="space-y-2">
                  <Link
                    to={item.href}
                    className={`block px-4 py-3 text-base font-semibold transition-all duration-300 rounded-xl ${
                      isActive(item.href)
                        ? "text-primary bg-primary/10 shadow-soft"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                    style={{animationDelay: `${index * 100}ms`}}
                  >
                    {item.name}
                  </Link>
                  
                  {/* Mobile Submenu */}
                  {item.submenu && (
                    <div className="ml-4 space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-200 rounded-lg"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="px-4 py-4">
                <Button asChild className="btn-premium w-full shadow-floating">
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