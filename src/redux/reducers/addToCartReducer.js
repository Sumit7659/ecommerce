export const addToCart =(state=[],action)=>{
    switch(action.type){
        case 'ADD':{
            let newState=[action.payload]
            let x=localStorage.getItem('cartValue')
            if(x!==null){
                let prevData=JSON.parse(x)
                newState=[...prevData,...newState]
                localStorage.setItem("cartValue",JSON.stringify(newState))
            }
            else{
                localStorage.setItem("cartValue",JSON.stringify(newState))
            }
            
            return[...newState]
        }
        case 'REMOVE':{
            let newState=[...action.payload]
            localStorage.setItem('cartValue',JSON.stringify(newState))
            return newState
        }
        default:return state;
    }
}