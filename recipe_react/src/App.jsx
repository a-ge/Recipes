import React, { Component } from 'react';
import IngredientsList from './components/IngredientsList.js';
import SelectedItems from './components/SelectedItems.js';

class App extends Component {
    render() {
        return (
            <div>
                <IngredientsList />
                <SelectedItems />
            </div>
        );
    }
}

export default App;
