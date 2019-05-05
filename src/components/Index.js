// Index.js
import React, {Component} from 'react';
import '../css/Index.css';
import UnitPost from './UnitPost'
export default class Index extends Component {
    state = {
        posts: [],
        search : ''
    };
    componentDidMount() {
        fetch('/api/post', {
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
        
        console.log(this.props + 'props이다')
        console.log(this.props.title + '타이틀이다')
        const PostList = this
            .state
            .posts
            .map(post => {
                return (
                    <a>
                        <UnitPost post={post} id={post.id} title={this.props.title}/>
                    </a>
                )
            })
        

        return (
            <div class="row">
            <div class="col-md-1">
                </div>
                <div class="col-md-10">
                    <p>{PostList}</p>
                </div>
            </div>
        )
    }
}