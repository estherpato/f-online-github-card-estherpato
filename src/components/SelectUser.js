import React, { Component } from 'react';

class SelectUser extends Component {
    render() {
        const { adalabUsers } = this.props;
        return (
            <select>
                {adalabUsers.map(user => {
                    return (
                        <option value={user.login}>{user.login}</option>
                    );
                })}
            </select>
        );
    }
}

export default SelectUser;