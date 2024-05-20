import React from 'react'
import CurrentLocation from "../Components/Component/Navbar/Component/CurrentLocation"
import Createcontext from "../Hooks/Context";
export default function RoutingList(props) {
    const { Component } = props;
    const { state } = React.useContext(Createcontext)

    return (
        <div>
          
            <Component />
         
            
       { state.permission===false && <CurrentLocation></CurrentLocation> }
           
        </div>
    )
}