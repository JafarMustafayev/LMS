function InfoListCard({ title, children }) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
      <h1 className="mb-5 text-lg font-bold text-gray-900">{title}</h1>
      {children}
    </div>
  );
}

export default InfoListCard;
