import React from 'react';

export default function User({ user, del, inProp }) {
    return (
        <div style={{ backgroundColor: 'lightblue', marginBottom: '10px', 'height':'40px', overflow: 'hidden' }}>
            {`${user.id} ${user.name} ${user.email}`}
            <button onClick={() => del(user.id)}>Delete</button>
        </div>
    );
}
