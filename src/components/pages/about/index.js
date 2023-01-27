import React from "react";

const About = () => {
  return (
    <div className="bg-gray-200 flex justify-center items-center h-[88vh]">
      <div className="text-center">
        <h1 className="text-4xl font-medium mb-8">About Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 shadow-md">
            <h2 className="text-2xl font-medium">Our Mission</h2>
            <p className="text-lg">
              Our mission is to create a sustainable future for all by promoting
              environmentally conscious products.
            </p>
          </div>
          <div className="p-4 shadow-md">
            <h2 className="text-2xl font-medium">Our Values</h2>
            <ul className="text-lg">
              <li>Sustainability</li>
              <li>Innovation</li>
              <li>Transparency</li>
            </ul>
          </div>
          <div className="p-4 shadow-md">
            <h2 className="text-2xl font-medium">Contact Us</h2>
            <p className="text-lg">Phone: 555-555-5555</p>
            <p className="text-lg">Email: contact@example.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
