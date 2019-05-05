
import React, { Component } from 'react';
import axios from 'axios';
import { Editor } from '@tinymce/tinymce-react';
    
export default class Create extends Component {

    constructor(props) {
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeMain = this.onChangeMain.bind(this);
        this.onChangeCategory = this.onChangeCategory.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleEditorChange=this.handleEditorChange(this);
        this.state = {
            title: '',
            main: '',
            category: ''
        }
    }
    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        });
        
        console.log(e)
    }
    componentWillMount() {
          }
  handleEditorChange()  {
    console.log('asfsa')
  }



    onChangeMain(e) {
        
        this.setState({
            main: e.target.value
            
        });
        console.log(e.target.getContent())
        
    }
    onChangeCategory(e) {
        
        this.setState({
            category: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();
        const article = {
            title: this.state.title,
            main: window.tinyMCE.get('mytextarea').getContent(),
            category:this.state.category
        }
        console.log(article)
        
        axios.post('/api/add', article)
        .then(res => console.log(res.data));
        
        this.setState({
            title: '',
            main: '',
            category: ''
        });
    }
    render() {
        
        return (

             <div style={{marginTop: 50}}>
               <h3>글쓰기</h3>
                
                <form action='localhost:5000/api/add' method='POST' onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Title  </label>
                        <input type="text" className="form-control" onChange={this.onChangeTitle}/>
                    </div>
                  
                    <div className="form-group">
                        <label>Main </label>
                         <Editor id="mytextarea" value={this.state.content} onEditorChange={this.handleEditorChange} />
             
                    </div>

                    <div className="form-group">
                        <label>분류 </label>
                        <input type="text" className="form-control"  onChange={this.onChangeCategory}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add Node server" className="btn btn-primary" />
                    </div>
                </form>
            </div>

            
        )
    }
}