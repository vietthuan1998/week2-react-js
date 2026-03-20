import data from "../data/alerts.json";
import AlertCard from "../components/AlertCard";
import SelectOptions from "../components/SelectOptions";
import type { SelectChangeEvent } from "@mui/material";
import { useEffect, useState } from "react";

interface Alert {
  type: string;
  area: string;
  title: string;
  time: string;
  rainLevel: string | number;
  read: boolean;
}

const AlertFeedPage: React.FC = () => {
  const [filterType, setFilterType] = useState("");
  const [filterArea, setFilterArea] = useState("");
  const [filterData, setFilterData] = useState([] as Alert[]);
  //   const [readed, setReaded] = useState(false);
  const filter = (filterType: string, filterArea: string) => {
    if (filterType !== "" && filterArea !== "") {
      setFilterData(
        data.filter(
          (item) => item.type === filterType && item.area === filterArea,
        ),
      );
    } else if (filterType !== "") {
      setFilterData(data.filter((item) => item.type === filterType));
    } else if (filterArea !== "") {
      setFilterData(data.filter((item) => item.area === filterArea));
    } else {
      setFilterData(data);
    }
  };
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setFilterData(data);
  }, []);

  const handleChangeType = (event: SelectChangeEvent<string>) => {
    setFilterType(event.target.value);
    filter(event.target.value, filterArea);
  };
  const handleAreaChange = (event: SelectChangeEvent<string>) => {
    setFilterArea(event.target.value);
    filter(filterType, event.target.value);
  };

  const listType = () => {
    return data?.reduce((acc: string[], item: { type: string }) => {
      if (!acc.includes(item.type)) {
        acc.push(item.type);
      }
      return acc;
    }, []);
  };
  const listArea = () => {
    return data?.reduce((acc: string[], item: { area: string }) => {
      if (!acc.includes(item.area)) {
        acc.push(item.area);
      }
      return acc;
    }, []);
  };
  const handleReadChange = (index: number) => {
    console.log("read", filterData[index].read);
    setFilterData(() => {
      return filterData.map((item, i) => {
        if (i === index) {
          return { ...item, read: !item.read };
        }
        return item;
      });
    });
    // data[index].read = !data[index].read;
    // setFilterData([...data]);
  };
  return (
    <div>
      <div style={{ display: "flex" }}>
        <SelectOptions
          data={listType()}
          type="type"
          value={filterType}
          onChange={handleChangeType}
        />
        <SelectOptions
          data={listArea()}
          type="area"
          value={filterArea}
          onChange={handleAreaChange}
        />
        <div className="stats-row">
          <div className="stat-item">Tổng số cảnh báo: {data?.length}</div>
          <div className="stat-item">
            Số cảnh báo chưa đọc: {data.filter((item) => !item.read).length}
          </div>
          {listType().map((item, index) => (
            <div className="stat-item" key={index}>
              Số cảnh báo {item}:{" "}
              {data.filter((alert) => alert.type === item).length}
            </div>
          ))}
        </div>
      </div>
      <div style={{ minHeight: "800px" }}>
        {filterType !== "" || filterArea !== ""
          ? filterData.map((item, index) => (
              <AlertCard
                key={index}
                type={item.type}
                area={item.area}
                title={item.title}
                time={item.time}
                rainLevel={item.rainLevel}
                onPress={() =>
                  alert(
                    `Cảnh báo111 ${item.title} sắp xảy ra tại ${item.area}${item.read}`,
                  )
                }
                read={item.read}
                onReadChange={() => handleReadChange(index)}
              />
            ))
          : filterData.map((item, index) => (
              <AlertCard
                key={index}
                type={item.type}
                area={item.area}
                title={item.title}
                time={item.time}
                rainLevel={item.rainLevel}
                onPress={() =>
                  alert(
                    `Cảnh báo222 ${item.title} sắp xảy ra tại ${item.area} ${item.read}`,
                  )
                }
                read={item.read}
                onReadChange={() => handleReadChange(index)}
              />
            ))}
      </div>
    </div>
  );
};

export default AlertFeedPage;
