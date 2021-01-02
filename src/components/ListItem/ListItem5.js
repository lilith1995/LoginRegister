import React from "react";

import Button from "../Button/Button";
import Image5 from "../Image/Image5";

import "./ListItem.scss";


function ListItem5(item){

    return(
        <div className="list--item">
            <div className="list--item-content">
                <div className="list--item-img">
                    <Image5 />
                </div>
                <div className="list--item-info">
                    <div className="list--item-title">
                        Working desk
                    </div>
                    <div className="list--item-desc">
                    Desk Material: MDF 
                    Particle board Treatment: Lacquer 
                    Colour: White
                    Size assembled: Width: 45 cm, Length: 84 cm, Height: 95 cm
                    </div>
                    <div className="list--item-action">
                        <Button/>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ListItem5;

