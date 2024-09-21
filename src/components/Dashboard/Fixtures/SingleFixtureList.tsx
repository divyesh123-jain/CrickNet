
import MatchComp from './MatchComp'

const SingleFixtureList = () => {
  return (
    <div className='flex flex-row justify-between items-center bg-white shadow-lg p-3 rounded-lg border-gray-200 border-solid border-[1px]'> 
        <div className='flex items-center gap-3 w-[20%]'>
            <div>
                <h5 className='font-semibold'>4:30</h5>
                <h6 className='text-gray-500 text-xs font-extrabold'>28 Aug</h6>
            </div>

            {/* /live ?? */}
            {<div>
                <span className='bg-red-600 text-white py-[4px] flex justify-center items-center font-semibold rounded-md text-xs px-4 capitalize'>live</span>
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
  )
}

export default SingleFixtureList