export const notificationTabs = [
  { key: "all", label: "Hamısı" },
  { key: "unread", label: "Oxunmamış" },
];

export const notificationsSeed = [
  {
    id: 1,
    title: "Yeni tapşırıq əlavə edildi",
    message:
      '"Proqramlaşdırmaya Giriş" fənnindən "Tapşırıq 4" yükləndi. Son tarix: 20 May 2026.',
    time: "Bugün, 10:30",
    type: "task",
    read: false,
  },
  {
    id: 2,
    title: "Dərs materialı yükləndi",
    message: '"Məlumat tipləri və dəyişənlər" mövzusunun materialı yükləndi.',
    time: "Bugün, 09:15",
    type: "course",
    read: false,
  },
  {
    id: 3,
    title: "Quiz nəticəniz hazırdır",
    message: '"Python əsasları" quizində 85% nəticə göstərmisiniz.',
    time: "Dünən, 18:45",
    type: "exam",
    read: false,
  },
  {
    id: 4,
    title: "Qiymət əlavə edildi",
    message:
      '"Riyaziyyat - Məsələ dəsti 1" tapşırığı qiymətləndirildi. Nəticə: 92/100.',
    time: "Dünən, 16:20",
    type: "grade",
    read: false,
  },
  {
    id: 5,
    title: "İmtahan cədvəli dərc olundu",
    message: "Yay semestri imtahan cədvəli artıq sistemdə mövcuddur.",
    time: "12 May 2026, 11:00",
    type: "exam",
    read: false,
  },
  {
    id: 6,
    title: "Davamiyyətiniz yeniləndi",
    message: "Aprel ayı davamiyyət məlumatlarınız yeniləndi. Ümumi faiz: 92%.",
    time: "11 May 2026, 14:30",
    type: "system",
    read: false,
  },
  {
    id: 7,
    title: "Sistem yenilənməsi",
    message: "Platformada planlı texniki işlər uğurla tamamlandı.",
    time: "10 May 2026, 22:10",
    type: "system",
    read: true,
  },
  {
    id: 8,
    title: "Yeni dərs elan edildi",
    message: "Sabah saat 13:00 üçün əlavə canlı dərs planlaşdırıldı.",
    time: "9 May 2026, 19:40",
    type: "course",
    read: true,
  },
  {
    id: 9,
    title: "Tapşırıq üçün xatırlatma",
    message: "Diskret Riyaziyyat tapşırığının bitmə tarixi sabahdır.",
    time: "8 May 2026, 17:00",
    type: "task",
    read: false,
  },
  {
    id: 10,
    title: "Yeni mesaj",
    message: "Müəlliminiz mövzuya dair əlavə izah paylaşıb.",
    time: "8 May 2026, 11:10",
    type: "system",
    read: true,
  },
];

export const notificationTypeMeta = {
  task: { icon: "✓", iconClass: "bg-emerald-100 text-emerald-700" },
  course: { icon: "📘", iconClass: "bg-blue-100 text-blue-700" },
  exam: { icon: "◷", iconClass: "bg-violet-100 text-violet-700" },
  grade: { icon: "★", iconClass: "bg-amber-100 text-amber-700" },
  system: { icon: "⚙", iconClass: "bg-slate-100 text-slate-700" },
};
