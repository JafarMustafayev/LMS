function AttendanceSection({ attendance }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <h2 className="text-2xl font-bold text-slate-900">Davamiyyət</h2>
      <div className="mt-4 grid gap-4 lg:grid-cols-[1fr_220px]">
        <div className="rounded-xl border border-slate-200 bg-gradient-to-b from-blue-50 to-slate-50 p-4">
          <div className="flex h-48 items-end gap-2">
            {attendance.map((value, index) => (
              <div key={`${value}-${index}`} className="flex-1">
                <div className="w-full rounded-t-md bg-blue-500/90" style={{ height: `${value}%` }} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center rounded-xl border border-slate-200 p-4 text-center">
          <p className="text-sm text-slate-600">Ümumi davamiyyət</p>
          <div className="mt-2 grid h-28 w-28 place-items-center rounded-full border-[10px] border-blue-100 border-r-blue-600 border-t-blue-600 text-3xl font-bold text-slate-900">
            85%
          </div>
          <p className="mt-2 text-xs text-slate-500">Çox yaxşı göstərici! 🎉</p>
        </div>
      </div>
    </section>
  );
}

export default AttendanceSection;
