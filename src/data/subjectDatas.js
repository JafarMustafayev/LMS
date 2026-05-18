import {
  Code2,
  Database,
  Calculator,
  Network,
  BarChart3,
  ShieldCheck,
  BrainCircuit,
} from "lucide-react";

export const subjects = [
  {
    id: 1,
    title: "Proqramlaşdırmaya Giriş",
    teacher: "Prof. Səfər Abbasov",
    teacherRole: "Baş müəllim",
    description:
      "Bu fənn proqramlaşdırmanın əsas anlayışlarını, alqoritmləri və kod yazma bacarıqlarını inkişaf etdirməyə yönəlmişdir.",
    about:
      "Proqramlaşdırmanın əsas konseptlərini, dəyişənlər, şərt operatorları, dövrlər, funksiyalar, massivlər və fayl əməliyyatları kimi mövzuları öyrənmək üçün nəzərdə tutulmuşdur. Praktiki tapşırıqlar və mini layihələr vasitəsilə tələbələrin problem həll etmə və analitik düşünmə bacarıqları inkişaf etdirilir.",
    language: "Azərbaycan dili",
    level: "Başlanğıc",
    type: "Məcburi",
    semester: "Yaz semestri",
    progress: 75,
    tasksCount: 4,
    lessonsCount: 12,
    credit: 5,
    icon: Code2,
    iconBg: "bg-blue-600",
    iconColor: "text-white",
    progressColor: "bg-blue-600",

    lessons: [
      {
        id: 1,
        title: "Dəyişənlər və məlumat tipləri",
        date: "10 May 2026",
        status: "İzlənildi",
      },
      {
        id: 2,
        title: "Şərt operatorları",
        date: "15 May 2026",
        status: "İzlənildi",
      },
      {
        id: 3,
        title: "Dövr operatorları",
        date: "5 May 2026",
        status: "İzlənmədi",
      },
      {
        id: 4,
        title: "Fayllarla iş",
        date: "3 May 2026",
        status: "İzlənmədi",
      },
    ],

    assignments: [
      {
        id: 1,
        title: "Tapşırıq 4",
        deadline: "20 May 2026",
        status: "Gözləyir",
      },
      {
        id: 2,
        title: "Mini layihə",
        deadline: "18 May 2026",
        status: "Təqdim edildi",
      },
      {
        id: 3,
        title: "Tapşırıq 2",
        deadline: "10 May 2026",
        status: "Təqdim edildi",
      },
      {
        id: 4,
        title: "Kod analizi",
        deadline: "5 May 2026",
        status: "Qiymətləndirilir",
      },
    ],

    syllabus: [
      "Alqoritm anlayışı",
      "Dəyişənlər və məlumat tipləri",
      "Şərt və dövr operatorları",
      "Funksiyalar",
      "Massivlər",
      "Fayllarla iş",
      "Sadə layihələrin hazırlanması",
    ],

    materials: [
      "Mühazirə slaydları",
      "Laboratoriya tapşırıqları",
      "Kod nümunələri",
      "Əlavə oxu materialları",
      "Video dərslər",
      "Praktiki workshop qeydləri",
    ],

    attendance: {
      total: 12,
      attended: 10,
      missed: 2,
    },

    grades: [
      { title: "Quiz 1", score: 100 },
      { title: "Laboratoriya", score: 100 },
      { title: "Aralıq imtahan", score: 10 },
      { title: "Praktiki layihə", score: 92 },
    ],
    teacherImage: "https://i.pravatar.cc/1000?img=51",

    chatMessages: [
      {
        id: 1,
        sender: "student",
        text: "Salam müəllim, Lab 3 üçün deadline nə vaxtdır?",
        time: "10:15",
      },
      {
        id: 2,
        sender: "teacher",
        text: "Salam Əli, Lab 3 üçün deadline cümə günü saat 23:59-dur. Hər hansı sualınız olsa, yaza bilərsiniz.",
        time: "10:18",
      },
      {
        id: 3,
        sender: "student",
        text: "Çox sağ olun müəllim. Format ilə bağlı bir nümunə göndərə bilərsinizmi?",
        time: "10:20",
      },
      {
        id: 4,
        sender: "teacher",
        text: "Əlbəttə, nümunə faylı əlavə etdim. Uğurlar! 🌟",
        time: "10:23",
        file: {
          name: "Lab3_Example.pdf",
          size: "512 KB",
        },
      },
      {
        id: 5,
        sender: "student",
        text: "Təşəkkürlər! 🙏",
        time: "10:25",
      },
    ],
  },

  {
    id: 2,
    title: "Məlumatlar Bazası",
    teacher: "Aygün Quliyeva",
    teacherRole: "Müəllim",
    description:
      "Məlumat bazalarının qurulması, optimallaşdırılması və idarə olunması öyrədilir.",
    about:
      "Bu fənn SQL, cədvəllər, əlaqələr, sorğular və verilənlər bazasının dizayn prinsiplərini əhatə edir. Tələbələr PostgreSQL və MySQL ilə praktik təcrübə qazanırlar.",
    language: "Azərbaycan dili",
    level: "Orta",
    type: "Məcburi",
    semester: "Yaz semestri",
    progress: 60,
    tasksCount: 3,
    lessonsCount: 10,
    credit: 5,
    icon: Database,
    iconBg: "bg-green-500",
    iconColor: "text-white",
    progressColor: "bg-green-500",

    lessons: [
      {
        id: 1,
        title: "SQL sintaksisi",
        date: "24 May 2026",
        status: "İzlənildi",
      },
      {
        id: 2,
        title: "JOIN əməliyyatları",
        date: "22 May 2026",
        status: "İzlənildi",
      },
      {
        id: 3,
        title: "Normalization",
        date: "25 May 2026",
        status: "İzlənmədi",
      },
    ],

    assignments: [
      {
        id: 1,
        title: "SQL sorğuları",
        deadline: "21 May 2026",
        status: "Gözləyir",
      },
      {
        id: 2,
        title: "Database dizaynı",
        deadline: "16 May 2026",
        status: "Qiymətləndirilir",
      },
    ],

    syllabus: [
      "SQL əsasları",
      "Cədvəllər və əlaqələr",
      "JOIN əməliyyatları",
      "Normalization",
      "Stored Procedures",
      "Indexing",
    ],

    materials: [
      "SQL praktika faylları",
      "ER diagram nümunələri",
      "Database layihələri",
      "Laboratoriya təlimatları",
    ],

    attendance: {
      total: 10,
      attended: 8,
      missed: 2,
    },

    grades: [
      { title: "SQL Quiz", score: 88 },
      { title: "Lab işi", score: 91 },
      { title: "Aralıq imtahan", score: 76 },
    ],

    teacherImage: "https://i.pravatar.cc/1000?img=50",

    chatMessages: [
      {
        id: 1,
        sender: "student",
        text: "Salam müəllim, Lab 3 üçün deadline nə vaxtdır?",
        time: "10:15",
      },
      {
        id: 2,
        sender: "teacher",
        text: "Salam Əli, Lab 3 üçün deadline cümə günü saat 23:59-dur. Hər hansı sualınız olsa, yaza bilərsiniz.",
        time: "10:18",
      },
      {
        id: 3,
        sender: "student",
        text: "Çox sağ olun müəllim. Format ilə bağlı bir nümunə göndərə bilərsinizmi?",
        time: "10:20",
      },
      {
        id: 4,
        sender: "teacher",
        text: "Əlbəttə, nümunə faylı əlavə etdim. Uğurlar! 🌟",
        time: "10:23",
        file: {
          name: "Lab3_Example.pdf",
          size: "512 KB",
        },
      },
      {
        id: 5,
        sender: "student",
        text: "Təşəkkürlər! 🙏",
        time: "10:25",
      },
    ],
  },

  {
    id: 3,
    title: "Diskret Riyaziyyat",
    teacher: "Tural Məmmədov",
    teacherRole: "Dosent",
    description: "Məntiq, çoxluqlar və qraf nəzəriyyəsi mövzuları öyrədilir.",
    about:
      "Diskret strukturlar, məntiqi ifadələr, kombinatorika və qraf nəzəriyyəsi vasitəsilə proqramlaşdırmanın riyazi əsasları izah olunur.",
    language: "Azərbaycan dili",
    level: "Orta",
    type: "Məcburi",
    semester: "Yaz semestri",
    progress: 80,
    tasksCount: 5,
    lessonsCount: 14,
    credit: 6,
    icon: Calculator,
    iconBg: "bg-orange-500",
    iconColor: "text-white",
    progressColor: "bg-orange-500",

    lessons: [
      {
        id: 1,
        title: "Çoxluqlar nəzəriyyəsi",
        date: "11 May 2026",
        status: "İzlənildi",
      },
      {
        id: 2,
        title: "Qraf nəzəriyyəsi",
        date: "8 May 2026",
        status: "İzlənildi",
      },
    ],

    assignments: [
      {
        id: 1,
        title: "Məntiq tapşırıqları",
        deadline: "19 May 2026",
        status: "Təqdim edildi",
      },
    ],

    syllabus: [
      "Məntiq",
      "Çoxluqlar",
      "Qraf nəzəriyyəsi",
      "Kombinatorika",
      "Boole cəbri",
    ],

    materials: [
      "Mühazirə qeydləri",
      "Riyazi məsələlər",
      "Praktik worksheet-lər",
    ],

    attendance: {
      total: 14,
      attended: 12,
      missed: 2,
    },

    grades: [
      { title: "Quiz", score: 84 },
      { title: "Midterm", score: 89 },
    ],
  },

  {
    id: 4,
    title: "Kompüter Şəbəkələri",
    teacher: "Rəşad Əhmədov",
    teacherRole: "Baş müəllim",
    description: "Şəbəkə modelləri və protokolları haqqında biliklər verilir.",
    about:
      "TCP/IP, OSI modeli, IP ünvanlama və şəbəkə təhlükəsizliyi öyrədilir. Praktiki laboratoriyalar vasitəsilə router və switch konfiqurasiyası həyata keçirilir.",
    language: "Azərbaycan dili",
    level: "Orta",
    type: "Məcburi",
    semester: "Yaz semestri",
    progress: 45,
    tasksCount: 2,
    lessonsCount: 8,
    credit: 4,
    icon: Network,
    iconBg: "bg-violet-600",
    iconColor: "text-white",
    progressColor: "bg-violet-600",

    lessons: [
      {
        id: 1,
        title: "OSI modeli",
        date: "9 May 2026",
        status: "İzlənildi",
      },
      {
        id: 2,
        title: "IP ünvanlama",
        date: "6 May 2026",
        status: "İzlənmədi",
      },
    ],

    assignments: [
      {
        id: 1,
        title: "Cisco Packet Tracer işi",
        deadline: "22 May 2026",
        status: "Gözləyir",
      },
    ],

    syllabus: [
      "OSI modeli",
      "TCP/IP",
      "IP Addressing",
      "Routing",
      "Switching",
      "Şəbəkə təhlükəsizliyi",
    ],

    materials: [
      "Packet Tracer faylları",
      "Lab təlimatları",
      "Video tutoriallar",
    ],

    attendance: {
      total: 8,
      attended: 5,
      missed: 3,
    },

    grades: [
      { title: "Lab işi", score: 74 },
      { title: "Quiz", score: 80 },
    ],
  },
  {
    id: 5,
    title: "Veb Proqramlaşdırma",
    teacher: "Nigar Həsənova",
    teacherRole: "Senior müəllim",
    description: "HTML, CSS, JavaScript və React əsasları öyrədilir.",
    about:
      "Frontend texnologiyaları və müasir veb interfeyslərin hazırlanması izah olunur. React komponentləri, state idarəetməsi və API inteqrasiyası praktiki şəkildə tətbiq edilir.",
    language: "Azərbaycan dili",
    level: "Başlanğıc",
    type: "Seçmə",
    semester: "Yaz semestri",
    progress: 70,
    tasksCount: 4,
    lessonsCount: 11,
    credit: 5,
    icon: BarChart3,
    iconBg: "bg-amber-500",
    iconColor: "text-white",
    progressColor: "bg-amber-500",

    lessons: [
      {
        id: 1,
        title: "HTML və semantic taglər",
        date: "13 May 2026",
        status: "İzlənildi",
      },
      {
        id: 2,
        title: "Flexbox və Grid",
        date: "10 May 2026",
        status: "İzlənildi",
      },
      {
        id: 3,
        title: "React komponentləri",
        date: "6 May 2026",
        status: "İzlənmədi",
      },
    ],

    assignments: [
      {
        id: 1,
        title: "Portfolio səhifəsi",
        deadline: "25 May 2026",
        status: "Gözləyir",
      },
      {
        id: 2,
        title: "Responsive layout",
        deadline: "18 May 2026",
        status: "Təqdim edildi",
      },
    ],

    syllabus: [
      "HTML5",
      "CSS3",
      "Flexbox və Grid",
      "JavaScript əsasları",
      "React giriş",
      "API inteqrasiyası",
    ],

    materials: [
      "Frontend slaydları",
      "Praktiki layihələr",
      "React cheat sheet",
      "Kod nümunələri",
    ],

    attendance: {
      total: 11,
      attended: 9,
      missed: 2,
    },

    grades: [
      { title: "Frontend Quiz", score: 86 },
      { title: "React layihəsi", score: 93 },
    ],
  },

  {
    id: 6,
    title: "Kibertəhlükəsizlik",
    teacher: "Elvin Rüstəmov",
    teacherRole: "Müəllim",
    description: "İnformasiya təhlükəsizliyi əsasları öyrədilir.",
    about:
      "Şifrələmə, təhlükəsizlik prinsipləri və hücumlardan qorunma üsulları izah olunur. Real case-lər üzərində analizlər aparılır.",
    language: "Azərbaycan dili",
    level: "Orta",
    type: "Seçmə",
    semester: "Yaz semestri",
    progress: 65,
    tasksCount: 3,
    lessonsCount: 9,
    credit: 4,
    icon: ShieldCheck,
    iconBg: "bg-cyan-500",
    iconColor: "text-white",
    progressColor: "bg-cyan-500",

    lessons: [
      {
        id: 1,
        title: "Şifrələmə metodları",
        date: "12 May 2026",
        status: "İzlənildi",
      },
      {
        id: 2,
        title: "Firewall anlayışı",
        date: "8 May 2026",
        status: "İzlənmədi",
      },
    ],

    assignments: [
      {
        id: 1,
        title: "Təhlükəsizlik analizi",
        deadline: "24 May 2026",
        status: "Gözləyir",
      },
    ],

    syllabus: [
      "Şifrələmə",
      "Authentication",
      "Firewall",
      "Network security",
      "Cyber attacks",
    ],

    materials: [
      "Case study sənədləri",
      "Video dərslər",
      "Praktiki təhlükəsizlik nümunələri",
    ],

    attendance: {
      total: 9,
      attended: 7,
      missed: 2,
    },

    grades: [
      { title: "Security Quiz", score: 81 },
      { title: "Praktiki iş", score: 88 },
    ],
  },

  {
    id: 7,
    title: "Süni İntellektə Giriş",
    teacher: "Samir Əliyev",
    teacherRole: "Dosent",
    description: "Süni intellektin əsas anlayışları öyrədilir.",
    about:
      "AI, machine learning və neyron şəbəkələrə giriş mövzuları əhatə olunur. Python ilə sadə AI modelləri hazırlanır.",
    language: "Azərbaycan dili",
    level: "Başlanğıc",
    type: "Seçmə",
    semester: "Yaz semestri",
    progress: 50,
    tasksCount: 3,
    lessonsCount: 7,
    credit: 4,
    icon: BrainCircuit,
    iconBg: "bg-blue-600",
    iconColor: "text-white",
    progressColor: "bg-blue-600",

    lessons: [
      {
        id: 1,
        title: "Machine Learning giriş",
        date: "14 May 2026",
        status: "İzlənildi",
      },
      {
        id: 2,
        title: "Neyron şəbəkələr",
        date: "9 May 2026",
        status: "İzlənmədi",
      },
    ],

    assignments: [
      {
        id: 1,
        title: "AI modeli qurulması",
        deadline: "27 May 2026",
        status: "Gözləyir",
      },
    ],

    syllabus: [
      "AI əsasları",
      "Machine Learning",
      "Deep Learning giriş",
      "Neyron şəbəkələr",
    ],

    materials: [
      "Python notebook-ları",
      "Dataset nümunələri",
      "AI təqdimatları",
    ],

    attendance: {
      total: 7,
      attended: 4,
      missed: 3,
    },

    grades: [
      { title: "AI Quiz", score: 79 },
      { title: "Mini layihə", score: 90 },
    ],
  },

  {
    id: 8,
    title: "Riyazi Analiz",
    teacher: "Lalə İsmayılova",
    teacherRole: "Professor",
    description: "Limit, törəmə və inteqral anlayışları öyrədilir.",
    about:
      "Riyazi analiz fənni əsas riyazi metodları və hesablama qaydalarını əhatə edir. Funksiyaların analizi və tətbiqi məsələlər həll olunur.",
    language: "Azərbaycan dili",
    level: "Orta",
    type: "Məcburi",
    semester: "Yaz semestri",
    progress: 30,
    tasksCount: 2,
    lessonsCount: 6,
    credit: 5,
    icon: Calculator,
    iconBg: "bg-pink-500",
    iconColor: "text-white",
    progressColor: "bg-pink-500",

    lessons: [
      {
        id: 1,
        title: "Limit anlayışı",
        date: "11 May 2026",
        status: "İzlənildi",
      },
      {
        id: 2,
        title: "Törəmə qaydaları",
        date: "7 May 2026",
        status: "İzlənmədi",
      },
    ],

    assignments: [
      {
        id: 1,
        title: "İnteqral məsələləri",
        deadline: "23 May 2026",
        status: "Gözləyir",
      },
    ],

    syllabus: [
      "Limit",
      "Törəmə",
      "İnteqral",
      "Funksiya analizi",
      "Tətbiqi məsələlər",
    ],

    materials: [
      "Mühazirə konspektləri",
      "Praktiki tapşırıqlar",
      "Riyazi formul siyahısı",
    ],

    attendance: {
      total: 6,
      attended: 3,
      missed: 3,
    },

    grades: [
      { title: "Quiz", score: 72 },
      { title: "Midterm", score: 68 },
    ],
  },
];
