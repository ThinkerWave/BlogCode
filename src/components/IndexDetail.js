// Index.js

import axios from 'axios';
import React, { Component } from 'react';
import '../css/Index.css';
import FormComment from './FormComment';

import ListComment from './ListComment';
export default class Index extends Component {
    constructor(props){
        super(props);
        this.state = {
            posts: []
        };
      }
    state = {
        posts: []
    };
    componentDidMount() {
        const { id } = this.props.match.params
        console.log('id는',id)
        axios.get('/api/postAdm', {
            params: {
              id: id          
             }
          })
          .then( (response)=> {
            var responseData = response.data
            console.log(responseData)
            this.setState({posts: responseData});
          })
          .catch(function (error) {
            console.log(error);
          });
        }

        onClick=()=>{
            console.log('ID정보'+this.state.posts[0].id)
            const deletepost = {
                ID : this.state.posts[0].id
           }

            axios.post('/api/DeletePost', deletepost)
            .then(res => console.log(res.data));
            axios.get('/api/postAdm', {
                params: {
                  id: deletepost.ID          
                 }
              })
              .then( (response)=> {
                var responseData = response.data
                console.log(responseData)
                this.setState({posts: responseData});
              })
              .catch(function (error) {
                console.log(error);
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
                
             const content = post.main
                return (
                    <div class="row row-bordered">
                    
                        <span class="border-bottom" style={{marginTop: 10, display : 'block', width:'100%'}}>
                        <a style={{float : 'right' ,
                                   'font-size' : '12px'
                                       }} onClick={this.onClick}>글삭제</a>
                                 
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
                                        <div dangerouslySetInnerHTML={ {__html: content} }>
                                </div>
                                        <div></div>
                                      
                                
                            </div>
                            
                        </span>

                      {/* <span class="border-bottom" style={{ marginTop: 10, display: 'block', width: '100%' }}>

                            <div class="blog-post" >
                                <ListComment id={post.id} />

                            </div>
                        </span>
                        

                        <span class="border-bottom">
                            
                            <div class="blog-post">
                            
                            <FormComment id={post.id}/>
                                
                            </div>
                        </span> */}
                      
                    </div>
                    
                )
            })
        return (
            <div>
                <p>
                    {PostList}
                    </p>
            </div>
        )
    }
}