// import React, { useState } from 'react'

// import { ChangeEvent } from "react";

 const ImageToBase64 = async (file: File): Promise<string | void> => {


    console.log(file)

          const reader = new FileReader();
            reader.readAsDataURL(file); // Convert file to base64
           reader.onloadend = () => {
            // return 
            // console.log(reader.result as string)
            return reader.result as string
          };
        // console.log(output)
}

export default ImageToBase64
