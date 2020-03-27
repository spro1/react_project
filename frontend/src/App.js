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
        var path = window.location.pathname;

        this.state = {
            date: date,
            word: "",
            api: "",
            rss:[],
            path:path

        };
    }

    async componentDidMount() {
        if(this.state.path === "/news"){
            this.state.api = "http://127.0.0.1:8000/api/rss/news";
        }else if(this.state.path === "/company") {
            this.state.api = "http://127.0.0.1:8000/api/rss/company";
        }else{
            this.state.api = "http://127.0.0.1:8000/api/rss";
        }
        try {
            const res = await fetch(this.state.api);
            const rss = await res.json();

            this.setState({
                rss
            });
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        console.log("rss:",this.state.rss);
        console.log("word:",this.state.word);
        return (
            <div className="App">
                <TopNav></TopNav>
                <p className="update-date">UPDATE : {this.state.date}</p>
                <Container>
                    <Main onChangeWord={function(_mode){
                        let filterRss = this.state.rss;
                        console.log(_mode);
                        if (_mode != null){
                            filterRss = filterRss.filter((item) =>{
                                return item.title.toLowerCase().search(_mode.toLocaleLowerCase()) !==-1;
                            });
                        }

                        this.setState({
                            word:_mode,
                            rss: filterRss
                        });
                    }.bind(this)} data={this.state.rss}></Main>
                    <Section data={this.state.rss}></Section>
                </Container>
                <Footer></Footer>
            </div>
        );
    }
}

export default App;
