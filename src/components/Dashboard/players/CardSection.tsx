
// import "../App.css"
import { FaShoppingCart } from "react-icons/fa";
const CardsSection = () => {
  return (
    <div>

            <h2 className="text-2xl font-bold text-white">All Players</h2>
        <div className='grid md:grid-cols-2 grid-cols-1 my-8 gap-y-5 px-8 w-full gap-x-5 relative '>
            <div className='card isPopular'>
                        <div className='author'>
                            <img src="" alt="" />
                            {/* <div>name</div> */}
                        </div>
                        <div className='image'>
                            <img src={"https://imgs.search.brave.com/AgPg6oHHKcapRgxtIhoE2hBXqs2-HE1O6mF9omz8JP0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2Q4LzIw/Lzk1L2Q4MjA5NTg4/OTI0Mzc3YTg1OTY1/ZTMwNTQwMWU5MjRk/LmpwZw"} alt="" />
                        </div>
                        <div className='info'>
                            <div className='name'>Virat Kohli</div>
                            <div className='price'>INDIA/Royal Challengers Bangalore</div>
                        </div>
                        
            </div>
            <div className='card isPopular'>
                        <div className='author'>
                            <img src="" alt="" />
                            {/* <div>name</div> */}
                        </div>
                        <div className='image'>
                            <img src={"https://imgs.search.brave.com/p0An641-pAQBvoRmDpfyxlbKNjUm-E2QEU0cPcApxvQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTUy/MTI3OTM5MC9waG90/by9yb2hpdC1zaGFy/bWEtb2YtaW5kaWEt/cG9zZXMtZm9yLWEt/cG9ydHJhaXQtYXQt/d2luZHNvci1wYXJr/LXJvc2VhdS1kb21p/bmljYS1vbi1qdWx5/LTEwLTIwMjMuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPWJI/dkZZT0RxNk1Uc251/QUZ5aUs2azk4MnBy/Ym5WUUtQRlM3ckF5/cU1SQVk9"} alt="" />
                        </div>
                        <div className='info'>
                            <div className='name'>Rohit Sharma</div>
                            <div className='price'>INDIA/Mumbai Indians</div>
                        </div>
                        
            </div>
            <div className='card isPopular'>
                        <div className='author'>
                            <img src="" alt="" />
                            {/* <div>name</div> */}
                        </div>
                        <div className='image'>
                            <img src={"https://imgs.search.brave.com/0rZFmihgtIpOKY5QSt3Ch09UJY-8BAfffTpAJ8HA594/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcx/LmhzY2ljZG4uY29t/L2ltYWdlL3VwbG9h/ZC9mX2F1dG8sdF9k/c19zcXVhcmVfd182/NDAscV81MC9sc2Np/L2RiL1BJQ1RVUkVT/L0NNUy8zMjMwMDAv/MzIzMDM2LnBuZw"} alt="" />
                        </div>
                        <div className='info'>
                            <div className='name'>rishabh Pant </div>
                            <div className='price'>INDIA/Delhi Capitals</div>
                        </div>
                        
            </div>
            <div className='card isPopular'>
                        <div className='author'>
                            <img src="" alt="" />
                            {/* <div>name</div> */}
                        </div>
                        <div className='image'>
                            <img src={"https://imgs.search.brave.com/VYHGItz7oOYZVO-1FFi7_9meqJL6zMqLj9Ez9xcaLE4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjAw/OTU5MzI4My9waG90/by9yYWprb3QtaW5k/aWEtcmF2aW5kcmEt/amFkZWphLWR1cmlu/Zy1hLW5ldHMtc2Vz/c2lvbi1hdC1zYXVy/YXNodHJhLWNyaWNr/ZXQtYXNzb2NpYXRp/b24tc3RhZGl1bS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/b2JpODIyNW9WVmt6/RG5Cdi1NNlB4RnNt/UlNxWHdkRW1fSUNr/N2tmcFV2RT0"} alt="" />
                        </div>
                        <div className='info'>
                            <div className='name'>Ravindra Jadeja</div>
                            <div className='price'>INDIA/Chennai Super Kings</div>
                        </div>
                        
            </div>
        </div>
    </div>
  )
}

export default CardsSection