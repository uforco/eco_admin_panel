import { productType } from "@/redux/features/addProduct/addProduct";

export const addProductValidetion = (
  data: productType,
  FromErrorMes: (e: string) => void
): boolean => {
  const {
    // bercode,
    product_name,
    image,
    // rating
    price,
    // discount,
    // brand_name,
    // brand_logo,
    qty,
    scale,
    type,
    category,
    short_Description,
    description,
  } = data;

  const returnBack: boolean = true;

  if (!image[0]) {
    FromErrorMes("Upload a min One Image for Primary Image");
    return returnBack;
  }
  else if (!product_name || product_name.length < 5) {
    FromErrorMes("Must be Fill Product Name for min 5 charectors");
    return returnBack;
  }
  else if (!qty || !scale) {
    FromErrorMes("Must be Fill qty scale Fill");
    return returnBack;
  }
  else if (!price) {
    FromErrorMes("Must be Fill qty scale Fill");
    return returnBack;
  }
  else if (!type) {
    FromErrorMes("Must be selected type");
    return returnBack;
  }
  else if (!category) {
    FromErrorMes("Must be selected category");
    return returnBack;
  }
  else if (!short_Description || short_Description.length < 30) {
    FromErrorMes("Must be Fill Short Description for min 30 charectors");
    return returnBack;
  }
  else if (!description || short_Description.length < 40) {
    FromErrorMes("Must be Fill Short Description for min 40 charectors");
    return returnBack;
  }else{
    return false
  }
};
