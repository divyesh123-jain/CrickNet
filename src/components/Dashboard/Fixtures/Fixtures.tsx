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
    <section>
        <h3 className="text-xl font-semibold mb-2">International Cricket Matches</h3>
        <div className=" px-4 py-2 relative">
          <div className="flex justify-between items-center relative z-[1]">
            <button onClick={() => setFixtureType({
              isAllGames:true,
              isLiveGames:false,
              isFinishedGames:false,
              isScheduledGames:false,
              isCancelledGames:false,
            })} className={`${fixtureType.isAllGames && "text-white"} text-black`}>All Games</button>
            <button onClick={() => setFixtureType({
              isAllGames:false,
              isLiveGames:true,
              isFinishedGames:false,
              isScheduledGames:false,
              isCancelledGames:false,
            })} className={`${fixtureType.isLiveGames && "text-white"} text-black`}>Live Games</button>
            <button onClick={() => setFixtureType({
              isAllGames:false,
              isLiveGames:false,
              isFinishedGames:true,
              isScheduledGames:false,
              isCancelledGames:false,
            })} className={`${fixtureType.isFinishedGames && "text-white"} text-black`}> Finished Games</button>
            <button onClick={() => setFixtureType({
              isAllGames:false,
              isLiveGames:false,
              isFinishedGames:false,
              isScheduledGames:true,
              isCancelledGames:false,
            })} className={`${fixtureType.isScheduledGames && "text-white"} text-black`}>Upcoming Games</button>
            <button onClick={() => setFixtureType({
              isAllGames:false,
              isLiveGames:false,
              isFinishedGames:false,
              isScheduledGames:false,
              isCancelledGames:true,
            })} className={`${fixtureType.isCancelledGames && "text-white"} text-black`}>Cancelled Games</button>
          </div>
          <div className={` rounded-md shadow-lg duration-300 bg-green-500 absolute ${ fixtureType.isAllGames && "h-10 w-28 left-0 top-0 translate-y-[2px] translate-x-[-5px] "} ${ fixtureType.isLiveGames && "h-10 w-28 left-0 top-0 translate-y-[2px] translate-x-[142px] "} ${ fixtureType.isFinishedGames && "h-10 w-32 left-0 top-0 translate-y-[2px] translate-x-[301px] "} ${ fixtureType.isScheduledGames && "h-10 w-36 left-0 top-0 translate-y-[2px] translate-x-[483px] "} ${ fixtureType.isCancelledGames && "h-10 w-40 left-0 top-0 translate-y-[2px] translate-x-[670px] "}`}/>
        </div>
        <div>
          {/* fixtures list */}
          <FixturesLists/>
        </div>
    </section>
  )
}

export default Fixtures