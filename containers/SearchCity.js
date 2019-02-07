import React, { Component } from 'react';
import { Button } from 'react-native'
import AutoComplete from '../components/AutoComplete';

class SearchCity extends Component {
    static navigationOptions = {
            title: 'Search',
    };

    searchComplete = () => {
        // send the user back to the main
        this.props.navigation.goBack();
    }

    render() {
        return (
            <AutoComplete searchCallBack={this.searchComplete}/>
        );
    }
}

export default SearchCity;