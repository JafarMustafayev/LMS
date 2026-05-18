import { Grid2X2, List, ChevronDown } from "lucide-react";

import { subjects } from "../data/subjectDatas";
import SubjectCard from "../components/subject/SubjectCard";

function SubjectsPage() {
  return (
    <div className="pt-5">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4 space-y-5">
        {subjects.map((subject) => (
          <SubjectCard key={subject.id} subject={subject} />
        ))}
      </div>
    </div>
  );
}

export default SubjectsPage;
