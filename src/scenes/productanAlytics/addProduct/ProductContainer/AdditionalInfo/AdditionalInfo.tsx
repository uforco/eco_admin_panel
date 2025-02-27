import React from 'react';
import TextEditor from '@/components/shared/tiptap/TextEditor';
import { HiSave } from "react-icons/hi";

const AdditionalInfo = () => {
    return (
        <>
            <div className="mb-6 inpurFill ">
                <label htmlFor="short_Description" className=" text-gray-300 dark:text-[#091C46] w-full ">Short Description</label>
                <input type="text" id="short_Description" className=" w-full bg-gray-400 "></input>
            </div>
            <div>
            <TextEditor></TextEditor>
            </div>
            
            <div className=" ProductSaveBtn ">
                
                <button>
                    <p><HiSave></HiSave></p>
                    <span>Save Product</span></button>
            </div>
        </>
    );
};

export default AdditionalInfo;