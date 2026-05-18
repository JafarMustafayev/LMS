import { subjects } from "./subjectDatas";

const pendingAssignmentsCount = subjects.reduce((total, subject) => {
  return (
    total +
    subject.assignments.filter((assignment) => assignment.status === "Gözləyir")
      .length
  );
}, 0);

const allGrades = subjects.flatMap((subject) =>
  subject.grades.map((grade) => grade.score),
);

const averageScore =
  allGrades.length > 0
    ? (
        allGrades.reduce((sum, score) => sum + score, 0) / allGrades.length
      ).toFixed(1)
    : "0";

export const statCards = [
  {
    title: "Fənlər",
    value: subjects.length,
    note: "Aktiv fənn",
    icon: "📘",
    tone: "bg-blue-50 text-blue-700",
  },
  {
    title: "Tapşırıqlar",
    value: pendingAssignmentsCount,
    note: "Gözləyən tapşırıq",
    icon: "📝",
    tone: "bg-emerald-50 text-emerald-700",
  },
  {
    title: "Ortalama bal",
    value: averageScore,
    note: "Yaxşı iş!",
    icon: "⭐",
    tone: "bg-amber-50 text-amber-700",
  },
];

const months = {
  Yanvar: 0,
  Fevral: 1,
  Mart: 2,
  Aprel: 3,
  May: 4,
  İyun: 5,
  İyul: 6,
  Avqust: 7,
  Sentyabr: 8,
  Oktyabr: 9,
  Noyabr: 10,
  Dekabr: 11,
};

const parseDate = (dateString) => {
  const [day, monthName, year] = dateString.split(" ");
  return new Date(Number(year), months[monthName], Number(day));
};

const getNextLesson = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const allLessons = subjects.flatMap((subject) =>
    subject.lessons.map((lesson) => ({
      ...lesson,
      subjectTitle: subject.title,
      parsedDate: parseDate(lesson.date),
    })),
  );

  const futureLessons = allLessons
    .filter((lesson) => lesson.parsedDate >= today)
    .sort((a, b) => a.parsedDate - b.parsedDate);

  return futureLessons[0];
};

const dynamicNextLesson = getNextLesson();

export const nextLesson = {
  title: dynamicNextLesson?.subjectTitle || "Dərs yoxdur",
  topic: dynamicNextLesson
    ? `Mövzu: ${dynamicNextLesson.title}`
    : "Gələcək dərs tapılmadı",
  time: dynamicNextLesson?.date || "",
  mode: "Onlayn dərs",
};
