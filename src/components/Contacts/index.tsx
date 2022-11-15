import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';

import Button from '@components/Button';
import Input from '@components/Input';
import Textarea from '@components/Textarea';

const Contacts: React.FC = () => {
  return (
    <section className="bg-gray-900 text-white text-center min-h-[calc(100vg - 70px)] font-light">
      <div
        className="container flex flex-col py-16 md:py-20 lg:py-24 md:px-20 lg:px-32 xl:px-44 2xl:px-52"
        id="contacts"
      >
        <div className="text-3xl font-bold text-left mb-10">
          <h2 className="withLine left inline" data-aos="fade-up">
            Contact
          </h2>
        </div>
        <form className="flex flex-col items-center" data-aos="fade-up">
          <Input
            placeholder="Name"
            type="text"
            className="mb-5 w-full max-w-md"
          />
          <Input
            placeholder="Email"
            type="email"
            className="mb-5 w-full max-w-md"
          />
          <Textarea
            placeholder="Your message"
            className="mb-5 w-full max-w-md min-h-[150px]"
          />
          <Button text="Submit" onClick={() => {}} />
        </form>
      </div>
    </section>
  );
};

export default Contacts;
