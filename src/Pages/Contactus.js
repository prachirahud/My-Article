import React, { useState } from "react";
import axios from "axios";

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a POST request to your backend endpoint
      // const { data } = await axios.post("/api/v1/contactus", formData);
      const { data } = await axios.post("http://localhost:5000/api/v1/contactus", formData);

      if (data.success) {
        alert("Thank you for contacting us!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("There was a problem submitting your form.");
      }
    } catch (error) {
      console.error("Error submitting contact form:", error.response?.data || error.message);
      alert("Error submitting contact form, please try again later.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 px-4 py-8">
      <div className="w-full max-w-lg bg-white shadow-xl rounded-xl p-8 md:p-10 lg:p-12 transition duration-300 hover:scale-105">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">
          Contact Us
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 outline-none shadow-sm"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 outline-none shadow-sm"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md h-32 resize-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 outline-none shadow-sm"
              placeholder="Write your message..."
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-md font-semibold text-lg hover:bg-blue-700 transition duration-300 shadow-md hover:shadow-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contactus;


// import React, { useState } from "react";

// const Contactus = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form data submitted:", formData);
//     alert("Thank you for contacting us!");
//     setFormData({ name: "", email: "", message: "" });
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 px-4">
//       <div className="w-full max-w-lg bg-white shadow-xl rounded-xl p-8 md:p-10 lg:p-12 transition duration-300 hover:scale-105">
        
//         <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">
//           Contact Us
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           {/* Name Field */}
//           <div>
//             <label className="block text-gray-700 font-semibold mb-2">Name</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 outline-none shadow-sm"
//               placeholder="Enter your name"
//             />
//           </div>

//           {/* Email Field */}
//           <div>
//             <label className="block text-gray-700 font-semibold mb-2">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 outline-none shadow-sm"
//               placeholder="Enter your email"
//             />
//           </div>

//           {/* Message Field */}
//           <div>
//             <label className="block text-gray-700 font-semibold mb-2">Message</label>
//             <textarea
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-3 border border-gray-300 rounded-md h-32 resize-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 outline-none shadow-sm"
//               placeholder="Write your message..."
//             ></textarea>
//           </div>

//           {/* Submit Button */}
//           <div className="text-center">
//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white py-3 px-6 rounded-md font-semibold text-lg hover:bg-blue-700 transition duration-300 shadow-md hover:shadow-lg"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Contactus;


