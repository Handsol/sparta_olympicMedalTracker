import React, { useState } from "react";
import "./App.css";
import MedalForm from "./components/MedalForm";
import MedalList from "./components/MedalList";

function App() {
  const [countries, setCountries] = useState([]); // 국가 리스트
  const [sortOption, setSortOption] = useState("gold"); // 초기 정렬 기준

  // 국가 메달 데이터 추가
  const addCountry = (newCountry) => {
    // 기존 국가 이름이 있는지 확인
    const existingCountry = countries.find(
      (country) => country.name === newCountry.name
    );

    // 이미 존재하는 국가인 경우 알림
    if (existingCountry) {
      alert("이미 추가된 국가입니다. 메달 수정을 사용하세요.");
      return;
    }

    // 새로운 국가 추가
    setCountries([...countries, newCountry]);
  };

  // 국가 메달 데이터 수정
  const updateCountry = (updatedCountry) => {
    const existingCountry = countries.find(
      (country) => country.name === updatedCountry.name
    );

    // 국가가 존재한다면 수정, 존재하지 않으면 알림
    if (existingCountry !== undefined) {
      setCountries(
        // 수정 시 해당 국가의 데이터를 새로운 배열로 반환
        countries.map((country) =>
          // 같은 이름의 국가가 있으면 수정된 데이터로 교체
          country.name === updatedCountry.name ? updatedCountry : country
        )
      );
    } else {
      alert("해당 국가가 존재하지 않습니다. 국가를 추가하세요.");
    }
  };

  // 국가 데이터 삭제
  const deleteCountry = (name) => {
    setCountries(countries.filter((country) => country.name !== name));
  };

  // 메달들 기준으로 내림차순 정렬
  const sortedCountries = [...countries].sort((a, b) => {
    if (sortOption === "gold") {
      if (b.gold !== a.gold) return b.gold - a.gold; // 금메달 기준 내림차순
      if (b.silver !== a.silver) return b.silver - a.silver; // 금메달이 같으면 은메달 기준 내림차순
      return b.bronze - a.bronze; // 은메달도 같으면 동메달 기준 내림차순
    } else if (sortOption === "total") {
      return b.gold + b.silver + b.bronze - (a.gold + a.silver + a.bronze); // 총 메달 합계 기준 내림차순
    }
  });

  return (
    <div className="app-container">
      <div className="content-box">
        <h1>2024 파리 올림픽</h1>

        <MedalForm onAdd={addCountry} onUpdate={updateCountry} />
        <div className="sort-buttons">
          <button
            onClick={() => setSortOption("gold")}
            className={sortOption === "gold" ? "active" : ""}
          >
            금메달 기준
          </button>
          <button
            onClick={() => setSortOption("total")}
            className={sortOption === "total" ? "active" : ""}
          >
            총 메달 기준
          </button>
        </div>
        <MedalList countries={sortedCountries} onDelete={deleteCountry} />
      </div>
    </div>
  );
}

export default App;
