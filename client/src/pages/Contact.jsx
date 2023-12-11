import React from "react";
import { FiPhone, FiInstagram, FiMail } from "react-icons/fi";

const Contact = () => {
  return (
    <div className="flex flex-col items-center mt-8">
      <div className="text-center mb-2">
        <p>
          <FiPhone className="inline-block mr-2" />
          Phone: +216-73-455-455
        </p>
        <p>
          <FiInstagram className="inline-block mr-2" />
          Instagram: @Medi.para
        </p>
        <p>
          <FiMail className="inline-block mr-2" />
          Email: medicare@email.com
        </p>
      </div>
      <div className="mt-4">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTClgx9ckFBlhPpzFWXW2_ZVyMePyBAGuCkeQ&usqp=CAU"
          alt="Contact Image"
          className="max-w-full w-7/7 h-auto"
        />
      </div>
    </div>
  );
};

export default Contact;
