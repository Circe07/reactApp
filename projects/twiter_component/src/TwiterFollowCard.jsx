import { useState } from "react"
export function TwitterFollowCard ({userName =`unknown`, name , inicialIsFollowing}) {
    const [isFollowing, setIsFollowing] = useState(inicialIsFollowing)

    const text = isFollowing ? "Siguiendo" : "Seguir"
    const buttonClassName = isFollowing 
    ? "tw-followCard-button is-following"
    : "tw-followCard-button"

    const handelclick = () => {
        setIsFollowing (!isFollowing)
    }

    return( 
        <article className="tw-followCard">
            <header className="tw-followCard-header">    
                <img className="tw-followCard-avatar" 
                    src={`https://unavatar.io/youtube/${userName}`}
                    alt="El avatar de midudev" />
                <div className="tw-followCard-info">
                    <strong >{name}</strong>
                    <span className="tw-followCard-infoUserName">@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handelclick}>{text}</button>
            </aside>
        </article>
    )
}