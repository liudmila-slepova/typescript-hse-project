import React from 'react';

export const Jumbotron = () => {
    return (
        <section className="jumbotron text-center mb-0 bg-white">
            <div className="container">
                <h1 className="jumbotron-heading">Album example</h1>
                <p className="lead text-muted">
                    Here people tell the stories
                </p>
                <p>
                    <a href="/add" className="btn btn-primary m-2">
                        Create post
                    </a>
                    <a href="#" className="btn btn-secondary m-2">
                        Don't show this
                    </a>
                </p>
            </div>
        </section>
    );
};
