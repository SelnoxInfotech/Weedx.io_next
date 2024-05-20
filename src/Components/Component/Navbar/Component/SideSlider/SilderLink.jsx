import React, { useEffect } from "react";
import Grid from "@mui/system/Unstable_Grid";
import { BsLinkedin } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { IoIosNotifications } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { ImFacebook } from "react-icons/im";
import { RiInstagramLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
// import SearchBar from "../../Component/SearchBar";
import Badge from "@mui/material/Badge";
import useStyles from "../../../../../../Style";
import IconButton from "@mui/material/IconButton";
// import Notification from "../../Notification";
export default function DashBoardLink({ state }) {
  const classes = useStyles()
  const [current_route, Setcurrent_route] = React.useState();
  const [notify, setnotify] = React.useState(false);
  const [textnotify, settextnotify] = React.useState(false);
  const location = useLocation();
  const [notificationdata, Setnotificationdata] = React.useState([]);
  const [totalnotify, Settotalnotify] = React.useState([]);
  React.useEffect(() => {
    Setcurrent_route(location.pathname);
  }, [location]);
  const scrollToTop = () => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Optional if you want to skip the scrolling animation
    });
  };
  useEffect(()=>{
    settextnotify(!textnotify)
  },[notificationdata])
// console.log(state ,'state')
  return (
    <React.Fragment>
      <div className="container-fluid Top p-sm-0 p-2 m-0 mt-sm-4">
        <Grid container spacing={2}>
          <Grid
            xs={8}
            md={9}
            display={{ xs: "none", md: "block", lg: "block" }}
          >
            <div className="ccol  nav_list1">
              <ul className="p-0">
                <Link
                  to={
                    state?.Country !== "" &&
                    state?.State !== "" &&
                    state?.City !== "" &&
                    state?.route !== ""
                      ? `/weed-dispensaries/in/${state?.Country?.toLowerCase()}/${state?.State?.toLowerCase()}/${state?.City?.toLowerCase()}/${state?.route?.toLowerCase()}`
                      : state?.Country !== "" &&
                        state?.State !== "" &&
                        state?.City !== ""
                      ? `/weed-dispensaries/in/${state?.Country.toLowerCase()}/${state?.State.toLowerCase()}/${state?.City.toLowerCase()}`
                      : state.Country !== "" && state.State !== ""
                      ? `/weed-dispensaries/in/${state?.Country.toLowerCase()}/${state?.State.toLowerCase()}`
                      : state?.Country !== "" &&
                        `/weed-dispensaries/in/${state?.Country.toLowerCase()}`
                  }
                  id={`${
                    current_route?.slice(0, 18) === "/weed-dispensaries"
                      ? "Active"
                      : ""
                  }`}
                >
                  {" "}
                  <li>Dispensaries </li>
                </Link>
                <Link
                  to={
                    state.Country !== "" &&
                    state.State !== "" &&
                    state.City !== "" &&
                    state.route !== ""
                      ? `/weed-deliveries/in/${state.Country.toLowerCase()}/${state.State.toLowerCase()}/${state.City.toLowerCase()}/${state.route.toLowerCase()}`
                      : state?.Country !== "" &&
                        state?.State !== "" &&
                        state?.City !== ""
                      ? `/weed-deliveries/in/${state.Country.toLowerCase()}/${state.State.toLowerCase()}/${state.City.toLowerCase()}`
                      : state.Country !== "" && state.State !== ""
                      ? `/weed-deliveries/in/${state.Country.toLowerCase()}/${state.State.toLowerCase()}`
                      : state.Country !== "" &&
                        `/weed-deliveries/in/${state.Country.toLowerCase()}`
                  }
                  id={`${
                    current_route?.slice(0, 16) === "/weed-deliveries"
                      ? "Active"
                      : ""
                  }`}
                >
                  <li>Deliveries</li>
                </Link>
                {/* <Link
                  to="/brands"
                  id={`${current_route === "/brands" ? "Active" : ""}`}
                >
                  {" "}
                  <li>Brand</li>
                </Link> */}
                <Link
                  onClick={scrollToTop}
                  to="/products"
                  id={`${current_route === "/products" ? "Active" : ""}`}
                >
                  <li>Product</li>
                </Link>
                {/* <Link to="/Deals"  id={`${(current_route ===  "/Deals" ? "Active" : "")}`}><li>Deals</li></Link> */}
                <Link
                  to="/deals"
                  id={`${current_route === "/deals" ? "Active" : ""}`}
                >
                  <li onClick={scrollToTop}>Deals</li>
                </Link>
                <Link
                  to="/learn/laws-and-regulation"
                  id={`${current_route === "/learn/laws-and-regulation" ? "Active" : ""}`}
                >
                  <li>Learn</li>
                </Link>
                {/* <Link to="/strain" id={`${(current_route === "/strain" ? "Active" : "")}`}><li>Strain</li></Link> */}
                {/* <Link to="/Strain" id={`${(current_route === "/Strain" ? "Active" : "")}`}><li>Strain</li></Link> */}
              </ul>
            </div>
          </Grid>
          {/* <Grid
            xs={6}
            md={2}
            xl={2}
            display={{ xs: "none", md: "block", lg: "block" }}
          >
            <div className=" col-12 Login_Sigup_button Login_Sigup_logo ">
              <a
                target="_blank"
                href={"https://www.facebook.com/profile.php?id=61550742531174"}
              >
                <ImFacebook color={"#39569c"} size={25}></ImFacebook>
              </a>
              <a target="_blank" href={"https://www.instagram.com/weedx_io"}>
                {" "}
                <RiInstagramLine
                  className="InstaColor"
                  size={25}
                ></RiInstagramLine>
              </a>
              <a
                target="_blank"
                href={"https://www.linkedin.com/company/weedx-io/"}
              >
                {" "}
                <BsLinkedin size={22} color="#0072b1"></BsLinkedin>
              </a>
              <a target="_blank" href={"https://twitter.com/Weedx_io"}>
                <span className="x_icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 512 512"
                  >
                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                  </svg>
                </span>
              </a>
            
            </div>
          </Grid> */}
          <Grid
            xs={6}
            md={3}
           
            spacing={2}
            display={{ xs: "none", md: "block", lg: "block" }}
          >
            <div className=" col-12  addyocardIcon  ">
              <Link to="/whislists">
                <Badge
                  badgeContent={
                    state.login
                      ? Object.values(state.WishList).reduce(
                          (a, item) => a + item,
                          0
                        )
                      : 0
                  }
                  className={classes.sliderLink_badge}
                >
                  <IconButton
                    className={classes.navBarButton_icons}
                    aria-label="whislist"
                  >
                    <AiFillHeart color="#858585" size={22}></AiFillHeart>
                  </IconButton>
                </Badge>
              </Link>
              <div className="notification_icon">
                <Badge
                  badgeContent={
                     state.login ? ( totalnotify?.length === state?.Profile?.RemovedNotification?.length ? 0 : (totalnotify?.length - state?.Profile?.RemovedNotification?.length) >0 ? totalnotify?.length - state?.Profile?.RemovedNotification?.length : 0  ) :  notificationdata?.length
                  }
                  className={classes.sliderLink_badge}
                  onClick={() => {
                    setnotify(!notify);
                  }}
                >
                  <IconButton
                    className={classes.navBarButton_icons}
                    aria-label="notification"
                  >
                    {" "}
                    <IoIosNotifications
                      color="#858585"
                      size={23}
                    ></IoIosNotifications>{" "}
                  </IconButton>
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
                <Badge
                  className={`state.LoadingApi ? "animated bounce" : " " ${classes.sliderLink_badge}`}
                  badgeContent={
                    state.AllProduct?.length > 0
                      ? state.AllProduct?.length
                      : null
                  }
                >
                  <IconButton
                    className={classes.navBarButton_icons}
                    aria-label="shopping-cart"
                  >
                    <MdOutlineShoppingCart
                      color="#858585"
                      size={22}
                    ></MdOutlineShoppingCart>
                  </IconButton>
                </Badge>
              </Link>
            </div>
          </Grid>
          <Grid
            xs={12}
            md={8}
            xl={8}
            display={{ xs: "block", md: "none", lg: "none" }}
          >
            {/* <SearchBar /> */}
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}
