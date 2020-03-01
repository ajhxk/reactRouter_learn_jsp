import React, { Component,Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom'

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list: [
                {cid: 111, title: 'JSP的个人博客-1', },
                {cid: 112, title: 'JSP的个人博客-2', },
                {cid: 113, title: 'JSP的个人博客-3', },
            ]
         }
         this.props.history.push('/home/')
    }
    render() { 
        return ( 
            <Fragment>
                {/* <Redirect to='/home/'></Redirect> */}
            <h2> JSP.com</h2> 
            <ul>
                {this.state.list.map((item,index) => {
                    return (
                        <li key={index+ item.title}>
                            <Link to={`/list/${item.cid}`}>{item.title}</Link>
                        </li>
                    )
                })}
            </ul>
            </Fragment>
        );
    }
}
 
export default Index;