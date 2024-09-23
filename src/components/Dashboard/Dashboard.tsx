
import { Link, Outlet } from 'react-router-dom'

export default function Dashboard() {
  return (
    <div>
         <div className='flex flex-col md:flex-row md:h-[100vh] h-auto w-full bg-black'>
               
               <div className='flex-1  px-4 pb-4 md:p-4'>
               
                   <div className='bg-white/95 rounded-xl flex flex-col gap-2 w-full p-4 h-full md:rounded-[40px]'>
                   <div className="grid grid-cols-12 h-screen">
   
      <aside className="col-span-2 bg-gray-100 p-4 h-fit">
        
        <div className="mb-8 bg-white flex justify-center items-center flex-col p-4 rounded-lg shadow-md">
          <img src="https://via.placeholder.com/150" alt="Profile" className="rounded-full" />
          <h2 className="mt-4 text-lg font-bold">Max Kembli</h2>
          <p className="text-sm">Professional - 3 level</p>
        </div>
        <nav className='flex flex-col gap-2 bg-white py-4 rounded-lg shadow-md'>
          <ul className="  justify-center flex flex-col divide-y-2">
            <Link to={"/"} className=" hover:shadow-md text-black flex justify-start  items-center font-semibold py-2 px-4 hover:bg-green-200 mx-2 rounded-md duration-300">Dashboard</Link>
            <Link to={"/"} className=" hover:shadow-md text-black flex justify-start  items-center font-semibold py-2 px-4 hover:bg-green-200 mx-2 rounded-md duration-300">My Feed</Link>
            <Link to={"/dashboard/players"} className=" hover:shadow-md text-black flex justify-start  items-center font-semibold py-2 px-4 hover:bg-green-200 mx-2 rounded-md duration-300">All Players</Link>
            <Link to={"/"} className="text-black flex justify-start  items-center font-semibold py-2 px-4 hover:bg-green-200 mx-2 rounded-md duration-300">Tipster</Link>
            <Link to={"/"} className=" hover:shadow-md text-black flex justify-start  items-center font-semibold py-2 px-4 hover:bg-green-200 mx-2 rounded-md duration-300">Hot Tips</Link>
            <Link to={"/"} className=" hover:shadow-md text-black flex justify-start  items-center font-semibold py-2 px-4 hover:bg-green-200 mx-2 rounded-md duration-300">Favourite League</Link>
          </ul>
        </nav>
      </aside>

    
      <main className="col-span-7 bg-white p-4 shadow-md rounded-lg">  
        <Outlet/>
      </main>
      


      <aside className="col-span-3 bg-gray-50 p-4">
        <h3 className="font-bold text-lg mb-4">Your Balance</h3>
        <p className="text-2xl font-semibold mb-4">489,87</p>
        <h4 className="text-lg font-bold mb-4">Top Following</h4>
        <div className="flex space-x-4 mb-8">
       
          <img src="https://via.placeholder.com/50" alt="User 1" className="rounded-full" />
          <img src="https://via.placeholder.com/50" alt="User 2" className="rounded-full" />
          <img src="https://via.placeholder.com/50" alt="User 3" className="rounded-full" />
        </div>

        <h4 className="text-lg font-bold mb-4">Notification</h4>
        <ul className="space-y-4">
          <li className="bg-white p-2 rounded shadow">
            Dolly Krista earned 1546 profit on football.
          </li>
          <li className="bg-white p-2 rounded shadow">
            Richa Pinto earned 1234 profit on horse racing.
          </li>
        </ul>
      </aside>
    </div>
                   </div>
               </div>
           </div>
    </div>
  )
}


