// x-class of element to be expanded
// y-class of element to be hidden
// z-id of thier container
// v-class that hides elements
// w-class that expands elements
// u-class that resize container
// i-old width-class of container
// xo-old width-class of element with class x 
// sn-new x styling
//others-id of other elements to hide
//ott,otta class to hide -others
export const colpand=(x,y,xo,v,w,z,u,i,sn,oth,ott,otta)=>{
    const a=document.getElementsByClassName(x);
    const b=document.getElementsByClassName(y);
    const e=document.getElementById(z);
    const ot=document.getElementById(oth)
    if(!b[0].classList.contains(v)){
        for(let o=0;o<b.length;o++){
            b[o].classList.add(v)
            a[o].classList.remove(xo)
            a[o].classList.add(w)
            a[o].classList.add(sn)  
        }
        e.classList.remove(i)
        e.classList.add(u)
        ot.classList.add(ott)
        ot.classList.add(otta)
    }else{
        for(let o=0;o<b.length;o++){
            b[o].classList.remove(v)
            a[o].classList.add(xo)
            a[o].classList.remove(w)
            a[o].classList.remove(sn)  
        }
        e.classList.add(i)
        e.classList.remove(u)
        ot.classList.remove(ott)
        ot.classList.remove(otta)
    }
}
//e-event object
//cc-class of elements
//fo-child class of element with class cc
//atv-class to add to cc to make target active
//atp-class to add to fo to make target child active
export const isactive=(e,cc,fo,atv,atvp)=>{
    const fz=document.getElementsByClassName(cc)
    const fq=document.getElementsByClassName(fo)
    const fr=document.getElementById(e.currentTarget.dataset.gc)
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
    e.currentTarget.classList.add(atv)
    fr.classList.add(atvp)
}