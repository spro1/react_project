import React, { Component } from 'react';

import TopNav from "./components/TopNav";
import Main from "./components/Main";
import Section from "./components/Section";
import Footer from "./components/Footer"
import { Container } from 'react-bootstrap';

class App extends Component {
    constructor(props){
        super(props);

        var today = new Date(), 
            date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

        this.state = {
            date: date
        };
    }

    render() {
        return (
            <div className="App">
                <TopNav></TopNav>
                <p className="update-date">UPDATE : {this.state.date}</p>
                <Container>
                    <Main></Main>
                    <Section></Section>
                </Container>
                <Footer></Footer>
            </div>
        );
    }
}

export default App;
