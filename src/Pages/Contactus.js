import React, { useState } from "react";

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    alert("Thank you for contacting us!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 px-4">
      <div className="w-full max-w-lg bg-white shadow-xl rounded-xl p-8 md:p-10 lg:p-12 transition duration-300 hover:scale-105">
        
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">
          Contact Us
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
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

          {/* Email Field */}
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

          {/* Message Field */}
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

          {/* Submit Button */}
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
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 px-4 py-8">
      
//       <div className="w-full max-w-xl bg-white shadow-2xl rounded-2xl p-8 md:p-10 lg:p-12 transform transition-all duration-300 hover:scale-105">
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
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 outline-none"
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
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 outline-none"
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
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg h-32 resize-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 outline-none"
//               placeholder="Write your message..."
//             ></textarea>
//           </div>

//           {/* Submit Button */}
//           <div className="text-center">
//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold text-lg hover:bg-blue-700 transition duration-300 shadow-md hover:shadow-lg"
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
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
   

//       <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 mt-6">
//         <h2 className="text-2xl font-bold text-center text-blue-700 mb-4">
//           Feel Free to Contact Us
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-gray-600 font-medium mb-1">Name:</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>

//           <div>
//             <label className="block text-gray-600 font-medium mb-1">Email:</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>

//           <div>
//             <label className="block text-gray-600 font-medium mb-1">Message:</label>
//             <textarea
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-2 border border-gray-300 rounded-md h-32 resize-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//             ></textarea>
//           </div>

//           <div className="text-center">
//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
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

