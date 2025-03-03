import { InitialState } from "./addProduct.d";

const initialState: InitialState = {
  value: 0,
  product: {
    bercode: "",
    product_name: "",
    brand_name: "None-Brand",
    brand_logo: "", //base64
    image: ['', '', '', ''], //base64
    qty: "",
    scale: "",
    price: "",
    discount: "",
    type: "",
    category: "",
    short_Description: "",
    description: "",
  },
};

export default initialState;
