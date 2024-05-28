import React from 'react'
import PageTitle from '@/components/PageTitle'

interface privacyContent {
  title: string;
  description: string;
  items?: string[] | undefined;
  explanationList?: {
    title: string;
    detail: string;
  }[] | undefined;
}

const privacyList: privacyContent[] = [
  {
    title: "1. Information We Collect",
    description: "When you visit our Site and fill out the contact form, we collect the following personal information:",
    items: [ 'Name', 'Email Address', 'Inquiry Topic', 'Message'],
  },
  {
    title: "2. How We Use Your Information",
    description: "We use the information we collect in the following ways:",
    explanationList: [
      {  
        title: "To Communicate:",
        detail: "To respond to your inquiries and provide you with information or services you request."
      },
      {  
        title: "To Communicate:",
        detail: "To understand your needs and improve our offerings."
      },
      {  
        title: "For Legal and Compliance Purposes:",
        detail: "To comply with applicable laws and regulations."
      },
      
    ],
  },
  {
    title: "3. How We Share Your Information:",
    description: "We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information (PII) except in the following circumstances:",
    explanationList: [
      {  
        title: "With Service Providers:",
        detail: "We may share your information with third-party service providers who assist us in operating our Site or conducting our business, as long as those parties agree to keep this information confidential."
      },
      {  
        title: "For Legal Requirements:",
        detail: "We may release your information when we believe it is necessary to comply with the law, enforce our Site policies, or protect ours or others' rights, property, or safety."
      },      
    ],
  },
  {
    title: "4. Security of Your Information:",
    description: "We use administrative, technical, and physical security measures to protect your personal information. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.",
  },
  {
    title: "5. Cookies and Tracking Technologies:",
    description: "Our Site may use cookies and similar tracking technologies to enhance your experience. You can choose to disable cookies through your browser settings; however, this may affect the functionality of the Site.",
  },
  {
    title: "6. Your Privacy Rights:",
    description: "You have the right to:",
    explanationList: [
      {  
        title: "Access:",
        detail: "Request a copy of the personal information we hold about you."
      },
      {  
        title: "Correction:",
        detail: "Request correction of any inaccurate or incomplete information."
      },
      {  
        title: "Deletion:",
        detail: "Request deletion of your personal information, subject to certain legal exceptions."
      },
      {  
        title: "Opt-Out:",
        detail: "Opt-out of receiving any further communication from us."
      },  
    ],
  },
  {
    title: "7. Third-Party Links",
    description: "Our Site may contain links to third-party websites. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to review the privacy policies of any third-party sites you visit.",
  },
  {
    title: "8. Changes to This Privacy Policy",
    description: "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the 	&#8220;Effective Date&#8221; at the top. You are advised to review this Privacy Policy periodically for any changes.",
  },
  {
    title: "9. Contact Us",
    description: "If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at:",
    explanationList: [
      {  
        title: "Email:",
        detail: "info@smahh.com"
      },
      {  
        title: "Address:",
        detail: "Wellington, New Zealand"
      },
      {  
        title: "Phone:",
        detail: "+64202594363"
      },
    ],
  },
]


const Privacy = () => {
  return (
    <>
      <header>
        <PageTitle 
        title="Privacy Policy"
        description='Effective Date: 28th May 2024' />
      </header>
      <main className='px-10 py-20'>
        <div className='flex flex-col w-full lg:w-3/5 gap-14'>
          <div className='w-full'>
            <h4 className='text-2xl font-medium pb-3'>Your Privacy Matters</h4>
            <p>
              Smahh Limited. (&#8220;we,&#8221; &#8220;us,&#8221; &#8220;our&#8221;) is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard 
              your information when you visit our website [Website URL] 
              (the &#8220;Site&#8221;), particularly through the contact page. By using the Site, you agree to the collection 
              and use of information in accordance with this policy.
            </p>
          </div>
          {privacyList.map((item, index) => (
            <div key={index}>
              <h3 className='text-2xl font-semibold pb-3'>{item.title}</h3>
              <p className='pb-5'>{item.description}</p>
              {item.items?
                <ul className='list-disc pl-5'>
                  {item.items.map(list => <li key={list}>{list}</li>)}
                </ul>
              : null         
              }
              {item.explanationList?.map((list, index) => (
                <p key={index} className='py-1'>
                  <span className='font-bold pr-2'>{list.title}</span>{list.detail}
                </p>
              ))       
              }
            </div>
          ))}
          <p>By using our Site, you consent to this Privacy Policy.</p>
        </div>
      </main>
    </>
  )
}

export default Privacy