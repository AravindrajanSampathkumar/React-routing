import { useHistory } from "react-router-dom";
import QuoteForm from "../quotes/QuoteForm";
import useHttp from "../../hooks/use-http";
import { addQuote } from "../../lib/api";
import { useEffect } from "react";

const NewQuotes = () => {
    const { sendRequest, status } = useHttp(addQuote);
    const history = useHistory();

    useEffect(() => {
        if (status === 'completed') {
        history.push('/quotes');
        }
    }, [status,history]);

    const addQuoteHandler = (quoteData) => {
        console.log('quoteData=', quoteData);
        sendRequest(quoteData);
        history.push('/quotes')// push is used for navigate to move next page and coming back to previous page 
        // history.replace('/quotes') // replace will change the path not able to move back
        //history allows us to change and manage history object and history URL
    }
    return (
        <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler}></QuoteForm>
    )
}

export default NewQuotes;