export default function UserCard({ user }) {
  return (
    <div className="user-card">
      <img src={user.avatar_url} alt={user.login} className="avatar" />
      <div className="user-info">
        <h2>{user.name || user.login}</h2>
        <p className="username">@{user.login}</p>
        {user.bio && <p className="bio">{user.bio}</p>}
        <div className="stats">
          <div className="stat">
            <span className="stat-value">{user.public_repos}</span>
            <span className="stat-label">Repos</span>
          </div>
          <div className="stat">
            <span className="stat-value">{user.followers}</span>
            <span className="stat-label">Followers</span>
          </div>
          <div className="stat">
            <span className="stat-value">{user.following}</span>
            <span className="stat-label">Following</span>
          </div>
        </div>
        {user.location && <p className="location">📍 {user.location}</p>}
        <a href={user.html_url} target="_blank" rel="noreferrer" className="profile-link">
          View on GitHub →
        </a>
      </div>
    </div>
  );
}