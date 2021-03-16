import React, {Component, useState} from 'react';
import './post-list-item.css'

export default class PostListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            important: false,
            editingItemValue: props.label,
            like: false,
            isEditing: false
        };
        this.onImportant = this.onImportant.bind(this);
        this.onLike = this.onLike.bind(this);
    }
    onImportant() {
        this.setState(({important}) => ({
            important: !important
        }))
    }
    onLike() {
        this.setState(({like}) => ({
            like: !like
        }))
    }

    render() {
        const {onDelete, onToggleImportant, onToggleLiked, important, like} = this.props;

        let classNames = 'app-list-item d-flex justify-content-between';
        let starIcon='btn btn-outline mt-2 '
        if(important) {
            classNames +=' important';
            starIcon +=' text-warning'
        }

        if(like) {
            classNames +=' like';
        }

        if(this.props.editingIndex === this.props.itemIndex) {
            return (
                <li className={classNames}>
                    <input type="text" style={{width: '80%' }} value={this.state.editingItemValue} onChange={(event) => {
                        this.setState({editingItemValue: event.target.value})
                    }}/>
                    <div className="d-flex justify-content-center align-items-center ml-auto">
                        <button type="button" className="btn btn-danger mt-2 btn-sm">Save</button>
                    </div>
                </li>
            )
        } else {
            return (
                <li className={classNames}>
                    <span className="app-list-item-label my-2" onClick={onToggleLiked}>{this.state.editingItemValue}</span>
                    <div className="d-flex justify-content-center align-items-center ml-auto">
                        <i className="fa fa-heart mt-2"/>

                        <button type="button" onClick={onToggleImportant} className={starIcon}>
                            <i className="fas fa-star "/>
                        </button>

                        <button type="button" onClick={() => {this.props.onEdit(this.props.itemIndex)}} className="btn mt-2 btn-sm">
                            <i className="fa fa-edit"/>
                        </button>

                        <button type="button" className="btn mt-2 btn-trash btn-sm" onClick={onDelete}>
                            <i className="fa fa-trash-alt"/>
                        </button>
                    </div>
                </li>
            )
        }
    }
}
