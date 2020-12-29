import React from "react";
import Layout from "../Layout/Layout";
import 'quill/dist/quill.snow.css';
import {Button} from "react-bootstrap";
import "./styles/AddPostPage.css"
const ReactQuill = require('react-quill');


interface IProps {}

interface IState {
    text: string;
}

export default class AddPostPage extends React.Component<IProps, IState> {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            text: ''
        };
        }

        handleChange(value) {
            this.setState({text: value});
        }

        render() {
            return (
                <Layout>
                    <div className={"ql-editor"}>
                        <ReactQuill value={this.state.text} placeholder={"Write something awesome..."} onChange={this.handleChange} />
                    </div>
                    <div className={"form-actions"}>
                        <Button size="lg" type="submit">Post it</Button>
                    </div>
                </Layout>

            );
        }
}

