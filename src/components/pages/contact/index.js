import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="bg-gray-200 h-[88vh]">
        <div className="text-center">
          <h1 className="text-4xl font-medium">Contact Us</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4">
              <h2 className="text-2xl font-medium">Contact Form</h2>
              <form>
                <label className="block text-lg font-medium mb-2">
                  Name
                  <input
                    className="border rounded w-full py-2 px-3"
                    type="text"
                    placeholder="John Doe"
                  />
                </label>
                <label className="block text-lg font-medium mb-2">
                  Email
                  <input
                    className="border rounded w-full py-2 px-3"
                    type="email"
                    placeholder="johndoe@example.com"
                  />
                </label>
                <label className="block text-lg font-medium mb-2">
                  Message
                  <textarea
                    className="border rounded w-full py-2 px-3"
                    placeholder="Your message here"
                  ></textarea>
                </label>
                <button className="bg-blue-500 text-white rounded py-2 px-4">
                  Submit
                </button>
              </form>
            </div>
            <div className="p-4">
              <h2 className="text-2xl font-medium">Contact Details</h2>
              <p className="text-lg font-medium">Email: contact@example.com</p>
              <p className="text-lg font-medium">Phone: 555-555-5555</p>
              <p className="text-lg font-medium">Address: 123 Main St,</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
