import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Linkedin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface TeamMember {
  id: number;
  nameKey: string;
  roleKey: string;
  image: string;
  bioKey: string;
  email: string;
  linkedin: string;
}

const teamMembersData: TeamMember[] = [
  {
    id: 1,
    nameKey: "team_member_1_name",
    roleKey: "team_member_1_role",
    image: "/images/Pic.jpg",
    bioKey: "team_member_1_bio",
    email: "Bimal.ranabhat@nepalcare.com",
    linkedin: "#"
  },
  {
    id: 2,
    nameKey: "team_member_2_name",
    roleKey: "team_member_2_role",
    image: "/images/pic2.jpg",
    bioKey: "team_member_2_bio",
    email: "priya.tamang@nepalcare.com",
    linkedin: "#"
  },
  {
    id: 3,
    nameKey: "team_member_3_name",
    roleKey: "team_member_3_role",
    image: "/images/Pic.jpg",
    bioKey: "team_member_3_bio",
    email: "ramesh.poudel@nepalcare.com",
    linkedin: "#"
  },
  {
    id: 4,
    nameKey: "team_member_4_name",
    roleKey: "team_member_4_role",
    image: "/images/pic2.jpg",
    bioKey: "team_member_4_bio",
    email: "sita.maharjan@nepalcare.com",
    linkedin: "#"
  }
];

const OurTeam: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-neutral-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h6 className="text-primary-500 font-medium mb-3">{t('our_team_tagline')}</h6>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-800">
            {t('our_team_title')}
          </h2>
          <p className="max-w-2xl mx-auto text-neutral-600">
            {t('our_team_subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembersData.map((member) => (
            <div key={member.id} className="bg-white rounded-lg shadow-md overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src={member.image} 
                  alt={t(member.nameKey)}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 text-neutral-800">{t(member.nameKey)}</h3>
                <p className="text-primary-500 font-medium mb-3">{t(member.roleKey)}</p>
                <p className="text-neutral-600 mb-4 text-sm">{t(member.bioKey)}</p>
                <div className="flex space-x-3">
                  <a 
                    href={`mailto:${member.email}`} 
                    className="p-2 bg-neutral-100 rounded-full text-neutral-600 hover:bg-primary-50 hover:text-primary-500 transition-colors"
                    aria-label={`${t('our_team_aria_email')}${t(member.nameKey)}`}
                  >
                    <Mail size={18} />
                  </a>
                  <a 
                    href={member.linkedin} 
                    className="p-2 bg-neutral-100 rounded-full text-neutral-600 hover:bg-primary-50 hover:text-primary-500 transition-colors"
                    aria-label={`${t(member.nameKey)}${t('our_team_aria_linkedin')}`}
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/contact" 
            className="inline-flex items-center py-3 px-6 rounded-md bg-primary-500 hover:bg-primary-600 text-white font-medium transition-colors"
          >
            {t('our_team_contact_button')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;