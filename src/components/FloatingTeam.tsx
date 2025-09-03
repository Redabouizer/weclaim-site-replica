import teamMember1 from "@/assets/team-member-1.jpg";
import teamMember2 from "@/assets/team-member-2.jpg";
import teamMember3 from "@/assets/team-member-3.jpg";
import teamMember4 from "@/assets/team-member-4.jpg";
import teamMember5 from "@/assets/team-member-5.jpg";
import teamMember6 from "@/assets/team-member-6.jpg";
import { TrendingUp, Users, Award, MessageSquare, Target, Zap } from "lucide-react";

const FloatingTeam = () => {
  const teamMembers = [
    { 
      id: 1, 
      image: teamMember1, 
      name: "Sarah J.", 
      icon: TrendingUp,
      color: "bg-primary"
    },
    { 
      id: 2, 
      image: teamMember2, 
      name: "Carlos R.", 
      icon: Users,
      color: "bg-secondary"
    },
    { 
      id: 3, 
      image: teamMember3, 
      name: "Michelle D.", 
      icon: Award,
      color: "bg-accent"
    },
    { 
      id: 4, 
      image: teamMember4, 
      name: "David K.", 
      icon: MessageSquare,
      color: "bg-success"
    },
    { 
      id: 5, 
      image: teamMember5, 
      name: "Emily C.", 
      icon: Target,
      color: "bg-secondary"
    },
    { 
      id: 6, 
      image: teamMember6, 
      name: "Robert W.", 
      icon: Zap,
      color: "bg-primary"
    }
  ];

  // Noiise.com style positioning - scattered around the viewport
  const positions = [
    { top: "8%", left: "3%" },
    { top: "20%", right: "5%" },
    { top: "35%", left: "2%" },
    { bottom: "25%", right: "4%" },
    { bottom: "12%", left: "6%" },
    { top: "55%", right: "2%" },
    { top: "70%", left: "4%" },
    { bottom: "40%", left: "1%" },
    { top: "12%", right: "15%" },
    { bottom: "60%", right: "8%" }
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {teamMembers.map((member, index) => {
        const position = positions[index] || positions[index % positions.length];
        return (
          <div
            key={member.id}
            className="absolute team-float hidden lg:block"
            style={position}
          >
            <div className="relative group">
              {/* Noiise-style floating badge with icon */}
              <div className={`absolute -top-1 -right-1 w-6 h-6 ${member.color} rounded-full flex items-center justify-center text-white shadow-lg z-10 border-2 border-white`}>
                <member.icon className="h-3 w-3" />
              </div>
              
              {/* Noiise-style profile image with shadow */}
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border-4 border-white shadow-team transition-all hover:scale-110 hover:shadow-large bg-white">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Noiise-style tooltip */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 opacity-0 group-hover:opacity-100 transition-all bg-white text-foreground text-xs px-3 py-2 rounded-lg shadow-medium whitespace-nowrap border border-border">
                <div className="font-semibold">{member.name}</div>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Additional scattered team members for fuller noiise effect */}
      {Array.from({ length: 4 }).map((_, index) => {
        const extraMember = teamMembers[index % teamMembers.length];
        const position = positions[index + 6] || { top: `${20 + index * 15}%`, right: `${3 + index * 2}%` };
        
        return (
          <div
            key={`extra-${index}`}
            className="absolute team-float hidden xl:block opacity-60"
            style={position}
          >
            <div className="relative">
              <div className={`absolute -top-1 -right-1 w-5 h-5 ${extraMember.color} rounded-full flex items-center justify-center text-white shadow-lg z-10 border-2 border-white`}>
                <extraMember.icon className="h-2.5 w-2.5" />
              </div>
              
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-team bg-white">
                <img 
                  src={extraMember.image} 
                  alt={extraMember.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FloatingTeam;