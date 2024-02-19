export const FriendList = {{ list }} => {
    return (
        <ul>
            {list.map(({friend}) =>(
                <Friend key={friend.id} friend = {friend} />
            ))}
        </ul>
    );
};