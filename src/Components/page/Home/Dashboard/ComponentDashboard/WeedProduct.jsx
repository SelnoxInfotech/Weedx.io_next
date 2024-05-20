import { AiFillStar } from "react-icons/ai";
import LoadingButton from '@mui/lab/LoadingButton';
import styled from "styled-components";
import Box from '@mui/material/Box';
import useStyles from "../../../../../Style"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
const WeedProduct = () => {
    const classes = useStyles()
    const SliderWeed = styled(Slider)`
    .slick-next {
        right: 0px;
      } 
      .slick-prev {
        left: 0px;
      }
    
      .Driscription_{

      }
      `;

    const settings = {

        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,

                }
            },
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    dots: true,
                    infinite: true,

                }
            },
            {
                breakpoint: 599,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    infinite: true,

                }
            }
        ]
    }

    const arr = [{ img_url: "./image/wee_img1.jpeg", address: "Canna Cabana", sec_add: "2917 Broadway astoria NY 11106", rating: "Rating" },
    { img_url: "./image/weed_img2.jpeg", address: "Canna Cabana", sec_add: "2917 Broadway astoria NY 11106", rating: "Rating" },
    { img_url: "./image/logo_png.png", address: "Canna Cabana", sec_add: "2917 Broadway astoria NY 11106", rating: "Rating" },
    { img_url: "./image/logo.webp", address: "Canna Cabana", sec_add: "2917 Broadway astoria NY 11106", rating: "Rating" },
    { img_url: "./image/logo2.png", address: "Canna Cabana", sec_add: "2917 Broadway astoria NY 11106", rating: "Rating" },
    { img_url: "./image/flower.png", address: "Canna Cabana", sec_add: "2917 Broadway astoria NY 11106", rating: "Rating" },
    { img_url: "./image/logo.webp", address: "Canna Cabana", sec_add: "2917 Broadway astoria NY 11106", rating: "Rating" },
    ]
    const weeBtn = [{ quant: "1gms", rs: "1$" }, { quant: "1gms", rs: "2$" }, { quant: "1gms", rs: "2$" },
    { quant: "1gms", rs: "2$" },
    { quant: "1gms", rs: "2$" }, { quant: "1gms", rs: "2$" }, { quant: "1gms", rs: "2$" }]
    return (
        <React.Fragment>
            <div className="container-fluid " style={{marginTop:"62px"}}>

           

                <div className="row weed_had_btn mt-4">
                    <div className='col-12  d-flex '>
                        <div className="col mt-4">
                            <h5>Great Weeds you can find today</h5>
                        </div>
                        <div className="col text-end mt-4">
                            <Box
                            // className={` weed_cart_btn ${classes.loadingBtnTextAndBack}`}
                            >
                                <LoadingButton>View All</LoadingButton>
                            </Box>
                        </div>
                    </div>

                </div>

                <SliderWeed {...settings}>

                    {arr.map((ele, index) => {
                        return (
                            // <div >
                            <div className="col-12 " key={index} >
                                <div className="col-10  weed_main_Div">
                                    <div className="col-4 weed_img_cont">

                                        <div className="col-12 weed_img_div">
                                           
                                            <img src={ele.img_url} alt="img_not_found" style={{pointerEvents: "none"}}/>
                                        </div>
                                    </div>
                                    <div className="col content_cont">
                                        <div className="col-10">
                                            <h1 className='comm_head_prop fontStyle'>{ele.address}</h1>
                                        </div>
                                        <div className="col-10">
                                            <h5 className='fontStyle common_sub_head weed_h5'>Flower</h5>
                                        </div>
                                        <div className="col-10 d-flex">
                                            <h5 className='fontStyle common_sub_head'>Rating</h5><span className='span_nav_star'><AiFillStar className={classes.disPen_Icons} /></span>
                                        </div>
                                        <div className="col-12  weed_btns_cont">
                                            {weeBtn.map((ele, index) => {
                                                return (
                                                    <div className="col-3  mt-2 d-flex" key={index}>

                                                        <section className="weed_btn">

                                                            {ele.quant}
                                                            <p>{ele.rs}</p>
                                                        </section>
                                                    </div>

                                                )
                                            })}
                                        </div>


                                        <div className="col-10 d-flex mt-3">
                                            {/* <MdOutlineShoppingCart className={classes.muiIcons} /> */}
                                            <Box
                                                className={` weed_cart_btn ${classes.loadingBtnTextAndBack}`}
                                                style={{ width: "100%" }}
                                            >
                                                <LoadingButton variant="outlined">Buy Now</LoadingButton>
                                            </Box>
                                        </div>

                                    </div>

                                </div>

                            </div>
                            // </div>
                        )
                    })}
                </SliderWeed>




            </div>
        </React.Fragment>
    )
}
export default WeedProduct