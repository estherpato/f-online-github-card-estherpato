import React, { Component } from 'react';
import '../stylesheets/SelectUser.css';

class SelectUser extends Component {
    render() {
        const { adalabUsers, selectHandler, selectOpen, arrowHandler } = this.props;
        let arrowClass = selectOpen ? 'fa-caret-up' : 'fa-caret-down';
        let listClass = selectOpen ? '' : 'hidden'
        return (
            <ul
                className="select"
                onClick={arrowHandler}
            >
                <i
                    className={`fas ${arrowClass}`}
                    onClick={arrowHandler}
                ></i>
                <li
                    className="first-option"
                >
                    Selecciona un usuario
                </li>
                <div className={`option-list ${listClass}`} onClick={selectHandler}>
                    {adalabUsers.map(user => {
                        return (
                            <li
                                key={user.id}
                                className="option"
                            >
                                {user.login}
                            </li>
                        );
                    })}
                </div>
            </ul>
        );
    }
}

export default SelectUser;