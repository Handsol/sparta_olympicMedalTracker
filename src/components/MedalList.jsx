import React from "react";

const MedalList = ({ countries }) => {
  return (
    <table className="medal-table">
      <thead>
        <tr>
          <th>국가명</th>
          <th>금메달</th>
          <th>은메달</th>
          <th>동메달</th>
        </tr>
      </thead>
      <tbody>
        {countries.map((country, index) => (
          <tr key={index}>
            <td>{country.name}</td>
            <td>{country.gold}</td>
            <td>{country.silver}</td>
            <td>{country.bronze}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MedalList;
