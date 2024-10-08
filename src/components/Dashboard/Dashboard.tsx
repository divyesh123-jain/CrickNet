
import { Link, Outlet } from 'react-router-dom'
import Notification from '../Notifications/Notification'
import vk from "../../assets/vk.png"
export default function Dashboard() {
  return (
    <div className='bg-[#5b5c64] w-full'>
      <div className='flex flex-col md:flex-row md:min-h-screen min-h-screen w-auto bg-[#5b5c64]'>
            
        <div className='flex-1 md:p-4'>
        
            <div className='bg-[#242b2c] rounded-xl flex flex-col gap-2  w-full min-h-screen md:w-auto p-4 md:h-[8405x] md:rounded-[40px]'>
            <div className="md:grid  w-full md:grid-cols-12 ">

                <aside className="md:col-span-2  p-4">
                  
                  <div className="mb-8 pt-8 flex justify-center items-center w-full md:w-auto flex-col p-4 rounded-lg shadow-md">
                  
                    
                  </div>
                  <nav className='flex flex-col gap-2 bg-[#cabeb5] py-4 rounded-lg shadow-md'>
                    <ul className="  justify-center flex flex-col divide-y-2">
                      <Link to={"/dashboard"} className=" hover:shadow-md text-black flex justify-start  items-center font-semibold py-2 px-4 hover:bg-green-200 mx-2 rounded-md duration-300">Dashboard</Link>
                      <Link to={"/"} className=" hover:shadow-md text-black flex justify-start  items-center font-semibold py-2 px-4 hover:bg-green-200 mx-2 rounded-md duration-300">My Feed</Link>
                      <Link to={"/dashboard/players"} className=" hover:shadow-md text-black flex justify-start  items-center font-semibold py-2 px-4 hover:bg-green-200 mx-2 rounded-md duration-300">All Players</Link>
                      <Link to={"/"} className="text-black flex justify-start  items-center font-semibold py-2 px-4 hover:bg-green-200 mx-2 rounded-md duration-300">Tipster</Link>
                      <Link to={"/"} className=" hover:shadow-md text-black flex justify-start  items-center font-semibold py-2 px-4 hover:bg-green-200 mx-2 rounded-md duration-300">Hot Tips</Link>
                      <Link to={"/"} className=" hover:shadow-md text-black flex justify-start  items-center font-semibold py-2 px-4 hover:bg-green-200 mx-2 rounded-md duration-300">Favourite League</Link>
                    </ul>
                  </nav>

                  <div className="card1 flex justify-center items-center w-full md:w-auto flex-col p-4 md:h-[350px] rounded-lg shadow-md mt-6">
                   <div className="card1-info">


                        <p className="magic">
                        <img src={vk} alt="Player" className=" rounded-lg transition-all duration-300 hover:scale-110" />
                        </p>
                      </div>
  
                    </div>
                </aside>

              
                <main className="md:col-span-6 bg-[#242b2c] p-4 shadow-md rounded-lg">  
                  <Outlet/>
                </main>
                


                <aside className="md:col-span-4  p-4 w-full md:w-auto">
            
                 
                  <div className="flex space-x-4 mb-8 mt-6" >
                
                    <img src="https://cricwallah.com/wp-content/uploads/2024/05/komon-1024x418.png" alt="User 1" className="rounded-[0.5rem] hover:scale-110 shadow-[6px_7px_#cabeb5] duration-300 " />
                   
                  </div>

                  <h4 className="text-[1.3rem] font-bold  shadow-[4px_4px_#1536c6] cursor-pointer mx-0 my-[20px] p-[15px] rounded-[10px] border-2 border-solid active:shadow-none active:translate-x-[3px] active:translate-y-[3px]  text-white mb-4">ICC Cricket Rankings - Men's Batting</h4>
                  <Notification />
                </aside>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}


