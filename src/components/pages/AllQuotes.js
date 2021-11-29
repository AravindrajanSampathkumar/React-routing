import QuoteList from "../quotes/QuoteList";

const DUMMY_QUOTES = [
    { id: 'q1', authour: 'Max', text:'Learning React is Fun!' },
    { id: 'q2', authour: 'Maximillan', text:'Learning React is great' }

];


const AllQuotes = () => {
    return (
        <QuoteList quotes={DUMMY_QUOTES}></QuoteList>
    )
}

export default AllQuotes;