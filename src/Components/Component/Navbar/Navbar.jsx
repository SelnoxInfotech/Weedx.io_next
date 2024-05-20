
import * as React from 'react';
import Grid from '@mui/system/Unstable_Grid';
import SideNavbar from "../Navbar/Component/SideSlider/Slider"
import Button from '@mui/material/Button';
import useStyles from "../../../../Style"
import { FiShoppingBag } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import { TbLogout } from "react-icons/tb";
import { TbEdit } from "react-icons/tb";
import { FaHandsHelping } from "react-icons/fa";
import SearchBar from "./Component/SearchBar"
import { AiFillHeart } from "react-icons/ai"
import { IoIosNotifications } from "react-icons/io"
import { MdOutlineShoppingCart } from "react-icons/md"
import { Link, NavLink } from "react-router-dom";

import SliderLink from "./Component/SideSlider/SilderLink"
import Createcontext from "../../../Hooks/Context"
import Cookies from 'universal-cookie';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import { useNavigate , useLocation } from 'react-router-dom';
import Image from 'next/image';
// import Notification from './Notification'
// import './Navbar.css'
// import logo from ""
const Navbar = () => {
  const cookies = new Cookies();
  const ref = React.useRef(null);
  const profileRef = React.useRef(null)
  const Location = useLocation()
  const { state, dispatch } = React.useContext(Createcontext)
console.log(state)
  const [notify, setnotify] = React.useState(false)
  const [windowSize, setWindowSize] = React.useState()
  const [Hamburger, setHamburger] = React.useState(false); 
  const classes = useStyles()
  const [Open, SetOpen] = React.useState(false)
  const [DropDownState, SetDropDownState] = React.useState(false);
  const [notificationdata, Setnotificationdata] = React.useState([]);
  const [totalnotify, Settotalnotify] = React.useState([]);
   
  React.useEffect(() => {

    const handleResize = () => {
      setWindowSize(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    if (windowSize >= 900) {
      SetHamburger(true)
    }
    else {
      if (windowSize <= 900) {
        SetHamburger(false)
      }
    }
    return () => window.removeEventListener('resize', handleResize)

  }, [windowSize])
React.  useEffect(() => {
  // Check if window is defined (i.e., running in the browser environment)
  if (typeof window !== 'undefined') {
    // Update Hamburger state based on window.innerWidth
    setHamburger(window.innerWidth >= 900);
    
    // Function to update Hamburger state when window is resized
    const handleResize = () => {
      setHamburger(window.innerWidth >= 900);
    };
    
    // Add event listener for window resize
    window.addEventListener('resize', handleResize);
    
    // Clean up function to remove event listener when component is unmounted
    return () => window.removeEventListener('resize', handleResize);
  }
}, []); // Run only once after initial render


  function openNav() {
    SetOpen((Open) => !Open)
  }
  function closeNav() {
    SetOpen(false)
  }
  async function Logout() {
    await cookies.remove('User_Token_access')
    await dispatch({ type: 'Login', login: false })
    await dispatch({ type: 'ApiProduct' })
    await dispatch({ type: 'Profile' , Profile :[] })
  }


  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        if (Open) {
          SetOpen((Open) => !Open)
        }
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [Open, windowSize]);

  
  React.useEffect(() => {
    const handleClickOutsideprofile = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        if (DropDownState) {
          SetDropDownState((DropDownState) => !DropDownState)
        }
      }
    };
    document.addEventListener('click', handleClickOutsideprofile, true);
    return () => {
      document.removeEventListener('click', handleClickOutsideprofile, true);
    };
  }, [DropDownState]);

  const handleClickDropdown = () => {
    SetDropDownState((DropDownState) => {
      return !DropDownState;
    })
  }
  
  const navigate = useNavigate()

  // const ViewProfiles = () => {
  //   navigate("/profile")
  //   SetDropDownState((DropDownState) => {
  //     return !DropDownState;
  //   })
  // }

  return (
    <React.Fragment>
      <div className='container p-0'>
        <div ref={ref} className='sticky-top' id='Navbar_box' style={{ background: "white", padding: "10px 0" }}>
          <Grid container spacing={0} rowSpacing={0.3}  justifyContent="between"   >
            {
              Hamburger ?
                <Grid container xs={2} md={2} xl={2}
                  alignItems="center"
                  justifyContent="start"
                >
                  <span >
                    <Link to="/"><Image width={100} height={100} className='navbar_logo_image' alt='WeedX.io' src={"/image/G11.png"} /></Link>
                  </span>

                </Grid>
                :
                <Grid container xs={3} md={2} xl={2}    alignItems="center"
              >
                  <div className='center' style={{ marginLeft: "15px" }}>
                    <button className="openbtn Border" onClick={() => { openNav() }}>☰</button>
                  </div>
                </Grid>
            }
            <Grid xs={6} md={6} xl={7} display={{ xs: "block", md: "block", lg: "block" }}>
            {
              Hamburger ?
              <SearchBar path={Location.pathname}/>
              :
              <span className='mobileNavLogo' >
              <Link to="/"><LazyLoadImage className='navbar_logo_image' alt="WeedX.io" src={'/image/G11.png'} /></Link>
            </span>
            }
            </Grid>
            <Grid xs={3} md={2} xl={1} display={{ xs: "block", md: "none", lg: "none" }} >
              <div className=' col-12 Login_Sigup_button  Heder_icon ' style={{ justifyContent: "end", marginLeft: "-20px" }}>
                <Link to="/WhisLists">
              
                  <Badge badgeContent={state.login && Object.values(state.WishList).reduce((a, item) => a + item, 0) >= 1  ? Object.values(state.WishList).reduce((a, item) => a + item, 0) : 0 } className={classes.sliderLink_badge}>
                    <IconButton className={classes.navBarButton_icons} aria-label='whishlist'><AiFillHeart color="#858585" size={22} /></IconButton>
                  </Badge>
                </Link>
                <div className="notification_icon" onClick={()=>{setnotify(!notify)}}>
                  <Badge  badgeContent={
                      state.login ? ( totalnotify?.length === state?.Profile?.RemovedNotification?.length ? 0 : (totalnotify?.length - state?.Profile?.RemovedNotification?.length) >0 ? totalnotify?.length - state?.Profile?.RemovedNotification?.length : 0  ) :  notificationdata?.length
                    } className={classes.sliderLink_badge}>

                    <IconButton className={classes.navBarButton_icons} aria-label='notification'><IoIosNotifications color="#858585" size={22}></IoIosNotifications></IconButton>
                  </Badge>
                        {/* <Notification
                          notify={notify}
                          setnotify={setnotify}
                          notificationdata={notificationdata}
                          Setnotificationdata={Setnotificationdata}
                          Settotalnotify={Settotalnotify}
                        ></Notification> */}
                  
                </div>
                <Link to="/cart">
                  <Badge  badgeContent={ state.AllProduct?.length > 0 ? state.AllProduct?.length : null } className={`state.LoadingApi ? "animated bounce" : " " ${classes.sliderLink_badge}`}>
                    <IconButton className={classes.navBarButton_icons} aria-label='shopping-cart'><MdOutlineShoppingCart color="#858585" size={22}></MdOutlineShoppingCart></IconButton>
                  </Badge>
                </Link>
              </div>
            </Grid>
            <Grid xs={5} md={4} xl={3} >
              {
                state.login === true
                  ?

             
                    <div className='navbarProfileDropDown_container' ref={profileRef}>
                      <Grid display={{ xs: "none", md: "flex"}}  justifyContent="flex-end">
                        <div className='Navbar_profile_logo_container'>
                          <LazyLoadImage
                            onError={event => {
                              event.target.src = "/image/user.webp"
                              event.onerror = null
                            }}
                            src={ state.Profile.googlelink === null ?`${state.Profile.image} ` : state.Profile.googlelink}
                            alt='Profile'
                            className="Navbar_logo_imgs"
                            onClick={handleClickDropdown}
                          />
                        </div>
                      </Grid>
                      {DropDownState && (
                        <div className='profileDropdown_container'>
                          <section className='Navbar_proflie_image_name_section'>
                            {/* <div className='profile_image_container'>
                              <LazyLoadImage onError={event => {
                                event.target.src = "/image/user.webp"
                                event.onerror = null
                              }}
                                src={state.Profile.googlelink === null ?`${state.Profile.image} ` : state.Profile.googlelink}
                                alt='Profile' className="Navbar_profile_imgs" />
                            </div> */}
                            <div className='profile_name_container'>
                              <p className='profile_names ellipsis'>{state.Profile.username}</p>
                              {/* <p className='profile_viewAll m-0' onClick={ViewProfiles}>Edit Profile</p> */}
                            </div>

                          </section>
                          <hr />
                          <section className=' navbarProfileDropDownSection'>
                            <ol className='navbar_profile_orderList px-0'>
                             
                                 <Link to={'/EditProfile'} onClick={()=>{SetDropDownState(false)}}> <li className='profile_list'>  <span><TbEdit  /></span> EDIT PROFILE</li></Link>
                                 <Link to={'/myorder'} onClick={()=>{SetDropDownState(false)}}> <li className='profile_list' > <span><FiShoppingBag /></span> MY ORDER</li></Link>
                                 <Link to={'/whislists'} onClick={()=>{SetDropDownState(false) }}> <li className='profile_list'> <span><FaHeart /></span> FAVORITES </li></Link>
                                 <Link to={'/myreviews'} onClick={()=>{SetDropDownState(false) }}> <li className='profile_list' >  <span><MdReviews /></span>MY REVIEW </li></Link>
                                 <Link to={'/helpcenter'} onClick={()=>{SetDropDownState(false)}}> <li className='profile_list'>  <span><FaHandsHelping /></span> HELP</li></Link>
                                 
                                 <li className='profile_list' onClick={()=>{Logout()}}>  <span><TbLogout /></span> LOGOUT</li>
                                   
                                
                              
                            </ol>

                          </section>
                       
                        </div>
                      )}

                    </div>
                
                  :
                  <div className=' col-12 Login_Sigup_button justify-content-end  Sapceing'>
                    <div className='col-lg-4 col-sm-4'>
                      <Grid display={{ xs: "none", md: "block", lg: "block", }} >
                        <NavLink to="/login" >   <Button className={classes.muiBtn} >Log In</Button></NavLink>
                      </Grid>
                    </div>
                    <div className='col-lg-4 col-sm-4'>
                      <Grid display={{ xs: "none", md: "block", lg: "block" }}>
                        <NavLink to="/signup" >    <Button sx={{ boxShadow: 3 }} className={classes.muiBtn_Signup} >Sign Up</Button></NavLink>
                      </Grid>
                    </div>
                  </div>
              }
            </Grid>
            <Grid xs={12} md={12} xl={12} >
              <SliderLink state={state}></SliderLink>
              <SideNavbar closeNav={closeNav} Open={Open}></SideNavbar>
            </Grid>
          </Grid>
        </div>
      </div>
    </React.Fragment>
  )
}
export default Navbar