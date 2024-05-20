import React from "react"
import Skeleton from '@mui/material/Skeleton';
const OpenDispensoriesSkeleton = () => {
    const OpenDispensoriesArray = [1, 2, 3, 4]
    return (
        <React.Fragment>
            <div className="container">
                <div className="col-lg-4 col-md-6 border OpenDispensorieSkeletonMain_Col">

                    <div className="col-12 center OpenDispensorieSkeleton_search my-4">
                        <Skeleton variant="rectangular" sx={{ height: "40px", width: "90%", borderRadius: "10px" }} />
                    </div>
                    {OpenDispensoriesArray.map((val, index) => {
                        return (
                            <div className="col-12 border d-flex" style={{ height: "190px" }} key={index}>
                                <div className="col-6 dispensoriesSkeleton">
                                    <Skeleton variant="rectangular" sx={{ width: "50%", height: "70px" }} />
                                </div>
                                <div className="col-6">
                                    <div className="col-10">
                                        <Skeleton variant="text" sx={{ width: "50%", height: "30px" }} />

                                    </div>
                                    <div className="col-10">
                                        <Skeleton variant="text" sx={{ width: "80%", height: "30px" }} />

                                    </div>
                                    <div className="col-10 d-flex">
                                        <div className="col-6">
                                            <Skeleton variant="text" sx={{ width: "80%", height: "30px" }} />

                                        </div>
                                        <div className="col-6">
                                            <Skeleton variant="text" sx={{ width: "80%", height: "30px" }} />

                                        </div>
                                    </div>
                                    <div className="col-10">
                                    <Skeleton variant="text" sx={{ width: "60%", height: "30px" }} />

                                    </div>
                                    <div className="col-10 openDispSkeletonBtn">
                                    <Skeleton variant="rectangular" sx={{ width: "70%", height: "30px" ,borderRadius:"20px"}} />

                                    </div>


                                </div>

                            </div>
                        )
                    })}

                </div>

            </div>

        </React.Fragment>
    )
}
export default OpenDispensoriesSkeleton