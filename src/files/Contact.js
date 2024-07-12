import { useState } from "react";
import Navbar from "./Navbar"
function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
    };

    return (
        <div>
            <Navbar/>
            <div className="pt-20 flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 p-8 lg:p-12 lg:mr-8 bg-white rounded-lg shadow-lg mb-10 lg:mb-0 text-3xl">
                <h2 className="text-4xl font-bold mb-6 text-center">Contact Us</h2>
                <p className="mb-4">GreenHeart NGO</p>
                <p className="mb-4">C- Block, No. 25, Shivaji Nagar,</p>
                <p className="mb-4">Pune, Maharashtra 411005, India</p>
                <p>Email: <a href="mailto:GreenHeart43xxx@gmail.com" className="underline">GreenHeart43xxx@gmail.com</a></p>
                <p>Phone: <a href="tel:+915555555555" className="underline">+91 55555 55555</a></p>
            </div>
            <div className="lg:w-1/2 p-8 lg:p-12 bg-white rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold mb-6 text-center italic">Contact Form</h2>
                <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md">
                    <div className="mb-6">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number (optional):</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
        </div>
    );
}

export default Contact;
