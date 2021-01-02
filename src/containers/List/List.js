import React from "react";
import "./List.scss";

import ListItem1 from "../../components/ListItem/ListItem1";
import ListItem2 from "../../components/ListItem/ListItem2";
import ListItem3 from "../../components/ListItem/ListItem3";
import ListItem4 from "../../components/ListItem/ListItem4";
import ListItem5 from "../../components/ListItem/ListItem5";

function List() {
    
    return (
        <div className="container">
            <div className="list--items">
                <ListItem1 />
                <ListItem2 />
                <ListItem3 />
                <ListItem4 />
                <ListItem5 />
            </div>
        </div>
    )
    

}


export default List;

