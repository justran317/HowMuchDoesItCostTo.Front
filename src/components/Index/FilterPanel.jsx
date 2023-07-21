import PriceButtons from "./PriceFilterButtons";
import Category from "./CategoryFilter";
import Distance from "./DistanceFilter";
import HasQuote from "./HasQuoteFilter";
import QuotesContaining from "./QuotesContainingFilter";
import QuoteRating from "./QuoteRatingFilter";
import { useState } from "react";

export const FilterPanel = ({onFilterUpdated}) => {
    const [filterObj, setFilterObj] = useState({});


    const onFilterSelected = (value, key) => {
        const updatedFilter = filterObj;
        updatedFilter[key] = value;
        setFilterObj(updatedFilter);
        onFilterUpdated(filterObj);
    }

    return (
        <>
            <PriceButtons onFilterSelected={onFilterSelected}></PriceButtons>
            <hr></hr>
            <Category onFilterSelected={onFilterSelected}></Category>
            <hr></hr>
            <Distance onFilterSelected={onFilterSelected}></Distance>
            <hr></hr>
            <HasQuote onFilterSelected={onFilterSelected}></HasQuote>
            <hr></hr>
            <QuotesContaining onFilterSelected={onFilterSelected}></QuotesContaining>
            <hr></hr>
            <QuoteRating onFilterSelected={onFilterSelected}></QuoteRating>
        </>
        
    )
}

export default FilterPanel;