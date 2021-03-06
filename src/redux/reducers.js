import {DUMMY, ADD_INV, INV_DONE, TIME, LOGIN, LOGOUT} from './actions'

var initialState={
    isKey:false,
    time:1,
    timeFlag:false,
    amount:10000,
    userDetails:{},
    currentInv:{},
    totalInv:[],
    invFlags:{Real_Estate:false,Savings_Account:false,Stocks:false,PPF:false,Mutual_Funds:false,Debentures:false,Gold:false,Fixed_Deposit:false}
}

export const reducers=(state=initialState,action)=>{
    switch (action.type){
        case LOGIN:
            return {...state,isKey:true}
        case LOGOUT:
            return {...state,isKey:false}   
        case ADD_INV:
            let newList= state.currentInv
            let flags=state.invFlags
            flags[Object.keys(action.payload[0])[0]]=true
            return {...state,currentInv:{...newList,...action.payload[0]},amount:action.payload[1],invFlags:flags}
        case INV_DONE:
            // let list=state.totalInv
            let flags2=state.invFlags
            flags2={Real_Estate:false,Savings_Account:false,Stocks:false,PPF:false,Mutual_Funds:false,Debentures:false,Gold:false,Fixed_Deposit:false}
            return {...state,totalInv:[action.payload],currentInv:{},timeFlag:false,invFlags:flags2}
        case TIME:
            return {...state,time:action.payload,timeFlag:true}
        default:
            return state
    }
}