import teamMember1 from "@/assets/team-member-1.jpg";
import teamMember2 from "@/assets/team-member-2.jpg";
import teamMember3 from "@/assets/team-member-3.jpg";
import teamMember4 from "@/assets/team-member-4.jpg";
import teamMember5 from "@/assets/team-member-5.jpg";
import teamMember6 from "@/assets/team-member-6.jpg";

const FloatingTeam = () => {
  const teamMembers = [
    { 
      id: 1, 
      image: teamMember1, 
      name: "Sarah Johnson", 
      role: "Senior Claims Manager",
      color: "bg-primary"
    },
    { 
      id: 2, 
      image: teamMember2, 
      name: "Carlos Rodriguez", 
      role: "Legal Counsel",
      color: "bg-secondary"
    },
    { 
      id: 3, 
      image: teamMember3, 
      name: "Michelle Davis", 
      role: "Partner & Attorney",
      color: "bg-accent"
    },
    { 
      id: 4, 
      image: teamMember4, 
      name: "David Kim", 
      role: "Corporate Legal",
      color: "bg-primary"
    },
    { 
      id: 5, 
      image: teamMember5, 
      name: "Emily Chen", 
      role: "Associate Attorney",
      color: "bg-secondary"
    },
    { 
      id: 6, 
      image: teamMember6, 
      name: "Robert Wilson", 
      role: "Managing Partner",
      color: "bg-accent"
    }
  ];

  const positions = [
    { top: "10%", left: "5%" },
    { top: "25%", right: "8%" },
    { top: "45%", left: "3%" },
    { bottom: "30%", right: "5%" },
    { bottom: "15%", left: "7%" },
    { top: "60%", right: "3%" }
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {teamMembers.map((member, index) => (
        <div
          key={member.id}
          className={`absolute team-float hidden lg:block ${
            index % 2 === 0 ? "animate-pulse" : ""
          }`}
          style={positions[index]}
        >
          <div className="relative group">
            {/* Floating badge with icon */}
            <div className={`absolute -top-2 -right-2 w-8 h-8 ${member.color} rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg z-10`}>
              {member.role.charAt(0)}
            </div>
            
            {/* Profile image */}
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-4 border-white shadow-lg transition-transform hover:scale-110">
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity bg-foreground text-background text-xs px-2 py-1 rounded whitespace-nowrap">
              <div className="font-semibold">{member.name}</div>
              <div className="text-muted">{member.role}</div>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-foreground"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FloatingTeam;