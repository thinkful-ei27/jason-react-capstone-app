import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import {  shuffle_deck, trim_deck, take_query }  from '../actions/index.js';

export class Query extends React.Component {
  render () {
    if (this.props.login !== true && this.props.cardsDealt.length>0){
      return (
        <section className="query-container">
          <h3>Your query:</h3>
          <p className="display-query">{this.props.textQuery}</p>
        </section>
      )
    } else 
    if (this.props.login !== true){
      const { handleSubmit } = this.props;
      return (
        <section className="query-container">
          <form onSubmit={ handleSubmit }>
          <Field component="input"
            name="textQuery"
            className="text-query"
            type="text"
            placeholder="Ask a question."
            value={this.props.textQuery}
            autocomplete="off"
          />
          <label className="spreadNumber-label">number of cards to deal: </label>
          <Field component="input" 
            name="spreadNumber" 
            className="spread-number" 
            type="number" 
            placeholder="all"
            min={1} max={78}
            value={this.props.spreadNumber}
            autocomplete="off"
          /><br />
            <button 
              name="deal-button" 
              id="deal-button"
              type="submit"  className="deal-button">Deal</button>
          </form>
        </section>
      );
    } else {
      return (<div></div>);
    }
  }
}

function mapStateToProps(state){
  return {
    login: state.tarot.login,
    deck: state.tarot.deck,
    cardsDealt: state.tarot.cardsDealt,
    textQuery: state.tarot.textQuery,
    spreadNumber: state.tarot.spreadNumber
  };
}

const queryForm = reduxForm({
  form: 'query',
  onSubmit: (values, dispatch) => { 
    dispatch(trim_deck(values.spreadNumber));
    dispatch(take_query(values.textQuery));
    dispatch(shuffle_deck());
  }
})(Query);

export default connect(mapStateToProps)(queryForm);