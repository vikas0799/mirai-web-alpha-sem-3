import { Link } from "react-router";

const students = [
  { id: 1, name: "Aman" },
  { id: 2, name: "Priya" },
  { id: 3, name: "Rahul" }
];

function Students() {
  return (
    <div>
      <h1>Students</h1>

      {students.map((student) => (
        <div key={student.id}>
          <p>{student.name}</p>

          <Link to={`/students/${student.id}`}>
            View Student
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Students;