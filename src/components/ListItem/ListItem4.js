import React from "react";



import Button from "../Button/Button";
import Image4 from "../Image/Image4";


import "./ListItem.scss";



function ListItem4(item){

    return(
        <div className="list--item">
            <div className="list--item-content">
                <div className="list--item-img">
                    <Image4 />
                </div>
                <div className="list--item-info">
                    <div className="list--item-title">
                        Laptop board
                    </div>
                    <div className="list--item-desc">
                    Sideboard Material: Metal Treatment: 
                    Powder-coated Colour: White 
                    Size assembled: Width: 35 cm, Length: 50 cm, Height: 60
                    </div>
                    <div className="list--item-action">
                        <Button/>
                    </div>
                </div>
            </div>
        </div>
    )

}



export default ListItem4;


