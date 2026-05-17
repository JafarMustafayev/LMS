import NotificationItem from "./NotificationItem";

function NotificationsList({ items, onToggleRead }) {
  if (!items.length) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center text-sm text-slate-500">
        Bu tab üçün bildiriş yoxdur.
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {items.map((item) => (
        <NotificationItem
          key={item.id}
          item={item}
          onToggleRead={onToggleRead}
        />
      ))}
    </div>
  );
}

export default NotificationsList;
