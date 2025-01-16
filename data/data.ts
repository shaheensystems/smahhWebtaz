import { Content } from '@/interface/content'

export const contentIndexes: Content[] = [
  {
    title: "Services",
    description:"Explore our range of expert cybersecurity services tailored to protect your organisation's data and systems.",
    links: [
      { 
        title: "Cybersecurity Audit",
        subTitle: "Our Cybersecurity Audit identifies vulnerabilities, ensuring your systems are secure and compliant.", 
        href: "/services/cybersecurity-audit",
        description: "Our Cybersecurity Audit service thoroughly assesses your organisation’s systems to identify potential vulnerabilities and risks. We evaluate network security, data protection protocols, and compliance with industry regulations. Through detailed analysis, we provide actionable insights to strengthen your defences, ensuring your business is protected from evolving cyber threats. This proactive approach helps prevent breaches, safeguards sensitive data, and ensures business continuity.",
        image: '/assets/home-service1.png'
      },
      {
        title: "Incident Response",
        subTitle: "Rapid, expert incident response to swiftly manage and resolve security issues.",
        href: "/services/incident-response",
        description: "Our incident response service provides swift and expert handling of security incidents. We offer immediate support to identify, contain, and resolve threats, ensuring minimal disruption to your operations. Our team of experienced professionals employs advanced tools and techniques to manage and mitigate risks, restoring your systems to normalcy while providing clear communication throughout the process. Trust us to protect your assets and maintain your business continuity.",
        image: '/assets/home-service2.png'
      },
      {
        title: "Cloud Security",
        subTitle: "Protect your data with robust cloud security solutions for safe, reliable access",
        href: "/services/cloud-security",
        description: "Ensure your data is secure with our comprehensive cloud security solutions. We provide robust protection against cyber threats, including encryption, access controls, and real-time monitoring. Our team works to safeguard your cloud environment, ensuring data integrity and compliance with industry standards. With proactive threat detection and rapid response capabilities, we help you maintain safe, reliable access to your cloud-based resources and applications.",
        image: '/assets/home-service3.png'
      },
      {
        title: "Penetration Testing",
        subTitle: "Identify vulnerabilities with expert penetration testing for stronger security.",
        href: "/services/penetration-testing",
        description: "Enhance your security posture with our expert penetration testing services. We simulate real-world attacks to identify vulnerabilities in your systems before malicious actors can exploit them. Our detailed assessments help uncover weaknesses, providing actionable insights and recommendations to strengthen your security infrastructure. Trust our skilled team to deliver comprehensive reports and guidance, ensuring your organisation remains protected against evolving threats.",
        image: '/assets/home-service4.png'
      },
      {
        title: "Cybersecurity Training",
        subTitle: "Empower your team with expert cybersecurity training to defend against threats.",
        href: "/services/cybersecurity-training",
        description: "Equip your team with essential skills through our expert cybersecurity training. We offer comprehensive courses designed to enhance your staff's ability to identify, prevent, and respond to cyber threats. Our training covers the latest security practices, threat landscapes, and compliance requirements, ensuring your organisation stays ahead of evolving risks. Invest in your team's knowledge to protect your assets and maintain robust security protocols.",
        image: '/assets/home-service5.png'
      },
      {
        title: "Professional IT Services",
        subTitle: "Reliable professional IT services to optimise your technology and support growth.",
        href: "/services/professional-it-services",
        description: "Experience top-notch support with our professional IT services, tailored to optimise your technology and support your business's growth. From managing infrastructure to providing strategic IT solutions, our expert team ensures your systems run smoothly and efficiently. We offer comprehensive support, including network management, data security, and technology consulting, helping you navigate complex IT challenges while focusing on your core business goals. Trust us for reliable, scalable IT solutions.",
        image: '/assets/home-service6.png'
      },
    ],
  },
  {
    title: "Resources",
    description:"Access valuable resources to stay informed and enhance your organisation's cybersecurity resilience.",
    links: [
      {
        id: 1,
        title: "Cybersecurity",
        subTitle: "Explore comprehensive guides and insights to strengthen your cybersecurity practices.",
        href: "/resources/cybersecurity",
        description: "Dive into expert articles, case studies, and tutorials to help you enhance your organisation's cybersecurity. Learn about the latest trends, best practices, and tools to mitigate risks and safeguard critical assets. Our resources provide actionable insights to keep you ahead of emerging threats, ensuring robust protection for your business and its data.",
        image: '/assets/resource1.png'
      },
      {
        id: 2,
        title: "Cyber Risk",
        subTitle: "Understand and manage cyber risks to protect your organisation effectively.",
        href: "/resources/cyber-risk",
        description: "Gain insights into identifying, assessing, and mitigating cyber risks. Explore in-depth analysis, strategies, and case studies to help you manage vulnerabilities and ensure compliance with regulatory requirements. Our resources equip you with the knowledge to develop effective risk management frameworks that safeguard your business operations and data assets.",
        image: '/assets/resource2.png'
      },
      {
        id: 3,
        title: "Cloud",
        subTitle: "Leverage secure cloud solutions to enhance productivity and data protection.",
        href: "/resources/cloud",
        description: "Discover the benefits of secure cloud solutions with our resources. From migration strategies to compliance guidelines, our materials help you optimise cloud-based systems while protecting your data. Learn about the latest tools and technologies that empower organisations to scale effectively while maintaining robust security protocols.",
        image: '/assets/resource3.png'
      },
      {
        id: 4,
        title: "Application Security",
        subTitle: "Protect your applications with effective security measures and insights.",
        href: "/resources/application-security",
        description: "Explore expert guidance on securing applications from development to deployment. Our resources provide valuable knowledge on identifying vulnerabilities, implementing protective measures, and ensuring ongoing security compliance. Learn how to protect critical applications against modern cyber threats, enabling secure and reliable performance for your users.",
        image: '/assets/resource4.png'
      },
      {
        id: 5,
        title: "Convenience",
        subTitle: "Simplify cybersecurity with our user-friendly solutions and resources.",
        href: "/resources/convenience",
        description: "Make cybersecurity management easier with our practical and user-friendly resources. From tools to best practices, we provide solutions that streamline security processes without compromising effectiveness. Our materials help you save time and effort while ensuring your organisation's systems remain secure and efficient.",
        image: '/assets/resource5.png'
      },
    ],
  },
  {
    title: "About",
    description:"Learn about our mission, values, and commitment to empowering organisations through cybersecurity.",
    links: [
      {
        title: "About Smahh",
        subTitle: "Discover our journey, vision, and dedication to cybersecurity excellence.",
        href: "/about"
      },
      {
        title: "Testimonials",
        subTitle: "Read what our clients say about their experience with us.",
        href: "/about/testimonials",
      },
      {
        title: "Blog",
        subTitle: "Stay updated with insights and news from the world of cybersecurity.",
        href: "/about/blog",
      },
      {
        title: "Careers",
        subTitle: "Join our team and make an impact in the cybersecurity industry.",
        href: "/about/careers",
      },
    ],
  },
  {
    title: "Contact",
    description:"Get in touch with us for expert cybersecurity support and solutions.",
    links: [
      {
        title: "Contact Us",
        subTitle: "Reach out to our team for assistance or inquiries.",
        href: "/contact",
      },
      {
        title: "Privacy Policy",
        subTitle: "Understand how we protect your data and ensure your privacy.",
        href: "/privacy",
      },
      {
        title: "Terms of Use",
        subTitle: "Learn about the terms governing the use of our services.",
        href: "/terms",
      },
    ],
  },
];
