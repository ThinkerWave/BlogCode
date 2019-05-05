
import React, { Component } from 'react';
import axios from 'axios';

export default class Create extends Component {

    constructor(props) {
        super(props);
        this.onChangeAUTHOR = this.onChangeAUTHOR.bind(this);
        this.onChangeCONTENT = this.onChangeCONTENT.bind(this);
        this.onChangeEMAIL = this.onChangeEMAIL.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        var {id} = this.props;
        this.state = {
            COMMENTID : '',
            POSTID : id,
            PRVCOMMENTID : '',
            CONTENT : '',
            AUTHOR : '',
            EMAIL : ''
        }
    }
    onChangeCONTENT(e) {
        this.setState({
             CONTENT: e.target.value            
        },console.log(this.state)
        );
    }
    onChangeAUTHOR(e) {
        this.setState({
            AUTHOR: e.target.value
        });
    }
  
    onChangeEMAIL(e) {
        this.setState({
            EMAIL: e.target.value
        });
    }
  

    onSubmit(e) {
        e.preventDefault();
        const comment = {
            COMMENTID : this.state.COMMENTID,
            POSTID : this.state.POSTID,
            PRVCOMMENTID : this.state.POSTID,
            CONTENT : this.state.CONTENT,
            AUTHOR : this.state.AUTHOR,
            EMAIL : this.state.EMAIL

        }
        
        axios.post('/api/addComment', comment)
        .then(res => console.log(res.data));
        
        this.setState({
            COMMENTID : '',
            PRVCOMMENTID : '',
            CONTENT : '',
            AUTHOR : '',
            EMAIL : ''
        });
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h6>답글 남기기</h6>

                <form action='localhost:5000/api/addComment' method='POST' onSubmit={this.onSubmit}>
                <div class="form-row">
                  <div class="col-md-4 mb-3">
                        <input type="textarea" size="150" placeholder="작성자(필수)" className="form-control" onChange={this.onChangeAUTHOR}/>
                    </div>
                  
                  <div class="col-md-4 mb-3">
                        <input type="textarea" size="150" placeholder="이메일(필수)" className="form-control" onChange={this.onChangeEMAIL}/>
                    
                  </div>
                </div>
                    <div className="form-group">
                        <input type="textarea" size="150" placeholder="Comment" className="form-control" onChange={this.onChangeCONTENT}/>
                    </div>
                   
                    <div className="form-group">
                        <input type="submit" value="답글 작성" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}