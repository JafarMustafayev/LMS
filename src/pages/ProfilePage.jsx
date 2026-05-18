import { Mail, Phone, Camera, Edit3 } from "lucide-react";
import { useEffect } from "react";
import { studentProfile } from "../data/studentDatas";

function InfoRow({ label, value }) {
  return (
    <div className="grid grid-cols-2 gap-4 border-b border-gray-100 py-3 text-sm">
      <span className="text-gray-500">{label}</span>
      <span className="font-medium text-gray-800">{value}</span>
    </div>
  );
}

function Card({ title, children }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
      <h2 className="mb-5 text-lg font-semibold text-gray-900">{title}</h2>
      {children}
    </div>
  );
}

function ProfilePage() {

  useEffect(()=>{
    document.title = "Profil";
  },[])
  return (
    <div className="space-y-2">
      <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-6">
            <div className="relative">
              <img
                src={studentProfile.avatar}
                alt={studentProfile.name}
                className="h-32 w-32 rounded-full object-cover border"
              />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {studentProfile.name}
              </h2>

              <p className="mt-1 text-gray-500">{studentProfile.role}</p>

              <div className="mt-4 space-y-2 text-sm text-gray-600">
                <p className="flex items-center gap-2">
                  <Mail size={17} />
                  {studentProfile.email}
                </p>

                <p className="flex items-center gap-2">
                  <Phone size={17} />
                  {studentProfile.phone}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <Card title="Şəxsi məlumatlar">
          <InfoRow label="İdentifikator" value={studentProfile.identifier} />
          <InfoRow label="İmtahan parolu" value={studentProfile.examPassword} />
          <InfoRow label="Soyadı" value={studentProfile.surname} />
          <InfoRow label="Adı" value={studentProfile.firstName} />
          <InfoRow label="Atasının adı" value={studentProfile.fatherName} />
          <InfoRow
            label="Şəxsiyyət vəsiqəsinin seriya və nömrəsi"
            value={studentProfile.idCard}
          />
          <InfoRow label="Cinsi" value={studentProfile.gender} />
          <InfoRow label="Doğum tarixi" value={studentProfile.birthDate} />

          <InfoRow label="Telefon" value={studentProfile.phone} />
          <InfoRow label="Ünvanı" value={studentProfile.address} />
        </Card>

        <div className="space-y-6">
          <Card title="Təhsil məlumatları">
            <InfoRow label="Təhsil növü" value={studentProfile.educationType} />
            <InfoRow
              label="Təhsil forması"
              value={studentProfile.educationForm}
            />
            <InfoRow label="Bölməsi" value={studentProfile.section} />
            <InfoRow label="Fakültənin adı" value={studentProfile.faculty} />
            <InfoRow label="Kafedranın adı" value={studentProfile.department} />
            <InfoRow label="İxtisas adı" value={studentProfile.specialty} />
            <InfoRow
              label="İxtisaslaşma"
              value={studentProfile.specialization}
            />
            <InfoRow label="Kurs" value={studentProfile.course} />

            <div className="grid grid-cols-2 gap-4 py-3 text-sm">
              <span className="text-gray-500">Statusu</span>
              <span>
                <span className="rounded-full bg-green-50 px-4 py-1 text-sm font-medium text-green-600 border border-green-200">
                  {studentProfile.status}
                </span>
              </span>
            </div>
          </Card>
        </div>

        <div className="space-y-2">
          <Card title="Tarixçə məlumatları">
            <InfoRow
              label="Qəbul olma tarixi"
              value={studentProfile.admissionDate}
            />
            <InfoRow
              label="Bitirdiyi tarix"
              value={studentProfile.graduationDate}
            />
          </Card>
          <Card title="Orta məktəb">
            <InfoRow
              label="Orta məktəb"
              value={studentProfile.secondarySchool}
            />
            <InfoRow
              label="Orta məktəbi bitirdiyi tarix"
              value={studentProfile.secondarySchoolEndDate}
            />
          </Card>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
