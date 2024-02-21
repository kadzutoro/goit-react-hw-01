import styles from "./FriendList.module.css"
import Friend from "../Friend/Friend";
const FriendList = ({ friends }) => {
    return (
        <ul className={styles.friendList}>
            {friends.map((friend) => (
                <Friend key={friend.id} friend={friend} />
            ))}
        </ul>
    );
};

export default FriendList
