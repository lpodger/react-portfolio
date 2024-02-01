import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

export default function ContactForm({ variants }) {
  const form = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });

 

  function handleChange(e) {
    const { name, value } = e.target;
    setUserInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  }

  function sendEmail(e) {
    e.preventDefault();
  
    setSubmitting(true);
  
    emailjs
      .sendForm(
        "service_7h55sha",
        "template_dovovjh",
        form.current,
        "JcN0TCP9HoPZ5_1D7"
      )
      .then(
        (result) => {
          setSuccess(true);
          setError(null);
          setUserInput({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setSuccess(false);
          setError("An error occurred while submitting the form. Please try again.");
        }
      )
      .finally(() => {
        setSubmitting(false);
      });
  }


  return (
    <motion.div
      className="w-full md:w-auto"
      variants={variants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.5 }}
      
    >
      <motion.form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col sm:m-auto md:m-0 p-4 pt-10 md:p-10 max-w-lg sm:min-w-[400px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
      >
        <motion.div className="flex flex-col" variant={variants}>
          <label variants={variants} className="gap-0 pb-1">
            Name
          </label>
          <input
            variants={variants}
            type="text"
            name="name"
            value={userInput.name}
            className="border border-gray-500 p-2 mb-5 bg-dblue rounded"
            onChange={handleChange}
            required
          />
        </motion.div>
        <motion.div className="flex flex-col" variant={variants}>
          <label className="pb-1" variants={variants}>Email</label>
          <input
            variants={variants}
            type="email"
            name="email"
            value={userInput.email}
            className="border border-gray-500 p-2 mb-5 bg-dblue rounded"
            onChange={handleChange}
            required
          />
        </motion.div>
        <motion.div className="flex flex-col" variant={variants}>
          <label className="pb-1" variants={variants}>Message</label>
          <textarea
            variants={variants}
            name="message"
            value={userInput.message}
            className="border border-gray-500 p-2 mb-8 bg-dblue min-h-[130px] rounded"
            onChange={handleChange}
            required
          />
        </motion.div>
        <motion.input
          type="submit"
          value="Submit"
          className="mb-4 border p-1 text-accent border-accent hover:text-dblue hover:border-dblue text-xl hover:bg-accent rounded"
          variant={variants}
        />
         {error && <div className="text-red-500">{error}</div>}
        {success && <div className="text-accent text-center md:text-xl">Thanks for the message!</div>}
      </motion.form>
    </motion.div>
  );
}

