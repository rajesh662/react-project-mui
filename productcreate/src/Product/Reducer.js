

export const initialState = {
    task:[],
    serach:'',
    fav:[],
    cart:[],
    count:[],
    Logindata:false,

};
export const stateReducer = (state,action)=>{
    switch(action.type){

        case"PUSH":
        return{...state,
            task:action.payload,
            count:action.payload} 
        
        case"TRUE":
        return{...state,
            Logindata:action.payload}

        case"FAV":
        return{...state,
            fav:state.task.filter((vals)=>
            vals.id===action.payload.id?(vals.isFav= !action.payload.isFav):false
            ) }

        case"CART":
        return{...state,
            cart:state.task.filter((car)=>
            car.id===action.payload.id?(car.isCart= !action.payload.isCart):false
            ) }
            case "REMOVE":
                return{
                    ...state,
                    count:state.count.filter(rk=>rk.id !== action.payload.id)
                }
            case "SEARCH" :
                return{
                    ...state,
                    search: action.payload
                }
                case "CARDDETAILS" :
                    return{
                        ...state,
                         task: action.payload,
                    }
        default:
        return state
    }   
};