import React, {Component} from "react";
import { Icon } from 'react-icons-kit'
import {search} from 'react-icons-kit/fa/search'


export default class Main extends Component{
    render() {
        return (
            <section className="search-bar" md="auto">
                <Icon icon={search} size={36} className="search-icon"></Icon>
                <input className="search-form" type="search" placeholder="특정 키워드를 검색해보세요!" aria-label="Search"
                       autoComplete="off"/>
                <button className="search-btn" type="button">검색</button>
            </section>
        );
    }
}