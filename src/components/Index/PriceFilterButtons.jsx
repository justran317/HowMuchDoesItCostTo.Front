import { useState } from "react";
import { ButtonGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";

export const PriceButtons = ({onFilterSelected}) => {
    const activeGray = "#696969";
    const inActiveGray = "#808080"

    const [activeButton, setActiveButton ] = useState("")

    const onButtonClicked = (value, key) => {
        if (value === activeButton){
            setActiveButton("");
            onFilterSelected("", key);

            return;
        }

        onFilterSelected(value, key);
        setActiveButton(value)
    }

    return (
        <>
        <ButtonGroup>
            <Button variant="secondary" 
                onClick={() => {
                    onButtonClicked(100, "price")
                }}
                style={{
                    backgroundColor: activeButton === 100 ? activeGray : inActiveGray,
                }}
                >
                $
            </Button>
            <Button variant="secondary" 
                onClick={() => {
                    onButtonClicked(500, "price")
                }}
                style={{
                    backgroundColor: activeButton === 500 ? activeGray : inActiveGray,
                }}
                >
                $$
            </Button>
            <Button variant="secondary" 
                onClick={() => {
                    onButtonClicked(2500, "price")
                }}
                style={{
                    backgroundColor: activeButton === 2500 ? activeGray : inActiveGray,
                }}
                >
                $$$
            </Button>
            <Button variant="secondary" 
                onClick={() => {
                    onButtonClicked(10000, "price")
                }}
                style={{
                    backgroundColor: activeButton === 10000 ? activeGray : inActiveGray,
                }}
                >
                $$$$
            </Button>
        </ButtonGroup>
        </>
    )
}

export default PriceButtons;