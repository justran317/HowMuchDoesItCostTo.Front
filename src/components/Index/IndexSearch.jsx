import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Button } from 'react-bootstrap';
import { useState, useEffect } from "react";
import axios from 'axios';



export const IndexSearch = ({onSearchCompleted}) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [location, setLocation] = useState("");

    const searchQuote = () => {
        const requestObject = {
            Term: searchTerm,
            Location: location
        }

        axios.post("https://localhost:7020/api/Quote/search", requestObject)
        .then((response) => {
            console.log("response is ", response);
            if (response.status === 200 && response.data) {
                onSearchCompleted(response.data);
            }
        }).catch((err) => {
            console.log("err is ", err);
        })
    }


    return (
        <>
        <InputGroup className="mb-3">
            <Form.Control placeholder="search" 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)} />
            <Form.Control placeholder="city, state or zip" 
                        value={location}
                        onChange={(e) => setLocation(e.target.value)} />
            <Button variant="outline-secondary"
                    onClick={searchQuote}
            >&#128269;</Button>
        </InputGroup>
        </>
    )
}

export default IndexSearch;