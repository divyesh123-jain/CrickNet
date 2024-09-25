import home from '../../assets/home.png';
export default function HomeCard() {
    return (
        <>
        
        <div className="relative bg-green-500 rounded-lg  p-6 w-full max-w-4xl mx-auto shadow-[6px_7px_#1536c6] cursor-pointer my-[20px]   border-2 border-solid active:shadow-none active:translate-x-[3px] active:translate-y-[3px] ">

  <div className="relative z-10 flex justify-between items-center text-white mb-4">
    <div className="flex items-center space-x-2">
    
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10 2a6 6 0 00-6 6v3.586L3.707 14.707a1 1 0 001.414 0L7 12.828V8a5 5 0 0110 0v4.828l1.879 1.879a1 1 0 001.414-1.414L16 11.586V8a6 6 0 00-6-6z" />
      </svg>
    
      <span>08 12 21</span>
    </div>

    <div className="flex items-center space-x-4">
      {/* <img src="team1.png" alt="Team 1" className="h-10 w-10 rounded-full">
      <img src="team2.png" alt="Team 2" className="h-10 w-10 rounded-full"> */}
    </div>
  </div>

  <div className="absolute left-1/2 inset-0 z-0 overflow-hidden transform -translate-x-1/2 -top-16">
  <img src={home} alt="Player" className=" rounded-lg transition-all duration-300 hover:scale-110" />
  </div>




 
  <div className="relative z-10 flex justify-between items-center mb-8 gap-4 md:gap-0">
    <div className="text-white text-center shadow-md rounded-lg p-4 bg-green-600">
      <div className="text-lg font-bold">Total Matches</div>
      <div className="text-sm">West Ham United</div>
    </div>
   
    <div className="text-white text-center shadow-md rounded-lg p-4 bg-green-600">
      <div className="text-lg font-bold">Total Runs</div>
      <div className="text-sm">Bayer Leverkusen</div>
    </div>
  </div>

  <div className="relative z-10 flex justify-between items-center text-white  md:gap-0 gap-4 text-sm md:text-base">
    <div className="text-center shadow-md rounded-lg p-4 bg-green-600">
      <div>WHU 44% TIP</div>
      <div>234 TIP</div>
    </div>
    <div className="text-center mt-8 shadow-md rounded-lg p-2  bg-green-600">
    <div>Virat Kholi </div>
    </div>
    <div className="text-center shadow-md rounded-lg p-4 bg-green-600">
      <div>LEV 32% TIP</div>
      <div>131 TIP</div>
    </div>
  </div>
  {/* <div class="absolute left-1/2 inset-0 z-0 transform -translate-x-1/2 -top-3">
  <img src={home} alt="Player" className=" object-cover relative z-0 rounded-lg transition-all duration-300 hover:scale-110" />
  </div> */}
</div>


        </>
    )
}