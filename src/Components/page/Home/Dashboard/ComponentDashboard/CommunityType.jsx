import { Link } from "react-router-dom"
import React from "react"
const CommunityType = () => {
    return (
        <React.Fragment>
            <div className="container-fluid mb-4 mt-4">
                <div className="row">

                    <div className="col-12 d-flex communityBannerContainer" style={{ background: "#E8FFF1" ,height:"350px" }}>

                        <div className="col-6 Footer_head_image"  style={{ display: "flex"}}>

                           <div className="col-6 col-md-4 col-xl-4">
                            
                           <img src="image/yt.png" alt='img_not_found' className="Footer_image"   />
                            
                           </div>
                           <div className="col-6  col-md-4 col-xl-4">
                           <img src="image/yt.png" alt='img_not_found'  className="Footer_image"/>

                           </div>

                        </div>
                        <div className="col-6" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <div className="col-12 d-block">

                                <div className="col-12  mt-4 ">
                                    <div className="col-10 comm_para1">
                                        <p>WeedX</p>

                                    </div>
                                </div>
                                <div className="col-12 comm_para">
                                    <p>A community connecting canabis consumer  </p>
                                    <p>retailers doctor and brands since 2008</p>

                                </div>
                                <div className="col-12  Social"  style={{ gap: "10px" }}>
                                    <div className='col-6 text-end'>
                                        <Link to="#" ><img src="./image/play_store.png" alt="img_not_found" width={"100px"} height={"30px"}></img> </Link>

                                    </div>
                                    <div className='col-6'>
                                        <Link to="#"><img src="./image/apple_img.jpg" alt="img_not_found" width={"100px"} height={"30px"} style={{ pointerEvents: "none" }}></img></Link>

                                    </div>



                                </div>
                            </div>


                        </div>

                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default CommunityType