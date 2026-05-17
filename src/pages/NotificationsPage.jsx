import { notifications } from "../data/datas";

function NotificationsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Bildirişlər</h1>
      <div className="rounded-xl bg-white p-4 shadow">
        <ul className="space-y-3">
          {notifications.map((item) => (
            <li key={item.id} className="rounded-lg border p-3">
              <p className="font-semibold">{item.title}</p>
              <p className="text-sm text-slate-500">{item.date}</p>
              <p className="mt-1 text-sm">{item.message}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NotificationsPage;
