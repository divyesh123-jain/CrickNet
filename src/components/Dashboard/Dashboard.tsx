import React from 'react'

export default function Dashboard() {
  return (
    <div>
         <div className='flex flex-col md:flex-row md:h-[100vh] h-auto w-full bg-black'>
               
               <div className='flex-1  px-4 pb-4 md:p-4'>
               
                   <div className='bg-white/95 rounded-xl flex flex-col gap-2 w-full p-4 h-full md:rounded-[40px]'>
                   <div className="grid grid-cols-12 h-screen">
   
      <aside className="col-span-2 bg-gray-100 p-4">
        <div className="mb-8">
          <img src="https://via.placeholder.com/150" alt="Profile" className="rounded-full" />
          <h2 className="mt-4 text-lg font-bold">Max Kembli</h2>
          <p className="text-sm">Professional - 3 level</p>
        </div>
        <nav>
          <ul className="space-y-4">
            <li className="text-green-600 font-semibold">Dashboard</li>
            <li>My Feed</li>
            <li>Tipster</li>
            <li>Hot Tips</li>
            <li>Favourite League</li>
          </ul>
        </nav>
      </aside>

    
      <main className="col-span-7 bg-white p-4">
        <div className="flex items-center justify-between mb-4">
        
          <input
            type="text"
            placeholder="Search Games..."
            className="border border-gray-300 p-2 rounded w-1/3"
          />
          <button className="bg-green-500 text-white px-4 py-2 rounded">Add Tips</button>
        </div>

        <div className="bg-green-100 p-6 rounded-lg flex items-center mb-4">
          <img
            src="https://via.placeholder.com/300"
            alt="Player"
            className="h-32 w-32 rounded-full"
          />
          <div className="ml-6">
            <h2 className="text-xl font-bold">West Ham United vs Bayer Leverkusen</h2>
            <p className="text-gray-600">WHU 46% vs LEV 32% Draw 22%</p>
          </div>
        </div>

        <section>
          <h3 className="text-lg font-semibold mb-2">Football Games</h3>
        
          <ul className="space-y-2">
            <li className="flex justify-between items-center bg-gray-100 p-2 rounded">
              <span>Atletico Madrid vs Eibar</span>
              <span>2:3</span>
            </li>
            <li className="flex justify-between items-center bg-gray-100 p-2 rounded">
              <span>Real Valladolid vs Mallorca</span>
              <span>2:1</span>
            </li>
          </ul>
        </section>
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


