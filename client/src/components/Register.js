import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Register = () => {
  let { id } = useParams();
  console.log(id);

  return (
    <div
      className="flex flex-col justify-center items-center
	 h-full text-white p-5"
    >
      <Link
        to="/"
        className="text-xl absolute top-5 left-5 hover:text-gray-500 transition"
      >
        <span className="mr-2">&#8592;</span>Back
      </Link>
      <h2 className="text-2xl mb-5">Event registration</h2>
      <form action="#" className="flex flex-col gap-4">
        <div className="flex flex-col [&>input]:px-3 [&>input]:py-2">
          <label htmlFor="fullName">Full Name</label>
          <input
            className="border border-gray-500 focus:border-indigo-500 mt-2"
            type="text"
            name="fullName"
            id="fullName"
            required
          />
        </div>
        <div className="flex flex-col [&>input]:px-3 [&>input]:py-2">
          <label htmlFor="email">Email</label>
          <input
            className="border border-gray-500 focus:border-indigo-500 mt-2"
            type="email"
            name="email"
            id="email"
          />
        </div>
        <div className="flex flex-col [&>input]:px-3 [&>input]:py-2">
          <label htmlFor="date">Date of birth</label>
          <input
            className="border border-gray-500 focus:border-indigo-500 mt-2"
            type="date"
            name="date"
            id="date"
            required
          />
        </div>
        <fieldset className="flex items-center [&>input]:mr-2 [&>input]:-mb-1 mt-4">
          <legend className="mb-3">Where did you hear about this event?</legend>

          <input type="radio" name="source" id="social" required />
          <label htmlFor="social" className="mr-4 sm:mr-7">
            Social media
          </label>
          <input type="radio" name="source" id="friends" required />
          <label htmlFor="friends" className="mr-4 sm:mr-7">
            Friends
          </label>
          <input type="radio" name="source" id="myself" required />
          <label htmlFor="myself">Found myself</label>
        </fieldset>

        <button className="py-2 px-4 bg-indigo-600 mt-3 hover:bg-indigo-500 transition">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
