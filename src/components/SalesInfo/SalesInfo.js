import React, {Component} from 'react';

import Tab from '../UI/Tab/Tab';
import Button from '../UI/Button/Button';
import DropDown from '../UI/DropDown/DropDown';
import TextField from '../UI/TextField/TextField';

import './SalesInfo.css';

class SalesInfo extends Component {

    handleTabClick = (e) => {
        e.preventDefault();
    }

    render() {

        const white = 'white';

        const tabOptions = [
            {id: 1, name: 'POS Office'},
            {id: 2, name: 'Corporate'}
        ];

        const businessType = [
            {id: 1, value: 'Sub Agent / Branch Office' },
            {id: 2, value: 'businesstype'}
        ]

        const gateway = [
            {id: 1, value: 'Yes'},
            {id: 2, value: 'No'}
        ]

        return (
            <div className="container salesInfo">
                <div className="row">
                    <div className="col-md-12">
                        <Tab
                            tabOptions={tabOptions}
                            handleTabClick = {this.handleTabClick}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <Button
                            name = "Office Info"
                            btnColor = {white}
                        />
                        <Button
                            name = "Admin User"
                            btnColor = {white}
                        />
                        <Button
                            name = "Group / Seasonality"
                            btnColor = {white}
                        />
                        <Button
                            name = "Markup"
                            btnColor = {white}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <h2>Basic Information</h2>
                    </div>
                </div>
                <form>
                    <div className="row">
                        <div className="col-md-3 form-group">
                            <DropDown
                                selectName = "Business Type *"
                                option = {businessType}
                            />
                        </div>
                        <div className="col-md-3 spacing form-group">
                            <TextField
                                inputLabel = "Office Name *"
                                placeholder = "Eg: XYZ Travel Agent"
                            />
                        </div>
                        <div className="col-md-3 spacing form-group">
                            <TextField
                                inputLabel = "Branch Code"
                            />
                        </div>
                        <div className="col-md-3 spacing form-group">
                            <TextField
                                inputLabel = "Email Id *"
                                placeholder = "xyz@gmail.com"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 spacing form-group">
                            <TextField
                                inputLabel = "Contat Number"
                                placeholder = "Contact Number"
                            />
                        </div>
                        <div className="col-md-3 form-group">
                            <DropDown
                                selectName = "Payment Gateway *"
                                option = {gateway}
                            />
                        </div>
                        <div className="col-md-3 spacing form-group">
                            <TextField
                                inputLabel = "Operating Currency *"
                                placeholder = "Australian Dollar"
                            />
                        </div>
                        <div className="col-md-3 spacing form-group">
                            <TextField
                                inputLabel = "Credit Limit *"
                                placeholder = "Contact Number"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 form-group">
                            <TextField
                                inputLabel = "Operating Country *"
                                placeholder = "Australia"
                            />
                        </div>
                        <div className="col-md-3 form-group">
                            <TextField
                                inputLabel = "Operating Time Zone *"
                                placeholder = "Brisbane"
                            />
                        </div>
                        <div className="col-md-3 form-group">
                            <TextField
                                inputLabel = "Tax Number"
                            />
                        </div>
                        <div className="col-md-3 form-group">
                            <TextField
                                inputLabel = "Number of Users *"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 form-group">
                            <TextField
                                inputLabel = "IATA Number"
                            />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default SalesInfo;