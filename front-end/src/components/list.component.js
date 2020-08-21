import React, { Component } from 'react';

export default class List extends Component {
    constructor(props) {
        super(props);

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
                        <input type="submit" value="Create Todo" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}