export default function RepoCard({ repo }) {
  return (
    <a href={repo.html_url} target="_blank" rel="noreferrer" className="repo-card">
      <h4>{repo.name}</h4>
      {repo.description && <p>{repo.description}</p>}
      <div className="repo-meta">
        {repo.language && <span className="language">{repo.language}</span>}
        <span>⭐ {repo.stargazers_count}</span>
        <span>🍴 {repo.forks_count}</span>
      </div>
    </a>
  );
}