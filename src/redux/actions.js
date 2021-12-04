import { ADD_RESIDENT,REMOVE_RESIDENT,EDIT_RESIDENT,SET_FORM,SET_CURRENTRESIDENT } from "./types";

export const addResident=(resident)=>{
return {type:ADD_RESIDENT,payload:resident}
}

export const removeResident=(id)=>{
return {type:REMOVE_RESIDENT,payload:id}    
}

export const editResident=(address)=>{
return {type:EDIT_RESIDENT,payload:address}    
}

export const setForm=(value)=>{
return {type:SET_FORM,payload:value}
}

export const setCurrentResident=(resident)=>{
    return {type:SET_CURRENTRESIDENT ,payload:resident}
}