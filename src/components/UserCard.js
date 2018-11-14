import React, { Component } from 'react';

class UserCard extends Component {
    render() {
        const { adalabUsers, userSelected } = this.props;
        let user;

        if (userSelected !== '') {
            const filterUser = adalabUsers.filter(user => user.login === userSelected)
            user = filterUser[0];

            return (
                <div>
                    <img src={user.avatar_url} alt={`Foto del usuario/a ${user.login}`} />
                    <p>{user.login}</p>
                    <p>{user.name}</p>
                    <p>{user.location}</p>
                    <div>
                        <span>{user.public_repos}</span>
                        <span>repos</span>
                    </div>
                    <div>
                        <span>{user.followers}</span>
                        <span>followers</span>
                    </div>
                    <div>
                        <span>{user.following}</span>
                        <span>following</span>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default UserCard;