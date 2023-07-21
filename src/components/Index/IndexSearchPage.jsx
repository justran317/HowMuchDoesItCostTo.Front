import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import IndexSearch from './IndexSearch';
import FilterPanel from './FilterPanel';
import QuoteData from './QuoteDataPanel';
import { useState } from "react";


export const IndexSearchPage = () => {
    const [originalDataResults, setOriginalDataResults] = useState([]);
    const [quoteDataResults, setQuoteDataResults] = useState([]);

    const onNewSearch = (results) => {
        console.log("results handler is ", results);
        setQuoteDataResults(results);
        setOriginalDataResults(results);
    }

    const onFilterUpdated = (filterObj) => {

        let filteredQuoteData = originalDataResults.filter((x) => (!filterObj.price || x.quotes &&  x.quotes.find(q => q.quoteEstimate <= filterObj.price))
        
        );

        setQuoteDataResults(filteredQuoteData);

    }

    return (
        <div style={{marginLeft: "32px"}}>
            <Row style={{paddingTop: "32px"}}>
                <Col></Col>
                <Col>
                    <IndexSearch onSearchCompleted={onNewSearch}></IndexSearch>
                </Col>
                <Col></Col>
            </Row>
            <hr></hr>
            <Row>
                <Col xs={1}>
                    <h4>Filters</h4>
                    <FilterPanel onFilterUpdated={onFilterUpdated}></FilterPanel> 
                </Col>
                <Col style={{marginLeft: "12px"}}>
                    <h3>Results</h3>
                    <QuoteData quoteDataResults={quoteDataResults}></QuoteData>
                </Col>
                <Col xs={6}>Map</Col>
            </Row>
        </div>
    )
}

export default IndexSearchPage;