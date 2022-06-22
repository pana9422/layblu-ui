import "./CardUser.css"
import Button from "./Button";

const CardUser = ({ username, avatar, role, background, flag, links }) => {

    return (
        <div className="card-user">
            <div className="card-user__picture" style={{ backgroundImage: `url(${background})` }}>
                <figure className="card-user__avatar">
                    <img className="card-user__avatar-image" src={avatar} alt={username} />
                </figure>
            </div>
            <div className="card-user__about">
                <div className="card-user__name">
                    <img className="card-user__country-flag" src={flag} alt="" />
                    <span className="card-user__title">{username}</span>
                </div>
                <p className="card-user__description">{role}</p>
            </div>
            <div className="card-user__links">
                {
                    links.map( (links, index) => <Button key={index} icon={links.icon} link={links} /> )
                }
            </div>
        </div>
    )
}

export default CardUser