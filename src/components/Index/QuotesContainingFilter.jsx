import { FormCheck } from "react-bootstrap";

export const QuotesContaining = () => {
    return (
        <>
            <h5>Containing</h5>
            <div key="inline-checkbox" className="mb-3">
            <FormCheck
                label="Quote By Contractor"
                type="checkbox"
                id="inline-checkbox-1"
            />
            <FormCheck
                label="Quote By Customer"
                type="checkbox"
                id="inline-checkbox-2"
            />
            <FormCheck
                label="More Than One Quote"
                type="checkbox"
                id="inline-checkbox-3"
            />
            </div>
        </>
    )
}

export default QuotesContaining;