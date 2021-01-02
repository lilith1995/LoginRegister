import React from "react";

import Button from "../Button/Button";
import Image1 from "../Image/Image1";

import "./ListItem.scss";


function ListItem1(item){

    return(
        <div className="list--item">
            <div className="list--item-content">
                <div className="list--item-img">
                    <Image1 />
                </div>
                <div className="list--item-info">
                    <div className="list--item-title">
                        Computer desk
                    </div>
                    <div className="list--item-desc">
                    Desk Material: Foil, MDF
                    Metal Material: Deco veneer and metal. 
                    Material technical: Foil, PVC Material: 
                    </div>
                    <div className="list--item-action">
                        <Button/>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ListItem1;


