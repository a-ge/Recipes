import React from 'react';
import { connect } from 'react-redux';
import { fetchIngredients } from '../actions'
import IngredientItem from './IngredientItem.js'

class IngredientsList extends React.Component {
    componentDidMount() {
        this.props.fetchIngredients();
    }

    renderList() {
      return this.props.ingredients.map(ingredient => {
        return (
          <div className="ingredient" key={ingredient.id}>
            <IngredientItem  name={ingredient.name} />
          </div>
        )
      })
    }

    render() {
        return (
        <div className="ui container">
          <h2>Ingredients</h2>
          <h4>Please select from below:</h4>
          {this.renderList()}
        </div>
      )
    }
}

const mapStateToProps = state => {
    return { ingredients: state.ingredients };
};

export default connect(
    mapStateToProps,
    { fetchIngredients }
)(IngredientsList);
