import React, { Component } from 'react';
import {
    Grid, Row, Col
} from 'react-bootstrap';

import Card from 'components/Card/Card.jsx';
import FormInputs from 'components/FormInputs/FormInputs.jsx';
import Button from 'elements/CustomButton/CustomButton.jsx';

class UserPage extends Component {
    render() {
        return (
            <div className="main-content">
                <Grid fluid>
                    <Row>
                        <Col md={12}>
                            <Card
                                title="Edit Profile"
                                content={
                                    <form>
                                        <FormInputs
                                            ncols={["col-md-5", "col-md-3", "col-md-4"]}
                                            proprieties={[
                                                {
                                                    label: "Company Name",
                                                    type: "text",
                                                    bsClass: "form-control",
                                                    placeholder: "Company",
                                                    defaultValue: "Ferdowsi University of Mashhad",
                                                    disabled: false
                                                },
                                                {
                                                    label: "Username",
                                                    type: "text",
                                                    bsClass: "form-control",
                                                    placeholder: "Username",
                                                    defaultValue: "Hamid_najafi"
                                                },
                                                {
                                                    label: "Email address",
                                                    type: "email",
                                                    bsClass: "form-control",
                                                    placeholder: "Email",
                                                    defaultValue: "Hamid_najafi@gmail.com"
                                                }
                                            ]}
                                        />
                                        <FormInputs
                                            ncols={["col-md-3", "col-md-3","col-md-6"]}
                                            proprieties={[
                                                {
                                                    label: "First name",
                                                    type: "text",
                                                    bsClass: "form-control",
                                                    placeholder: "First name",
                                                    defaultValue: "Hamid"
                                                },
                                                {
                                                    label: "Last name",
                                                    type: "text",
                                                    bsClass: "form-control",
                                                    placeholder: "Last name",
                                                    defaultValue: "Najafi"
                                                },
                                                {
                                                    label: "Adress",
                                                    type: "text",
                                                    bsClass: "form-control",
                                                    placeholder: "Home Adress",
                                                    defaultValue: "Sajad Street, Bozorgmehr No. 4"
                                                }
                                            ]}
                                        />
                                        
                                        <FormInputs
                                            ncols={["col-md-4", "col-md-4", "col-md-4"]}
                                            proprieties={[
                                                {
                                                    label: "City",
                                                    type: "text",
                                                    bsClass: "form-control",
                                                    placeholder: "City",
                                                    defaultValue: "Mashhad"
                                                },
                                                {
                                                    label: "Country",
                                                    type: "text",
                                                    bsClass: "form-control",
                                                    placeholder: "Country",
                                                    defaultValue: "Iran"
                                                },
                                                {
                                                    label: "Postal Code",
                                                    type: "text",
                                                    bsClass: "form-control",
                                                    placeholder: "ZIP Code",
                                                    defaultValue: "12345"
                                                }
                                            ]}
                                        />

                                        <Col ftTextCentermd={2} mdOffset={5}>

                                        <Button
                                            bsStyle="info"
                                            ftTextCenter
                                            fill
                                            wd
                                            type="submit"
                                        >
                                            Update Profile
                                        </Button>

                                        </Col>

                                        <div className="clearfix"></div>
                                    </form>
                                }
                            />
                        </Col>

                    </Row>
                </Grid>
            </div>
        );
    }
}

export default UserPage;
