

const MultiStageForm = () => {
  return (
   <>
<div class="font-[sans-serif] bg-white max-w-4xl flex items-center mx-auto md:h-screen p-4">
      <div class="grid md:grid-cols-3 items-center shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-xl overflow-hidden">
        <div class="max-md:order-1 flex flex-col justify-center space-y-16 max-md:mt-16 min-h-full bg-gradient-to-r from-gray-900 to-gray-700 lg:px-8 px-4 py-4">
          <div>
            <h4 class="text-white text-lg font-semibold">Create Your Account</h4>
            <p class="text-[13px] text-gray-300 mt-3 leading-relaxed">Welcome to our registration page! Get started by creating your account.</p>
          </div>
          <div>
            <h4 class="text-white text-lg font-semibold">Simple & Secure Registration</h4>
            <p class="text-[13px] text-gray-300 mt-3 leading-relaxed">Our registration process is designed to be straightforward and secure. We prioritize your privacy and data security.</p>
          </div>
        </div>

        <form class="md:col-span-2 w-full py-6 px-6 sm:px-16">
          <div class="mb-6">
            <h3 class="text-gray-800 text-2xl font-bold">Create an account</h3>
          </div>

          <div class="space-y-6">
  <div class="flex flex-wrap -mx-4">
    
    <div class="w-full sm:w-1/2 px-4 mb-4">
      <label class="text-gray-800 text-sm mb-2 block">Name</label>
      <div class="relative flex items-center">
        <input name="name" type="text" required class="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500" placeholder="Enter name" />
      </div>
    </div>

 
    <div class="w-full sm:w-1/2 px-4 mb-4">
      <label class="text-gray-800 text-sm mb-2 block">Email Id</label>
      <div class="relative flex items-center">
        <input name="email" type="email" required class="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500" placeholder="Enter email" />
      </div>
    </div>

   
    <div class="w-full sm:w-1/2 px-4 mb-4">
      <label class="text-gray-800 text-sm mb-2 block">Age</label>
      <div class="relative flex items-center">
        <input name="age" type="number" required class="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500" placeholder="Enter age" />
      </div>
    </div>

   
    <div class="w-full sm:w-1/2 px-4 mb-4">
      <label class="text-gray-800 text-sm mb-2 block">Phone number</label>
      <div class="relative flex items-center">
        <input name="phone" type="tel" required class="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500" placeholder="Enter phone number" />
      </div>
    </div>

  
    <div class="w-full sm:w-1/2 px-4 mb-4">
      <label class="text-gray-800 text-sm mb-2 block">Likes: Batting/Bowling</label>
      <div class="relative flex items-center">
        <select name="likes" class="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500">
          <option value="batting">Batting</option>
          <option value="bowling">Bowling</option>
        </select>
      </div>
    </div>

 
    <div class="w-full sm:w-1/2 px-4 mb-4">
      <label class="text-gray-800 text-sm mb-2 block">Favourite Cricket League</label>
      <div class="relative flex items-center">
        <input name="league" type="text" required class="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500" placeholder="Enter favourite cricket league" />
      </div>
    </div>

   
    <div class="w-full sm:w-1/2 px-4 mb-4">
      <label class="text-gray-800 text-sm mb-2 block">Favourite Team</label>
      <div class="relative flex items-center">
        <input name="team" type="text" required class="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500" placeholder="Enter favourite team" />
      </div>
    </div>

  
    <div class="w-full sm:w-1/2 px-4 mb-4">
      <label class="text-gray-800 text-sm mb-2 block">Favourite Player</label>
      <div class="relative flex items-center">
        <input name="player" type="text" required class="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500" placeholder="Enter favourite player" />
      </div>
    </div>
  </div>

  <div class="flex items-center">
    <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
    <label for="remember-me" class="ml-3 block text-sm text-gray-800">
      I accept the <a href="javascript:void(0);" class="text-blue-600 font-semibold hover:underline ml-1">Terms and Conditions</a>
    </label>
  </div>
</div>

          <div class="!mt-12">
            <button type="button" class="w-full py-3 px-4 tracking-wider text-sm rounded-md text-white bg-gray-700 hover:bg-gray-800 focus:outline-none">
              Create an account
            </button>
          </div>
          <p class="text-gray-800 text-sm mt-6 text-center">Already have an account? <a href="javascript:void(0);" class="text-blue-600 font-semibold hover:underline ml-1">Login here</a></p>
        </form>
      </div>
    </div>
   </>
  )
}

export default MultiStageForm
