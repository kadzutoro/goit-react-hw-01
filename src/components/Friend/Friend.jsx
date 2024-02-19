const Friend = ({friend: {isOnline, avatar, name}}) => {
    return (
<div>
    <img src={avatar} alt="Avatar" width="48" />
    <p>{name}</p>
    <p>{isOnline ? 'online' : 'offline'}</p>
</div>
)
};

export default Friend


