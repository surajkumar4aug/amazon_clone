export const initialState={
    basket:[],
};
export const getBasket=(basket)=>
basket?.reduce((amount,item)=>item.price+amount,0);
const reducer=(state,action)=>{
    switch(action.type)
    {
        case "ADD":
            return{
                ...state,
                basket:[...state.basket,action.item],

            };
        case "REMOVE":
            
                const index=state.basket.findIndex(
                    (basketItem)=>basketItem.id===action.id
                );
                let newbasket=[...state.basket];
                if(index>=0)
                {
newbasket.splice(index,1);
                }
                else
                {
                    console.warn("cant remove")
                }
        
return {
    ...state,
    basket:newbasket
}

            default:
                return state;
    }
};
export default reducer;
