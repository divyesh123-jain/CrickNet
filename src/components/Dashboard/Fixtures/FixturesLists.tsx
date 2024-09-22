
import SingleFixtureList from './SingleFixtureList'

const FixturesLists = () => {
  const isLiveGames = true;
  return (
    <div className='flex flex-col gap-3 py-2 my-2 max-h-[40vh] overflow-y-auto'>
        <SingleFixtureList isLiveGames={true} isFinishedGames={false} isScheduledGames={false} isCancelledGames={false} isAllGames={false}/>
        <SingleFixtureList isLiveGames={false} isFinishedGames={true} isScheduledGames={false} isCancelledGames={false} isAllGames={false}/>
        <SingleFixtureList isLiveGames={isLiveGames} isFinishedGames={false} isScheduledGames={false} isCancelledGames={false} isAllGames={true}/>
        <SingleFixtureList isLiveGames={false} isFinishedGames={false} isScheduledGames={true} isCancelledGames={false} isAllGames={false}/>
        <SingleFixtureList isLiveGames={false} isFinishedGames={true} isScheduledGames={false} isCancelledGames={false} isAllGames={false}/>
        <SingleFixtureList isLiveGames={false} isFinishedGames={false} isScheduledGames={false} isCancelledGames={false} isAllGames={true}/>
        <SingleFixtureList isLiveGames={false} isFinishedGames={false} isScheduledGames={false} isCancelledGames={false} isAllGames={true}/>
    </div>
  )

}

export default FixturesLists