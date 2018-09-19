import React from 'react';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

class AddWord extends React.Component {
    render() {
        return (
            <Form>
                <FormGroup>
                    <Label for="exampleSearch">Word</Label>
                    <Input type="search" name="search" id="exampleSearch" placeholder="search placeholder" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleSelect">Language</Label>
                    <Input type="select" name="select" id="exampleSelect">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleText">Definition</Label>
                    <Input type="textarea" name="text" id="exampleText" />
                </FormGroup>
            </Form>
        );
    }
}

export default AddWord;
