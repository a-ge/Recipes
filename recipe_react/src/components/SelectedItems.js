import React from 'react';
import { connect } from 'react-redux';

class SelectedItems extends React.Component {

    renderList() {
      console.log(this.props.selection)
      return this.props.selection.map(item => {
        return (
            <div className="selectionItem" key={item.id}>
              {item.name}
            </div>
        )
      })
    }

    render() {
      console.log(this.props.selection)
      return (
        <div className="ui container2">
          <p></p>
          <h4>Selected Items:</h4>
          {this.renderList()}
        </div>
      )
    }
};

const mapStateToProps = state => {
    return { selection: state.selection };
};

export default connect(mapStateToProps)(SelectedItems);
