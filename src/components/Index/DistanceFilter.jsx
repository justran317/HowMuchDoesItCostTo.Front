import { FormCheck } from "react-bootstrap";

export const Distance = () => {
    return (
        <>
            <h5>Distance</h5>
            <div key="inline-radio" className="mb-3">
            <FormCheck
                label="1"
                name="distanceRadio"
                type="radio"
                id="inline-radio-1"
            />
            <FormCheck
                label="2"
                name="distanceRadio"
                type="radio"
                id="inline-radio-2"
            />
            <FormCheck
                label="3"
                name="distanceRadio"
                type="radio"
                id="inline-radio-3"
            />
            </div>
        </>
    )
}

export default Distance;