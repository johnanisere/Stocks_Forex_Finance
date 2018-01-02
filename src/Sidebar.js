import React from 'react'
import './App.css'
import { colpand,
         isactive,
         rand,
         timepassed } from './util/abs'
import {connect} from 'react-redux'
import propTypes from 'prop-types'
import { markasread} from './data_container/actions/actions'


const Sidebar=(props)=>{
    const coxpand=()=>{
        colpand('abc','bcd','wb','dc','dd','ki','ns','ha','sa','others','do','dov')
    }
    const active=(e)=>{
        isactive(e,'cc','fo','atv','atvp','ffo','caa')
    }
    
    const onread=(e)=>{
        props.dispatch(
            markasread(
                props.requests.MARKET_NEWS.news,
                props.requests.MARKET_NEWS.read,
                e.currentTarget.dataset.key
            )
        )
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
            <h5 className="ab gh fd pp ma bb ca da ck cc atv" onClick={active} data-gc={'a1'} data-gd={'b1'}>
                <span className="ab gh wb abc" >
                    <span className="de">a</span>
                </span>
                <span className="ab gh wa bc bcd ffo" id='b1' >
                    <span className="de">FOREX</span>
                    <span className="cd pa fo atvp" id='a1'>c</span>
                </span>
            </h5>
            <h5 className="ab gh fd pp ma bb ca da ck cc" onClick={active} data-gc={'a2'} data-gd={'b2'}>
                <span className="ab gh wb abc" >
                    <span className="de">a</span>
                </span>
                <span className="ab gh wa bc bcd caa ffo" id='b2'>
                    <span className="de">STOCKS</span>
                    <span className="cd pa fo" id="a2">c</span>
                </span>
            </h5>
            <h5 className="ab gh fd pp ma bb ca da ck cc" onClick={active} data-gc={'a3'} data-gd={'b3'}>
                <span className="ab gh wb abc" >
                    <span className="de">a</span>
                </span>
                <span className="ab gh wa bc bcd caa ffo" id='b3'>
                    <span className="de">CRYPTOCURRENCY</span>
                    <span className="cd pa fo" id="a3">c</span>
                </span>
            </h5>
            <h5 className="ab gh fd pp ma bb ca da ck cc" onClick={active} data-gc={'a4'} data-gd={'b4'}>
                <span className="ab gh wb abc" >
                    <span className="de">a</span>
                </span>
                <span className="ab gh wa bc bcd caa ffo" id='b4'>
                    <span className="de">INDICATORS</span>
                    <span className="cd pa fo" id="a4">c</span>
                </span>
            </h5>
            <h5 className="ab gh fd pp ma bb ca da ck cc" onClick={active}  data-gc={'a5'} data-gd={'b5'}>
                <span className="ab gh wb abc" >
                    <span className="de">a</span>
                </span>
                <span className="ab gh wa bc bcd caa ffo" id='b5'>
                    <span className="de">SECTOR PERFORMANCE</span>
                    <span className="cd pa fo" id="a5">c</span>
                </span>
            </h5>
            <h5 className="ab gh fd pp ma bb ca da ck cc" onClick={active} data-gc={'a6'} data-gd={'b6'}>
                <span className="ab gh wb abc" >
                    <span className="de poa">
                    a
                        <span className="pob pot wf hf ab gh jf cob bra pol">
                            {(props.requests.MARKET_NEWS.pending)?
                                0:
                                (props.requests.MARKET_NEWS.fulfilled)?
                                    props.requests.MARKET_NEWS.news.length:
                                    <span className="crr">!</span>
                            }
                        </span>
                    </span>
                </span>
                <span className="ab gh wa bc bcd caa ffo" id='b6' >
                    <span className="de">NEWS</span>
                    <span className="cd pa fo" id="a6">c</span>
                </span>
            </h5>
            <h5 className="ab gh fd pp ma bb ca da ck cc" onClick={active} data-gc={'a7'} data-gd={'b7'}>
                <span className="ab gh wb abc" >
                    <span className="de">a</span>
                </span>
                <span className="ab gh wa bc bcd caa ffo" id='b7'>
                    <span className="de">HELP</span>
                    <span className="cd pa fo" id="a7">c</span>
                </span>
            </h5>
            <div className="mta others">
                <h5 className="ab gh fd pp ma caa bc v wd fe fw fss">
                    <span >Categories</span>
                    <span>c</span>
                </h5>
                <div className="ppb  fb caa">
                    <label className='dp poa hcc onike och mb'>
                        <input type="checkbox" name="customise" value="short_tag" className="do" />
                        <span className="ttf onike pob"></span>
                        <span className="checkmark crq bh onike pob"></span>
                        <span className='mla mmi poa kia'>short tag</span>
                        
                    </label>
                    <label className='dp poa hcc onike str mb'>
                        <input type="checkbox" name="customise" value="short_tag" className="do" />
                        <span className="ttf onike pob"></span>
                        <span className="checkmark crq bha onike pob"></span>
                        <span className='mla mmi poa kia'>category name</span>
                        
                    </label>
                    <label className='dp poa hcc onike ing mb'>
                        <input type="checkbox" name="customise" value="short_tag" className="do" />
                        <span className="ttf onike pob"></span>
                        <span className="checkmark crq bhb onike pob"></span>
                        <span className='mla mmi poa kia'>custom one</span>
                        
                    </label>
                    <label className='dp poa hcc onike gyi mb'>
                        <input type="checkbox" name="customise" value="short_tag" className="do" />
                        <span className="ttf onike pob"></span>
                        <span className="checkmark crq bhc onike pob"></span>
                        <span className='mla mmi poa kia'>fourth tag</span>
                        
                    </label>
                    <label className='dp poa hcc onike yng mb'>
                        <input type="checkbox" name="customise" value="short_tag" className="do" />
                        <span className="ttf onike pob"></span>
                        <span className="checkmark crq bhd onike pob"></span>
                        <span className='mla mmi poa kia'>extra tag</span>
                        
                    </label>
                </div>

            </div>

            <div className="mta others">
                <h5 className="ab gh fd pp ma caa bc v wd fe fw fss">
                    <span>Recent activity</span>
                    <span>c</span>
                </h5>
                {(props.requests.MARKET_NEWS.fulfilled)?
                    <div className="ppb">
                        {props.requests.MARKET_NEWS.news.map(
                            (val,key)=>
                                (key<4)?
                                    <div className="ab at ppa bb dy v" key={key}>
                                        <span className="ia dp">
                                            <img src={val.urlToImage} alt='publisher' className="ia hi bra"/>
                                        </span>
                                        <span className="ib dp pd fe caa">
                                            <span>
                                                <h5 className="ma fwa">{val.author}</h5>
                                                <a className="ca" href={val.url} target="_blank" data-key={key} onClick={onread}>
                                                    <h5 className="mb td df ck" >{val.title}</h5>
                                                </a>
                                                <h5 className="mb fwa caa">{timepassed(val.publishedAt)}</h5>
                                            </span>
                                        </span>
                                    </div>:
                                    null
                                )
                        }
                    </div>:
                    null
                }
                {(props.requests.MARKET_NEWS.pending)?
                    <div className="ppb">
                        {rand(4).map(
                            (val,key)=>
                                    <div className="ab at ppa bb dy v" key={key}>
                                        <span className="ia dp hi bra aa">
                                            
                                        </span>
                                        <span className="ib dp pd fe ca">
                                            <span>
                                                <h5 className="ma fwa aa dg hfa coste"> </h5>
                                                <h5 className="mb td df hf coste dd aa"> </h5>
                                                <h5 className="mb td df hf coste dd aa"> </h5>
                                                <h5 className="ma fwa aa ia hfa coste"> </h5>
                                            </span>
                                        </span>
                                    </div>
                                    )
                        }    
                    </div>:
                    null
                }   
            </div>
        </div>
    )
}


const mapStateToProps = (state) => {
    return state
  }
export default connect(mapStateToProps)(Sidebar)

Sidebar.propTypes={
    requests:propTypes.object.isRequired 
}