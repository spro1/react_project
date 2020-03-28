// eslint-disable-next-line
import React, {Component} from "react";
import { Nav, Navbar, Form} from 'react-bootstrap';
import { Icon } from 'react-icons-kit'
import { github } from 'react-icons-kit/icomoon/github'
import { instagram } from 'react-icons-kit/icomoon/instagram'
import { mail3 } from 'react-icons-kit/icomoon/mail3'

//import logo from "../logo.svg";
//import { Link, animateScroll as scroll } from "react-scroll";


class TopNav extends Component{
    /*scrollToTop = () => {
        scroll.scrollToTop();
    };*/
    render(){
        return(
            <Navbar className="topBar">
                <Navbar.Brand href="/">RSS Reader</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/">전체보기</Nav.Link>
                        <Nav.Link href="/news">IT NEWS</Nav.Link>
                        <Nav.Link href="/company">기업 블로그</Nav.Link>
                        <Nav.Link href="/solo">개인 블로그</Nav.Link>
                        <Nav.Link href="/economy">경제 NEWS</Nav.Link>
                </Nav>
                <Form inline>
                    <a href="http://github.com/spro1"><Icon size={36} icon={github} style={{marginRight : 10}}/></a>
                    <a href="https://www.instagram.com/_yundol"><Icon size={36} icon={instagram} style={{marginRight : 10}}/></a>
                    <a href="mailto:yundol@kakao.com"><Icon size={36} icon={mail3}/></a>
                </Form>
            </Navbar>
        )
    }
}

export default TopNav;