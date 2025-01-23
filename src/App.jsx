import React, { useState } from "react";
import "./App.css";
import MedalForm from "./components/MedalForm";
import MedalList from "./components/MedalList";

function App() {
  const [countries, setCountries] = useState([]); // 국가 리스트

  // 국가 데이터 추가
  const addCountry = (newCountry) => {
    // 기존 국가 이름이 있는지 확인
    const existingCountry = countries.find(
      (country) => country.name === newCountry.name
    );

    // 이미 존재하는 국가인 경우
    if (existingCountry) {
      alert("이미 추가된 국가입니다. 메달 수정을 사용하세요.");
      return;
    }

    // 새로운 국가 추가
    setCountries([...countries, newCountry]);
  };

  // 국가 데이터 수정
  const updateCountry = (updatedCountry) => {
    setCountries(
      countries.map((country) =>
        country.name === updatedCountry.name ? updatedCountry : country
      )
    );
  };

  // 국가 데이터 삭제
  const deleteCountry = (name) => {
    setCountries(countries.filter((country) => country.name !== name));
  };

  // 메달들 기준으로 내림차순 정렬
  const sortedCountries = [...countries].sort((a, b) => {
    if (b.gold !== a.gold) {
      return b.gold - a.gold; // 금메달 기준 내림차순
    } else if (b.silver !== a.silver) {
      return b.silver - a.silver; // 은메달 기준 내림차순
    } else {
      return b.bronze - a.bronze; // 동메달 기준 내림차순
    }
  });

  return (
    <div className="app-container">
      <div className="content-box">
        <h1>2024 파리 올림픽</h1>
        <MedalForm onAdd={addCountry} onUpdate={updateCountry} />
        <MedalList countries={sortedCountries} onDelete={deleteCountry} />
      </div>
    </div>
  );
}

export default App;
