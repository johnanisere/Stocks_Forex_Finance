import React from 'react'
import './App.css'
import { colpand,
         isactive } from './util/abs'
import im from './Fca1ycTR.jpg'

const Sidebar=(props)=>{
    const coxpand=()=>{
        colpand('abc','bcd','wb','dc','dd','ki','ns','ha','sa','others','do','dov')
    }
    const active=(e)=>{
        isactive(e,'cc','fo','atv','atvp')
    }

    return(

        <div id="ki" className="ha bg fb ht ppc v">
            <h5 className="ab gh fd pp ma bb ca">
                <span className="ab gh wb abc" onClick={coxpand} >
                    <span className="de">a</span>
                </span>
                <span className="ab gh wa bc bcd">
                    <span className="de cb fx">BILLIO₦AIRI₦G</span>
                    <span className="cd pa"></span>
                </span>
            </h5>
            <h5 className="ab gh fd pp ma bb ca da ck cc atv" onClick={active} data-gc={'a1'}>
                <span className="ab gh wb abc" >
                    <span className="de">a</span>
                </span>
                <span className="ab gh wa bc bcd" >
                    <span className="de">FOREX</span>
                    <span className="cd pa fo atvp" id='a1'>c</span>
                </span>
            </h5>
            <h5 className="ab gh fd pp ma bb ca da ck cc" onClick={active} data-gc={'a2'}>
                <span className="ab gh wb abc" >
                    <span className="de">a</span>
                </span>
                <span className="ab gh wa bc bcd" >
                    <span className="de">STOCKS</span>
                    <span className="cd pa fo" id="a2">c</span>
                </span>
            </h5>
            <h5 className="ab gh fd pp ma bb ca da ck cc" onClick={active} data-gc={'a3'}>
                <span className="ab gh wb abc" >
                    <span className="de">a</span>
                </span>
                <span className="ab gh wa bc bcd" >
                    <span className="de">CRYPTOCURRENCY</span>
                    <span className="cd pa fo" id="a3">c</span>
                </span>
            </h5>
            <h5 className="ab gh fd pp ma bb ca da ck cc" onClick={active} data-gc={'a4'}>
                <span className="ab gh wb abc" >
                    <span className="de">a</span>
                </span>
                <span className="ab gh wa bc bcd" >
                    <span className="de">INDICATORS</span>
                    <span className="cd pa fo" id="a4">c</span>
                </span>
            </h5>
            <h5 className="ab gh fd pp ma bb ca da ck cc" onClick={active}  data-gc={'a5'}>
                <span className="ab gh wb abc" >
                    <span className="de">a</span>
                </span>
                <span className="ab gh wa bc bcd" >
                    <span className="de">SECTOR PERFORMANCE</span>
                    <span className="cd pa fo" id="a5">c</span>
                </span>
            </h5>
            <h5 className="ab gh fd pp ma bb ca da ck cc" onClick={active} data-gc={'a6'}>
                <span className="ab gh wb abc" >
                    <span className="de poa">
                    a
                        <span className="pob pot wf hf ab gh jf cob bra pol">
                        4
                        </span>
                    </span>
                </span>
                <span className="ab gh wa bc bcd" >
                    <span className="de">NEWS</span>
                    <span className="cd pa fo" id="a6">c</span>
                </span>
            </h5>
            <h5 className="ab gh fd pp ma bb ca da ck cc" onClick={active} data-gc={'a7'}>
                <span className="ab gh wb abc" >
                    <span className="de">a</span>
                </span>
                <span className="ab gh wa bc bcd" >
                    <span className="de">HELP</span>
                    <span className="cd pa fo" id="a7">c</span>
                </span>
            </h5>

            <div id="others" className="mta">
                <h5 className="ab gh fd pp ma ca bc v wd fe fw fss">
                    <span>Recent activity</span>
                    <span>c</span>
                </h5>
                <div className="ppb">
                    <div className="ab at ppa bb dy v">
                        <span className="ia dp">
                            <img src={im} alt='publisher' className="ia hi bra"/>
                        </span>
                        <span className="ib dp pd fe ca">
                            <span>
                                <h5 className="ma fwa">Jesse Knight</h5>
                                <h5 className="mb td df ck">Just commented your SCLP report </h5>
                                <h5 className="mb fwa">Just now</h5>
                            </span>
                        </span>
                    </div>
                    <div className="ab at ppa bb dy v">
                        <span className="ia dp">
                            <img src={im} alt='publisher' className="ia hi bra"/>
                        </span>
                        <span className="ib dp pd fe ca">
                            <span>
                                <h5 className="ma fwa">Jesse Knight</h5>
                                <h5 className="mb td df ck">Just commented your SCLP report </h5>
                                <h5 className="mb fwa">Just now</h5>
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;