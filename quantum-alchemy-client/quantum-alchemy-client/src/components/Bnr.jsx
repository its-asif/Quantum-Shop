
const Bnr = ({imageURLs}) => {
    const [img1, img2, img3] = imageURLs;
    console.log(img1, img2, img3);
    return (
        <div>
            <div className="carousel w-full lg:h-[100vh]">
            <div id="slide1" className="carousel-item  w-full relative">
                
                <img src={img1} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">❮</a> 
                <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide2" className="carousel-item relative w-full">
                
                {/* <p className="text-4xl">Unleash the Future: Tech and Gaming Events Like Never Before!</p> */}
                <img src={img2} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">❮</a> 
                <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide3" className="carousel-item relative w-full">
                <div className="absolute w-full h-full top-0 left-0 px-10  flex">
  
                </div>
                <img src={img3} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">❮</a> 
                <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div> 
            </div>            
        </div>
    );
};

export default Bnr;