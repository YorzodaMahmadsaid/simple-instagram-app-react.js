import React from 'react';
import './app-header.css';

const AppHeader = ({liked, allPosts, important}) => {
    return (
        <div className="app-header d-flex">
            <h2 className="h4">Mahmadsaid Yorzoda</h2>
            <h2 className="h4 ml-auto">
                Записей<strong> {allPosts}</strong>,
                Понравилось<strong> {liked}</strong>,
                Важные<strong> {important}</strong></h2>
        </div>
    )
}

export default AppHeader;

