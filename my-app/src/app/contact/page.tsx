import React from 'react';

export default function Contact() {
  return (
    <div className="bg-gray-100 p-4 mt-6 mb-12 p-2 border border-[#4A4E69] rounded-md flex flex-col w-96">
      <h2 className="text-2xl h-10 text-center">Contact Us!</h2>
      <form className="w-100 p-2 inline-block">
        <label className="block mt-2" htmlFor="fname">
          First Name
        </label>
        <input
          className="border w-full rounded-md text-black p-1"
          type="text"
          id="fname"
          name="firstname"
          required
        />
        <label className="block mt-2" htmlFor="lname">
          Last Name
        </label>
        <input
          className="border w-full rounded-md text-black p-1"
          type="text"
          id="lname"
          name="lastname"
          required
        />
        <label className="block mt-2" htmlFor="email">
          Email Address
        </label>
        <input
          className="border w-full rounded-md text-black p-1"
          type="email"
          id="email"
          name="email"
          required
        />
        <label className="block mt-2" htmlFor="phone">
          Phone Number
        </label>
        <input
          className="border w-full rounded-md text-black p-1"
          type="tel"
          id="phone"
          name="phone"
          required
        />
        <label className="block mt-2" htmlFor="message">
          Message
        </label>
        <textarea
          className="border w-full h-40 rounded-md text-black p-1"
          id="message"
          name="message"
          defaultValue="Type your message here"
          required
        />
        <input
          className="bg-ultraViolet text-white p-3 rounded-xl text-center"
          type="submit"
          defaultValue="Submit"
          required
        />
      </form>
    </div>
  );
}
