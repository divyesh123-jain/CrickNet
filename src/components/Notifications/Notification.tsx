
const players = [
    { position: 1, player: 'Babar Azam', country: 'PAKISTAN', rating: 824 },
    { position: 2, player: 'Rohit Sharma', country: 'INDIA', rating: 765 },
    { position: 3, player: 'Shubman Gill', country: 'INDIA', rating: 763 },
    { position: 4, player: 'Harry Tector', country: 'IRELAND', rating: 746 },
    { position: 5, player: 'Virat Kohli', country: 'INDIA', rating: 746 },
  
  ];

export default function Notification() {
    return (
        <>
        <div className=" w-full sm:w-auto">
        <table className="w-full border-collapse">
        <thead>
          <tr className="bg-[#1536c6]">
            <th className="border-b-2 border-neutral-50 text-left p-3 text-neutral-50 text-xs md:text-2xl">Position</th>
            <th className="border-b-2 border-neutral-50 text-left p-3 text-neutral-50 text-xs md:text-2xl">Player</th>
            <th className="border-b-2 border-neutral-50 text-left p-3 text-neutral-50 text-xs md:text-2xl">Country</th>
            <th className="border-b-2 border-neutral-50 text-left p-3 text-neutral-50 text-xs md:text-2xl">Rating</th>
          </tr>
        </thead>
        </table>
     {players.map((player, index) => (
        <button
          key={index}
          className="text-2xl w-full text-neutral-50 uppercase flex flex-row justify-between items-center border-[#cabeb5]  shadow-[4px_4px_#1536c6] cursor-pointer mx-0 my-[20px] p-[15px] rounded-[10px] border-2 border-solid active:shadow-none active:translate-x-[3px] active:translate-y-[3px]"
        >
          <span>{player.position}</span>
          <span>{player.player}</span>
          <span>{player.country}</span>
          <span>{player.rating}</span>
        </button>
      ))}
      </div>
  </>
    )
    }