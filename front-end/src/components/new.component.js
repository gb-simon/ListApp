import React, { Component } from 'react';
import axios from 'axios';

export default class New extends Component {

    constructor(props) {
        super(props);

        this.onChangeTodoTitle = this.onChangeTodoTitle.bind(this);
        this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            todo_Title: '',
            todo_description: '',
            todo_completed: false
        }
    }

    onChangeTodoTitle(e) {
        this.setState({
            todo_Title: e.target.value
        });
    }

    onChangeTodoDescription(e) {
        this.setState({
            todo_description: e.target.value
        });
    }


    onSubmit(e) {
        e.preventDefault();
        
        console.log(`Form submitted:`);
        console.log(`Todo Title: ${this.state.todo_Title}`);
        console.log(`Todo Description: ${this.state.todo_description}`);
       
        const newTodo = {
            todo_Title: this.state.todo_Title,
            todo_description: this.state.todo_description,
            todo_completed: this.state.todo_completed
        };

        axios.post('http://localhost:4000/list/add', newTodo)
            .then(res => console.log(res.data));

        this.setState({
            todo_Title: '',
            todo_description: '',
            todo_completed: false
        })
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
            <h3>New</h3>
            <form onSubmit={this.onSubmit}>
            <div className="form-group">
                    <label>Title: </label>
                    <input 
                            type="text" 
                            className="form-control"
                            value={this.state.todo_Title}
                            onChange={this.onChangeTodoTitle}
                            />
                </div>
                <div className="form-group"> 
                    <label>Description: </label>
                    <input  type="text"
                            className="form-control"
                            value={this.state.todo_description}
                            onChange={this.onChangeTodoDescription}
                            />
                </div>
                <div className="form-group">
                    <input type="submit" value="Create" className="btn btn-primary" />
                </div>
            </form>
        </div>
        )
    }
}