import React from 'react';
import Layout from "../Layout/Layout";
import { Button, Card } from "react-bootstrap";

const BlogFeedPage = () => {

    return (
        <Layout>
            <Card>
                <Card.Header as="h5">Post 3</Card.Header>
                <Card.Body>
                    <Card.Title>REACT</Card.Title>
                    <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Button variant="success">Open post</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Header as="h5">Post 2</Card.Header>
                <Card.Body>
                    <Card.Title>BOOTSTRAP</Card.Title>
                    <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Button variant="success">Open post</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Header as="h5">Post 1</Card.Header>
                <Card.Body>
                    <Card.Title>JSON</Card.Title>
                    <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Button variant="success">Open post</Button>
                </Card.Body>
            </Card>
        </Layout>
    )
}

export default BlogFeedPage;




