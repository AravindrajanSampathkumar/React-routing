import { useHistory } from "react-router-dom";
import QuoteForm from "../quotes/QuoteForm";

const NewQuotes = () => {
    const history = useHistory();
    const addQuoteHandler = (quoteData) => {
        console.log('quoteData=', quoteData);
        history.push('/quotes')// push is used for navigate to move next page and coming back to previous page 
        // history.replace('/quotes') // replace will change the path not able to move back
        //history allows us to change and manage history object and history URL
    }
    return (
        <QuoteForm onAddQuote={addQuoteHandler}></QuoteForm>
    )
}

export default NewQuotes;