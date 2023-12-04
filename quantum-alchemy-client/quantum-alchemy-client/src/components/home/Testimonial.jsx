
import React from 'react';

const Testimonial = () => {
    return (
        <div>
            <h1 className="text-center mt-20 my-5 text-4xl md:text-6xl font-bold">Review</h1>

            <div class="carousel w-full">
                <div id="slide6" class="carousel-item relative w-full h-96  my-20">
                <div className="card w-96 bg-neutral text-neutral-content mx-auto">
                    <div className=" my-auto mx-8 ">
                        <p className='text-justify'>"Amazing collection of products and top-notch customer service! The detailed product descriptions helped me make informed decisions, and the quick response from the support team resolved my queries instantly"</p>
                        <h2 className="font-bold mt-5 text-right">- John Doe</h2>
                    </div>
                </div>
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide8" class="btn btn-circle">❮</a> 
                    <a href="#slide7" class="btn btn-circle">❯</a>
                    </div>
                </div> 


                <div id="slide7" class="carousel-item relative w-full h-96  my-20">
                <div className="card w-96 bg-neutral text-neutral-content mx-auto">
                    <div className=" my-auto mx-8 ">
                        <p className='text-justify'>"I've been a loyal customer for months now, and I can't recommend this website enough. The quality of the products, coupled with their efficient delivery system, has exceeded my expectations. A fantastic online shopping experience!"</p>
                        <h2 className="font-bold mt-5 text-right">- Bob Johnson</h2>
                    </div>
                </div>
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide6" class="btn btn-circle">❮</a> 
                    <a href="#slide8" class="btn btn-circle">❯</a>
                    </div>
                </div> 


                <div id="slide8" class="carousel-item relative w-full h-96  my-20">
                <div className="card w-96 bg-neutral text-neutral-content mx-auto">
                    <div className=" my-auto mx-8 ">
                        <p className='text-justify'>"Bravo on the brand page! Being able to explore all the products from a specific brand in one place is a brilliant idea. It saves me time, and I always discover new favorites."</p>
                        <h2 className="font-bold mt-5 text-right">- Alice Williams</h2>
                    </div>
                </div>
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide7" class="btn btn-circle">❮</a> 
                    <a href="#slide6" class="btn btn-circle">❯</a>
                    </div>
                </div> 
            </div>
        </div>
    );
};

export default Testimonial;