
import HomeCard from '../Cards/HomeCard'
import Fixtures from './Fixtures/Fixtures'



const DashHome = () => {
  return (
    <>
    <div className="flex items-center justify-between mb-4">
        <div className='brutalist-container'>
          <input
            type="text"
            placeholder="Search Games..."
             className="brutalist-input smooth-type"
          />
          </div>
          <button className="bg-[#1536c6] text-white px-4 py-2 rounded">Add Tips</button>
        </div>

   
        <HomeCard />

        <Fixtures/>
    </>
  )
}

export default DashHome