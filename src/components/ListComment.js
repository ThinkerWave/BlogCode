// Index.js

import axios from 'axios';
import React, { Component } from 'react';
import '../css/Index.css';
export default class ListComment extends Component {
    constructor(props){
        super(props);
        this.state = {
            comments: [],
            open:false
        };
      }
    state = {
        comments: [],
        open:false
    };

    onClickOpen=()=>{
        if(this.state.open){
        this.setState({
            open: false      
       }
       );
    }
    else{
        this.setState({
            open: true      
       }
       );
    }
    }
    componentDidMount() {
        const { id } = this.props
        console.log('id는',id)
        axios.get('/api/Comment', {
            params: {
              id: id          
             }
          })
          .then( (response)=> {
            var responseData = response.data
            console.log(responseData)
            this.setState({comments: responseData});
          })
          .catch(function (error) {
            console.log(error);
          });
        }
       

    render() {
        const commentList = this
            .state
            .comments
            .map(comment => {
                return (
                    
                        <span class="border-bottom">
                            
                            <div class="blog-post">
                                <b>{comment.AUTHOR}</b>
                                <p class="blog-post-meta">{comment.CONTENT}</p>
                                <p></p>
                                
                            </div>
                           
                        </span>
                    
                )
            })
            return (
            
             <div>
                <h6 onClick={this.onClickOpen}>답글</h6>
                <p>
                    {this.state.comments.length!==0 ? this.state.open&&commentList :this.state.open&&"등록 댓글이 없습니다." }
                </p>
            </div>
        )
    }
}