import React, {Component} from 'react';
import './post-add-form.css';

export default class PostAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textInput: ''
        }
        this.onValueChange = this.onValueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onValueChange(e) {
        this.setState({text: e.target.value})
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.onAdd(this.state.text);
        this.setState({text: ''})
    }

    render() {
        return(
            <form className="bottom-panel d-flex mt-2" onSubmit={this.onSubmit}>
                <input className="search-input w-75"
                       type="text"
                       placeholder="Введите..."
                       onChange={this.onValueChange}
                       value={this.state.text}
                />
                <button type="submit" className="btn btn-primary ml-2 w-25">
                    <i className="fa fa-star mr-3"/>
                    Добавить
                </button>
            </form>
        )
    }
}
