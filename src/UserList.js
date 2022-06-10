import React, { useEffect, useState } from 'react';
import User from './User';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import './Users.css';

export default function UserList() {
    const [state, setState] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            console.log(data);
            setState(data);
        }
        fetchUsers();
    }, [])

    const deleteUser = (id) => {
        const newState = state.filter((user) => user.id !== id);
        setState(newState);
    };

    return (
        <TransitionGroup style={{ 'backgroundColor': 'white' }}>
            {state.map((user) => (
                <CSSTransition key={user.id} timeout={1000} classNames="user-anim">
                    <User key={user.id} user={user} del={deleteUser} inProp={true} />
                </CSSTransition>
            ))}
            <div className='test'>Test</div>
        </TransitionGroup>
    )
}