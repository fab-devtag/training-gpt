import Link from "next/link";

export default function Dashboard() {
  const reports = [
    { id: 1, name: "Next.js" },
    { id: 2, name: "React.js" },
    { id: 3, name: "Les entretiens" },
  ];

  return (
    <div>
      <h1>Dashboard</h1>
      {reports.map((report) => (
        <div key={report.id}>
          <Link href={`/Exercices/Exercice-30/reports/${report.id}`}>
            {report.name}
          </Link>
        </div>
      ))}
    </div>
  );
}