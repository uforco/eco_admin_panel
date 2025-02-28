
// type imageType = {
//   img1: string;
//   img2: string;
//   img3: string;
//   img4: string;
// }

export interface InitialState {
  value: number;
  product: {
    bercode: string;
    product_name: string;
    brand_name: string;
    brand_logo: string; //base64
    image: [string, string, string, string]; //base64
    qty: number | string;
    scale: string;
    price: number | string;
    discount: number | string;
    type: string;
    category: string;
    short_Description: string;
    description: string;
  };
}
