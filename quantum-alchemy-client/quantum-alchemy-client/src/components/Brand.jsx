import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import Banner from './home/banner';
import Bnr from './Bnr';

const Brand = () => {
    const loader = useLoaderData();
    const brandName = useParams();
    
    // filter the products by brand name
    const brandProducts = loader.filter(product => product.brandName == brandName.brandName);


    const getBannerImage = (brandName) => {
        const brandBannerImages = {
            Microsoft: [
            'https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2021/01/surface-pro-7-1610470726.jpg',
            'https://images.macrumors.com/t/4NkVJm_OFX88htZqW1X5k8mPi1Y=/1600x/article-new/2019/08/microsoft-surface-mac-book-ad-2019.jpg',
            'https://image.cnbcfm.com/api/v1/image/107304551-1695309167754-family-image_web__2_.jpg?v=1695380779&w=1920&h=1080',
        ],
            Dell: [
            'https://i.ytimg.com/vi/VckEy-NN0fk/maxresdefault.jpg',
            'https://cf-images.us-east-1.prod.boltdns.net/v1/static/6057277730001/90f23a1a-4e4d-4bb8-bca3-df3b62599924/268c074b-6276-49b8-8436-822842c6ede6/1280x720/match/image.jpg',
            'https://1.bp.blogspot.com/-8wcDOM2q4wc/Xxhp6OlrBAI/AAAAAAAAJvI/1qwmIA2YPpcCD7kGWqbNdfNKv9o75f-0wCNcBGAsYHQ/s1600/DELL%2BInspiron%2B15-3500%2BG5%2BGaming%2BLaptop.jpeg',
        ],
            Samsung: [
            'https://i.ytimg.com/vi/GZMcQ4Vk7Rk/maxresdefault.jpg',
            'https://i.gadgets360cdn.com/large/main-new_1650038978698.jpg?downsize=950:*',
            'https://i.ytimg.com/vi/NxtNX49guYI/maxresdefault.jpg',
        ],
            Lenovo: [
            'https://i.ytimg.com/vi/vvmWoOUZJZs/maxresdefault.jpg',
            'https://i.pcmag.com/imagery/articles/04SRbKyuHIg0BskXUZtRzdi-3..v1693321190.jpg',
            'https://i.ytimg.com/vi/QARv3mp7ZDc/maxresdefault.jpg',
        ],
            Apple: [
            'https://www.apple.com/v/ipad-pro/am/images/overview/hero/hero_combo__fcqcc3hbzjyy_large.jpg',
            'https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/14_16_inch_MBP_Comparison.jpg',
            'https://cdn.fstoppers.com/styles/large-16-9/s3/lead/2016/05/resizedapple_rose_gold_macbook2.jpg',
        ],
            HP: [
            'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5b9ea364050823.5ac53a8c229a9.png',
            'https://i.ytimg.com/vi/0aCIkRLdUtA/maxresdefault.jpg',
            'https://i.pinimg.com/736x/ea/46/c4/ea46c4f2b78d2e035b253dddd4d290aa.jpg',
        ],
        };
    
        return brandBannerImages[brandName] || 'default-banner.jpg'; // Default banner if brandName not found
    };

    const brandImage = getBannerImage(brandName.brandName);
    console.log(brandImage);


    return (
        <>
        <Bnr imageURLs = {brandImage} ></Bnr>
        {/* nothing found */}
        {
            brandProducts.length == 0 &&        <div class="w-full bg-gray-50 flex items-center">
            <div class="container flex flex-col md:flex-row items-center justify-between px-5 text-gray-700 mx-auto">
                    <div class="w-full lg:w-1/2 mx-8">
                        <div class="text-5xl text-green-500 font-dark font-extrabold mb-8"> No Data Found</div>
                    <p class="text-lg md:text-2xl font-light leading-normal mb-8">
                        Sorry we couldn't find any product of this brand. Please try again with another brand.
                    </p>
                    
                    <a href="/" class="px-5 inline py-3 text-sm font-medium leading-5 shadow-2xl text-white transition-all duration-400 border border-transparent rounded-lg focus:outline-none bg-green-600 active:bg-red-600 hover:bg-red-700">back to homepage</a>
            </div>
                <div class="w-full lg:flex lg:justify-end lg:w-1/2 mx-5 my-12">
                    <img src="https://user-images.githubusercontent.com/43953425/166269493-acd08ccb-4df3-4474-95c7-ad1034d3c070.svg" alt="" />
                </div>
            
            </div>
        </div>
        }
        {
            brandProducts.length !== 0 && 
            <h1 className="text-2xl md:text-4xl font-bold text-center mb-6 mt-20">Get Your Desired Product from Featured Category!</h1>
        }

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 m-10'>

            {
                brandProducts.map(product =>
                    <div key={product._id} className={`card bg-base-100 shadow-xl h-full`}>
                        
                        <figure ><img src={product.image} className='h-56 ' /></figure>
                        <div className="card-body">
                            <p><b>Name :</b> {product.name}</p>
                            <p><b>Brand :</b> {product.brandName}</p>
                            <p><b>Type :</b> {product.type}</p>
                            <p><b>Price:</b> {product.price} ৳</p>
                            <p><b>Rating:</b> {product.rating}</p>
                            <p><b>Description:</b> {product.description}</p>
                            <div className="card-actions justify-center gap-x-8 mt-4">
                            <Link to={`/updateProduct/${product._id}`}><button className="btn btn-neutral text-white">Update</button></Link>
                            <Link to={`/productDetails/${product._id}`}><button className="btn btn-neutral text-white">Details</button></Link>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
        </>
    );
};




export default Brand;