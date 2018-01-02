const initialState={
    MARKET_NEWS:{
        pending:false,
        fulfilled:false,
        rejected:false,
        news:[],
        error:[],
        read:[]
    }
}

const request=(state=initialState,action)=>{
    switch(action.type){
        case 'MARKET_NEWS_PENDING':{
            return{
                ...state,
                MARKET_NEWS:{
                pending:true,
                fulfilled:false,
                rejected:false,
                news:[],
                error:[],
                read:[]
            }
            }
        }
        case 'MARKET_NEWS_FULFILLED':{
            return{
                ...state,
                MARKET_NEWS:{
                pending:false,
                fulfilled:true,
                rejected:false,
                news:action.payload.data.articles,
                error:[],
                read:[]
                }
            }
        }
        case 'MARKET_NEWS_REJECTED':{
            return{
                ...state,
                MARKET_NEWS:{
                pending:false,
                fulfilled:false,
                rejected:true,
                news:[],
                read:[],
                error:action.payload
                }
            }
        }
        case 'MARK_NEWS_AS_READ':{
            return{
                ...state,
                MARKET_NEWS:{
                    ...action.payload,
                    error:[],
                    pending:false,
                    fulfilled:true,
                    rejected:false,
                }
            }
        }
        default:{
            return{
                ...state
            }
        }
    }
}

export default request;