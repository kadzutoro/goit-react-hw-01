import styles from '../Profile/Profile.module.css';
function Profile({name, tag, location, image, stats: {followers, likes, views}}) {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img
          src={image}
          alt={name}
        />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul>
        <li>
          <span>Followers</span>
          <span>{followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
} 

export default Profile;


