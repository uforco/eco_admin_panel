import React from 'react';
import TextEditor from '@/components/shared/tiptap/TextEditor';
import { HiSave } from "react-icons/hi";
import { useAppDispatch, useAppSelector } from '@/redux/app/hooks';
import { inputDataProduct, productSliceData } from '@/redux/features/addProduct/addProductSlice';

const AdditionalInfo = () => {

    const data = useAppSelector(productSliceData);
      const dispatch = useAppDispatch();

    return (
        <>
            <div className="mb-6 inpurFill ">
                <label htmlFor="short_Description" className=" text-gray-300 dark:text-[#091C46] w-full ">Short Description</label>
                <input value={data?.product?.short_Description} placeholder='Type a Short Description ...' onChange={(e) =>dispatch(inputDataProduct({ short_Description: e?.target?.value }))} type="text" id="short_Description" className=" w-full bg-gray-400 "></input>
            </div>
            <div>
            <TextEditor></TextEditor>
            </div>
            
            <div className=" ProductSaveBtn ">
                
                <button
                type='submit'
                >
                    <p><HiSave></HiSave></p>
                    <span>Save Product</span></button>
            </div>
        </>
    );
};

export default AdditionalInfo;