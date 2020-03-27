import React, {Component} from "react";

import { Table } from 'react-bootstrap';
import Page from './Page';


export default class Section extends Component{
    constructor(props) {
        super(props);

        this.state = {
            rss: [],
            filterRss : [],
            pageOfItems: [],
            api : ""
        };
        this.onChangePage = this.onChangePage.bind(this);
    }

    onChangePage(pageOfItems) {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
    }
    /*
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
    */

    openURL(url){
        window.open(url);
    }

    render() {
        return (
            <section className="board-list">
                <div className="board board-top-border">
                    <div className="board-header with-border">
                        <h3 className="board-title">최신 게시물</h3>
                    </div>
                    <Table striped bordered>
                        <thead>
                        <tr>
                            <th width="15%">Author</th>
                            <th>Title</th>
                            <th width="10%">Category</th>
                            <th width="15%">Upload Date</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.pageOfItems.map((item, index)=> (
                        <tr onClick={(e) => this.openURL(item.href)} key={index}>
                            <td>{item.author}</td>
                            <td>{item.title}</td>
                            <td>{item.category}</td>
                            <td>{item.upload}</td>
                        </tr>
                        ))}
                        </tbody>
                    </Table>
                    <Page items={this.props.data} onChangePage={this.onChangePage} />
                </div>
            </section>
        );
    }
}

Section.defaultProps = {
    rss: []
}