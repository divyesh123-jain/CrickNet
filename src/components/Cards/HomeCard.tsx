import home from '../../assets/home.png';
export default function HomeCard() {
    return (
        <>
        
        <div className="relative bg-green-500 rounded-lg  p-6 w-full max-w-4xl mx-auto shadow-[6px_7px_#1536c6] cursor-pointer my-[20px]   border-2 border-solid active:shadow-none active:translate-x-[3px] active:translate-y-[3px] ">

  <div className="relative z-10 flex justify-between items-center text-white mb-4">
    

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
      <div className="text-sm"> 500+</div>
    </div>
   
    <div className="text-white text-center shadow-md rounded-lg p-4 bg-green-600">
      <div className="text-lg font-bold">Total Runs</div>
      <div className="text-sm">25,000+</div>
    </div>
  </div>

  <div className="relative z-10 flex justify-between items-center text-white  md:gap-0 gap-4 text-sm md:text-base">
    <div className="text-center shadow-md rounded-lg p-4 bg-green-600">
      <div>Batting Average</div>
      <div>53+</div>
    </div>
    <div className="text-center mt-8 shadow-xl text-2xl font-bold rounded-lg p-2  ">
    <div>Virat Kholi </div>
    </div>
    <div className="text-center shadow-md rounded-lg p-4 bg-green-600">
      <div>Recent Form TIP</div>
      <div>44% TIP</div>
    </div>
  </div>
  {/* <div class="absolute left-1/2 inset-0 z-0 transform -translate-x-1/2 -top-3">
  <img src={home} alt="Player" className=" object-cover relative z-0 rounded-lg transition-all duration-300 hover:scale-110" />
  </div> */}
</div>


        </>
    )
}