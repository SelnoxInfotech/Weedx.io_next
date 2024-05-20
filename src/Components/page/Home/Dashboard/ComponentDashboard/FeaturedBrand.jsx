import { LazyLoadImage } from "react-lazy-load-image-component";
import { ScrollContainer } from 'react-indiana-drag-scroll';
import * as React from 'react';
import { FaArrowRight } from "react-icons/fa";
import FeaturedBrandSkeleton from "../../../../Component/Skeleton/DashBoardSkeleton/FeaturedBrandSkeleton";
import { Link,  } from "react-router-dom"
const FeaturedBrand = ({ CardDataArray ,BrandSkeleton}) => {
   
    const ref = React.useRef(null);
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
        <div className="px-sm-0 px-3 feature_brands_section">
            <div className="">
        {!BrandSkeleton  ?
        <React.Fragment>
             <div className="bestDealsCard_Heading_offers">
                  
                    <div className="d-flex align-items-center justify-content-between">
                    <h3 className="section_main_title">Featured Brands</h3>
                      <Link to={'/brands'}>
                        <span className="viewallbtn">View All <FaArrowRight   /></span>
                      </Link>
                    </div>
             </div>

            <div  className="feature_brand_container"  ref={ref}>
                <ScrollContainer className="ScrollContainerRelative py-2">
                    {
                        CardDataArray?.map((items, index) => {
                            return (
                                <div className="feature_brands" key={index}>
                                      <Link  to={`/brands/${modifystr(items.name)}/${items.id}`}> 
                                        <div className="row  FeaturedBrandContainer  mx-0 my-2">
                                            <div className="col-12 FeaturedBrandImageContainer px-0">
                                                  <LazyLoadImage width="100" height="auto" alt={items.name} className="w-100" src={`${items.Brand_Logo}`} />
                                            </div>
                                        </div>
                                      </Link>
                                </div>
                            )
                        })
                    }
                </ScrollContainer>
            </div>
          

        </React.Fragment>
        :
         <div className="col-12 bestDealsCard_Heading_offers mt-4">
       
          <FeaturedBrandSkeleton></FeaturedBrandSkeleton>
         </div>
        }
        </div>
        </div>
    )
}
export default FeaturedBrand