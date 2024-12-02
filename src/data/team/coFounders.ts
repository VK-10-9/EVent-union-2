export interface TeamMember {
  name: string;
  role: string;
  profession: string;
  image: string;
  description: string;
  location?: string;
  email?: string;
  socialLinks?: {
    platform: string;
    url: string;
    icon: string;
  }[];
}

export const coFounders: TeamMember[] = [
  {
    name: 'Vishwanath K',
    role: 'Co-Founder',
    profession: 'Technical Lead',
    image: 'https://i.ibb.co/ctdykGT/your-image.jpg',
    description: 'Leading the technical vision and development of Event Union. Passionate about creating innovative solutions for event management.',
    location: 'Bengaluru, Karnataka',
    email: 'vishwanath@eventunion.co',
    socialLinks: [
      {
        platform: 'GitHub',
        url: 'https://github.com/VK-10-9',
        icon: 'https://cdn-icons-png.flaticon.com/512/25/25231.png'
      },
      {
        platform: 'LinkedIn',
        url: 'https://linkedin.com/in/vishwanath-koliwad-02514631b',
        icon: 'https://cdn-icons-png.flaticon.com/512/61/61109.png'
      }
    ]
  },
  {
    name: 'Arnav Goyal',
    role: 'Co-Founder',
    profession: 'Business Strategy',
    image: 'https://static.wixstatic.com/media/bcd64e_957bc8b7d16c406eab62b7f30c3a9f84~mv2.png',
    description: 'Driving business strategy and growth at Event Union. Focused on building meaningful connections in the event industry.',
    location: 'Bengaluru, Karnataka',
    email: 'arnav@eventunion.co',
    socialLinks: [
      {
        platform: 'LinkedIn',
        url: 'https://www.linkedin.com/in/arnav2580/',
        icon: 'https://cdn-icons-png.flaticon.com/512/61/61109.png'
      },
      {
        platform: 'GitHub',
        url: 'https://github.com/Arnav2580',
        icon: 'https://cdn-icons-png.flaticon.com/512/25/25231.png'
      }
    ]
  }
];