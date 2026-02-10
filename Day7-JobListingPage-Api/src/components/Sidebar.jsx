export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="profile-card">
        <div className="banner"></div>

        <img
          src="https://i.pravatar.cc/100"
          alt="user"
          className="avatar"
        />

        <h3>Mike Riz</h3>
        <p>UI/UX Designer</p>
        <small>Kochi, Ernakulam</small>
      </div>

      <div className="menu-card">
        <p>Preferences</p>
        <p>Applied Jobs</p>
        <p>Skill Assessment</p>
      </div>
    </div>
  );
}
