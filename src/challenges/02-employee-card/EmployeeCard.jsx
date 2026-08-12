import "./EmployeeCard.css";
function EmployeeCard() {
  const name = "Rahul Sharma";
  const role = "Software Engineer";
  const department = "IT";
  const location = "Hyderabad";
  const experience = "4 years";
  return (
    <div className="employee-card">
      <h1>Employee</h1>
      <h2>{name}</h2>
      <p>{role}</p>
      <p>Department: {department}</p>
      <p>Location: {location}</p>
      <p>Experience: {experience}</p>
      <button>View Profile </button>
    </div>
  );
}
export default EmployeeCard;
