import React from "react";
import PlusIcon from "../../assets/plus.svg";
import MinusIcon from "../../assets/minus.svg";
import Button from "@components/button/Button";

const Cart = () => {
    return (
        <section>
            <h2>Kiss My Rhubarb</h2>
            <p>APERITIF</p>
            <div>
                <div></div>
            </div>
            <p>
                Kiss My Rhubarb is a fresh and aromatic Belgian aperitif. It
                uses bright and zesty supporting ingredients like pink
                grapefruit and lemon verbena to create an aperitif perfectly
                designed to pair with hot summery nights.
            </p>
            <div>
                <div>700ml</div>
                <div>
                    <img src={PlusIcon} alt="plus icon" />
                    <p>2</p>
                    <img src={MinusIcon} alt="plus icon" />
                </div>
                <Button type="button" className="d-flex">
                    <p>Add to Cart</p>
                    <p>$230.33</p>
                </Button>
            </div>
        </section>
    );
};

export default Cart;
