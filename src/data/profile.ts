export interface PersonalInfo {
  name: string;
  title: string;
  roleBadges: string[];
  summary: string;
  shortBio: string;
  email: string;
  phone: string;
  location: string;
  availability: string;
  profileImage: string;
}

export const personalInfo: PersonalInfo = {
  name: 'Sanjay Muhilarasu',
  title: 'Frontend Developer | DevOps & AWS | Digital Marketing',
  roleBadges: ['Frontend Engineering', 'DevOps & AWS Cloud', 'Digital Marketing Growth'],
  summary:
    'DevOps enthusiast with foundational knowledge of Linux, Docker, Git, and CI/CD concepts, along with hands-on experience in deploying applications on AWS EC2 and managing containerized environments. Passionate about automation and building scalable and reliable systems. In addition, I have a growing interest in Digital Marketing, with basic knowledge of SEO, PPC, and Social Media Marketing. I enjoy creating engaging content, analyzing performance, and applying modern marketing strategies to improve online visibility and business growth.',
  shortBio:
    'Full Stack Frontend Developer and DevOps Specialist with hands-on experience building modern web platforms, deploying scalable cloud infrastructure on AWS EC2, and executing targeted digital marketing campaigns.',
  email: 'sanjay.muhilarasu@gmail.com',
  phone: '+91 6379471833',
  location: 'Chennai, India',
  availability: 'Open for Opportunities',
  profileImage: '/profile.jpg',
};
