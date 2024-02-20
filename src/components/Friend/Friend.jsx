import styles from "../Friend/Friend.module.css"
const Friend = ({friend: {isOnline, avatar, name}}) => {
    return (
<div className={styles.item}>
    <img className={styles.avatar} src={avatar} alt="Avatar" width="48" />
    <p className={styles.name}>{name}</p>
    <p className={(styles.status, styles.status, isOnline ? styles.isOnline : styles.isOffline)}>{isOnline ? 'online' : 'offline'}</p>
</div>
)   
};

export default Friend


