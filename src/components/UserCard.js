import React, { Component, Fragment } from 'react';
import '../stylesheets/UserCard.css';

class UserCard extends Component {
    render() {
        const { adalabUsers, userSelected } = this.props;

        if (userSelected !== '') {
            let user;
            const filterUser = adalabUsers.filter(user => user.login === userSelected)
            user = filterUser[0];

            // show date
            const created_at = user.created_at;
            const created = created_at.slice(0, 10);
            const createdYearString = created.slice(0, 4);
            const createdMonthString = created.slice(5, 7)
            const date = new Date();
            const actualYear = date.getFullYear();
            const actualMonth = date.getMonth();
            const createdYear = parseInt(createdYearString);
            const createdMonth = parseInt(createdMonthString);

            let dateToShow;
            if (actualYear === createdYear) {
                dateToShow = (actualMonth - createdMonth) + ' meses';
            } else if (actualYear === createdYear && actualMonth - createdMonth === 1) {
                dateToShow = '1 mes';
            } else if (actualYear - createdYear === 1) {
                dateToShow = '1 año';
            } else {
                dateToShow = (actualYear - createdYear) + ' años';
            }

            return (
                <Fragment>
                    <div className="card">
                        <div
                            style={{ backgroundImage: `url(${user.avatar_url})` }}
                            className="card-pic"
                            alt={`Foto de la usuaria ${user.login}`}>
                        </div>
                        <div className="user-info">
                            <a
                                href={user.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="user-username"
                            >
                                @{user.login}
                            </a>
                            <p className="user-name">{user.name}</p>
                            {user.location !== null ?
                                <span className="user-loca"><i className="fas fa-map-marker-alt"></i>{user.location}</span> : ''}
                        </div>
                        <div className="data-container">
                            <div className="data-box">
                                <span className="box-number">{user.public_repos}</span>
                                <span className="box-text">Repos</span>
                            </div>
                            <div className="data-box">
                                <span className="box-number">{user.followers}</span>
                                <span className="box-text">Followers</span>
                            </div>
                            <div className="data-box">
                                <span className="box-number">{user.following}</span>
                                <span className="box-text">Following</span>
                            </div>
                        </div>
                    </div>
                    <p className="user-date">Miembro desde hace {dateToShow}</p>
                </Fragment>
            );
        } else {
            return null;
        }
    }
}

export default UserCard;