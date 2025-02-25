import React from 'react';

const AdditionalInfo = () => {
    return (
        <>
            <div style={{paddingBottom: '8px'}} className=" inpurFill ">
                <label htmlFor="Short_Description" className=" text-gray-300 dark:text-[#091C46] w-full ">Short Description</label>
                <textarea style={{height: '40px'}} id="Short_Description" className=" w-full bg-gray-400"></textarea>
            </div>
            <div className="mb-4 inpurFill ">
                <label htmlFor="Description" className=" text-gray-300 dark:text-[#091C46] w-full ">Description</label>
                <textarea style={{height: '120px'}} id="Description" className=" w-full bg-gray-400 "></textarea>
            </div>


            <div className=" mb-6 flex justify-between items-center gap-4  " >
                <div className=" inpurFill w-full text-gray-300 dark:text-[#091C46] border ">
                    {/* <label htmlFor="typeName" className=" text-gray-300 dark:text-[#091C46] w-full ">Type</label>
                    <select id="typeName" className="seletedsection ">
                        <option selected value="organic">Organic</option>
                        <option value="other">Other</option>
                    </select> */}
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

export default AdditionalInfo;