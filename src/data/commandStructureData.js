// Structure Data Structure for CERPC
// This data structure represents the police command hierarchy

export const commandStructureData = {
  title: "Central East Roleplay Community",
  subtitle: "Structure & Organization",
  
  // Commander (Top Level)
  commander: {
    id: "commander",
    name: "Chief Michael Rodriguez",
    rank: "Chief Constable",
    title: "Chief Constable",
    badge: "CC-001",
    color: "#fbbf24",
    rankImage: "/assets/ranks/COMMANDER.png",
    responsibilities: [
      "Overall command of CERPC FiveM RP",
      "Strategic planning and direction",
      "Public relations and community engagement",
      "Budget and resource allocation",
      "Policy development and implementation"
    ]
  },
  
  // Chief Superintendents (Level 2)
  chiefSuperintendents: [
    {
      id: "frontline",
      name: "Chief Superintendent",
      title: "Frontline Operations",
      badge: "CS-001",
      color: "#6b7280",
      rankImage: "/assets/ranks/CHIEF SUPERINTENDENT.png",
      responsibilities: [
        "Frontline policing oversight",
        "Operational command",
        "Resource deployment"
      ]
    },
    {
      id: "netops",
      name: "Chief Superintendent",
      title: "Met Operations",
      badge: "CS-002",
      color: "#6b7280",
      rankImage: "/assets/ranks/CHIEF SUPERINTENDENT.png",
      responsibilities: [
        "Metropolitan operations",
        "Specialized units coordination",
        "Intelligence operations"
      ]
    },
    {
      id: "community",
      name: "Chief Superintendent",
      title: "Community Operations",
      badge: "CS-003",
      color: "#6b7280",
      rankImage: "/assets/ranks/CHIEF SUPERINTENDENT.png",
      responsibilities: [
        "Community engagement",
        "Public relations",
        "Neighborhood policing"
      ]
    }
  ],
  
  // Superintendents (Level 3)
  superintendents: [
    {
      id: "frontline-policy",
      name: "Superintendent",
      title: "Frontline Policing",
      badge: "SUP-001",
      color: "#8b5cf6",
      rankImage: "/assets/ranks/SUPERINTENDENT.png",
      responsibilities: [
        "Response unit coordination",
        "Patrol operations",
        "Emergency response",
        "Traffic enforcement"
      ]
    },
    {
      id: "detective-ops",
      name: "Superintendent",
      title: "Detective Operations",
      badge: "SUP-002",
      color: "#f59e0b",
      rankImage: "/assets/ranks/SUPERINTENDENT.png",
      responsibilities: [
        "Criminal investigations",
        "Forensic coordination",
        "Intelligence analysis",
        "Case management"
      ]
    },
    {
      id: "community-engagement",
      name: "Superintendent",
      title: "Community Engagement",
      badge: "SUP-003",
      color: "#06b6d4",
      rankImage: "/assets/ranks/SUPERINTENDENT.png",
      responsibilities: [
        "Community partnerships",
        "Public outreach",
        "Crime prevention programs",
        "Youth services"
      ]
    }
  ],
  
  // Inspectors (Level 4)
  inspectors: [
    {
      id: "response-inspector",
      name: "Inspector",
      title: "Response Operations",
      badge: "INS-001",
      color: "#ef4444",
      rankImage: "/assets/ranks/POLICE INSPECTOR.png",
      responsibilities: [
        "Response team leadership",
        "Incident command",
        "Training coordination",
        "Performance monitoring"
      ]
    },
    {
      id: "traffic-inspector",
      name: "Inspector",
      title: "Traffic Division",
      badge: "INS-002",
      color: "#f97316",
      rankImage: "/assets/ranks/POLICE INSPECTOR.png",
      responsibilities: [
        "Traffic enforcement",
        "Accident investigation",
        "Road safety programs",
        "Speed enforcement"
      ]
    },
    {
      id: "detective-inspector",
      name: "Inspector",
      title: "Detective Division",
      badge: "INS-003",
      color: "#8b5cf6",
      rankImage: "/assets/ranks/POLICE INSPECTOR.png",
      responsibilities: [
        "Criminal investigations",
        "Case supervision",
        "Evidence management",
        "Court proceedings"
      ]
    },
    {
      id: "community-inspector",
      name: "Inspector",
      title: "Community Relations",
      badge: "INS-004",
      color: "#10b981",
      rankImage: "/assets/ranks/POLICE INSPECTOR.png",
      responsibilities: [
        "Community policing",
        "Public engagement",
        "Crime prevention",
        "Youth programs"
      ]
    },
    {
      id: "chief-frontline",
      name: "Chief Inspector",
      title: "Frontline Policing",
      badge: "CI-001",
      color: "#92400e",
      parent: "frontline-policy",
      responsibilities: [
        "Frontline supervision",
        "Shift management",
        "Patrol oversight"
      ]
    },
    {
      id: "chief-netops",
      name: "Chief Inspector",
      title: "Net Operations",
      badge: "CI-002",
      color: "#dc2626",
      parent: "netops-coord",
      responsibilities: [
        "Net operations management",
        "Intelligence coordination",
        "Specialized operations"
      ]
    },
    {
      id: "inspector-emergency",
      name: "Inspector",
      title: "Emergency Response",
      badge: "INS-001",
      color: "#92400e",
      parent: "chief-frontline",
      responsibilities: [
        "Emergency response coordination",
        "Crisis management",
        "Resource deployment"
      ]
    },
    {
      id: "inspector-netops-a",
      name: "Inspector",
      title: "Net Operations A",
      badge: "INS-002",
      color: "#dc2626",
      parent: "chief-netops",
      responsibilities: [
        "Operations team A management",
        "Intelligence analysis",
        "Tactical coordination"
      ]
    },
    {
      id: "inspector-netops-b",
      name: "Inspector",
      title: "Net Operations B",
      badge: "INS-003",
      color: "#dc2626",
      parent: "chief-netops",
      responsibilities: [
        "Operations team B management",
        "Field operations",
        "Surveillance coordination"
      ]
    },
    {
      id: "inspector-netops-19",
      name: "Inspector",
      title: "Net Operations 19",
      badge: "INS-004",
      color: "#dc2626",
      parent: "chief-netops",
      responsibilities: [
        "Unit 19 operations",
        "Specialized missions",
        "Tactical support"
      ]
    },
    {
      id: "tactical-manager",
      name: "Tactical Team Manager",
      title: "London Ambulance Service",
      badge: "TTM-001",
      color: "#16a34a",
      parent: "joint-ops",
      responsibilities: [
        "Tactical team coordination",
        "Medical response integration",
        "Emergency medical operations"
      ]
    },
    {
      id: "inspector-contact",
      name: "Inspector",
      title: "Contact Centre",
      badge: "INS-005",
      color: "#6b7280",
      parent: "joint-ops",
      responsibilities: [
        "Contact center operations",
        "Call handling supervision",
        "Emergency dispatch coordination"
      ]
    },
    {
      id: "sub-officer",
      name: "Sub Officer",
      title: "London Fire Brigade",
      badge: "SO-001",
      color: "#92400e",
      parent: "joint-ops",
      responsibilities: [
        "Fire response coordination",
        "Emergency response integration",
        "Multi-agency operations"
      ]
    }
  ],
  
  // Sergeants (Level 5)
  sergeants: [
    {
      id: "sgt-emergency-e",
      name: "Sergeant",
      title: "Emergency Response (E)",
      badge: "SGT-001",
      color: "#1e40af",
      parent: "inspector-emergency",
      officers: [
        { name: "Constables", title: "Emergency Response (E)", badge: "PC-001", color: "#1e40af" }
      ]
    },
    {
      id: "sgt-emergency-c",
      name: "Sergeant",
      title: "Emergency Response (C)",
      badge: "SGT-002",
      color: "#1e40af",
      parent: "inspector-emergency",
      officers: [
        { name: "Constables", title: "Emergency Response (C)", badge: "PC-002", color: "#1e40af" }
      ]
    },
    {
      id: "sgt-emergency-w",
      name: "Sergeant",
      title: "Emergency Response (W)",
      badge: "SGT-003",
      color: "#1e40af",
      parent: "inspector-emergency",
      officers: [
        { name: "Constables", title: "Emergency Response (W)", badge: "PC-003", color: "#1e40af" }
      ]
    },
    {
      id: "sgt-netops-a",
      name: "Sergeant",
      title: "Net Operations A",
      badge: "SGT-004",
      color: "#1e40af",
      parent: "inspector-netops-a",
      officers: [
        { name: "Constables", title: "Net Operations A", badge: "PC-004", color: "#1e40af" }
      ]
    },
    {
      id: "sgt-netops-b",
      name: "Sergeant",
      title: "Net Operations B",
      badge: "SGT-005",
      color: "#1e40af",
      parent: "inspector-netops-b",
      officers: [
        { name: "Constables", title: "Net Operations B", badge: "PC-005", color: "#1e40af" }
      ]
    },
    {
      id: "sgt-netops-19",
      name: "Sergeant",
      title: "Net Operations 19",
      badge: "SGT-006",
      color: "#1e40af",
      parent: "inspector-netops-19",
      officers: [
        { name: "Constables", title: "Net Operations 19", badge: "PC-006", color: "#1e40af" }
      ]
    },
    {
      id: "team-manager",
      name: "Team Manager",
      title: "London Ambulance Service",
      badge: "TM-001",
      color: "#16a34a",
      parent: "tactical-manager",
      officers: [
        { name: "Paramedics", title: "London Ambulance Service", badge: "PARA-001", color: "#16a34a" }
      ]
    },
    {
      id: "sgt-contact",
      name: "Sergeant",
      title: "Contact Centre",
      badge: "SGT-007",
      color: "#6b7280",
      parent: "inspector-contact",
      officers: [
        { name: "Police Staff", title: "Contact Centre", badge: "PS-001", color: "#6b7280" }
      ]
    },
    {
      id: "leading-firefighter",
      name: "Leading Firefighter",
      title: "London Fire Brigade",
      badge: "LF-001",
      color: "#92400e",
      parent: "sub-officer",
      officers: [
        { name: "Firefighters", title: "London Fire Brigade", badge: "FF-001", color: "#92400e" }
      ]
    }
  ]
};

export default commandStructureData;
