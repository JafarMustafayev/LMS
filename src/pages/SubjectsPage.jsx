import { Grid2X2, List, ChevronDown } from "lucide-react";
import { useEffect } from "react";
import { subjects } from "../data/subjectDatas";
import SubjectCard from "../components/subject/SubjectCard";

function SubjectsPage() {
  useEffect(() => {
    document.title = "Fənlərim";
  }, []);
  return (
    <div className="">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {subjects.map((subject) => (
          <SubjectCard key={subject.id} subject={subject} />
        ))}
      </div>
    </div>
  );
}

export default SubjectsPage;
