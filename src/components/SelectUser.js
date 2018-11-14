import React, { Component } from 'react';

class SelectUser extends Component {
    render() {
        const { adalabUsers, selectHandler } = this.props;
        return (
            <select onChange={selectHandler}>
                {adalabUsers.map(user => {
                    return (
                        <option 
                        key={user.id}
                        value={user.login}>{user.login}</option>
                    );
                })}
            </select>
        );
    }
}

export default SelectUser;