import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { trim_deck, take_query }  from '../actions/index.js';
import './query.css';
//import store from './store.js';

class Query extends React.Component {
  render () {
    const { handleSubmit } = this.props;
    return (
      <div className="query-container">
        <form onSubmit={ handleSubmit }>
        <Field component="input"
          name="textQuery"
          className="text-query"
          type="text"
          placeholder="What is your query?"
        />
        <label>number of cards to deal: </label>
        <Field component="input" 
          name="spreadNumber" 
          className="spread-number" 
          type="number" 
          min={1} max={78}
        /><br />
          <button name="deal-button" type="submit" className="deal-button">Deal</button>
        </form>
      </div>
    );
}
}

export default reduxForm({
  form: 'query',
  onSubmit: (values, dispatch) => { 
    dispatch(trim_deck(values.spreadNumber));
    dispatch(take_query(values.textQuery));
  }
})(Query);