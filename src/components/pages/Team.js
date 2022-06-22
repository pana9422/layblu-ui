import DEVS from "../../data/devs"
import CardUser from "../utils/CardUser"

const Team = () => {
    const devs = DEVS
    return (
        <div className="wrapper">
            <div className="wrapper__container-full">
                <h1 className="wrapper__header"> Colaboradores y creadores </h1>
                <div  className="wrapper__component">
                    {
                        devs.map( ({id, username, avatar, role, background, flag, links}) => (
                            <CardUser 
                                key={id}
                                username={username}
                                avatar={avatar}
                                role={role}
                                background={background}
                                flag={flag}
                                links={links}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Team