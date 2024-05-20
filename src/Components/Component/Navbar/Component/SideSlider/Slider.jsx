
import React from "react"
import Button from '@mui/material/Button';
import useStyles from "../../../../../../Style"
import { Link, useNavigate } from "react-router-dom"
import Createcontext from "../../../../../Hooks/Context"
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FaHome , FaClinicMedical , FaIdeal ,FaProductHunt } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { SiBrandfolder ,SiFuturelearn} from "react-icons/si";
import { RxCross2 } from "react-icons/rx";
const SideNavbar = ({ closeNav, Open }) => {
  const profileRef=React.useRef(null)
    const Navigate = useNavigate()
    const { state } = React.useContext(Createcontext)
    const [SliderStateDropDown, SetSliderStateDropdown] = React.useState(null)
    const classes = useStyles()
  
    function Login() {
        Navigate("/login")
        closeNav()
    }
    function Signup() {
        Navigate("/signup")
        closeNav()
    }
    React.useEffect(() => {
        const handleClickOutsideprofile = (event) => {
          if (profileRef.current && !profileRef.current.contains(event.target)) {
            if (SliderStateDropDown) {
                SetSliderStateDropdown((SliderStateDropDown) => !SliderStateDropDown)
            }
          }
        };
        document.addEventListener('click', handleClickOutsideprofile, true);
        return () => {
          document.removeEventListener('click', handleClickOutsideprofile, true);
        };
    }, [SliderStateDropDown]);
    const sliderProfileHandler = () => {
        SetSliderStateDropdown((SliderStateDropDown) => {
            return !SliderStateDropDown;
        })
    }
    const Redirect=(items)=>{
     
            Navigate("/profile")
            closeNav()
    }
    return (
        <React.Fragment>
            <div id="mySidebar" className="sidebar" style={{ width: Open ? "300px" : "0px" }}>
                <div className=' col-12  mb-4 '>
                    {
                        !state.login ?
                            <div className=" px-3 d-flex w-100 ml-0 py-3 align-items-center manuheader justify-content-between">
                                <div className='w-50'>
                                    <span >
                                        <Link to="/"><LazyLoadImage className='navbar_logo_image'  src='./image/WeedWhiteLogo.webp' alt='WeedX.io' /></Link>
                                    </span>
                                </div>
                                <div className='w-50 text-end'>

                                   <span className="manuclosebtn d-flex justify-content-end " onClick={closeNav}> <RxCross2 color="#fff" size={25}/></span>
                                </div>
                            </div> 
                            :
                              <div className="row w-100 d-flex align-items-center manuheader justify-content-between mx-0">
                                    <div className="col-9" ref={profileRef}>
                                     
                                                <section className="image_name_section">
                                                    <div className="SliderImageProfile_container">
                                                      
                                                        <LazyLoadImage  onError={event => {
                                                                event.target.src = "/image/user.webp"
                                                                event.onerror = null
                                                            }} alt='Profile' onClick={Redirect} src={state?.Profile?.image} className="Slider_inner_profile_imgs" />
                                                           
                                                    </div>
                                                    <div className="slider_image_profile_names_conatiner">
                                                   <h2 className="slider_image_name_heading ellipsis" onClick={Redirect}>{state.Profile.username}</h2> 
                                                    </div>
                                                </section>
                                      
                                    </div>
                                    <div className='col-3 text-end'>
                                        <span className="manuclosebtn d-flex justify-content-end " onClick={closeNav}> <RxCross2 color="#fff" size={25}/>
                                        </span> 
                                    </div>
                              </div>
                    }
                </div>
                <div className="col-12 Slider_content_center " >
                    <Link to="/" className="LinkColor"><p onClick={closeNav} className="m-0 d-flex" ><span> <FaHome color="#31B655" fontSize={25}/></span >Home</p></Link>
                </div>

                <hr></hr>
                <div className="col-12 Slider_content_center " >
                    <Link className="LinkColor" to={`/weed-dispensaries/in/${state?.Country?.toLowerCase()}/${state?.State?.toLowerCase()}/${state?.City?.toLowerCase()}`}><p onClick={closeNav} className="m-0 d-flex"><span ><FaClinicMedical color="#31B655" fontSize={25} /></span>Dispensaries</p></Link>
                </div>

                <hr></hr>

                <div className="col-12 Slider_content_center ">
                    <Link className="LinkColor" to={`/weed-deliveries/in/${state?.Country?.toLowerCase()}/${state?.State?.toLowerCase()}/${state?.City?.toLowerCase()}`}><p onClick={closeNav} className="m-0 d-flex"><span><TbTruckDelivery color="#31B655"  fontSize={25} /></span>Deliveries</p></Link>
                </div>
                <hr></hr>
                {/* <div className="col-12 Slider_content_center " >
                    <Link className="LinkColor" to="/brands"><p onClick={closeNav} className="m-0 d-flex"><span><SiBrandfolder color="#31B655" fontSize={25}/></span> Brand</p></Link>
                </div>
                <hr></hr> */}
                <div className="col-12 Slider_content_center " >
                    <Link className="LinkColor" to="/products"> <p onClick={closeNav} className="m-0 d-flex"><span><FaProductHunt color="#31B655" fontSize={25}/></span>Products</p></Link>
                </div>
                <hr></hr>
                <div className="col-12 Slider_content_center " >
                    <Link className="LinkColor" to="/deals"> <p onClick={closeNav} className="m-0 d-flex"><span><FaIdeal color="#31B655" fontSize={25}/></span>Deals</p></Link>
                </div>
                <hr></hr>
                <div className="col-12 Slider_content_center " >
                    <Link className="LinkColor" to="/learn/laws-and-regulation"><p onClick={closeNav} className="m-0 d-flex"><span><SiFuturelearn color="#31B655" fontSize={25}/></span>Learn</p></Link>
                </div>
                <hr></hr>
               
                <div className=' col-12 Login_Sigup_button mt-4 mb-3 '>
                    {
                        !state.login &&
                            <>
                                <div className='col-4'>

                                    <Button onClick={Login} className={classes.muiBtn} >Login</Button>

                                </div>
                                <div className='col-4'>

                                    <Button onClick={Signup} className={classes.muiBtn} >Signup</Button>

                                </div>
                            </>
                    }
                </div>

               
            </div>
        </React.Fragment>
    )
}
export default SideNavbar