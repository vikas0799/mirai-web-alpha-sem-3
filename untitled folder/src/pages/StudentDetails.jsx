import { useParams } from "react-router";

const students = [
  { id: 1, name: "Aman" },
  { id: 2, name: "Priya" },
  { id: 3, name: "Rahul" }
];

function StudentDetails() {
  const { id } = useParams();

  const student = students.find(
    (student) => student.id === Number(id)
  );

  if (!student) {
    return <h2>Student not found</h2>;
  }

  return (
    <div>
      <h1>Student Details</h1>
      <p>ID: {student.id}</p>
      <p>Name: {student.name}</p>
    </div>
  );
}

export default StudentDetails;