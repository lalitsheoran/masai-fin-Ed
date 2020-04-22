export const LOGIN='LOGIN'
export const LOGOUT='LOGOUT'
export const ADD_INV='ADD_INV'
export const INV_DONE='INV_DONE'
export const TIME='TIME'



export const login=()=>({
    type:LOGIN
})
export const logout=()=>({
    type:LOGOUT
})

export const addInv=(payload)=>({
    type:ADD_INV,
    payload:payload
})

export const invDone=(payload)=>({
    type:INV_DONE,
    payload:payload
})

export const setTime=(time)=>({
    type:TIME,
    payload:time
})