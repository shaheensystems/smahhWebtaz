import { ContactFormData } from '@/app/contact/ContactForm'
//import { FormData } from '@/components/ContactFormTest'
//import { Contact } from '@/interface/contact'

export function sendEmail(values: ContactFormData) {
  const apiEndpoint = '/api/email';

  fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify(values),
  })
    .then((res) => res.json())
    .then((response) => {
      alert(response.message);
    })
    .catch((err) => {
      alert(err);
    });
}