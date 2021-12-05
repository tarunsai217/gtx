import { ADD_RESIDENT,REMOVE_RESIDENT,EDIT_RESIDENT, SET_FORM, SET_CURRENTRESIDENT } from "./types";

const initialState={
properties:[{name:"property1"},{name:"property2"}],    
residents:[{id:1,name:'Sai',age:'27',property:'property1'},{id:2,name:'Baram',age:'22',property:'property2'},{id:3,name:'farukh',age:'45',property:'property1'},{id:4,name:'Suhaas',age:'68',property:'property2'}],
showForm:false,
currentResident:null
}

export default (state=initialState,action)=>{
    console.log('beforestate',state,action)
    switch(action.type){
        case ADD_RESIDENT:
            return {
                ...state, 
                residents:[...state.residents,action.payload]
            }
        case REMOVE_RESIDENT:
            return{
                ...state,
                residents:state.residents.filter((resident)=>{return resident.id!==action.payload})
            }        
        case EDIT_RESIDENT:
            return{
                ...state,
                residents:state.residents.map((resident)=>{if(resident.id===action.payload.id){return action.payload} else{return resident }})
            } 
        case SET_FORM:
            return{
                ...state,
                showForm:action.payload
            }
        case SET_CURRENTRESIDENT:
            return{
                ...state,
                currentResident:action.payload
            }           
        default:
            return state;
    }
}