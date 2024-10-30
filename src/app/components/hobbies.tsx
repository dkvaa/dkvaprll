import React from 'react';
import Image from 'next/image'; // Import Image dari Next.js
import hiking from '../image/hiking.jpeg';
import reading from '../image/reading.jpeg';
import foto from '../image/photo.jpeg';
import cooking from '../image/cookings.jpeg';
import './hobbies.css'; // Import file CSS untuk styling

const MyGallery = () => {
  const Hobbies = [
    { name: "Hiking", image: hiking },
    { name: "Reading", image: reading },
    { name: "Photography", image: foto },
    { name: "Cooking", image: cooking }
  ];

  return (
    <section className="gallery-container">
      <h2 className="gallery-title">My Gallery</h2>
      <div className="gallery">
        {Hobbies.map((hobby, index) => (
          <div key={index} className="gallery-card">
            <Image src={hobby.image} alt={hobby.name} className="gallery-image" layout="responsive" width={150} height={100} />
            <div className="gallery-caption">{hobby.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyGallery;

