import { useState } from "react"
import FixturesLists from "./FixturesLists"

const Fixtures = () => {
const [fixtureType,setFixtureType] = useState({
  isAllGames:true,
  isLiveGames:false,
  isFinishedGames:false,
  isScheduledGames:false,
  isCancelledGames:false,
})

  return (
    <section className="bg-white rounded-md shadow-lg p-4 mt-6 border-[1px] border-gray-200">
        <h3 className="text-xl font-semibold mb-2">International Cricket Matches</h3>
        <div className=" px-4 py-2 relative">
          <div className="flex justify-between items-center relative">
            <button onClick={() => setFixtureType({
              isAllGames:true,
              isLiveGames:false,
              isFinishedGames:false,
              isScheduledGames:false,
              isCancelledGames:false,
            })} className={`${fixtureType.isAllGames && "text-white bg-green-500"} text-black relative z-[2] flex justify-center items-center duration-300 p-2 rounded-md`}>All Games</button>
            <button onClick={() => setFixtureType({
              isAllGames:false,
              isLiveGames:true,
              isFinishedGames:false,
              isScheduledGames:false,
              isCancelledGames:false,
            })} className={`${fixtureType.isLiveGames && "text-white bg-green-500"} text-black relative z-[2] flex justify-center items-center duration-300 p-2 rounded-md`}>Live Games</button>
            <button onClick={() => setFixtureType({
              isAllGames:false,
              isLiveGames:false,
              isFinishedGames:true,
              isScheduledGames:false,
              isCancelledGames:false,
            })} className={`${fixtureType.isFinishedGames && "text-white bg-green-500"} text-black relative z-[2] duration-300 p-2 rounded-md`}> Finished Games</button>
            <button onClick={() => setFixtureType({
              isAllGames:false,
              isLiveGames:false,
              isFinishedGames:false,
              isScheduledGames:true,
              isCancelledGames:false,
            })} className={`${fixtureType.isScheduledGames && "text-white bg-green-500"} text-black relative z-[2] duration-300 p-2 rounded-md`}>Upcoming Games</button>
            <button onClick={() => setFixtureType({
              isAllGames:false,
              isLiveGames:false,
              isFinishedGames:false,
              isScheduledGames:false,
              isCancelledGames:true,
            })} className={`${fixtureType.isCancelledGames && "text-white bg-green-500"} duration-300 text-black relative z-[2] p-2 rounded-md`}>Cancelled Games</button>
          </div>
        </div>
        <div>
          {/* fixtures list */}
          <FixturesLists/>
        </div>
    </section>
  )
}

export default Fixtures