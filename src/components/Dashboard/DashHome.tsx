
import HomeCard from '../Cards/HomeCard'
import Fixtures from './Fixtures/Fixtures'

type Props = {}

const DashHome = (props: Props) => {
  return (
    <>
    <div className="flex items-center justify-between mb-4">
        
          <input
            type="text"
            placeholder="Search Games..."
            className="border border-gray-300 p-2 rounded w-1/3"
          />
          <button className="bg-green-500 text-white px-4 py-2 rounded">Add Tips</button>
        </div>

   
        <HomeCard />

        <Fixtures/>
    </>
  )
}

export default DashHome