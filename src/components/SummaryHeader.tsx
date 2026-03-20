import React from "react";
interface SummaryHeaderProps {
  index: number;
}
const SummaryHeader: React.FC<SummaryHeaderProps> = ({ index }) => {
  return (
    <div>{index === 1 ? <h1>Danh sách cảnh báo</h1> : <h1>Footer</h1>}</div>
  );
};

export default SummaryHeader;
