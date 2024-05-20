import * as React from 'react';
import { ScrollContainer } from 'react-indiana-drag-scroll';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Rating } from '@mui/material';
import useStyles from '../../../../../../Style';
import { FaArrowRight } from "react-icons/fa";
import { BiMap } from "react-icons/bi"
import LoadingButton from '@mui/lab/LoadingButton';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Createcontext from "../../../../../Hooks/Context"
import DeliverServiceSkeleton from '../../../../Component/Skeleton/DeliveryServicesSkeleton';
import axios from 'axios';

const DeliveryServices = () => {
    const [DeliveryService, SetDeliveryService] = useState([])
    const navigate =useNavigate()
    const { state } = React.useContext(Createcontext)
    const classes = useStyles()
    const [Skeleton, SetSkeleton] = React.useState(true)
    const ref = React.useRef(null);
    React.useEffect(() => {
        if (state.City !== "") {
            var object = { City: state.City.replace(/-/g, " ") }
            Delivery(object).then((res) => {
              
                if (res.length === 0) {
                    SetDeliveryService([])

                    object = { State: state.State.replace(/-/g, " ") }
                    Delivery(object).then((res) => {
                        if (res.length === 0) {
                            SetDeliveryService([])

                            object = { Country: state.Country.replace(/-/g, " ") }
                            Delivery(object).then((res) => {
                                if (res.length === 0) {

                                    SetDeliveryService([])
                                }
                                else{
                                    SetSkeleton(false)
                                    SetDeliveryService(res)
                                }
                            })
                        }
                        else {
                            SetSkeleton(false)
                            SetDeliveryService(res)
                        }

                    })
                }
                else {
                    SetSkeleton(false)
                    SetDeliveryService(res)
                }
            })
        }
        else {
            if (state.State !== "") {
                const object = { State: state.State.replace(/-/g, " ") }
                Delivery(object).then((res)=>{
                    if(res.length !== 0){
                        SetSkeleton(false)
                    SetDeliveryService(res)
                    }
                    else{
                        const object = { Country: state.Country.replace(/-/g, " ") }
                        Delivery(object).then(()=>{
                            if(res.length !== 0){
                                SetSkeleton(false)
                                SetDeliveryService(res)
                            }
                        })
                    }
                })
            }
            else {
                if (state.Country !== "") {
                    const object = { Country: state.Country.replace(/-/g, " ") }
                    Delivery(object).then((res)=>{
                        SetSkeleton(false)
                        SetDeliveryService(res)
                    })
                }
            }
        }
        function Delivery(object) {
            return (
                axios.post(`https://api.cannabaze.com/UserPanel/Get-GetDeliveryStoresHomepage/`,
                    object
                ).then((response) => {
                    if(response?.data?.length !==0)
                    {

                        return response?.data
                    }
                    else{
                        SetSkeleton(false)
                        SetDeliveryService([])
                        return []
                    }
                
                    //    SetDeliveryService(response.data)
                   
                }

                ).catch(() => {

                       SetDeliveryService([])
                })
            )
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
    return (
        <React.Fragment>
            <div className="px-sm-0 px-3">
                <div >
                    {  !Skeleton ? <React.Fragment>
                       
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="">
                                <h1 className='section_main_title'>Delivery services</h1>
                                <h3 className='section_main_subtitle'>{state.Location}</h3>
                            </div>
                            <Link to={`/weed-deliveries/in/${state?.Country?.toLowerCase()}/${state?.State?.toLowerCase()}/${state?.City?.toLowerCase()}`}>
                                <span className="viewallbtn">View All <FaArrowRight   /></span>
                            </Link>
                        </div>
                        {
                            Boolean(DeliveryService?.length) ? <div className="col-12  my-4 mt-2 recentViewProductSlider" id="width" ref={ref}>
                            <ScrollContainer className="ScrollContainerRelative">
                                {DeliveryService?.map((items, index) => { 
                                    return (
                                         <div className='dispensoriesContainer' key={index}>
                                          <div className=' dispensoriesAddressBorder'>
                                              <div className='dispensoriesAddresCardimg'>
                                                  <Link to={`/weed-dispensaries/${modifystr(items?.Store_Name)}/${items?.id}`}>
                                                  <LazyLoadImage
                                                            onError={event => {
                                                              event.target.src = "/image/delivery.png"
                                                              event.onerror = null
                                                          }} src={`${items?.Store_Image}`} alt={items?.Store_Name.charAt(0).toUpperCase() + items?.Store_Name.slice(1)} className=' dispensories_image  center-block' />
                                                  </Link>
                                              </div>
                                              <div className='dispensoriesContentContainer'>
                                                  <Link to={`/weed-dispensaries/${modifystr(items?.Store_Name)}/${items?.id}`}>
                                                      <div className='col-12'>
  
                                                          <div className=' dis_right_div'>
                                                              <p className='ellipsis dispensoriesHeadings'>{items?.Store_Name.charAt(0).toUpperCase() + items?.Store_Name.slice(1)}</p>
                                                          </div>
                                                      </div>
                                                      <div className='col-12 '>
  
                                                          <div className=' Dispensaries_card_discription'>
                                                              <div className=''>
                                                                  <span className='span_nav'><BiMap className={classes.disPen_Icons} /></span>
                                                              </div>
  
                                                              <div className='col-10'>
                                                                  <p className='ellipsis mb-0'>{items?.Store_Address}</p>
                                                              </div>
  
                                                          </div>
                                                      </div>
                                                   
                                                  </Link>
                                                  <div className='homecardRating'>
                                                    <Link to={`/weed-dispensaries/${modifystr(items?.Store_Name)}/${'review'}/${items?.id}`}>
                                                        <div className=' w-100 d-flex align-items-center gap-2'>
                                                            <span className='DeliveryServicesRatingTitle'>{items?.rating !== null ?  items?.rating.toFixed(1) : 0 }</span>
                                                            <Rating className={classes.homePageStarIcons} color='#fff' name="read-only" value={items?.rating === null ? 0 : items?.rating} readOnly />
                                                        </div>
                                                    </Link>
                                                  </div>
                                                  <div className='col-12  mt-2'>
                                                      <Box  className={`${classes.loadingBtnTextAndBack}`} >
                                                          <LoadingButton onClick={() => { navigate(`/weed-dispensaries/${modifystr(items?.Store_Name)}/${items?.id}`) }} style={{ width: "100%" }}>Order Pickup</LoadingButton>
                                                      </Box>
                                                  </div>
                                              </div>
                                          </div>
                                         </div>
                                    )
                                })}
                            </ScrollContainer>
                        </div>
                        :
                        <div className='nodeliveryinhomepage' >
                            <div className='nodeliveryinhomeimage'>
                                <img src='/image/NOTDELIVERED.png' alt='src'/>
                            </div>
                            <p>No Delivery Services available</p>
                        </div>
                        }
                        
                    </React.Fragment> : <DeliverServiceSkeleton></DeliverServiceSkeleton>
                    }
                </div>

            </div>
        </React.Fragment>
    )
}
export default DeliveryServices
