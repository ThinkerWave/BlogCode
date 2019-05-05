// Index.js

import React, {Component} from 'react';
import '../css/Index.css'
export default class Index extends Component {
    state = {
        posts: []
    };
    componentDidMount() {
        fetch('/api/postAdm', {
            method: 'get',
            dataType: 'json',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((response) => response.json()).then((responseData) => {
            console.log(responseData);
            this.setState({posts: responseData});
        }).catch((error) => {
            console.log('Error fetching man', error);
        });
    }

    render() {
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
        const PostList = this
            .state
            .posts
            .map(post => {
                return (
                    <div class="row  row-bordered">
                    
                        <span class="border-bottom">
                            
                            <div class="blog-post">
                                <h3 class="blog-post-title">{post.title}</h3>
                                
                                <p class="blog-etc">
                                            
                                            <a class="post-category" href="#">{post.category}</a>
                                            {getYYYMMDD(post.crt_date,"yyyy")} 
                                            {getYYYMMDD(post.crt_date,"mm")} 
                                            {getYYYMMDD(post.crt_date,"dd")} 
                                            {getYYYMMDD(post.crt_date,"hh")} 
                                            {getYYYMMDD(post.crt_date,"min")}
                                            {getYYYMMDD(post.crt_date,"ss")}
                                        </p>
                                        <hr></hr>
                                <p class="blog-post-meta">{post.main}</p>
                                    
                                <p></p>
                                
                            </div>
                        </span>
                    </div>
                )
            })

        return (
            <div>
                <p>
                    {PostList}</p>
            </div>
        )
    }
}