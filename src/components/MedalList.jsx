import React from "react";

const MedalList = ({ countries, onDelete }) => {
  return (
    <table className="medal-table">
      <thead>
        <tr>
          <th>국가명</th>
          <th>금메달</th>
          <th>은메달</th>
          <th>동메달</th>
          <th>메달 합계</th>
          <th>삭제</th>
        </tr>
      </thead>
      <tbody>
        {countries.map((country, index) => (
          <tr key={index}>
            <td>{country.name}</td>
            <td>{country.gold}</td>
            <td>{country.silver}</td>
            <td>{country.bronze}</td>
            <td>{country.gold + country.silver + country.bronze}</td>
            <td>
              <button
                onClick={() => onDelete(country.name)}
                className="delete-button"
              >
                삭제
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MedalList;
