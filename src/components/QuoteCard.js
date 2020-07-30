// attach remove, upvote, and downvote actions (from the Quotes Actions file) >>> to pass down as callback props to the QuoteCard component

import React from 'react';

//question: why does this need to be passed down as an object?
// todo: renders quote content from props.quote
const QuoteCard = ({quote, removeQuote, upvoteQuote, downvoteQuote}) =>
  <div>
    <div className="card card-inverse card-success card-primary mb-3 text-center">
      <div className="card-block">
        <blockquote className="card-blockquote">
          <p>{quote.content}</p>
          <footer>- author <cite title="Source Title">{quote.author}</cite></footer>
        </blockquote>
      </div>
      <div className="float-right">
        <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
          <button
            type="button"
            onClick={() => upvoteQuote(quote.id)}
            className="btn btn-primary"
          >
            Upvote
          </button>
          <button
            type="button"
            onClick={() => downvoteQuote(quote.id)}
            className="btn btn-secondary"
          >
            Downvote
          </button>
          <button
            type="button"
            onClick={() => removeQuote(quote.id)}
            className="btn btn-danger"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div>Votes: {quote.votes}</div>
      </div>
    </div>
  </div>;

export default QuoteCard;
