import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todo_Title: '',
            todo_description: '',
            todo_completed: false
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/list/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    todo_Title: response.data.todo_Title,
                    todo_description: response.data.todo_description,
                    todo_completed: response.data.todo_completed
                })   
            })
            .catch(function (error) {
                console.log(error);
            })
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

    onChangeTodoCompleted(e) {
        this.setState({
            todo_completed: !this.state.todo_completed
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            todo_Title: this.state.todo_Title,
            todo_description: this.state.todo_description,
                todo_completed: this.state.todo_completed
        };
        console.log(obj);
        axios.post('http://localhost:4000/list/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));
        
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h3 align="center">Update Todo</h3>
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
                    
                    <br />

                    <div className="form-group">
                        <input type="submit" value="Update Todo" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
};
