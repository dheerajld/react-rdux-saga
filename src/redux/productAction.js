import { PRODUCT_LIST, SERCH_PRODUCT } from './constant'

export const productList =  ()=>{
//  let data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//  data = data.json();
//  console.log("action called",data)
return{
    type:PRODUCT_LIST,
  
}

}
export const productSerch =  (query)=>{
 
    return{
        type:SERCH_PRODUCT,
        query
    }
    
    }