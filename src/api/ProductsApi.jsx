import axios from "axios"

const getAllProducts=async()=>{
   
    try{
        let res=await axios.get('https://dummyjson.com/products')
       return res.data.products;
    }
    catch(error){
        console.log("Error While Fetching api...",error)
    }
}

const getProductById=async(id)=>{
    try{
        let res=await axios.get(`https://dummyjson.com/products/${id}`)
       return res.data;
    }
    catch(error){
        console.log("Error While Fetching product...",error)
    }
}

export {getAllProducts, getProductById};
export default getAllProducts;