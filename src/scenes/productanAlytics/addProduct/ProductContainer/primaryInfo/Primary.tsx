import BercodeGenared from "../formItems/BercodeGenared"
import PrimryImage from "../primryImage/PrimryImage"

const PrimaryInfo = () => {
    return(
      <>
      <div className=" flex justify-center p-2 " >
          <PrimryImage></PrimryImage>
        </div>
        <div className="mb-6 inpurFill ">
            <label htmlFor="productName" className=" text-gray-300 dark:text-[#091C46] w-full ">Product Name</label>
            <input type="text" id="productName" className=" w-full bg-gray-400 "></input>
        </div>
  
        <div className="mb-6 inpurFill ">
            <label htmlFor="brand_name" className=" text-gray-300 dark:text-[#091C46] w-full ">Brand Name</label>
            <input type="text" id="brand_name" className=" w-full bg-gray-400 "></input>
        </div>
  
        <div className=" w-full " >
          <BercodeGenared></BercodeGenared>
        </div>
  
        
        
      </>
    )
  }

export default PrimaryInfo;