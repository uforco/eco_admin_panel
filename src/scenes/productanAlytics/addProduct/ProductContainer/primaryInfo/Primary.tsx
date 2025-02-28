import AnotherImage from "@/components/shared/addProductImage/AnotherImage";
import PrimryImage from "@/components/shared/addProductImage/PrimryImage";
import { useAppDispatch } from "@/redux/app/hooks";
import { inputDataProduct } from "@/redux/features/addProduct/addProductSlice";

const PrimaryInfo = () => {

  const dispatch = useAppDispatch()


  return (
    <>
      <div className=" flex justify-center p-2 ">
        <PrimryImage></PrimryImage>
      </div>
      <div className="otherImageContainer ">
        <AnotherImage imageCounter={1}></AnotherImage>
        <AnotherImage imageCounter={2}></AnotherImage>
        <AnotherImage imageCounter={3}></AnotherImage>
      </div>

      <div className="mb-6 inpurFill ">
        <label
          htmlFor="product_name"
          className=" text-gray-300 dark:text-[#091C46] w-full "
        >
          Product Name
        </label>
        <input
          type="text"
          id="product_name"
          className=" w-full bg-gray-400"
          onChange={(e)=> dispatch(inputDataProduct({product_name: e?.target.value}))}
        ></input>
      </div>

      <div className="mb-6 inpurFill ">
        <label
          htmlFor="brand_name"
          className=" text-gray-300 dark:text-[#091C46] w-full "
        >
          Brand Name
        </label>
        <input
          type="text"
          id="brand_name"
          className=" w-full bg-gray-400 "
          onChange={(e)=> dispatch(inputDataProduct({brand_name: e?.target.value}))}
        ></input>
      </div>
    </>
  );
};

export default PrimaryInfo;
