import * as React from 'react';
import { BiMap } from "react-icons/bi"
import LoadingButton from '@mui/lab/LoadingButton';
import useStyles from "../../../../../../Style"
import Box from '@mui/material/Box';
import { FaArrowRight } from "react-icons/fa";
import Createcontext from "../../../../../Hooks/Context"
import { Rating } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { ScrollContainer } from 'react-indiana-drag-scroll';
import { DespensioriesItem } from '../../../../..//Api/Api';
import DispensoriesAddressSkeleton from '../../../../Component/Skeleton/DashBoardSkeleton/DispensoriesAddressSkeleton';
import { LazyLoadImage } from "react-lazy-load-image-component";
const Dispensories = () => {
    const ref = React.useRef(null);
    const Navigate = useNavigate();
    const { state    } = React.useContext(Createcontext)
    const [Store, SetStore] = React.useState([])
    const [Skeleton, SetSkeleton] = React.useState(true)
    React.useEffect(() => {
        if (state.City !== "") {
            const object = { City: state.City.replace(/-/g, " ") }
            DespensioriesItem(object).then((res) => {
                if (res.length !== 0) {
                    SetStore(res)
                    SetSkeleton(false)
                }
                else{
                    const object = { State: state.State.replace(/-/g, " ") }
                    DespensioriesItem(object).then((res) => {
                     if(res.length !== 0){
                        SetStore(res)
                        SetSkeleton(false)
                     }
                     else{
                        const object = { Country: state.Country.replace(/-/g, " ") }
                        DespensioriesItem(object).then((res) => {
                            SetStore(res)
                            SetSkeleton(false)
                        })
                     }
                    })
                }

            })
        }
        else {
            if (state.State !== "") {
                const object = { State: state.State.replace(/-/g, " ") }
                DespensioriesItem(object).then((res) => {
                 if(res.length !== 0){
                    SetStore(res)
                    SetSkeleton(false)
                 }
                 else{
                    const object = { Country: state.Country.replace(/-/g, " ") }
                    DespensioriesItem(object).then((res) => {
                        SetStore(res)
                        SetSkeleton(false)
                    })
                 }
                })
            }
            else {
                if (state.Country !== "") {
                    const object = { Country: state.Country.replace(/-/g, " ") }
                    DespensioriesItem(object).then((res) => {
                        SetStore(res)
                        SetSkeleton(false)
                    })
                }
            }
        }

    }, [state])

    function modifystr(str) {
        str = str.replace(/[^a-zA-Z0-9/ ]/g, "-");
        str = str.trim().replaceAll(' ', "-");
        let a = 0;
        while (a < 1) {
            if (str.includes("--")) {
                str = str.replaceAll("--", "-")
            } else if (str.includes("//")) {
                str = str.replaceAll("//", "/")
            } else if (str.includes("//")) {
                str = str.replaceAll("-/", "/")
            } else if (str.includes("//")) {
                str = str.replaceAll("/-", "/")
            } else {
                a++
            }
        }

        return str.toLowerCase()
    }


    const classes = useStyles()
    return (
        <React.Fragment>
            <div className="px-sm-0 px-3">
                {   !Skeleton ? <div className=''>
                    <div className='col-12  mt-sm-4 mt-0 p-0'>
                       
                        <div className="d-flex align-items-center justify-content-between">
                        <div className="disp_head" style={{ top: "0" }}>
                            <h3 className='section_main_title'>Shop Dispensaries  near you</h3>
                        </div>
                      <Link to={`/weed-dispensaries/in/${state?.Country?.toLowerCase()}/${state?.State?.toLowerCase()}/${state?.City?.toLowerCase()}`}>
                        <span className="viewallbtn">View All <FaArrowRight   /></span>
                      </Link>
                    </div>
                    </div >
                  { Boolean(Store.length)? <div className="col-12 mt-3  recentViewProductSlider" id="width" ref={ref}>
                        <ScrollContainer className="ScrollContainerRelative">

                            {Store?.map((ele, index) => {
                                return (

                                    <div className='dispensoriesContainer' key={index}>
                                        <div className=' dispensoriesAddressBorder'>
                                            <div className='dispensoriesAddresCardimg'>
                                                <Link to={`/weed-dispensaries/${modifystr(ele.Store_Name)}/${ele.id}`}>
                                                <LazyLoadImage
                                                          onError={event => {
                                                            event.target.src = "/image/delivery.png"
                                                            event.onerror = null
                                                        }} src={`${ele?.Store_Image}`} alt={ele.Store_Name.charAt(0).toUpperCase() + ele.Store_Name.slice(1)} className=' dispensories_image  center-block' />
                                                </Link>
                                            </div>
                                            <div className='dispensoriesContentContainer'>
                                                <Link to={`/weed-dispensaries/${modifystr(ele.Store_Name)}/${ele.id}`}>
                                                    <div className='col-12'>

                                                        <div className=' dis_right_div'>
                                                            <p className='ellipsis dispensoriesHeadings'>{ele.Store_Name.charAt(0).toUpperCase() + ele.Store_Name.slice(1)}</p>
                                                        </div>
                                                    </div>
                                                    <div className='col-12 '>

                                                        <div className=' Dispensaries_card_discription'>
                                                            <div className=''>
                                                                <span className='span_nav'><BiMap className={classes.disPen_Icons} /></span>
                                                            </div>

                                                            <div className='col-10'>
                                                                <p className='ellipsis mb-0'>{ele.Store_Address}</p>
                                                            </div>

                                                        </div>
                                                    </div>
                                                
                                                </Link>
                                                <div className='homecardRating'>
                                                <Link to={`/weed-dispensaries/${modifystr(ele.Store_Name)}/${'review'}/${ele.id}`}>
                                                    <div className=' w-100 d-flex align-items-center gap-2'>
                                                        <span className='DeliveryServicesRatingTitle'>{ele?.rating !== null ?   ele?.rating?.toFixed(1) : 0}</span>
                                                        <Rating className={classes.homePageStarIcons} color='green' name="read-only" value={ele.rating === null ? 0 : ele.rating} readOnly />
                                                    </div>
                                                </Link>
                                                </div>
                                                <div className='col-12  mt-2'>
                                                    <Box  className={`${classes.loadingBtnTextAndBack}`} >
                                                        <LoadingButton onClick={() => { Navigate(`/weed-dispensaries/${modifystr(ele.Store_Name)}/${ele.id}`) }} style={{ width: "100%" }}>Order Pickup</LoadingButton>
                                                    </Box>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                )
                            })}
                        </ScrollContainer >
                    </div >
                    :
                    <div className='nodeliveryinhomepage' >
                    <div className='nodeliveryinhomeimage'>
                        <img src='/image/nodespensire.png' alt='src'/>
                    </div>
                    <p>No Dispensaries Services available</p>
                </div>
                    
                    }
                </div >
                    :
                    <DispensoriesAddressSkeleton></DispensoriesAddressSkeleton>}
            </div>

        </React.Fragment>
    )
}
export default Dispensories