import React from 'react';
import { ProfileSection } from './ProfileSection';
import LeadSection from './team/LeadSection';

export default function Team() {
  const coFounders = [
    {
      name: 'Vishwanath K',
      role: 'Co-Founder',
      profession: 'Technical Lead',
      image: 'https://i.ibb.co/ctdykGT/your-image.jpg',
      description: 'Leading the technical vision and development of Event Union. Passionate about creating innovative solutions for event management.',
      location: 'Bengaluru, Karnataka',
      email: 'vishwanathkoliwad@gmail.com',
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
      email: 'arnav2580goyal@gmail.com',
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

  const coreTeam = [
    {
      name: 'Rahul Shastri',
      role: 'Core Team',
      profession: 'Marketing',
      image: 'https://static.wixstatic.com/media/bcd64e_1cdc6f8800db4fdea8f42ec434591e01~mv2.jpg',
      description: 'Leading marketing initiatives and brand development at Event Union.',
      location: 'Bengaluru, Karnataka',
      email: 'rahulshastri0126@gmail.com',
      socialLinks: [
        {
          platform: 'LinkedIn',
          url: 'https://www.linkedin.com/in/rahul-shastri-a84228318/',
          icon: 'https://cdn-icons-png.flaticon.com/512/61/61109.png'
        }
      ]
    },
    {
      name: 'Mukul Kashyap',
      role: 'Core Team',
      profession: 'Technical Lead',
      image: 'https://static.wixstatic.com/media/bcd64e_d4624a661fc64829afa308dbf9c3fbf4~mv2.png',
      description: 'Developing and maintaining the technical infrastructure of Event Union.',
      location: 'Bengaluru, Karnataka',
      email: 'mukul.kashyap.work@gmail.com',
      socialLinks: [
        {
          platform: 'LinkedIn',
          url: 'https://www.linkedin.com/in/mukul-kashyap-10703a30a/',
          icon: 'https://cdn-icons-png.flaticon.com/512/61/61109.png'
        },
        {
          platform: 'GitHub',
          url: 'https://github.com/GitH-Mukul',
          icon: 'https://cdn-icons-png.flaticon.com/512/25/25231.png'
        }
      ]
    },
    {
      name: 'Shashank Patil',
      role: 'Core Team',
      profession: 'Marketing',
      image: 'https://static.wixstatic.com/media/bcd64e_c3c3ac82c27345a4a9a8b1719f68f2c9~mv2.png',
      description: 'Managing marketing campaigns and user engagement strategies.',
      location: 'Bengaluru, Karnataka',
      email: 'theshashankp7@gmail.com',
      socialLinks: [
        {
          platform: 'LinkedIn',
          url: 'https://www.linkedin.com/in/shashank-patil-232881315/',
          icon: 'https://cdn-icons-png.flaticon.com/512/61/61109.png'
        }
      ]
    },
    {
      name: 'Himanshu Sharma',
      role: 'Core Team',
      profession: 'Product Manager',
      image: 'https://static.wixstatic.com/media/bcd64e_3b851cc01bc0403cb8d4fa738341df14~mv2.png',
      description: 'Overseeing product development and user experience optimization.',
      location: 'Bengaluru, Karnataka',
      email: 'moihimanshu@gmail.com',
      socialLinks: [
        {
          platform: 'LinkedIn',
          url: 'https://www.linkedin.com/in/himanshu-sharma-72a590272/',
          icon: 'https://cdn-icons-png.flaticon.com/512/61/61109.png'
        }
      ]
    }
  ];

  const clgLeads = [
    {
      name: "Vansh Goel",
      role: "College Lead",
      college: "IIT Gandhinagar, Gujarat",
      email: "goelvansh021@gmail.com",
      socialLinks: [
        {
          platform: 'LinkedIn',
          url: 'https://www.linkedin.com/in/vansh-goel-148007312',
          icon: 'https://cdn-icons-png.flaticon.com/512/61/61109.png'
        }
      ]
    },
    {
      name: "Vedanta Nalwad",
      role: "College Lead",
      college: "KLE IT, Hubli",
      email: "vedaarna2650@gmail.com",
      socialLinks: [
        {
          platform: 'LinkedIn',
          url: 'https://www.linkedin.com/in/vedanta-nalwad-956b12334/',
          icon: 'https://cdn-icons-png.flaticon.com/512/61/61109.png'
        }
      ]
    },
    {
      name: "Spoorti Umathar",
      role: "College Lead",
      college: "KLE Tech, Bangalore",
      email: "spoortiumathar74@gmail.com",
      socialLinks: [
        {
          platform: 'LinkedIn',
          url: 'https://www.linkedin.com/in/spoorti-umathar',
          icon: 'https://cdn-icons-png.flaticon.com/512/61/61109.png'
        }
      ]
    },
    {
      name: "G P LEKHANA",
      role: "College Lead",
      college: "SDM COLLEGE OF ENGINEERING AND TECHNOLOGY, Dharwad",
      email: "lekhana12789@gmail.com",
      socialLinks: [
        {
          platform: 'LinkedIn',
          url: 'https://www.linkedin.com/in/g-p-lekhana-440471301/',
          icon: 'https://cdn-icons-png.flaticon.com/512/61/61109.png'
        }
      ]
    },
    {
      name: "Rahul Shastri",
      role: "College Lead",
      college: "PES university, Bengaluru",
      email: "rahulshastri0126@gmail.com",
      socialLinks: [
        {
          platform: 'LinkedIn',
          url: 'https://www.linkedin.com/in/rahul-shastri-a84228318/',
          icon: 'https://cdn-icons-png.flaticon.com/512/61/61109.png'
        }
      ]
    },
    {
      name: "Bhavika Chaudhary",
      role: "College Lead",
      college: "Vistula University, Warsaw Poland",
      email: "bhavika.chaudhary.work@gmail.com",
      socialLinks: [
        {
          platform: 'LinkedIn',
          url: 'https://www.linkedin.com/in/bhavikach25',
          icon: 'https://cdn-icons-png.flaticon.com/512/61/61109.png'
        }
      ]
    }
  ];

  const zonalLeads = [
    {
      name: "Bhavika Chaudhary",
      role: "Zonal Lead",
      zone: "Global, Poland",
      email: "bhavika.chaudhary.work@gmail.com",
      socialLinks: [
        {
          platform: 'LinkedIn',
          url: 'https://www.linkedin.com/in/bhavikach25',
          icon: 'https://cdn-icons-png.flaticon.com/512/61/61109.png'
        }
      ]
    },
    {
      name: "Vansh Goel",
      role: "Zonal Lead",
      zone: "Gujarat",
      email: "goelvansh021@gmail.com",
      socialLinks: [
        {
          platform: 'LinkedIn',
          url: 'https://www.linkedin.com/in/vansh-goel-148007312',
          icon: 'https://cdn-icons-png.flaticon.com/512/61/61109.png'
        }
      ]
    },
    {
      name: "Raheel Hosmani",
      role: "Zonal Lead",
      zone: "Karnataka",
      email: "raheelhosmani05@gmail.com",
      socialLinks: [
        {
          platform: 'LinkedIn',
          url: 'https://www.linkedin.com/in/raheel-hosmani',
          icon: 'https://cdn-icons-png.flaticon.com/512/61/61109.png'
        }
      ]
    }
  ];

  return (
    <div className="py-12 sm:py-16 md:py-24 bg-blue-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
            Meet Our Team
          </h2>
          <p className="mt-3 sm:mt-4 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-gray-300">
            The passionate minds behind Event Union
          </p>
        </div>

        {/* Co-Founders Section */}
        <div className="space-y-8 sm:space-y-12 mb-12 sm:mb-16 md:mb-20">
          <h3 className="text-xl sm:text-2xl font-bold text-white text-center mb-6 sm:mb-8">Co-Founders</h3>
          <div className="grid gap-6 sm:gap-8">
            {coFounders.map((member) => (
              <ProfileSection
                key={member.name}
                name={member.name}
                title={member.profession}
                description={member.description}
                imageUrl={member.image}
                location={member.location}
                email={member.email}
                socialLinks={member.socialLinks}
              />
            ))}
          </div>
        </div>

        {/* Core Team Section */}
        <div className="space-y-8 sm:space-y-12 mb-12 sm:mb-16 md:mb-20">
          <h3 className="text-xl sm:text-2xl font-bold text-white text-center mb-6 sm:mb-8">Core Team</h3>
          <div className="grid gap-6 sm:gap-8">
            {coreTeam.map((member) => (
              <ProfileSection
                key={member.name}
                name={member.name}
                title={member.profession}
                description={member.description}
                imageUrl={member.image}
                location={member.location}
                email={member.email}
                socialLinks={member.socialLinks}
              />
            ))}
          </div>
        </div>

        {/* College Leads Section */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <LeadSection title="College Leads" leads={clgLeads} />
        </div>

        {/* Zonal Leads Section */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <LeadSection title="Zonal Leads" leads={zonalLeads} />
        </div>
      </div>
    </div>
  );
}