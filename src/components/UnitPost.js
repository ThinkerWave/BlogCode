import React, { Component } from 'react';
import '../css/UnitPost.css';

import axios from 'axios';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
export default class UnitPost extends Component {
  render() {
   const  {post,id,title} = this.props;

   const onClick =(e)=>{
    axios.post('/api/postAdm', id)
        .then(res => console.log(res.data));
        
  }
   function getYYYMMDD(date, code) {
    switch (code) {
        case "yyyy":
        return date.substring(0, 4)+"."

            break;
        case "mm":
        return date.substring(5, 7)+"."

            break;
        case "dd":
        return date.substring(8, 10)+" "

            break;
        case "hh":
        return date.substring(11, 13)+"."

            break;
        case "min":
        return date.substring(14, 16)+"."

            break;
        case "ss":
        return date.substring(17, 19)+" "

            break;


        default:
            break;
    }
}
    let content = post.main.substring(0, 315)+'...'
    return (
      post.title.toString().indexOf(title)>=0 ?
      <div class="row  row-bordered">
                    
      <Link to={'/indexDetail/'+id} class="Custom_Link" params={{ id: id }} onClick = {onClick}>
                    <span class="border-bottom">
                        
                        <div class="blog-post">
                            <div class="hover-underline-animation" style={{paddingBottom:'0.12px'}}>
                                <h3 class="blog-post-title" >{post.title}</h3>
                                </div>


                           <div style={{marginTop:'20px'}}>
                               
                           <div dangerouslySetInnerHTML={ {__html: content} }></div>
                                    <p class="blog-etc">
                                <a class="post-category" href="#">{post.category}</a>
                                {getYYYMMDD(post.crt_date,"yyyy")} 
                                {getYYYMMDD(post.crt_date,"mm")} 
                                {getYYYMMDD(post.crt_date,"dd")} 
                                {getYYYMMDD(post.crt_date,"hh")} 
                                {getYYYMMDD(post.crt_date,"min")}
                                {getYYYMMDD(post.crt_date,"ss")}
                            </p>
                            </div>
                            
                        </div>
                    </span>
                    </Link>
                </div>
                :
                <div></div>
    )
  }
}
