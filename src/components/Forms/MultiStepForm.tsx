import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const MultiStepForm: React.FC = () => {
  const [step, setStep] = useState(1);

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can add form validation or data processing here
    console.log('Form submitted!');
    
    // Navigate to the dashboard after submission
    navigate('/dashboard');
  };


  // Handler for going to the next step
  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  // Handler for going to the previous step
  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  return (
    // <div className="max-w-2xl mx-auto space-y-6 p-6">
    //   <h2 className="text-2xl font-bold mb-4">Multi-Step Form</h2>

    //   {/* Step 1: Basic Info */}
    //   {step === 1 && (
    //     <div className="space-y-6">
    //       <div className="flex flex-wrap -mx-4">
    //         {/* Name */}
    //         <div className="w-full sm:w-1/2 px-4 mb-4">
    //           <label className="text-gray-800 text-sm mb-2 block">Name</label>
    //           <input name="name" type="text" required className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500" placeholder="Enter name" />
    //         </div>

    //         {/* Email */}
    //         <div className="w-full sm:w-1/2 px-4 mb-4">
    //           <label className="text-gray-800 text-sm mb-2 block">Email Id</label>
    //           <input name="email" type="email" required className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500" placeholder="Enter email" />
    //         </div>
    //       </div>

    //       <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={nextStep}>
    //         Next
    //       </button>
    //     </div>
    //   )}

    //   {/* Step 2: Additional Info */}
    //   {step === 2 && (
    //     <div className="space-y-6">
    //       <div className="flex flex-wrap -mx-4">
    //         {/* Age */}
    //         <div className="w-full sm:w-1/2 px-4 mb-4">
    //           <label className="text-gray-800 text-sm mb-2 block">Age</label>
    //           <input name="age" type="number" required className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500" placeholder="Enter age" />
    //         </div>

    //         {/* Phone number */}
    //         <div className="w-full sm:w-1/2 px-4 mb-4">
    //           <label className="text-gray-800 text-sm mb-2 block">Phone number</label>
    //           <input name="phone" type="tel" required className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500" placeholder="Enter phone number" />
    //         </div>
    //       </div>

    //       <div className="flex justify-between">
    //         <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={prevStep}>
    //           Previous
    //         </button>
    //         <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={nextStep}>
    //           Next
    //         </button>
    //       </div>
    //     </div>
    //   )}

    //   {/* Step 3: Preferences */}
    //   {step === 3 && (
    //     <div className="space-y-6">
    //       <div className="flex flex-wrap -mx-4">
    //         {/* Likes (Batting/Bowling) */}
    //         <div className="w-full sm:w-1/2 px-4 mb-4">
    //           <label className="text-gray-800 text-sm mb-2 block">Likes: Batting/Bowling</label>
    //           <select name="likes" className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500">
    //             <option value="batting">Batting</option>
    //             <option value="bowling">Bowling</option>
    //           </select>
    //         </div>

    //         {/* Favourite cricket league */}
    //         <div className="w-full sm:w-1/2 px-4 mb-4">
    //           <label className="text-gray-800 text-sm mb-2 block">Favourite Cricket League</label>
    //           <input name="league" type="text" required className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500" placeholder="Enter favourite cricket league" />
    //         </div>
    //       </div>

    //       <div className="flex justify-between">
    //         <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={prevStep}>
    //           Previous
    //         </button>
    //         <button className="bg-green-500 text-white px-4 py-2 rounded" type="submit">
    //           Submit
    //         </button>
    //       </div>
    //     </div>
    //   )}
<div className="min-h-screen p-6 bg-black flex items-center  justify-center">
  <div className="container max-w-screen-lg mx-auto">
    <div>
     

      <div className="bg-white rounded p-4 px-4 md:p-8 mb-6 md:h-[220px] w-full max-w-6xl mx-auto shadow-[6px_7px_#1536c6] cursor-pointer my-[20px]   border-2 border-solid active:shadow-none active:translate-x-[3px] active:translate-y-[3px]">
        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
          <div className="text-gray-600">
            <p className="font-medium text-lg">Details</p>
            <p>Please fill out all the fields.</p>
          </div>

          <div className="lg:col-span-2">
          {step === 1 && (
        <div className="space-y-6">
          <div className="flex flex-wrap -mx-4">
            {/* Name */}
            <div className="w-full sm:w-1/2 px-4 mb-4">
              <label className="text-gray-800 text-sm mb-2 block">Name</label>
              <input name="name" type="text" required className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500" placeholder="Enter name" />
            </div>

            {/* Email */}
            <div className="w-full sm:w-1/2 px-4 mb-4">
              <label className="text-gray-800 text-sm mb-2 block">Email Id</label>
              <input name="email" type="email" required className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500" placeholder="Enter email" />
            </div>
          </div>

          <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={nextStep}>
            Next
          </button>
        </div>
      )}

      {/* Step 2: Additional Info */}
      {step === 2 && (
        <div className="space-y-6">
          <div className="flex flex-wrap -mx-4">
            {/* Age */}
            <div className="w-full sm:w-1/2 px-4 mb-4">
              <label className="text-gray-800 text-sm mb-2 block">Age</label>
              <input name="age" type="number" required className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500" placeholder="Enter age" />
            </div>

            {/* Phone number */}
            <div className="w-full sm:w-1/2 px-4 mb-4">
              <label className="text-gray-800 text-sm mb-2 block">Phone number</label>
              <input name="phone" type="tel" required className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500" placeholder="Enter phone number" />
            </div>
          </div>

          <div className="flex justify-between">
            <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={prevStep}>
              Previous
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={nextStep}>
              Next
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Preferences */}
      {step === 3 && (
        <div className="space-y-6">
          <div className="flex flex-wrap -mx-4">
            {/* Likes (Batting/Bowling) */}
            <div className="w-full sm:w-1/2 px-4 mb-4">
              <label className="text-gray-800 text-sm mb-2 block">Likes: Batting/Bowling</label>
              <select name="likes" className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500">
                <option value="batting">Batting</option>
                <option value="bowling">Bowling</option>
              </select>
            </div>

            {/* Favourite cricket league */}
            <div className="w-full sm:w-1/2 px-4 mb-4">
              <label className="text-gray-800 text-sm mb-2 block">Favourite Cricket League</label>
              <input name="league" type="text" required className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500" placeholder="Enter favourite cricket league" />
            </div>
          </div>

          <div className="flex justify-between">
            <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={prevStep}>
              Previous
            </button>
            <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={handleSubmit} type="submit">
              Submit
            </button>
          </div>
        </div>
      )}
          </div>
        </div>
      </div>
    </div>

    
  </div>
</div>



  );
};

export default MultiStepForm;
