import React from "react";
import SheetExcel from "./SheetExcel";

const jsonData = [
  {
    STT: "1",
    Lớp: "4A1",
    "Sĩ Số": "42",
    "Tháng 8": "9",
    "Tháng 9": "0",
    "Tháng 10": "5",
    "Tháng 11": "0",
    "Tháng 12": "0",
    "Tháng 1": "0",
    "Tháng 2": "0",
    "Tháng 3": "0",
    "Tháng 4": "0",
    "Tháng 5": "0",
  },
  {
    STT: "2",
    Lớp: "4A2",
    "Sĩ Số": "49",
    "Tháng 8": "0",
    "Tháng 9": "0",
    "Tháng 10": "0",
    "Tháng 11": "0",
    "Tháng 12": "0",
    "Tháng 1": "5",
    "Tháng 2": "6",
    "Tháng 3": "7",
    "Tháng 4": "10",
    "Tháng 5": "0",
  },
  {
    STT: "3",
    Lớp: "5A1",
    "Sĩ Số": "36",
    "Tháng 8": "0",
    "Tháng 9": "3",
    "Tháng 10": "3",
    "Tháng 11": "3",
    "Tháng 12": "3",
    "Tháng 1": "0",
    "Tháng 2": "0",
    "Tháng 3": "0",
    "Tháng 4": "0",
    "Tháng 5": "0",
  },
  {
    STT: "4",
    Lớp: "5A2",
    "Sĩ Số": "40",
    "Tháng 8": "0",
    "Tháng 9": "0",
    "Tháng 10": "5",
    "Tháng 11": "10",
    "Tháng 12": "0",
    "Tháng 1": "0",
    "Tháng 2": "2",
    "Tháng 3": "4",
    "Tháng 4": "6",
    "Tháng 5": "8",
  },
  {
    STT: "5",
    Lớp: "5A3",
    "Sĩ Số": "40",
    "Tháng 8": "0",
    "Tháng 9": "0",
    "Tháng 10": "5",
    "Tháng 11": "10",
    "Tháng 12": "0",
    "Tháng 1": "0",
    "Tháng 2": "2",
    "Tháng 3": "4",
    "Tháng 4": "6",
    "Tháng 5": "8",
  },
  {
    STT: "6",
    Lớp: "5A4",
    "Sĩ Số": "40",
    "Tháng 8": "0",
    "Tháng 9": "0",
    "Tháng 10": "5",
    "Tháng 11": "10",
    "Tháng 12": "0",
    "Tháng 1": "0",
    "Tháng 2": "2",
    "Tháng 3": "4",
    "Tháng 4": "6",
    "Tháng 5": "8",
  },
  {
    STT: "",
    Lớp: "Toàn trường",
    "Sĩ Số": "167",
    "Tháng 8": "9",
    "Tháng 9": "3",
    "Tháng 10": "13",
    "Tháng 11": "13",
    "Tháng 12": "3",
    "Tháng 1": "5",
    "Tháng 2": "8",
    "Tháng 3": "11",
    "Tháng 4": "16",
    "Tháng 5": "8",
  },
];

const ExportCLSX: React.FC = () => {
  return (
    <div>
      <SheetExcel jsonData={jsonData} fileName="user-data" />
    </div>
  );
};

export default ExportCLSX;
