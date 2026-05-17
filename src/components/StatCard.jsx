function StatCard({ title, value }) {
  return (
    <div className="rounded-xl bg-white p-4 shadow">
      <p className="text-sm text-slate-500">{title}</p>
      <p className="mt-2 text-xl font-semibold text-slate-800">{value}</p>
    </div>
  );
}

export default StatCard;
