import QuoteCard from './QuoteDataDetailCard';
import { useState, useEffect } from "react";


export const QuoteData = ({quoteDataResults}) => {

    const renderQuoteDetail = () => {
        const quoteDetails = [];
        console.log("render detail rendered");
        for (var quote of quoteDataResults){
            // console.log()
            quoteDetails.push(<QuoteCard quoteData={quote} key={quote.id}></QuoteCard>)
        }
        return quoteDetails;
    }

    // useEffect(() => {
    //     console.log("renderQuoteDetail updated ");
    // }, [renderQuoteDetail])

    return (
        <>
            {/* <div>
                {renderQuoteDetail()}
            </div> */}
            {quoteDataResults.map((quoteData, index) => (
                <QuoteCard quoteData={quoteData} key={index}></QuoteCard>
            ))
            }
        </>
    )
}

export default QuoteData;