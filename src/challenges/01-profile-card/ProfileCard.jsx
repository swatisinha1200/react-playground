import "./ProfileCard.css";
function ProfileCard() {
  const name = "Swati Sinha";
  const job = "Frontend Developer";
  const location = "India";
  const email = "swatisinha1200@gmail.com";
  return (
    <>
      <div className="profile-card">
        <h1>Profile</h1>
        <h2>{name}</h2>
        <p>{job}</p>
        <p>Location: {location}</p>
        <p>Email: {email}</p>
        <button>Contact Me</button>
      </div>
    </>
  );
}
export default ProfileCard;
