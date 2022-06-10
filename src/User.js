import React from 'react';
import './Users.css';

export default function User({ user, del, inProp }) {
    return (
        <div className='user'>
            {`${user.id} ${user.name} ${user.email}`}
            <button onClick={() => del(user.id)}>Delete</button>
        </div>
    );
}
