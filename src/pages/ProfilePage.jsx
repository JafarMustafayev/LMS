import { studentProfile } from "../data/datas";

function ProfilePage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Şəxsi Məlumat</h1>
      <div className="rounded-xl bg-white p-4 shadow">
        <p><span className="font-semibold">Ad Soyad:</span> {studentProfile.name}</p>
        <p><span className="font-semibold">Sinif:</span> {studentProfile.group}</p>
        <p><span className="font-semibold">Məktəb:</span> {studentProfile.school}</p>
        <p><span className="font-semibold">Email:</span> {studentProfile.email}</p>
        <p><span className="font-semibold">Ortalama bal:</span> {studentProfile.averageScore}</p>
      </div>
    </div>
  );
}

export default ProfilePage;
