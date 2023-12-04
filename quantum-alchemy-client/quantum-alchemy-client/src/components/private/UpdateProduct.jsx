import { data } from "autoprefixer";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
    const product = useLoaderData();
    const {_id, name, brandName, type, price, rating, description, image } = product;

    const handleUpdateProduct = (e) => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const brandName = form.brandName.value;
        const image = form.image.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.description.value;

        const newProduct = { name, brandName, image, type, price, rating, description };
        
        fetch(`https://quantum-alchemy-server-jnvuyjsze-asifs-projects-ab8578b3.vercel.app/product/${_id}`,{
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        
        })
            .then(res => res.json())
            .then(data => {
                if(data.modifiedCount > 0){
                    Swal.fire({
                        icon: 'success',
                        title: 'Success!',
                        text: 'Product Updated Successfully!',
                        confirmButtonText : 'Cool'
                    })
                }
            })
    }

    return (
        <div className="bg-[#F4F3F0] p-10 md:p-24 w-full">
            <h2 className="text-3xl font-extrabold text-center mb-10 md:-mt-10">Update Product</h2>
            <form onSubmit={handleUpdateProduct}>
            {/* Name & Brand name*/}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2 mx-2">
                    <label className="label">
                        <span className="label-text">Product Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="Product Name" name="name" defaultValue={name} className="w-full input input-bordered " />
                    </label>
                </div>
                <div className="form-control md:w-1/2 mx-2">
                    <label className="label">
                        <span className="label-text">Brand Name</span>
                    </label>
                    <label className="input-group">
                        <select class="select select-bordered w-full " name='brandName' defaultValue={brandName}>
                            <option disabled selected>Select Brand Name</option>
                            <option>Dell</option>
                            <option>HP</option>
                            <option>Lenovo</option>
                            <option>Apple</option>
                            <option>Samsung</option>
                            <option>Microsoft</option>
                        </select>
                    </label>
                </div>
            </div>


            {/* img & type */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2 mx-2">
                    <label className="label">
                        <span className="label-text">Image Link</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="Image Link" name="image" defaultValue={image} className="w-full input input-bordered " />
                    </label>
                </div>
                <div className="form-control md:w-1/2 mx-2">
                    <label className="label">
                        <span className="label-text">Product Type</span>
                    </label>
                    <label className="input-group">
                        <select class="select select-bordered w-full " name='type' defaultValue={type}>
                            <option disabled selected>Select Product type</option>
                            <option>Laptop</option>
                            <option>Phone</option>
                            <option>Keyboard</option>
                            <option>Mouse</option>
                            <option>Speaker</option>
                            <option>Monitor</option>
                            <option>Watch</option>
                        </select>                    </label>
                </div>
            </div>

            {/* price & rating */}
            <div className="md:flex mb-8">
                
                <div className="form-control md:w-1/2 mx-2">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="Product Price" name="price" defaultValue={price} className="w-full input input-bordered " />
                    </label>
                </div>
                <div className="form-control md:w-1/2 mx-2">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <label className="input-group">
                        <select class="select select-bordered w-full " name="rating" defaultValue={rating}>
                            <option disabled selected>rate product</option>
                            <option>5</option>
                            <option>4</option>
                            <option>3</option>
                            <option>2</option>
                            <option>1</option>
                        </select>                    </label>
                </div>
            </div>
          
            {/* short description */}
            <div className="md:flex mb-8">
                <div className="form-control w-full mx-2">
                    <label className="label">
                        <span className="label-text">Short Description</span>
                    </label>
                    <label className="input-group">
                    <textarea className="textarea textarea-bordered h-24 w-full" placeholder="Update short description" name='description' defaultValue={description}></textarea>                    
                    </label>
                </div>
            </div>

            <input type="submit" value="Update Product" className="btn btn-block btn-neutral" />
            </form>
        </div>
    );
};

export default UpdateProduct;