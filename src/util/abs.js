import { markasread} from '../data_container/actions/actions';
import storage from '../data_container/store'

// x-class of element to be expanded
// y-class of element to be hidden
// z-id of thier container
// v-class that hides elements
// w-class that expands elements
// u-class that resize container
// i-old width-class of container
// xo-old width-class of element with class x 
// sn-new x styling
//oth-class of other elements to hide
//ott,otta class to hide -others
export const colpand=(x,y,xo,v,w,z,u,i,sn,oth,ott,otta)=>{
    const a=document.getElementsByClassName(x);
    const b=document.getElementsByClassName(y);
    const e=document.getElementById(z);
    const _p=document.getElementsByClassName(oth)
    if(!b[0].classList.contains(v)){
        for(let o=0;o<b.length;o++){
            b[o].classList.add(v)
            a[o].classList.remove(xo)
            a[o].classList.add(w)
            a[o].classList.add(sn)  
        }
        for(let _=0;_<_p.length;_++){   
            _p[_].classList.add(ott)
            _p[_].classList.add(otta)
        }
        e.classList.remove(i)
        e.classList.add(u)
    }else{
        for(let o=0;o<b.length;o++){
            b[o].classList.remove(v)
            a[o].classList.add(xo)
            a[o].classList.remove(w)
            a[o].classList.remove(sn)  
        }
        for(let _=0;_<_p.length;_++){   
            _p[_].classList.remove(ott)
            _p[_].classList.remove(otta)
        }
        e.classList.add(i)
        e.classList.remove(u)
    }
}


//e-event object
//cc-class of elements
//fo-child class of element with class cc
//atv-class to add to cc to make target active
//atp-class to add to fo to make target child active
//ffo-class to apply font color change to
//caa-new font color class
export const isactive=(e,cc,fo,atv,atvp,ffo,caa)=>{
    const fz=document.getElementsByClassName(cc)
    const fq=document.getElementsByClassName(fo)
    const fr=document.getElementById(e.currentTarget.dataset.gc)
    const _fu=document.getElementsByClassName(ffo)
    const _t=document.getElementById(e.currentTarget.dataset.gd)
    for(let i=0;i<fz.length;i++){
        if(fz[i].classList.contains(atv)){
            fz[i].classList.remove(atv)
        }
    }
    for(let r=0;r<fq.length;r++){
        if(fq[r].classList.contains(atvp)){
            fq[r].classList.remove(atvp)
        }
    }
    for(let _=0;_<_fu.length;_++){
        if(!_fu[_].classList.contains(caa)){
            _fu[_].classList.add(caa)
        }
    }
    e.currentTarget.classList.add(atv)
    fr.classList.add(atvp)
    _t.classList.remove(caa)

}


//returns an array of random numbers
//a-length of expected array
export const rand=(i)=>{
    let a=[],v=0
    for(;a.length<i;){
       v=Math.floor(Math.random()*10)
       if(!a.includes(v)){
           a.push(v)
       }
    }
    return a;
}

//time-time (should be in this "2017-12-29T09:00:15Z" format) to check against current time
export const timepassed=(time)=>{
    const _toi=new Date(time).getTime(),_ct=new Date().getTime()
    const _dif=_ct-_toi
    if(_dif!==0){
        const _s=_dif/1000
        const _m=_s/60
        const _h=_m/60
        const _d=_h/24
        if(_d>=1){
            if(parseInt(_d,10)>1){
                return parseInt(_d,10)+" days ago"
            }else{
            return "One day ago"
            }
        }
        if(_h>=1){
            if(parseInt(_h,10)>1){
                return parseInt(_h,10)+" hours ago"
            }else{
            return "an hour ago"
            } 
        }
        if(_m>=1){
            if(parseInt(_m,10)>1){
                return parseInt(_m,10)+" minutes ago"
            }else{
            return "a minute ago"
            }
        }
    }
    return "Just now"
}
//mark a news object as read 
export const onread=(e)=>{
    storage.dispatch(
        markasread(
            storage.getState().requests.MARKET_NEWS.news,
            storage.getState().requests.MARKET_NEWS.read,
            e.currentTarget.dataset.key
         )
    )
}