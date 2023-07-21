import { ButtonGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { FormCheck } from "react-bootstrap";


export const QuoteRating = () => {
    return (
        <>
            <h5>Rating</h5>
            <FormCheck
                label="1&#9733;"
                name="distanceRadio"
                type="radio"
                id="inline-radio-1"
            />
            <FormCheck
                label="2&#9733;"
                name="distanceRadio"
                type="radio"
                id="inline-radio-2"
            />
            <FormCheck
                label="3&#9733;"
                name="distanceRadio"
                type="radio"
                id="inline-radio-3"
            />
            <FormCheck
                label="4&#9733;"
                name="distanceRadio"
                type="radio"
                id="inline-radio-3"
            />
            <FormCheck
                label="5&#9733;"
                name="distanceRadio"
                type="radio"
                id="inline-radio-3"
            />
        </>
    )
}

export default QuoteRating;