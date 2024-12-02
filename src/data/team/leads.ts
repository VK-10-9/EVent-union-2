export interface Lead {
  name: string;
  role: string;
  college?: string;
  zone?: string;
  description: string;
  socialLinks?: {
    platform: string;
    url: string;
    icon: string;
  }[];
}

export const collegeLeads: Lead[] = [
  {
    name: "Prateek Kumar",
    role: "College Lead",
    college: "RV College of Engineering",
    description: "Coordinating event activities and fostering student engagement at RVCE.",
    socialLinks: [
      {
        platform: "LinkedIn",
        url: "https://linkedin.com/in/prateek-kumar",
        icon: "https://cdn-icons-png.flaticon.com/512/61/61109.png"
      }
    ]
  },
  {
    name: "Shreya Sharma",
    role: "College Lead",
    college: "PES University",
    description: "Building and managing the Event Union community at PES University.",
    socialLinks: [
      {
        platform: "LinkedIn",
        url: "https://linkedin.com/in/shreya-sharma",
        icon: "https://cdn-icons-png.flaticon.com/512/61/61109.png"
      }
    ]
  },
  {
    name: "Aditya Verma",
    role: "College Lead",
    college: "BMS College of Engineering",
    description: "Leading event initiatives and student collaborations at BMSCE.",
    socialLinks: [
      {
        platform: "LinkedIn",
        url: "https://linkedin.com/in/aditya-verma",
        icon: "https://cdn-icons-png.flaticon.com/512/61/61109.png"
      }
    ]
  },
  {
    name: "Riya Patel",
    role: "College Lead",
    college: "Christ University",
    description: "Organizing and managing events at Christ University campus.",
    socialLinks: [
      {
        platform: "LinkedIn",
        url: "https://linkedin.com/in/riya-patel",
        icon: "https://cdn-icons-png.flaticon.com/512/61/61109.png"
      }
    ]
  },
  {
    name: "Varun Krishnan",
    role: "College Lead",
    college: "MSRIT",
    description: "Facilitating tech events and workshops at MSRIT.",
    socialLinks: [
      {
        platform: "LinkedIn",
        url: "https://linkedin.com/in/varun-krishnan",
        icon: "https://cdn-icons-png.flaticon.com/512/61/61109.png"
      }
    ]
  },
  {
    name: "Sneha Reddy",
    role: "College Lead",
    college: "NMIT",
    description: "Coordinating cultural and technical events at NMIT.",
    socialLinks: [
      {
        platform: "LinkedIn",
        url: "https://linkedin.com/in/sneha-reddy",
        icon: "https://cdn-icons-png.flaticon.com/512/61/61109.png"
      }
    ]
  },
  {
    name: "Akash Singh",
    role: "College Lead",
    college: "Dayananda Sagar College of Engineering",
    description: "Managing tech community and events at DSCE.",
    socialLinks: [
      {
        platform: "LinkedIn",
        url: "https://linkedin.com/in/akash-singh",
        icon: "https://cdn-icons-png.flaticon.com/512/61/61109.png"
      }
    ]
  },
  {
    name: "Neha Kumar",
    role: "College Lead",
    college: "New Horizon College of Engineering",
    description: "Organizing technical workshops and hackathons at NHCE.",
    socialLinks: [
      {
        platform: "LinkedIn",
        url: "https://linkedin.com/in/neha-kumar",
        icon: "https://cdn-icons-png.flaticon.com/512/61/61109.png"
      }
    ]
  },
  {
    name: "Rohan Joshi",
    role: "College Lead",
    college: "Sir M Visvesvaraya Institute of Technology",
    description: "Leading innovation and entrepreneurship initiatives at Sir MVIT.",
    socialLinks: [
      {
        platform: "LinkedIn",
        url: "https://linkedin.com/in/rohan-joshi",
        icon: "https://cdn-icons-png.flaticon.com/512/61/61109.png"
      }
    ]
  }
];

export const zonalLeads: Lead[] = [
  {
    name: "Rahul Mehta",
    role: "Zonal Lead",
    zone: "North Bangalore",
    description: "Coordinating events and community growth across North Bangalore colleges.",
    socialLinks: [
      {
        platform: "LinkedIn",
        url: "https://linkedin.com/in/rahul-mehta",
        icon: "https://cdn-icons-png.flaticon.com/512/61/61109.png"
      }
    ]
  },
  {
    name: "Priya Patel",
    role: "Zonal Lead",
    zone: "South Bangalore",
    description: "Managing community initiatives in South Bangalore educational institutions.",
    socialLinks: [
      {
        platform: "LinkedIn",
        url: "https://linkedin.com/in/priya-patel",
        icon: "https://cdn-icons-png.flaticon.com/512/61/61109.png"
      }
    ]
  },
  {
    name: "Karthik Raja",
    role: "Zonal Lead",
    zone: "East Bangalore",
    description: "Developing event strategies and partnerships in East Bangalore region.",
    socialLinks: [
      {
        platform: "LinkedIn",
        url: "https://linkedin.com/in/karthik-raja",
        icon: "https://cdn-icons-png.flaticon.com/512/61/61109.png"
      }
    ]
  },
  {
    name: "Arjun Nair",
    role: "Zonal Lead",
    zone: "West Bangalore",
    description: "Building community engagement and organizing events in West Bangalore area.",
    socialLinks: [
      {
        platform: "LinkedIn",
        url: "https://linkedin.com/in/arjun-nair",
        icon: "https://cdn-icons-png.flaticon.com/512/61/61109.png"
      }
    ]
  },
  {
    name: "Meera Singh",
    role: "Zonal Lead",
    zone: "Central Bangalore",
    description: "Coordinating inter-college events and activities in Central Bangalore.",
    socialLinks: [
      {
        platform: "LinkedIn",
        url: "https://linkedin.com/in/meera-singh",
        icon: "https://cdn-icons-png.flaticon.com/512/61/61109.png"
      }
    ]
  },
  {
    name: "Arun Kumar",
    role: "Zonal Lead",
    zone: "North-East Bangalore",
    description: "Facilitating collaboration between colleges in North-East Bangalore.",
    socialLinks: [
      {
        platform: "LinkedIn",
        url: "https://linkedin.com/in/arun-kumar",
        icon: "https://cdn-icons-png.flaticon.com/512/61/61109.png"
      }
    ]
  },
  {
    name: "Divya Sharma",
    role: "Zonal Lead",
    zone: "South-East Bangalore",
    description: "Managing student communities and events in South-East Bangalore region.",
    socialLinks: [
      {
        platform: "LinkedIn",
        url: "https://linkedin.com/in/divya-sharma",
        icon: "https://cdn-icons-png.flaticon.com/512/61/61109.png"
      }
    ]
  }
];