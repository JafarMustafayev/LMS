import { useMemo, useState } from "react";

import NotificationsList from "../components/notifications/NotificationsList";
import NotificationsSummary from "../components/notifications/NotificationsSummary";
import NotificationsTabs from "../components/notifications/NotificationsTabs";

import { notificationsSeed, notificationTabs } from "../data/notificationsData";

const PAGE_SIZE = 5;

function NotificationsPage() {
  const [items, setItems] = useState(notificationsSeed);
  const [activeTab, setActiveTab] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  // Counts
  const counts = useMemo(() => {
    const unread = items.filter((item) => !item.read).length;
    const system = items.filter((item) => item.type === "system").length;

    return {
      all: items.length,
      unread,
      read: items.length - unread,
      system,
    };
  }, [items]);

  // Filter
  const filteredItems = useMemo(() => {
    switch (activeTab) {
      case "unread":
        return items.filter((item) => !item.read);

      case "read":
        return items.filter((item) => item.read);

      case "system":
        return items.filter((item) => item.type === "system");

      default:
        return items;
    }
  }, [items, activeTab]);

  // Pagination
  const totalPages = Math.max(1, Math.ceil(filteredItems.length / PAGE_SIZE));

  const pagedItems = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    const end = start + PAGE_SIZE;

    return filteredItems.slice(start, end);
  }, [filteredItems, currentPage]);

  // Actions
  const resetToFirstPage = () => {
    setCurrentPage(1);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    resetToFirstPage();
  };

  const handleToggleRead = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, read: !item.read } : item,
      ),
    );
  };

  const handleMarkAllRead = () => {
    setItems((prev) =>
      prev.map((item) => ({
        ...item,
        read: true,
      })),
    );
  };

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;

    setCurrentPage(page);
  };

  return (
    <div className="space-y-1">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Bildirişlər</h1>
        </div>
      </div>

      {/* Content */}
      <div className="grid gap-4 2xl:grid-cols-[1fr_340px]">
        {/* Left */}
        <div className="flex min-h-175 flex-col rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          {/* Top */}
          <div className="space-y-4">
            <NotificationsTabs
              tabs={notificationTabs}
              activeTab={activeTab}
              counts={counts}
              onChange={handleTabChange}
              markAllRead={handleMarkAllRead}
            />

            <NotificationsList
              items={pagedItems}
              onToggleRead={handleToggleRead}
            />
          </div>

          {/* Pagination */}
          <div className="mt-auto pt-6">
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2">
                {/* Prev */}
                <button
                  type="button"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-500 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  ←
                </button>

                {/* Numbers */}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      type="button"
                      onClick={() => handlePageChange(page)}
                      className={`grid h-10 w-10 place-items-center rounded-full text-sm font-semibold transition ${
                        page === currentPage
                          ? "bg-blue-600 text-white"
                          : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      {page}
                    </button>
                  ),
                )}

                {/* Next */}
                <button
                  type="button"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-500 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  →
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Right */}
        <aside className="space-y-4">
          <NotificationsSummary
            total={counts.all}
            unread={counts.unread}
            read={counts.read}
            systemCount={counts.system}
          />
        </aside>
      </div>
    </div>
  );
}

export default NotificationsPage;
