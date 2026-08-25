export interface SocialLinkItem {
  name: string;
  url: string;
  iconName: string;
  label: string;
  isPrimary?: boolean;
}

export const socialLinks: SocialLinkItem[] = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/sanjay-muhilarasu-b08124279',
    iconName: 'Linkedin',
    label: 'linkedin.com/in/sanjay-muhilarasu-b08124279',
    isPrimary: true,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/SanjayMuhil',
    iconName: 'Github',
    label: 'github.com/SanjayMuhil',
    isPrimary: true,
  },
  {
    name: 'Email',
    url: 'mailto:sanjay.muhilarasu@gmail.com',
    iconName: 'Mail',
    label: 'sanjay.muhilarasu@gmail.com',
    isPrimary: true,
  },
];

export const resumeDownloadPath = '/Sanjay.Muhilarasu_update.pdf';
export const resumeFilename = 'Sanjay_Muhilarasu_Resume.pdf';
