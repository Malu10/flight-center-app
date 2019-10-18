import React, {Component} from 'react';

import Button from '../UI/Button/Button';
import Radio from '../UI/Radio/Radio';
import TextField from '../UI/TextField/TextField';
import DropDown from '../UI/DropDown/DropDown';
import CheckBox from '../UI/CheckBox/CheckBox';

class SearchFlight extends Component {

    render() {
        const flightClass = [
            {id: 1, value: 'Economy Class'},
            {id: 2, value: 'Business Class'},
            {id: 3, value: 'First Class'}
        ];

        const numbers = [
            {id: 1, value: '0'},
            {id: 2, value: '1'},
            {id: 3, value: '2'},
            {id: 4, value: '3'},
            {id: 5, value: '4'},
            {id: 6, value: '5'}
        ]

        const markUpOption = [
            {id: 1, value: 'Choose Markup By'},
            {id: 2, value: 'Markup1'},
            {id: 3, value: 'Markup2'}
        ]

        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <h2>Flight Search</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <form>
                            <div className="row">
                                <div className="col-md-12 col-sm-12 col-xs-12 form-group btn-space">
                                    <Button
                                        name = "Flights"
                                        btnColor = "red"
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 col-sm-12 col-xs-12 form-group">
                                    <Radio
                                        value="Oneway"
                                    />
                                    <Radio
                                        value="Round Trip"
                                    />
                                    <Radio
                                        value="Multiple Destinations"
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 col-sm-6 col-xs-6 form-group">
                                    <TextField
                                        inputLabel = "Departure Airport"
                                    />
                                </div>
                                <div className="col-md-4 col-sm-6 col-xs-6 form-group">
                                    <TextField
                                        inputLabel = "Arrival Airport"
                                    />
                                </div>
                                <div className="col-md-2 col-sm-6 col-xs-6 form-group">
                                    <TextField
                                        inputLabel = "Departure Date"
                                    />
                                </div>
                                <div className="col-md-2 col-sm-6 col-xs-6 form-group">
                                    <TextField
                                        inputLabel = "Return Date"
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-2 col-sm-6 col-xs-6 form-group">
                                    <DropDown
                                        selectName = "Adult"
                                        option = {numbers}
                                    />
                                </div>
                                <div className="col-md-2 col-sm-6 col-xs-6 form-group">
                                    <DropDown
                                        selectName = "Child (2-12 years)"
                                        option = {numbers}
                                    />
                                </div>
                                <div className="col-md-3 col-sm-6 col-xs-6 form-group">
                                    <DropDown
                                        selectName = "Infant (Below 2 years)"
                                        option = {numbers}
                                    />
                                </div>
                                <div className="col-md-3 col-sm-6 col-xs-6 form-group">
                                    <DropDown
                                        selectName = "Preferred Class"
                                        option = {flightClass}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 col-sm-6 col-xs-6 spacing form-group">
                                    <TextField
                                        inputLabel = "Preferred Airline"
                                    />
                                </div>
                                <div className="col-md-4 col-sm-6 col-xs-6 spacing form-group">
                                    <TextField
                                        inputLabel = "Markup Value"
                                    />
                                </div>
                                <div className="col-md-3 col-sm-6 col-xs-6 form-group">
                                    <DropDown
                                        selectName = "Markup By"
                                        option = {markUpOption}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 form-group">
                                    <CheckBox
                                        checkName = "Non stop"
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 form-group">
                                    <Button
                                        name = "Search your flights"
                                        btnColor = "red"
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchFlight;