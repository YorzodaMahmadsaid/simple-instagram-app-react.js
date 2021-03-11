import React from 'react';
import PostListItem from '../post-list-item';
import './post-list.css';

const PostList = ({posts, onDelete, onToggleImportant, onToggleLiked}) => {

    const elements = posts.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <span key={item.id} className="list-group-item">
                <PostListItem {...itemProps}
                              onDelete={() => onDelete(id)}
                              onToggleImportant={() => onToggleImportant(id)}
                              onToggleLiked={() => onToggleLiked(id)}/>
            </span>
        )
    });

    return (
        <ul className="app-list-item pl-0 mt-3">
            {elements}
        </ul>
    )
}

export default PostList;
