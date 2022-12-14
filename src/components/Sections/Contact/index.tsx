import {MailIcon} from '@heroicons/react/outline';
// import classNames from 'classnames';
import {FC, memo} from 'react';

import {SectionId} from '../../../data/data';
// import {ContactType, ContactValue} from '../../../data/dataDef';
// import FacebookIcon from '../../Icon/FacebookIcon';
// import GithubIcon from '../../Icon/GithubIcon';
// import InstagramIcon from '../../Icon/InstagramIcon';
// import LinkedInIcon from '../../Icon/LinkedInIcon';
// import TwitterIcon from '../../Icon/TwitterIcon';
import Section from '../../Layout/Section';
// import ContactForm from './ContactForm';

// const ContactValueMap: Record<ContactType, ContactValue> = {
//   [ContactType.Email]: {Icon: MailIcon, srLabel: 'Email'},
//   [ContactType.Phone]: {Icon: DeviceMobileIcon, srLabel: 'Phone'},
//   [ContactType.Location]: {Icon: LocationMarkerIcon, srLabel: 'Location'},
//   [ContactType.Github]: {Icon: GithubIcon, srLabel: 'Github'},
//   [ContactType.LinkedIn]: {Icon: LinkedInIcon, srLabel: 'LinkedIn'},
//   [ContactType.Facebook]: {Icon: FacebookIcon, srLabel: 'Facebook'},
//   [ContactType.Twitter]: {Icon: TwitterIcon, srLabel: 'Twitter'},
//   [ContactType.Instagram]: {Icon: InstagramIcon, srLabel: 'Instagram'},
// };

const Contact: FC = memo(() => {
  // const {headerText, description, items} = contact;
  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Contact}>
      <div className="flex flex-col gap-y-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center">
          <MailIcon className="hidden h-16 w-16 text-white md:block" />
          <h2 className="text-2xl font-bold text-white">Get in touch.</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* <div className="order-2 col-span-1 md:order-1 ">
            <ContactForm />
          </div> */}
          <div className="order-1 col-span-1 flex flex-col gap-y-4 md:order-2">
            <p className="bold prose italic leading-6 text-neutral-300">
              If you have a project idea in mind, please get in touch to
              <strong className="text-2xl text-stone-100"> joem10067@gmail.com</strong>
            </p>
            <p className="prose italic leading-6 text-neutral-300">
              I will be happy to discuss ideas with you and how we can work together.
            </p>
            <a href="mailto:joem10067@gmail.com">
              <button
                aria-label="Submit contact form"
                className="w-max rounded-full border-2 border-orange-600 bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-stone-800 focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-stone-800"
                type="submit">
                Send Message
              </button>
            </a>
            {/* <dl className="flex flex-col space-y-4 text-base text-neutral-500 sm:space-y-2">
              {items.map(({type, text, href}) => {
                const {Icon, srLabel} = ContactValueMap[type];
                return (
                  <div key={srLabel}>
                    <dt className="sr-only">{srLabel}</dt>
                    <dd className="flex items-center">
                      <a
                        className={classNames(
                          '-m-2 flex rounded-md p-2 text-neutral-300 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500',
                          {'hover:text-white': href},
                        )}
                        href={href}
                        target="_blank">
                        <Icon aria-hidden="true" className="h-4 w-4 flex-shrink-0 text-neutral-100 sm:h-5 sm:w-5" />
                        <span className="ml-3 text-sm sm:text-base">{text}</span>
                      </a>
                    </dd>
                  </div>
                );
              })}
            </dl> */}
          </div>
        </div>
      </div>
    </Section>
  );
});

Contact.displayName = 'About';
export default Contact;
