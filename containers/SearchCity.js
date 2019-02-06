import React, { Component } from 'react';
import { Button } from 'react-native'
import { GooglePlacesInput } from '../components/autoComplete';

class SearchCity extends Component {
    
    render() {
        return (
            <GooglePlacesInput />
        );
    }
}

export default SearchCity;