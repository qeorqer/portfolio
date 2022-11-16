import React, { useState } from 'react';

import Button from '@components/Button';
import Input from '@components/Input';
import Textarea from '@components/Textarea';

const Contacts: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name && email && text) {
      try {
        await fetch(process.env.CONTACT_FORM_GCF_URL!, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            name,
            text,
          }),
        });
      } catch (err) {
        console.log(err);
      }
    }
  };

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
            value={name}
            setValue={setName}
            required
          />
          <Input
            placeholder="Email"
            type="email"
            className="mb-5 w-full max-w-md"
            value={email}
            setValue={setEmail}
            required
          />
          <Textarea
            placeholder="Your message"
            className="mb-5 w-full max-w-md min-h-[150px]"
            value={text}
            setValue={setText}
            required
          />
          <Button text="Submit" onClick={handleSubmit} type="submit" />
        </form>
      </div>
    </section>
  );
};

export default Contacts;
