// import { TextField } from '@mui/material';
// import useGoogle from 'react-google-autocomplete/lib/usePlacesAutocompleteService';
// import React from 'react';
// import Autocomplete from '@mui/material/Autocomplete';
// import useStyles from "../../../../Style"
// import Createcontext from "../../../../Hooks/Context"
// import { useNavigate } from "react-router-dom";
// import { IoLocationSharp } from "react-icons/io5"
// import { MdOutlineMyLocation } from "react-icons/md"
// import { IconButton, InputAdornment } from "@mui/material";
// export default function SearchingLocation() {
//   const {
//     placesService,
//     placePredictions,
//     getPlacePredictions,
//     isPlacePredictionsLoading
//   } = useGoogle({
//     debounce: 700,
//     language: 'en',
//     apiKey: 'AIzaSyBRchIzUTBZskwvoli9S0YxLdmklTcOicU'
//   });
//   const classes = useStyles()
//   const navigate = useNavigate();
//   const [formatted_address, Setformatted_address] = React.useState('')
//   const { state, dispatch } = React.useContext(Createcontext)
//   React.useEffect(() => {
//     Setformatted_address(state.Location)
//   }, [state])

//   function handlechnage(e, value) {

//     placesService?.getDetails({ placeId: value?.place_id }, (placeDetails) => {
//       Setformatted_address(placeDetails.formatted_address);

//       dispatch({ type: 'permission', permission: true })
//       var Coun
//       var sta
//       var ci
//       var route
//       placeDetails?.address_components?.map((data) => {
//         if (data.types.indexOf('country') !== -1) {
//           Coun = data?.long_name.replace(/\s/g, '-')
//           return dispatch({ type: 'Country', Country: data?.long_name.replace(/\s/g, '-') })
//         }
//         if (data.types.indexOf('administrative_area_level_1') !== -1) {
//           sta = data?.long_name.replace(/\s/g, '-')
//           return dispatch({ type: 'State', State: data?.long_name.replace(/\s/g, '-') })
//         }
//         if (data.types.indexOf('locality') !== -1 || data.types.indexOf('administrative_area_level_3') !== -1 || data.types.indexOf('sublocality') !== -1) {
//           ci = data?.long_name.replace(/\s/g, '-')
//           dispatch({ type: 'City', City: data?.long_name.replace(/\s/g, '-') })
//         }
//         if (data.types.indexOf('route') !== -1) {
//           route = data?.long_name.replace(/\s/g, '-')
//           dispatch({ type: 'route', route: data?.long_name.replace(/\s/g, '-') })
//         }
//         return data
//       })
//       if (route === undefined && Coun !== undefined) {
//         window.location.pathname.slice(0, 18) === '/weed-dispensaries' && navigate(`weed-dispensaries/in/${Coun?.toLowerCase()}/${sta?.toLowerCase()}/${ci?.toLowerCase()}`)
//         window.location.pathname.slice(0, 16) === '/weed-deliveries' && navigate(`weed-deliveries/in/${Coun?.toLowerCase()}/${sta?.toLowerCase()}/${ci?.toLowerCase()}`)
//       }
//       else {
//         if (Coun !== undefined) {

//           window.location.pathname.slice(0, 18) === '/weed-dispensaries' && navigate(`weed-dispensaries/in/${Coun?.toLowerCase()}/${sta?.toLowerCase()}/${ci?.toLowerCase()}/${route?.toLowerCase()}`)
//           window.location.pathname.slice(0, 16) === '/weed-deliveries' && navigate(`weed-deliveries/in/${Coun?.toLowerCase()}/${sta?.toLowerCase()}/${ci?.toLowerCase()}/${route?.toLowerCase()}`)
//         }
//         else {
//           Setformatted_address(state.Location)
//         }
//       }
//       dispatch({ type: 'Location', Location: placeDetails?.formatted_address })
//     })
//   }
//   function OnBlur() {
//     // setOpenLocation(false)
//     Setformatted_address(state.Location)

//   }
//   function onFocus() {
//     // setOpenLocation(true)
//     Setformatted_address('')
//   }
//   const [open, setOpen] = React.useState(false);


//   return (
//     <Autocomplete
//       freeSolo
//       disableClearable
//       open={open}
//       onOpen={() => {
//           setOpen(true);
//       }}
//       onClose={() => {
//           setOpen(false);
//       }}
//       id="autocomplete-demo"
//       onFocus={onFocus}
//       onBlur={OnBlur}
//       options={placePredictions}
//       inputValue={formatted_address}
//       value={formatted_address}
//       onChange={((element, value) => {handlechnage(element, value)})}
//       renderOption={(props, value, index) => {
//         return <li {...props}  > {value.description}</li>
//       }}
//       getOptionSelected={option => option?.description}
//       getOptionLabel={(option) => (option?.description)}
//       renderInput={(params) => (
//         <TextField
//           {...params}
//           // sx={{ width: "100%" }}
//           className={`sec_input_search SearchBar Input ${classes.SearchBar_Text}`}
//           // style={{ width: "100%", borderRadius: (openLocation && SearchBarWidth) ? " 16px 16px 16px 16px" : " 0px 16px 16px 0px", top: "0px", display: open && SearchBarWidth ? "none" : "inline-flex", }}
//           onChange={(e) => {
//             Setformatted_address(e.target.value);
//             getPlacePredictions({
//               input: e.target.value
//             })
//           }}

//           label="Location"
//           variant="outlined"
//               InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <IoLocationSharp color="#858585" size={16} />
//                 </InputAdornment>
//               ),
//               endAdornment: (
//                 <IconButton>
//                   <MdOutlineMyLocation color="inherit" size={16} style={{ cursor: 'pointer' }} />
//                 </IconButton>

//               ),
//             }}
//         />
//       )}
//     />
//   );
// }







import React from 'react'

export default function locationFuntion() {
 var a = [1, 2, 3, 5]
  var b = [1, 2, 5, 4]


 a.map((data)=>{

 })

 b.find((data)=>{

 })
  

  return (
    <div>locationFuntion</div>
  )
}
