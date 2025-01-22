import React, { useState } from "react";
import "./App.css";
import MedalList from "./components/MedalList";

function App() {
  // 기본 상태 관리
  // form을 사용해 입력 필드 값 관리
  // handleChange와 setForm을 사용해 입력 필드 값 초기화
  const [countries, setCountries] = useState([]);
  const [form, setForm] = useState({
    name: "",
    gold: 0,
    silver: 0,
    bronze: 0,
  });

  // 입력 값 변경 처리
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: name === "name" ? value : Number(value),
    });
  };

  // 폼 제출 처리
  const handleSubmit = (e) => {
    e.preventDefault(); // 기본 동작 방지

    // 유효성 검사
    if (!form.name.trim()) {
      alert("국가 이름을 입력하세요.");
      return;
    }

    setCountries([...countries, form]);
    setForm({ name: "", gold: 0, silver: 0, bronze: 0 });
  };

  // onSubmit 을 사용해 폼 제출 및 데이터 처리.
  // required를 사용해 입력 필드 값이 비어있는지 확인.
  return (
    <div className="app-container">
      <div className="content-box">
        <h1>2024 파리 올림픽</h1>
        <form className="input-form" onSubmit={handleSubmit}>
          <div className="grid-container">
            <div className="input-group">
              <label htmlFor="name">나라 이름</label>
              <input
                id="name"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="gold">금메달</label>
              <input
                id="gold"
                type="number"
                name="gold"
                value={form.gold}
                onChange={handleChange}
                min="0"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="silver">은메달</label>
              <input
                id="silver"
                type="number"
                name="silver"
                value={form.silver}
                onChange={handleChange}
                min="0"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="bronze">동메달</label>
              <input
                id="bronze"
                type="number"
                name="bronze"
                value={form.bronze}
                onChange={handleChange}
                min="0"
                required
              />
            </div>
            <button type="submit" className="add-button">
              추가
            </button>
          </div>
        </form>
        <MedalList countries={countries} />
      </div>
    </div>
  );
}

export default App;
