export default function Navbar({ search, setSearch }) {
  return (
    <div className="navbar">
      <h2 className="logo">zecpath</h2>

      <input
        type="text"
        placeholder="Search jobs..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search"
      />

      <div className="nav-icons">
        <span>
          <i className="fa-solid fa-house"></i>
        </span>

        <span>
          <i className="fa-solid fa-briefcase"></i>
        </span>

        <span>
          <i className="fa-solid fa-bell"></i>
        </span>

        <span>
          <i className="fa-solid fa-user"></i>
        </span>
      </div>
    </div>
  );
}
