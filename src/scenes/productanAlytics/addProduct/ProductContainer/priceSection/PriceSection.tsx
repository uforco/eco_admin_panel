import React from 'react';

const PriceSection = () => {
    return (
        <>
            <div className=" mb-6 flex justify-between items-center gap-4 " >
                <div className=" inpurFill w-full ">
                    <label htmlFor="qty" className=" text-gray-300 dark:text-[#091C46] w-full ">qty</label>
                    <input type="number" id="qty" onChange={(e)=> console.log(e.target.value)} className=" w-full bg-gray-400 "></input>
                </div>
                <div className=" inpurFill  ">
                    <label htmlFor="scale" className=" text-gray-300 dark:text-[#091C46] w-full ">Scale</label>
                    <select style={{width: '100px', padding: '10px' }} id="scale" className="seletedsection ">
                        <option selected value="K">Kg</option>
                        <option value="L">Liter</option>
                        <option value="P">Pice</option>
                    </select>
                </div>
            </div>


            <div className=" mb-6 flex justify-between items-center gap-4 " >
                <div className=" inpurFill w-full ">
                    <label htmlFor="price" className=" text-gray-300 dark:text-[#091C46] w-full ">Price</label>
                    <input type="number" id="price" onChange={(e)=> console.log(e.target.value)} className=" w-full bg-gray-400 "></input>
                </div>
                <div className=" inpurFill ">
                    <label htmlFor="discount" className=" text-gray-300 dark:text-[#091C46] w-full ">Discount</label>
                    <input type="number" id="discount" onChange={(e)=> console.log(e.target.value)} className=" w-full bg-gray-400 "></input>
                </div>
            </div>



            <div className=" mb-6 flex justify-between items-center gap-4 " >

                <div className=" inpurFill w-full ">
                    <label htmlFor="typeName" className=" text-gray-300 dark:text-[#091C46] w-full ">Type</label>
                    <select id="typeName" className="seletedsection ">
                        <option selected value="organic">Organic</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className=" inpurFill w-full ">
                    <label htmlFor="categoryName" className=" text-gray-300 dark:text-[#091C46] w-full ">Category Name</label>
                    <select id="categoryName" className="seletedsection  ">
                        <option selected value="vegetables">Vegetables</option>
                        <option  value="fish">Fish</option>
                        <option  value="bakery">Bakery</option>
                        <option  value="oil">Oil</option>
                        <option  value="snacks">Snacks</option>
                    </select>
                </div>
            </div>
            
        </>
    );
};

export default PriceSection;