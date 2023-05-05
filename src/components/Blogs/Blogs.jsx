import React from 'react';
import { Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

const Blogs = () => {
    return (
        <Container className='my-5'>
            <h2 className='my-5 fw-bold text-center'>Q&A</h2>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Tell us the differences between uncontrolled and controlled components..?</Accordion.Header>
                    <Accordion.Body>
                        In the context of web development, uncontrolled components are typically HTML form elements that manage their own state internally, without any intervention from React. This means that React doesn't know or control their current values, so any updates to those values must be retrieved using DOM methods.

                        On the other hand, controlled components are form elements that are managed by React. They are essentially stateless components that rely on props and callbacks to maintain and update their state. In other words, the current value of the controlled component is always known and updated via React state, which makes it easier to keep track of the state of the entire form.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>How to validate React props using PropTypes..?</Accordion.Header>
                    <Accordion.Body>
                        To validate React props using PropTypes, you can use the PropTypes package that comes with React. PropTypes allows you to specify the type and shape of your component's props, which can help catch errors and bugs early on.

                        To use PropTypes, you need to import the PropTypes object from the 'prop-types' package at the top of your component file. Then, you can define the PropTypes object as a property of your component, and specify the types and requirements for each prop.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Tell us the difference between nodejs and express js...?</Accordion.Header>
                    <Accordion.Body>
                        Node.js and Express.js are two different technologies that are often used together in web development. Node.js is a server-side runtime environment for executing JavaScript code outside of a web browser, while Express.js is a popular web application framework for Node.js.

                        Here are some key differences between Node.js and Express.js:

                        Node.js is a runtime environment for executing JavaScript code, while Express.js is a web application framework that runs on top of Node.js.

                        Node.js provides the core functionality for running server-side JavaScript code, including features like file system access and network communication. Express.js builds on top of Node.js by providing a simple, lightweight framework for building web applications and APIs.

                        Express.js provides a number of features that make it easier to build web applications, including middleware for handling requests and responses, routing for mapping URLs to code, and template engines for rendering dynamic HTML pages.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>What is a custom hook, and why will you create a custom hook...?</Accordion.Header>
                    <Accordion.Body>
                        A custom hook is a function in React that allows you to extract and reuse logic that is shared between components. It's a way to abstract and modularize code that is used across multiple components, making your code more readable, reusable, and easier to maintain.

                        You might create a custom hook when you find yourself repeating the same logic across different components. By extracting that logic into a custom hook, you can make your code more modular, reduce duplication, and make it easier to update and maintain in the future.

                        For example, you might create a custom hook for handling form data or for fetching data from an API. This would allow you to reuse that logic across multiple components without having to repeat the same code in each one.

                        Overall, custom hooks are a powerful tool for creating reusable code in React and improving the organization and maintainability of your codebase.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    );
};

export default Blogs;