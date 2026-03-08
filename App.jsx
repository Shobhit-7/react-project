import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";
import RepoCard from "./components/RepoCard";
import { useGitHub } from "./hooks/useGitHub";
import "./index.css";

export default function App() {
  const { user, repos, loading, error, searchUser } = useGitHub();

  return (
    <div className="app">
      <header>
        <h1>GitHub Explorer</h1>
        <p>Search any GitHub user to see their profile and top repos</p>
      </header>

      <main>
        <SearchBar onSearch={searchUser} loading={loading} />

        {loading && (
          <div className="center">
            <div className="spinner" />
          </div>
        )}

        {error && (
          <div className="error-box">
            ⚠️ {error}
          </div>
        )}

        {user && !loading && (
          <>
            <UserCard user={user} />
            {repos.length > 0 && (
              <section className="repos-section">
                <h3>Top Repositories</h3>
                <div className="repos-grid">
                  {repos.map((repo) => (
                    <RepoCard key={repo.id} repo={repo} />
                  ))}
                </div>
              </section>
            )}
          </>
        )}

        {!user && !loading && !error && (
          <div className="empty-state">
            <span>🔍</span>
            <p>Search for a GitHub user to get started</p>
          </div>
        )}
      </main>
    </div>
  );
}