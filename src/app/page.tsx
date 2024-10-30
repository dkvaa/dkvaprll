"use client";
import React, { useState } from "react";
import Hero from "./components/hero";
import MyGallery from "./components/hobbies";
import PersonalInfo from "./components/personalInfo";
import RatingStars from "./components/ratingStars";
import RiwayatPekerjaan from "./components/riwayatPekerjaan";
import RiwayatPendidikan from "./components/riwayatPendidikan";
import Skills from "./components/skills";
import ThemeToggle from "./components/themeToggle";
import "./diva-styles.css";

// Tipe untuk state tema
type Theme = "light" | "dark" | "gray";

export default function CvOnline() {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      if (prevTheme === "light") return "dark";
      if (prevTheme === "dark") return "gray";
      return "light";
    });
  };

  return (
    <section className={`cv-container ${theme}`}>
      <ThemeToggle toggleTheme={toggleTheme} currentTheme={theme} />
      <Hero />
      <PersonalInfo theme={theme} />
      <RiwayatPendidikan />
      <RiwayatPekerjaan />
      <Skills theme={theme}/>
      <MyGallery />
      <RatingStars />
    </section>
  );
}
