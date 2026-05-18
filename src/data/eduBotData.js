import {
  MessageSquare,
  GraduationCap,
  CalendarCheck,
  BarChart3,
  BookOpen,
  CalendarDays,
  Star,
  ClipboardList,
} from "lucide-react";

export const quickQuestions = [
  {
    id: 1,
    title: "Bu həftəki tapşırıqlarım hansılardır?",
    icon: ClipboardList,
    color: "bg-blue-50 text-blue-600",
  },
  {
    id: 2,
    title: "Proqramlaşdırmaya necə hazırlaşım?",
    icon: BookOpen,
    color: "bg-green-50 text-green-600",
  },
  
  {
    id: 4,
    title: "İmtahan üçün plan hazırla",
    icon: CalendarDays,
    color: "bg-orange-50 text-orange-500",
  },
  {
    id: 5,
    title: "GPA hesablamam necə aparılır?",
    icon: Star,
    color: "bg-pink-50 text-pink-500",
  },
];

export const botFeatures = [
  {
    id: 1,
    title: "Sual-cavab",
    description: "Suallarınıza anında cavab alın",
    icon: MessageSquare,
    color: "bg-blue-50 text-blue-600",
  },
  {
    id: 2,
    title: "Akademik kömək",
    description: "Dərslər, mövzular və imtahanlar haqqında kömək",
    icon: GraduationCap,
    color: "bg-green-50 text-green-600",
  },
  {
    id: 3,
    title: "Planlaşdırma",
    description: "Tədris planı və vaxtınızı daha yaxşı idarə edin",
    icon: CalendarCheck,
    color: "bg-purple-50 text-purple-600",
  },
  {
    id: 4,
    title: "Analiz və izah",
    description: "Qiymətlər, davamiyyət və statistikalar üzrə izahlar alın",
    icon: BarChart3,
    color: "bg-orange-50 text-orange-500",
  },
];

export const recentQuestions = [
  {
    id: 1,
    title: "Bu həftəki tapşırıqlarım hansılardır?",
    time: "10:21",
  },
  {
    id: 2,
    title: "Proqramlaşdırmaya necə hazırlaşım?",
    time: "10:22",
  },
  {
    id: 3,
    title: "Davamiyyətimi izah et",
    time: "10:23",
  },
  {
    id: 4,
    title: "GPA hesablamam necə aparılır?",
    time: "Dünən",
  },
  {
    id: 5,
    title: "Növbəti imtahanım nə vaxtdır?",
    time: "Dünən",
  },
];

export const recommendedTopics = [
  "Proqramlaşdırma",
  "İmtahanlara hazırlıq",
  "Vaxtın idarə olunması",
  "Motivasiya",
  "Karyera planlaması",
  "Akademik yazı",
];

export const chatMessages = [
  {
    id: 1,
    sender: "user",
    text: "Bu həftəki tapşırıqlarım hansılardır?",
    time: "10:21",
  },
  {
    id: 2,
    sender: "bot",
    text: `Əlinin bu həftə (13 - 19 May) tapşırıqları bunlardır:

• Proqramlaşdırmaya Giriş — Tapşırıq 3 (Deadline: 15 May)
• Riyaziyyat — Məsələ dəsti 2 (Deadline: 16 May)
• İnformasiya texnologiyaları — Laboratoriya işi 4 (Deadline: 17 May)

Daha ətraflı məlumat üçün “Tapşırıqlar” bölməsinə keçə bilərsiniz.`,
    time: "10:21",
  },
  {
    id: 3,
    sender: "user",
    text: "Proqramlaşdırmaya necə hazırlaşım?",
    time: "10:22",
  },
  {
    id: 4,
    sender: "bot",
    text: `Proqramlaşdırmaya daha effektiv hazırlaşmaq üçün sizə bu planı təklif edirəm:

✅ Hər gün minimum 1 saat kod yazmağa çalışın
✅ Nəzəri mövzuları qısa qeyd edin və praktik tətbiq edin
✅ Tapşırıqları vaxtından əvvəl həll etməyə başlayın
✅ Həftə sonunda özünüzü mini testlərlə yoxlayın

Əlavə olaraq, “Dərslər” bölməsindəki video materiallara baxmağınızı tövsiyə edirəm.`,
    time: "10:22",
  },
  {
    id: 5,
    sender: "user",
    text: "Davamiyyətimi izah et",
    time: "10:23",
  },
  {
    id: 6,
    sender: "bot",
    text: `Ümumi davamiyyətiniz: 92%

Bu o deməkdir ki, dərslərin 92%-də iştirak etmisiniz. Bu göstərici yaxşı səviyyədədir. 👍

Fənlər üzrə ətraflı davamiyyət məlumatı üçün “Davamiyyət” bölməsinə baxa bilərsiniz.`,
    time: "10:23",
  },
];