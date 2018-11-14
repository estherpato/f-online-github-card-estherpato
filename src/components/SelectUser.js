import React, { Component } from 'react';
import '../stylesheets/SelectUser.css';

class SelectUser extends Component {
    render() {
        const { adalabUsers, selectHandler } = this.props;
        return (
            <select
                className="select"
                onChange={selectHandler}
            >
                <option className="option"
                    value=''
                >
                    Selecciona un usuario
                </option>
                {adalabUsers
                    .map(user => {
                        return (
                            <option
                                key={user.id}
                                className="option"
                                value={user.login}>{user.login}</option>
                        );
                    })}
            </select>
        );
    }
}

export default SelectUser;