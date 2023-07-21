import { FormCheck } from "react-bootstrap";

export const HasQuote = () => {
    return (
        <>
            <h5>Has Quote</h5>
            <div key="inline-radio" className="mb-3">
            <FormCheck
                label="Yes"
                name="hasQuoteRadio"
                type="radio"
                id="inline-radio-1"
            />
            <FormCheck
                label="No"
                name="hasQuoteRadio"
                type="radio"
                id="inline-radio-2"
            />
            </div>
        </>
    )
}

export default HasQuote;