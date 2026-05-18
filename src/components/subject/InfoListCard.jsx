function InfoListCard({ title, children }) {
  return (
    <div className="w-full max-w-full overflow-hidden rounded-2xl border border-gray-100 bg-white p-4 shadow-sm sm:p-5">
      <h1 className="mb-5 text-lg font-bold text-gray-900">{title}</h1>
      {children}
    </div>
  );
}

export default InfoListCard;
