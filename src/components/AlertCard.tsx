import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import React from "react";

interface AlertCardProps {
  title: string;
  type: string;
  area: string;
  time: string;
  rainLevel: string | number;
  onPress: () => void;
  read?: boolean;
  onReadChange?: () => void;
}

const AlertCard: React.FC<AlertCardProps> = ({
  title,
  type,
  area,
  time,
  rainLevel,
  onPress,
  read,
  onReadChange,
}) => {
  return (
    <div
      className="card col-7"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "1rem",
        padding: "0.75rem",
        border: "1px solid #ddd",
        borderRadius: "8px",
        marginBottom: "0.75rem",
      }}
    >
      <div
        className="card-content"
        onClick={onPress}
        style={{ flex: 1, cursor: "pointer" }}
      >
        <div>
          <b>{type}</b> • {area}
        </div>
        <div>{title}</div>
        <div>{time}</div>
        <div>Mưa: {rainLevel}</div>
      </div>
      <FormControlLabel
        control={<Checkbox checked={read} onChange={onReadChange} />}
        label="Đã đọc"
      />
    </div>
  );
};

export default AlertCard;
