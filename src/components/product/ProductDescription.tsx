import React from "react";
import NoseIcon from "../../assets/nose.svg";
import TongueIcon from "../../assets/tongue.svg";
import WineIcon from "../../assets/wine.svg";
import DacingIcon from "../../assets/dancing.svg";

const ProductDescription = () => {
    return (
        <section>
            <p>tasting notes</p>
            <div>
                <img src={NoseIcon} alt="icon" />
                <ul>
                    <li>ASTRINGENT</li>
                    <li>FRUITY</li>
                    <li>Complex</li>
                </ul>
            </div>
            <div>
                <img src={TongueIcon} alt="icon" />
                <ul>
                    <li>BITTER</li>
                    <li>FLAMBOYANT</li>
                    <li>BRIGHT</li>
                </ul>
            </div>
            <div>
                <h3>Flavour Intensity</h3>
                <div>
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                </div>
            </div>
            <div>
                <h3>Suggested Use</h3>
                <div>
                    <div>
                        <p>In a cocktail</p>
                        <img src={WineIcon} alt="icon" />
                    </div>
                    <div>
                        <p>At a party</p>
                        <img src={DacingIcon} alt="icon" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDescription;
