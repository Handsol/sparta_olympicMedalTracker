import React, { useState } from "react";

const MedalForm = ({ onAdd, onUpdate }) => {
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

  // 국가 추가 시 제출 처리
  const handleAdd = (e) => {
    e.preventDefault();
    if (!form.name.trim()) {
      alert("국가 이름을 입력하세요.");
      return; // 입력 필드 유지
    }
    onAdd(form); // 부모 컴포넌트로 데이터 전달

    // 입력이 성공적으로 추가된 경우에만 초기화
    setForm({ name: "", gold: 0, silver: 0, bronze: 0 });
  };

  // 수정 처리
  const handleUpdate = (e) => {
    e.preventDefault();
    if (!form.name.trim()) {
      alert("국가 이름을 입력하세요.");
      return;
    }
    onUpdate(form); // 부모 컴포넌트로 데이터 전달

    setForm({ name: "", gold: 0, silver: 0, bronze: 0 });
  };

  return (
    <form className="input-form">
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
        <button type="submit" className="add-button" onClick={handleAdd}>
          추가
        </button>
        <button type="button" className="update-button" onClick={handleUpdate}>
          수정
        </button>
      </div>
    </form>
  );
};

export default MedalForm;
