import React from 'react'
import Image from 'next/image'
import Logo from '../public/assets/smahhLogo-footer.png'
import Link from 'next/link'
import Linkedin from '../public/assets/linkedin.png'

interface Link {
  title: string;
  href: string;
}

interface LinkItem {
  title: string;
  links: Link[];
}

const linkIndexes: LinkItem[] = [
  {
    title: "Services",
    links: [
      {
        title: "Cybersecurity Audit",
        href: "/services/cybersecurity-audit"
      },
      {
        title: "Incident Response",
        href: "/services/incident-response",
      },
      {
        title: "Cloud Security",
        href: "/services/cloud-security",
      },
      {
        title: "Penetration Testing",
        href: "/services/penetration-testing",
      },
      {
        title: "Cybersecurity Training",
        href: "/services/cybersecurity-training",
      },
      {
        title: "Professional It Services",
        href: "/services/professional-it-services",
      },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        title: "Cybersecurity",
        href: "/resources/cybersecurity"
      },
      {
        title: "Cyber Risk",
        href: "/resources/cyber-risk",
      },
      {
        title: "Cloud",
        href: "/resources/cloud",
      },
      {
        title: "Application Security",
        href: "/resources/application-security",
      },
      {
        title: "Convenience",
        href: "/resources/convenience",
      },
    ],
  },
  {
    title: "About",
    links: [
      {
        title: "About Smahh",
        href: "/about"
      },
      {
        title: "Our Partners",
        href: "/about/our-partners",
      },
      {
        title: "Testimonials",
        href: "/about/testimonials",
      },
      {
        title: "Blog",
        href: "/about/blog",
      },
      {
        title: "Careers",
        href: "/about/careers",
      },
    ],
  },
  {
    title: "Contact",
    links: [
      {
        title: "Location",
        href: "/contact"
      },
      {
        title: "Contact Us",
        href: "/contact",
      },
      {
        title: "Privacy Policy",
        href: "/privacy-policy",
      },
      {
        title: "Terms of Use",
        href: "/terms",
      },
    ],
  },
];


const Footer = () => {
  return (
    <div className='flex flex-row bg-midnight-900 w-full py-24 px-5 relative'>
      <div className='w-2/5'>
        <Image src={Logo} alt='Smahh Logo' />
        <div className='absolute bottom-5 left-5'>
          <Image src={Linkedin} alt='Linkedin Logo' />
          <p className='text-white pt-3'>© 2024 Smahh LTD.  All Rights Reserved</p>
        </div>
      </div>

      <div className='w-3/5 flex flex-row justify-around'>
        {linkIndexes?.map((item, index) => (
          <div key={index} className='1/4'>
            <h4 className="text-2xl text-white pb-4">{item.title}</h4>
            {item.links?.map((link, linkIndex) => (
              <Link
                key={linkIndex}
                href={link.href}
                className="block text-white font-extralight py-1 hover:text-midnight-300"
              >
                {link.title}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Footer