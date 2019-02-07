import React from 'react'

const CityTuple = (props) => {
    return (
        <View style={styles.listBox}>
            {this.props.city}
        </View>
    )
}

var styles = StyleSheet.create({
    listBox          : {
        backgroundColor : '#ef553a',
        width           : 'auto',
        paddingTop      : 10,
        paddingBottom   : 5,
        paddingLeft     : 20,
        paddingRight    : 20,
        height          : 75,
        flexDirection   : 'row',
    }
});

export default CityTuple