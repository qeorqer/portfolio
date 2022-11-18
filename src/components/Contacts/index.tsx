import React, { Dispatch, SetStateAction, useState } from 'react';
import { toast } from 'react-toastify';

import Button from '@components/Button';
import Input from '@components/Input';
import Textarea from '@components/Textarea';

const Contacts: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');
  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isTextValid, setIsTextValid] = useState(true);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const validateEmail = (mail: string): boolean => {
    const re = /\S+@\S+\.\S+/;
    return re.test(mail);
  };

  const highlightField = (setter: Dispatch<SetStateAction<boolean>>): void => {
    setter(false);
    setTimeout(() => {
      setter(true);
    }, 1000);
  };

  const handleSubmit = () => {
    if (!name) {
      highlightField(setIsNameValid);
    } else if (!email || !validateEmail(email)) {
      highlightField(setIsEmailValid);
    } else if (!text) {
      highlightField(setIsTextValid);
    } else {
      try {
        setIsButtonDisabled(true);

        fetch(process.env.GATSBY_CONTACT_FORM_GCF_URL!, {
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
        }).then(() => {
          setIsButtonDisabled(false);
          setName('');
          setEmail('');
          setText('');

          toast.success('Form submitted successfully!');
        });
      } catch (err) {
        setIsButtonDisabled(false);
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
        <form
          className="flex flex-col items-center"
          data-aos="fade-up"
          onSubmit={(e) => e.preventDefault()}
        >
          <Input
            placeholder="Name*"
            type="text"
            className="mb-5"
            value={name}
            setValue={setName}
            isValid={isNameValid}
          />
          <Input
            placeholder="Email*"
            type="email"
            className="mb-5"
            value={email}
            setValue={setEmail}
            isValid={isEmailValid}
          />
          <Textarea
            placeholder="Your message*"
            className="mb-5 w-full max-w-md min-h-[150px]"
            value={text}
            setValue={setText}
            isValid={isTextValid}
          />
          <Button
            text="Submit"
            onClick={handleSubmit}
            type="submit"
            disabled={isButtonDisabled}
          />
          {/* <Loader /> */}
        </form>
      </div>
    </section>
  );
};

export default Contacts;
