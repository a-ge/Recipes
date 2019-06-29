import React from 'react';

class IngredientItem extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isChecked: false
      };
    }

    toggleChange = () => {
      this.setState ({
        isChecked: !this.state.isChecked,
      })
    }

    render() {
      const { name } = this.props;

      return (
          <div className="ingredientItem" >
              <input type="checkbox" className="itemButton" defaultChecked={this.state.isChecked} onChange={this.toggleChange}/>{name}
          </div>
      )
    }
}

export default IngredientItem;
