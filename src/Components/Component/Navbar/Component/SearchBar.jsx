import TextField from '@mui/material/TextField';
import useStyles from "../../../../../Style"
import InputAdornment from '@material-ui/core/InputAdornment';
import { BsSearch } from "react-icons/bs"
import AutoComplete from '@mui/material/Autocomplete';
import Axios from "axios"
import React from 'react';
import CircularProgress from "@material-ui/core/CircularProgress";
import { useNavigate } from 'react-router-dom';
import _, { remove } from "lodash"
import AddressSearchapi from "./AddressSearchapi"
import { LazyLoadImage } from "react-lazy-load-image-component";
const SearchBar = ({ path }) => {
    const Navigation = useNavigate()
    const [SearchData, SetSearchData] = React.useState([])
    const [SearchBarWidth, SetSearchBarWidth] = React.useState(window.innerWidth <= 900)
    const [windowSize, setWindowSize] = React.useState()
    const [optionwidth, setoptionwidth] = React.useState()
    const classes = useStyles()
    const [input, Setinput] = React.useState('')
    const [loading , Setloading] = React.useState(false)
    const Search = (event) => {
        event.preventDefault()
        Setinput(event.target.value)
    }
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

    React.useEffect(() => {
        
        const getdata = setTimeout(() => {
            Setloading(false)
            if(input!==''){
                // loading = true
                Setloading(true)
                Axios.post(`https://api.cannabaze.com/UserPanel/Get-HomePageFilter/`,
                {

                    search: input
                }
            ).then(response => {
                SetSearchData([])
                if (response.status === 200) {
                    const o = Object?.entries(response?.data).map((data, index, value) => {
                        return (data)
                    })
                    const y = o?.map((data) => {
                        return data
                    });
                    y.map((data1) => {
                        return (
                            data1[1].map((data) => {

                                return SetSearchData(SearchData => [...SearchData, {
                                    type: data1[0], value: data.name || data.Product_Name || data.Store_Name, id: data.id, image: data?.Brand_Logo || data?.categoryImages || data?.Store_Image || data?.SubCategoryImage || data.images[0].image, StoreName: data.Store_Name, Category: data.category_name, SubCategory_id: data.Sub_Category_id,
                                    SubcategoryName: data.SubcategoryName, Store_Type: data.Store_Type
                                }]);
                            }
                            )
                        )
                    })
                }
                else (
                    SetSearchData([])
                   
                )

            }).catch(
                function (error) { }
            )
            }
        }, 500)
        return () => clearTimeout(getdata);
    }, [input]);
    const [open, setOpen] = React.useState(false);
    const [openLocation, setOpenLocation] = React.useState(false);

    React.useEffect(() => {
        const handleResize = () => {
            setWindowSize(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
        if (windowSize <= 900) {
            SetSearchBarWidth(true)
            let w = document.getElementById("navsearchConntainer").clientWidth
          
            setoptionwidth(w)
        }
        else {
            if (windowSize >= 900) {
                SetSearchBarWidth(false)
                let w = document.getElementById("navsearchConntainer").clientWidth / 2;
        
                setoptionwidth(w)
            }
        }
        return () => window.removeEventListener('resize', handleResize)

    }, [windowSize])
    React.useEffect(() => {
        let windowWidth = window.screen.availWidth
        if (windowWidth <= 900) {
            let w = document.getElementById("navsearchConntainer").clientWidth
            setoptionwidth(w)
        }
        else {
            if (windowWidth >= 900) {
                let w = document.getElementById("navsearchConntainer").clientWidth / 2;
                setoptionwidth(w)
            }
        }


    }, [])

    function SearchAPi(id, type, t) {
        Setloading(false)
        if (type === 'Product') {
            Navigation(`/products/${modifystr(t.Category)}/${modifystr(t.SubcategoryName)}/${modifystr(t.value)}/${t.id}`);
        }
        else if (type === "Store") {
            if (t.Store_Type === "delivery") {
                Navigation(`/weed-deliveries/${modifystr(t.StoreName)}/${t.id}`);
            }
            else {
                Navigation(`/weed-dispensaries/${modifystr(t.StoreName)}/${t.id}`);
            }
        }
        else if (type === "Brand") {
            Navigation(`/brands/${t.value}/${t.id}`);
        }
        else if (type === "Sub Category") {
            Navigation(`/Products/${modifystr(t.Category)}/${modifystr(t.value)}/${t.id}`);
        }
        else if (type === "Category") {
            Navigation(`/Products/${modifystr(t.value)}/${t.id}`);

        }





        // Axios.post(`https://api.cannabaze.com/UserPanel/Get-ResultHomeSearchFilter/`,
        //     {
        //         id: id,
        //         type: type
        //     }
        // ).then((response) => {

        // })
    }

    return (
        <React.Fragment>
            <div className="col_Search">
                <div className={` nav_search_bar_div center`} id='navsearchConntainer' style={{ display: (openLocation && SearchBarWidth) && "block" }}>
                    <AutoComplete
                        id="SearchBar"
                        disableClearable
                        open={open}
                        onOpen={() => {
                            setOpen(true);
                        }}
                        onClose={() => {
                            setOpen(false);
                        }}
                        classes={{ paper: classes.paper }}
                        // onClick={Search}
                        filterOptions={x => x}

                        // ListboxProps={{ style: { width: '100%' } }}
                        componentsProps={{ popper: { style: { height: '100%', width: `${optionwidth}px` } } }}
                        onChange={(event, value) => SearchAPi(value?.id, value?.type, value, event)}
                        // onClick={(event, value) => SearchAPi(value?.id, value?.type, value, event)}
                        // getoptionselected={(option, value) => option?.description === value?.description}
                        getOptionLabel={(option) => option?.value}
                        options={SearchData}
                        groupBy={(option) => option.type}
                        renderOption={(props, t) => {
                            return (
                                <div {...props} style={{ color: "black" }} >
                                    <ul className='PopperLIst'>
                                        {/* <div> */}
                                        <li onClick={(event, value) => SearchAPi(t?.id, t?.type, t)} className='searchBarListStyles' key={t.value}>
                                            <LazyLoadImage
                                                onError={event => {
                                                    event.target.src = "/image/blankImage.jpg"
                                                }}
                                                className='searchBarImageStyles' src={`${t.image}`} alt=''></LazyLoadImage>
                                            <span className='searchBarSpanValue'> {`${t.value}`}</span>
                                        </li>
                                        {/* </div> */}


                                    </ul>
                                </div>
                            )
                        }}
                        // loading={loading}
                        sx={{ width: open && SearchBarWidth ? "100%" : "100%" }}
                        renderInput={(params) => <TextField
                            {...params}
                            onChange={Search}
                            placeholder="Products Brands Retailers and more"
                            className={` ${classes.Bar_padding} SearchBar nav_search_bar_div  ${classes.SearchBar_Text}`}
                            style={{ borderRadius: (open && SearchBarWidth) ? " 16px 16px 16px 16px" : " 16px 0px 0px 16px", top: "0px", display: openLocation && SearchBarWidth ? "none" : "inline-flex", width: open && SearchBarWidth ? "100%" : "100%" }}
                            InputProps={{
                                ...params.InputProps,
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <BsSearch color="#858585" size={16} />
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <React.Fragment>
                                        {loading ? (
                                            <CircularProgress color="inherit" size={20} />
                                        ) : null}
                                    </React.Fragment>
                                ),
                            }}
                        />
                        }
                    />
                    {
                        SearchBarWidth && !open &&
                        <div id="Boder_left"></div>
                    }
                    {
                        !SearchBarWidth && <div id="Boder_left"></div>
                    }
                    <AddressSearchapi
                        openLocation={openLocation}
                        SearchBarWidth={SearchBarWidth}
                        setOpenLocation={setOpenLocation}
                        open1={open}
                        path={path}
                    ></AddressSearchapi>

                </div>
            </div>

        </React.Fragment>
    )
}
export default SearchBar


// https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyC_MQE9O7OW5sM2Pvyzs5zjotWyqdshhjA




// ,key[1].map((data) => {
// return data.name || data.Product_Name
// })
// (data[1]?.map((g)=>  data[0]+(g.name || g.Product_Name)))) 
