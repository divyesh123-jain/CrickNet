
import MatchComp from './MatchComp'

const SingleFixtureList = ({isLiveGames,isFinishedGames,isScheduledGames,isCancelledGames,isAllGames}:{isLiveGames:boolean,isFinishedGames:boolean,isScheduledGames:boolean,isCancelledGames:boolean,isAllGames:boolean}) => {
  return (
    <div className='relative'>
        <div className={`flex flex-row justify-between items-center bg-white shadow-lg p-3 px-4 rounded-lg border-[#cabeb5] border-solid border-[1px] before:content-[''] before:absolute before:w-2 before:h-full before:rounded-l-full before:left-0 before:top-0  ${isLiveGames ? "before:bg-red-600 " : ""} ${isFinishedGames ? "before:bg-green-600 " : ""} ${isScheduledGames ? "before:bg-blue-600 " : ""} ${isCancelledGames ? "before:bg-gray-600 " : ""} ${isAllGames ? "before:bg-gray-600 " : ""}`}> 
            <div className='flex items-center gap-3 w-[20%]'>
                <div>
                    <h5 className='font-semibold'>4:30</h5>
                    <h6 className='text-gray-500 text-xs font-extrabold'>28 Aug</h6>
                </div>

                {/* /live ?? */}
                {<div>
                    <span className={`${isLiveGames ? "bg-red-600" : isFinishedGames ? "bg-green-600" : isScheduledGames ? "bg-blue-600" : isCancelledGames ? "bg-gray-600" : "bg-gray-600"} text-white py-[4px] flex justify-center items-center font-semibold rounded-md text-xs px-4 capitalize`}>{isLiveGames ? "live" : isFinishedGames ? "finished" : isScheduledGames ? "scheduled" : isCancelledGames ? "cancelled" : "all"}</span>
                </div>}
            </div>
            <div className='flex justify-between w-[40%]'>
                <MatchComp/>
            </div>
            <div className='flex items-center justify-end w-[20%]'>
                <div className='size-10 rounded-full overflow-hidden'>
                    <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <div className='size-10 rounded-full overflow-hidden'>
                    <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <div className='size-10 rounded-full overflow-hidden'>
                    <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default SingleFixtureList