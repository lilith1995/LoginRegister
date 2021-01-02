import React from "react";



import Button from "../Button/Button";
import Image2 from "../Image/Image2";

import "./ListItem.scss";


function ListItem2(item){

    return(
        <div className="list--item">
            <div className="list--item-content">
                <div className="list--item-img">
                    <Image2 />
                </div>
                <div className="list--item-info">
                    <div className="list--item-title">
                        Cabinet
                    </div>
                    <div className="list--item-desc">
                    Material: Foil, Metal, Particle board. Colour: White.
                    Size assembled:	Width: 41 cm, Height: 77 cm, Depth: 49 cm
                    </div>
                    <div className="list--item-action">
                        <Button/>
                    </div>
                </div>
            </div>
        </div>
    )

}


export default ListItem2;

