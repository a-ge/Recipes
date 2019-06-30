import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions';
import { removeItem } from '../actions';

class IngredientItem extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isChecked: false,
      };
    };

    toggleChange = () => {
      this.setState ({
        isChecked: !this.state.isChecked
      });

      const { name, id } = this.props;

      if (this.state.isChecked) {
        this.props.removeItem(id, name)
      } else {
        this.props.addItem(id, name)
      }
    };

    render() {
      const { name } = this.props;
      return (
          <div className="ingredientItem" >
              <input type="checkbox" className="itemButton" defaultChecked={this.state.isChecked} onChange={this.toggleChange} />{name}
          </div>
      )
    };
};

const mapDispatchToProps = dispatch => {
  return {
    addItem: (id, name) => { dispatch(addItem(id, name)) },
    removeItem: (id, name) => { dispatch(removeItem(id, name)) }
  }
};

export default connect(null, mapDispatchToProps)(IngredientItem);
