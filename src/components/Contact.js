import React, { useRef, useState } from "react";
import "boxicons";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const [data, setData] = useState({
    fname: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => {
      return {
        ...prevData,
        [name]: value.trimStart(),
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ykbt2hc",
        "template_yn12slb",
        form.current,
        "u9nFZnSnckXoJ5TKj"
      )
      .then(
        (result) => {
          alert("Message sent");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <div className="px-8 md:px-20 py-10 md:pb-24 md:pt-10">
        <p className="font-extrabold text-2xl md:text-3xl pb-4 text-center md:text-left">
          Contact Us
        </p>
        <div className="flex flex-col-reverse md:flex-row md:items-center">
          <div className="w-full text-xl">
            <div className="my-4">
              <p className="flex items-center gap-4 font-extrabold">
                <span>
                  <box-icon name="current-location"></box-icon>
                </span>
                Office Address
              </p>
              <p>17 Tejuosho road, Yaba Lagos</p>
            </div>
            <div className="my-4">
              <p className="flex items-center gap-4 font-extrabold">
                <span>
                  <box-icon type="solid" name="phone"></box-icon>
                </span>
                Phone Number
              </p>
              <p>08086028203</p>
            </div>
            <div className="my-4">
              <p className="flex items-center gap-4 font-extrabold">
                <span>
                  <box-icon type="solid" name="envelope"></box-icon>
                </span>
                Email Address
              </p>
              <p>esusu.online@gmail.com</p>
            </div>
            <div className="flex items-center gap-8 mt-8">
              <Link to="#">
                <box-icon type="logo" name="twitter"></box-icon>
              </Link>
              <Link to="#">
                <box-icon type="logo" name="facebook"></box-icon>
              </Link>
              <Link to="#">
                <box-icon name="linkedin" type="logo"></box-icon>
              </Link>
              <p></p>
            </div>
          </div>

          <form
            ref={form}
            onSubmit={handleSubmit}
            className="w-full text-xl grid grid-cols-2 gap-4"
          >
            <div>
              <input
                type="text"
                placeholder="Name"
                className="rounded-lg bg-slate-200 p-2 indent-1 w-full"
                name="fname"
                value={data.fname}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="rounded-lg bg-slate-200 p-2 indent-1 w-full"
                name="email"
                value={data.email}
                onChange={handleChange}
              />
            </div>
            <div className="col-span-2">
              <input
                type="text"
                placeholder="Subject"
                className="rounded-lg bg-slate-200 p-2 indent-1 w-full"
                name="subject"
                value={data.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-span-2">
              <textarea
                placeholder="Message"
                className="rounded-lg  bg-slate-200 p-2 indent-1 w-full"
                rows={5}
                name="message"
                value={data.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="foot text-slate-100 rounded-lg py-2"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
