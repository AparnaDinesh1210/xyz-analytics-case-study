import logo from "../assets/xyz_logo.png";

export default function Home() {
  return (
    <div className="home-container">
      <img src={logo} className="home-logo" alt="XYZ large logo" />

      <h1 className="home-title">XYZ Analytics Portal</h1>
      <p className="home-subtitle">
        Welcome to the unified sales & quality analytics dashboard.
      </p>
    </div>
  );
}