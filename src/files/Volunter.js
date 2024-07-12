// src/VolunteerForm.js

import React, { useState } from 'react';

const Volunter = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    donation:''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submission, e.g., send the data to an API
    console.log('Form Data Submitted: ', formData);
  };

  return (
    <div className="flex justify-normal">
        <div className="w-1/4 bg-img1"></div>
        <div className="pt-20  bg-white shadow-2xl pb-20 px-10">
            <center><span className="text-2xl font-medium italic">Get Involved & Make a Difference</span></center>
            <p className="text-lg">We're passionate about our mission and we can't achieve it alone! There are many ways you can contribute to our mission and make a real impact.</p><br/>

            <center><span className="text-2xl font-medium italic">Volunteer Your Time & Skills</span></center>
            <p className="text-lg">We're always looking for passionate individuals to join our team. Whether you have experience or simply a desire to help, we have opportunities for you.</p>
            <p className="text-lg">Here are some ways you can volunteer:</p>
            <ul class="list-disc pl-16">
                <li class="pb-2">Tree Planting & Seeding: Assist with planting native trees and shrubs in degraded areas, and collect seeds for future planting initiatives.</li>
                <li class="pb-2">Trail Maintenance & Monitoring: Help maintain hiking trails used for forest patrols or eco-tourism, and monitor for signs of erosion or illegal activity.</li>
                <li class="pb-2">Invasive Species Removal: Assist in removing invasive plant species that threaten native ecosystems.</li>
                <li class="pb-2">Wildlife Monitoring: Participate in wildlife surveys to track animal populations and species health.</li>
                <li class="pb-2">Data Collection: Help collect data on tree cover, biodiversity, or water quality to inform conservation efforts.</li>
                <li class="pb-2">Your donation to a forest conservation NGO plants trees, protects wildlife, combats climate change, and secures a healthier planet for all.</li>
            </ul>
            <br/>
            <center><span className="text-2xl font-medium italic">Volunteer Information Form</span></center>


            <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-4 bg-white shadow-md rounded-md">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
                    <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address:</label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number (optional):</label>
                    <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="donation" className="block text-sm font-medium text-gray-700">Donation (optional): </label>
                    <input
                    type="text"
                    id="donation"
                    name="donation"
                    value={formData.donation}
                    onChange={handleChange}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    required
                    />
                </div>
                <button type="submit" className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Submit
                </button>
            </form>
    </div>
    <div className="w-1/4 bg-img1"></div>
    </div>
  );
};

export default Volunter;








