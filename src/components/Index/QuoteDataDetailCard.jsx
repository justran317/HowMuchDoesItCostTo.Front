import Card from 'react-bootstrap/Card';

export const QuoteCard = ({quoteData}) => {
    
    return (
        <>
            <Card>
                <Card.Body>
                    <Card.Title>{quoteData.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">By {quoteData.createdByUser.firstName} {quoteData.createdByUser.lastName}</Card.Subtitle>
                    <Card.Text>
                    {quoteData.detail}
                    </Card.Text>

                </Card.Body>
            </Card>
            <hr></hr>
        </>
    )
}

export default QuoteCard;