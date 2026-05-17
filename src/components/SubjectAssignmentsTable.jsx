function SubjectAssignmentsTable({ assignments }) {
  return (
    <div className="overflow-x-auto rounded-xl bg-white shadow">
      <table className="min-w-full text-left text-sm">
        <thead className="bg-slate-100 text-slate-600">
          <tr>
            <th className="px-4 py-3">Tapşırıq</th>
            <th className="px-4 py-3">Son tarix</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Bal</th>
          </tr>
        </thead>
        <tbody>
          {assignments.map((item) => (
            <tr key={item.id} className="border-t">
              <td className="px-4 py-3">{item.title}</td>
              <td className="px-4 py-3">{item.dueDate}</td>
              <td className="px-4 py-3">{item.status}</td>
              <td className="px-4 py-3">{item.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SubjectAssignmentsTable;
