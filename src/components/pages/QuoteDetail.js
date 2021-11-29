import react from "react";
import { Route, useParams } from "react-router";
import { Link, useRouteMatch } from "react-router-dom";
import Comments from "../comments/Comments";
import HighlightedQuote from "../quotes/HighlightedQuote";

const DUMMY_QUOTES = [
    { id: 'q1', authour: 'Max', text: 'Learning React is Fun!' },
    { id: 'q2', authour: 'Maximillan', text: 'Learning React is great' }
];

const QuoteDetail = () => {
    const match = useRouteMatch();
    const params = useParams();
    const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);
    if (!quote) {
        return <p>No Quotes Available</p>
    }
    return (
        <react.Fragment>
            <HighlightedQuote text={quote.text} author={quote.authour} />
            <Route path={match.path} exact>
                <div className="centered">
                    <Link className='btn--flat' to={`${match.url}/comments`}>Load Comments</Link>
                </div>
            </Route>
            <Route path={`${match.path}/comments`}>
                <Comments></Comments>
            </Route>
        </react.Fragment>
    )
}

export default QuoteDetail;