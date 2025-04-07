'use client'
import React from 'react';
import BercodeGenared from '../formItems/BercodeGenared';
import { useAppDispatch, useAppSelector } from '@/redux/app/hooks';
import { inputDataProduct, productSliceData } from '@/redux/features/addProduct/addProductSlice';

const PriceSection = () => {

    const data = useAppSelector(productSliceData);
    const dispatch = useAppDispatch();


    return (
        <>
        <div className=" w-full " >
          <BercodeGenared></BercodeGenared>
        </div>
            <div className=" mb-6 flex justify-between items-center gap-4 " >
                <div className=" inpurFill w-full ">
                    <label htmlFor="qty" className=" text-gray-300 dark:text-[#091C46] w-full ">qty</label>
                    <input type="number" id="qty" placeholder="Type a Product Qty or Weight " value={data?.product?.qty} onChange={(e)=> dispatch(inputDataProduct({ qty: e?.target?.value }))} className=" w-full bg-gray-400 "></input>
                </div>
                <div className=" inpurFill  ">
                    <label htmlFor="scale" className=" text-gray-300 dark:text-[#091C46] w-full ">Scale</label>
                    <select value={data?.product?.scale} onChange={ (e)=> dispatch(inputDataProduct({ scale: e?.target?.value })) } style={{width: '100px', padding: '10px' }} id="scale" className="seletedsection ">
                        <option disabled selected value="">Select</option>
                        <option value="KG">Kg</option>
                        <option value="LITER">Liter</option>
                        <option value="PIS">Pis</option>
                    </select>
                </div>
            </div>

            <div className=" mb-6 flex justify-between items-center gap-4 " >
                <div className=" inpurFill w-full ">
                    <label htmlFor="price" className=" text-gray-300 dark:text-[#091C46] w-full ">Price</label>
                    <input type="number" id="price" placeholder="Type a Product Price" value={data?.product?.price} onChange={ (e)=> dispatch(inputDataProduct({ price: e?.target?.value })) } className=" w-full bg-gray-400 "></input>
                </div>
                <div className=" inpurFill ">
                    <label htmlFor="discount" className=" text-gray-300 dark:text-[#091C46] w-full ">Discount %</label>
                    <input type="number" id="discount" value={data?.product?.discount} onChange={ (e)=> dispatch(inputDataProduct({ discount: e?.target?.value })) } className=" w-full bg-gray-400 "></input>
                </div>
            </div>



            <div className=" mb-6 flex justify-between items-center gap-4 " >
                <div className=" inpurFill w-full ">
                    <label htmlFor="typeName" className=" text-gray-300 dark:text-[#091C46] w-full ">Type</label>
                    <select id="typeName" value={data?.product?.type} onChange={ (e)=> dispatch(inputDataProduct({ type: e?.target?.value })) } className="seletedsection ">
                        <option disabled selected value="">Select</option>
                        <option value="organic">Organic</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className=" inpurFill w-full ">
                    <label htmlFor="categoryName" className=" text-gray-300 dark:text-[#091C46] w-full ">Category Name</label>
                    <select id="categoryName" value={data?.product?.category} onChange={(e)=> dispatch(inputDataProduct({ category: e?.target?.value }))} className="seletedsection  ">
                        <option disabled selected value="">Select</option>
                        <option  value="vegetables">Vegetables</option>
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