import React from 'react';

type PersonalInfoProps = {
  theme: 'light' | 'dark' | 'gray';
};

const PersonalInfo: React.FC<PersonalInfoProps> = ({ theme }) => {
  const MyInfos = {
    TTL: "Sumedang, 2 April 2004",
    Gender: "Perempuan",
    TinggiBadan: "160 cm",
    BeratBadan: "45 kg",
    StatusPernikahan: "Belum Menikah",
    Whatsapp: "+6287822821230",
    Email: "email@example.com"
  };

  return (
    <div className={`personal-info-container ${theme}`}>
      <h2>Personal Info</h2>
      <ul className="personal-info-list">
        {Object.entries(MyInfos).map(([key, value]) => (
          <li key={key} className="personal-info-item">
            <span className="personal-info-label">{key.replace(/([A-Z])/g, ' $1')}: </span>
            <span className="personal-info-value">{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PersonalInfo;
