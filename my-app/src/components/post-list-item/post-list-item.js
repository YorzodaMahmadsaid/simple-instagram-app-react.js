import React, {Component} from 'react';
import './post-list-item.css'

export default class PostListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            important: false,
            like: false
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
        const {label, onDelete, onToggleImportant, onToggleLiked, important, like} = this.props;
        let classNames = 'app-list-item d-flex justify-content-between';
        let starIcon='btn btn-outline mt-2 '
        if(important) {
            classNames +=' important';
            starIcon +=' text-warning'
        }

        if(like) {
            classNames +=' like';
        }


        return (
            <li className={classNames}>
                <span className="app-list-item-label my-2" onClick={onToggleLiked}>
                    {label}
                </span>
                <div className="d-flex justify-content-center align-items-center ml-auto">
                    <button type="button" onClick={onToggleImportant} className={starIcon}>
                        <i className="fas fa-star "/>
                    </button>
                    <button type="button" className="btn mt-2 btn-trash btn-sm" onClick={onDelete}>
                        <i className="fa fa-trash-alt"/>
                    </button>
                    <i className="fa fa-heart mt-2"/>
                </div>
            </li>
        )
    }
}
