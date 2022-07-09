import {ADD_TO_CART, REMOVE_FROM_CART,EMPTY_CART} from './constant'

export const cartData = (data=[],action)=>{
// if(action.type === ADD_TO_CART){
// console.log(action);
// return action.data;
// }else{
//     return "not match action";
// }
switch (action.type) {
    case ADD_TO_CART:
       
       console.log("Add item",action);
        return [action.data,...data];
    case REMOVE_FROM_CART:
        console.log("Remove item",action);
       // data.length =  data.length ? data.length -1 : data;
       const remaingItem = data.filter((item)=>item.id!==action.data);
console.log(remaingItem);
       
            return [... remaingItem];    

     case EMPTY_CART:
        console.log("Empty Item");
           data = []
                   return [...data];    
   
        

    default:
        return data;
}

}