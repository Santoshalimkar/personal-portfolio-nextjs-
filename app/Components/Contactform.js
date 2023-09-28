"use client";
import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";

const Contactform = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");

  const YOUR_SERVICE_ID = "service_222112i";

  const YOUR_TEMPLATE_ID = "template_mhfh7gs";
  const YOUR_USER_ID = "MHhXtz7K-smu0u5Gp";

  const sendEmail = (e) => {
    e.preventDefault();

    if (!name && !email && !subject && !message && !phone) {
      toast.error("Please fill the field details!");
      return;
    }
    const templateParams = {
      from_name: name,
      reply_to: email,
      subject: subject,
      message: message,
      phone_no: phone,
    };

    emailjs
      .send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, templateParams, YOUR_USER_ID)
      .then(
        (result) => {
          if (result.text == "OK") {
            toast.success("Message sent succeefully!");
          }
        },
        (error) => {
          console.log(error.text);
        }
      );

    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
    setPhone("");
  };

  return (
    <>
      <div className="rounded-md  dark:bg-slate-900 md:w-[55%] w-full md:m-0 mt-4 h-auto shadow-lg mx-auto">
        <div className="p-8">
          <div className="flex justify-around gap-4 items-center flex-col sm:flex-col md:flex-row">
            <div className="w-full p-2">
              <p className="uppercase tracking-widest text-xs font-medium md:font-thin mb-4 leading-3 md:text-[#3c3e41] text-black">
                YOUR NAME
              </p>
              <input
                className="border-2 h-[55px] dark:bg-slate-800 dark:border-none w-full rounded-md focus:outline-[#f9004d] p-2"
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="w-full p-2">
              <p className="uppercase tracking-widest text-xs font-medium md:font-thin mb-4 leading-3 md:text-[#3c3e41] text-black">
                PHONE NUMBER
              </p>
              <input
                className="border-2 h-[55px] w-full rounded-md dark:bg-slate-800 dark:border-none focus:outline-[#f9004d] p-2"
                type="text"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>

          <div className="mt-4 p-2 ">
            <p className="uppercase tracking-widest text-xs font-medium md:font-thin mb-4 leading-3 md:text-[#3c3e41] text-black">
              EMAIL
            </p>
            <input
              className=" border-2 h-[55px] w-full rounded-md dark:bg-slate-800 dark:border-none focus:outline-[#f9004d] p-2"
              type="text"
              id="name"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mt-4 p-2">
            <p className="uppercase tracking-widest text-xs font-medium md:font-thin mb-4 leading-3 md:text-[#3c3e41] text-black">
              SUBJECT
            </p>
            <input
              className=" border-2 h-[55px] w-full rounded-md dark:bg-slate-800 dark:border-none focus:outline-[#f9004d] p-2"
              type="text"
              id="name"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div className="mt-4 p-2">
            <p className="uppercase tracking-widest text-xs font-medium md:font-thin mb-4 leading-3 md:text-[#3c3e41] text-black">
              YOUR MESSAGE
            </p>
            <textarea
              className=" border-2 h-[155px] w-full rounded-md dark:bg-slate-800 dark:border-none focus:outline-[#f9004d] p-2"
              type="text"
              id="name"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div className="mt-4 p-2 text-[#f9004d]">
            <button
              onClick={sendEmail}
              className=" dark:bg-slate-800 text-[#f9004d] p-3  shadow-md rounded-md"
            >
              SEND MESSAGE <AiOutlineArrowRight className="inline-block" />
            </button>
          </div>
        </div>
      </div>
      <div>
        <Toaster />
      </div>
    </>
  );
};

export default Contactform;
