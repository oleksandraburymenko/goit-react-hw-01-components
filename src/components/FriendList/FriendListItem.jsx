import defaultImg from './defaultImg.png'
import css from './FriendList.module.css'

export function FriendListItem ({ status, avatar, name }) {
    if (!avatar) {
        avatar = defaultImg;
    }
    return (
        <li className={css.item}>
            <span className={status? css.online : css.offline}></span>
            <img className={css.avatar} src={avatar??defaultImg} alt="Avatar" width="48" />
            <p className={status? css.name : css.noname}>{name}</p>
        </li>
    )
}