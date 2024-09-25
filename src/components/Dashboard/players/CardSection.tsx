
// import "../App.css"
import { FaShoppingCart } from "react-icons/fa";
const CardsSection = () => {
  return (
    <div>

            <h2 className="text-2xl font-bold">All Players</h2>
        <div className='grid md:grid-cols-2 grid-cols-1 my-8 gap-y-5 px-8 w-full gap-x-5 relative'>
            {[1,2,3,4,5].map((index) => (
                <div key={index} className='card isPopular'>
                    <div className='author'>
                        <img src="" alt="" />
                        <div>name</div>
                    </div>
                    <div className='image'>
                        <img src={"https://freepngimg.com/thumb/shoes/21729-4-saucony-grid-9000.png"} alt="" />
                    </div>
                    <div className='info'>
                        <div className='name'>Nike Retro Premium</div>
                        <div className='price'>Rs. 1200</div>
                    </div>
                    <div className='more'>
                        <div className='buttons'>

                            <button>
                                <FaShoppingCart/>
                            </button>
                            <button>
                                Buy Now
                            </button>
                        </div>
                        <div className='options'>
                            <label htmlFor="">Options</label>
                            <ul>
                                <li>r</li>
                                <li>r</li>
                                <li>r</li>
                                <li>r</li>
                                <li>r</li>
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default CardsSection