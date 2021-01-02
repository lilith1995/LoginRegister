import React from "react";



import Button from "../Button/Button";
import Image3 from "../Image/Image3";

import "./ListItem.scss";



function ListItem3(item){

    return(
        <div className="list--item">
            <div className="list--item-content">
                <div className="list--item-img">
                    <Image3 />
                </div>
                <div className="list--item-info">
                    <div className="list--item-title">
                        Laptop Desk
                    </div>
                    <div className="list--item-desc">
                    Material:	MDF, Steel
                    Treatment:	Lacquer
                    Colour:	Black
                    Size assembled	Width: 60 cm, Height: 23/27 cm, Depth: 34 cm
                    </div>
                    <div className="list--item-action">
                        <Button/>
                    </div>
                </div>
            </div>
        </div>
    )

}


export default ListItem3;


