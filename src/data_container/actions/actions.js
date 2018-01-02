export const marketnews=(request)=>({
    type:'MARKET_NEWS',
    payload:request
})

//mark as read func
//news-array of articles
//read-array of read articles 
// val-the index of the read article
export const markasread=(news,read,val)=>{
    let _a=news
    let _b=read
    _b.push(_a[val])
    _a.splice(val,1)
    return{
    type:'MARK_NEWS_AS_READ',
    payload:{news:_a,read:_b}
    }
}