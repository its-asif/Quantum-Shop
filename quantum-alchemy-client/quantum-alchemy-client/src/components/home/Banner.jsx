
const Banner = () => {
    return (
        <div>
            <div className="carousel w-full lg:h-[100vh]">
            <div id="slide1" className="carousel-item  w-full relative">
                
                <img src="https://i.ytimg.com/vi/vvmWoOUZJZs/maxresdefault.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">❮</a> 
                <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide2" className="carousel-item relative w-full">
                
                {/* <p className="text-4xl">Unleash the Future: Tech and Gaming Events Like Never Before!</p> */}
                <img src="https://img.freepik.com/premium-psd/black-friday-sale-laptops-with-dark-background-3d-render_444361-42.jpg?w=826" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">❮</a> 
                <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide3" className="carousel-item relative w-full">
                <div className="absolute w-full h-full top-0 left-0 px-10  flex">
  
                </div>
                <img src="https://i.ibb.co/PcLF5ZT/Express.webp" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">❮</a> 
                <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div> 
            </div>            
        </div>
    );
};

export default Banner;