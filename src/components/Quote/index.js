import { memo } from 'react';

function ShowQuote({ quote,getQuote }) {
  return (
    <div>
      <div className="container">
        <div className="quote">{quote.quote}</div>
        <div className="author">{quote.author}</div>
        <div className="random-button"><button onClick={getQuote}>Get More Quote</button></div>
      </div>

      {/* <code>{JSON.stringify(quote, null, 2)}</code> */}
    </div>
  );
}

export default memo(ShowQuote);
