import * as React from "react";
import XLSX from "sheetjs-style";
import { Button } from "@mui/material";
import { ExportExcell } from "@/const";

export interface ISheetExcelProps {
  jsonData: any;
  fileName: string;
}

export default function SheetExcel({ jsonData, fileName }: ISheetExcelProps) {
  const jsonSoPhong = [
    { "Sở GD&ĐT Hà Nội": "Trường: Liên cấp MN - Phổ thông Sao Mai" },
  ];
  const jsonTitle = [{ "Thống kê học sinh đăng ký sử dụng eNetViet": "" }];
  const jsonTruong = [
    { "NHÀ TRƯỜNG XÁC NHẬN": "(Cán bộ đối soát số liệu, ký ghi rõ họ tên)" },
  ];
  const jsonDonvi = [
    {
      "ĐƠN VỊ CUNG CẤP XÁC NHẬN": "(Cán bộ đối soát số liệu, ký ghi rõ họ tên)",
    },
  ];

  const handleExportExcel = () => {
    // const worksheet = XLSX.utils.json_to_sheet(jsonData);
    // const worksheet = XLSX.utils.aoa_to_sheet([["", ""]]);
    const worksheet = XLSX.utils.json_to_sheet([]);
    const workbook = XLSX.utils.book_new();

    XLSX.utils.sheet_add_json(worksheet, jsonSoPhong, {
      origin: "A1",
    });
    XLSX.utils.sheet_add_json(worksheet, jsonTitle, {
      origin: "A5",
    });

    XLSX.utils.sheet_add_aoa(worksheet, [["Học kỳ 1"]], { origin: "D7" });
    XLSX.utils.sheet_add_aoa(worksheet, [["Học kỳ 2"]], { origin: "I7" });
    XLSX.utils.sheet_add_aoa(worksheet, [["STT"]], { origin: "A7" });
    XLSX.utils.sheet_add_aoa(worksheet, [["Lớp"]], { origin: "B7" });
    XLSX.utils.sheet_add_aoa(worksheet, [["Sĩ Số"]], { origin: "C7" });

    // Thêm dữ liệu từ jsonData vào worksheet từ vị trí A8 trở đi
    XLSX.utils.sheet_add_json(worksheet, jsonData, {
      origin: "A8",
    });

    const yearRow = jsonData.length + 9;
    const truongdonviRow = jsonData.length + 10;
    const chukyRow = jsonData.length + 11;

    XLSX.utils.sheet_add_aoa(
      worksheet,
      [["........, Ngày .......... Tháng ......... Năm 2023"]],
      { origin: `I${yearRow}` }
    );

    XLSX.utils.sheet_add_json(worksheet, jsonTruong, {
      origin: `A${truongdonviRow}`,
    });
    XLSX.utils.sheet_add_json(worksheet, jsonDonvi, {
      origin: `I${truongdonviRow}`,
    });

    // console.log(`I${yearRow}`, `A${truongdonviRow}`);

    //Sửa chiều rộng cột
    const wscols = [
      { wch: 5 },
      { wch: 10 },
      { wch: 10 },
      { wch: 10 },
      { wch: 10 },
      { wch: 10 },
      { wch: 10 },
      { wch: 10 },
      { wch: 10 },
      { wch: 10 },
      { wch: 10 },
      { wch: 10 },
      { wch: 10 },
      { wch: 10 },
    ];
    worksheet["!cols"] = wscols;

    const headerStyle = {
      font: {
        name: "Times New Roman",
        sz: "11",
        bold: true,
      },
      border: ExportExcell.STYLE_BORDER,
      alignment: { ...ExportExcell.ALIGNMENT_CENTER, wrapText: true },
    };
    const normalTextStyle = {
      font: { name: "Times New Roman", sz: "11" },
      border: ExportExcell.STYLE_BORDER,
      alignment: ExportExcell.ALIGNMENT_CENTER,
    };
    const labelStyle = {
      font: { name: "Times New Roman", bold: true, sz: "11" },
    };
    const titleStyle = {
      font: { name: "Times New Roman", bold: true, sz: "14" },
      alignment: ExportExcell.ALIGNMENT_CENTER,
    };
    const textRightStyle = {
      font: { name: "Times New Roman", sz: "11" },
      border: ExportExcell.STYLE_BORDER,
      alignment: ExportExcell.ALIGNMENT_RIGHT,
    };
    const textItalicStyle = {
      font: { name: "Times New Roman", sz: "11", italic: true },
      alignment: ExportExcell.ALIGNMENT_CENTER,
    };
    const boldTextStyle = {
      font: {
        name: "Times New Roman",
        sz: "11",
        bold: true,
      },
      alignment: ExportExcell.ALIGNMENT_CENTER,
    };

    // giải mã vùng phạm vi
    const range = worksheet["!ref"]
      ? XLSX.utils.decode_range(worksheet["!ref"])
      : { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } };
    const rowFooter = range.e.r - 3;
    // console.log(rowFooter);

    for (let R = range.s.r; R <= range.e.r; ++R) {
      for (let C = range.s.c; C <= range.e.c; ++C) {
        const cell_address = { c: C, r: R };
        const cell_ref = XLSX.utils.encode_cell(cell_address);
        if (worksheet[cell_ref]) {
          if (R > 5) {
            if (R === 6 || R === 7) {
              worksheet[cell_ref].s = headerStyle;
            } else {
              if (C > 1) {
                worksheet[cell_ref].s = textRightStyle;
              } else {
                worksheet[cell_ref].s = normalTextStyle;
              }
            }

            if (R === rowFooter) {
              worksheet[cell_ref].s = {
                ...worksheet[cell_ref].s,
                font: { name: "Times New Roman", bold: true, sz: "11" },
              };
            } else if (R === rowFooter + 1 || R === rowFooter + 3) {
              worksheet[cell_ref].s = textItalicStyle;
            } else if (R === rowFooter + 2) {
              worksheet[cell_ref].s = boldTextStyle;
            }
          } else {
            if (R == 0 || R == 1) worksheet[cell_ref].s = labelStyle;
            if (R == 4) worksheet[cell_ref].s = titleStyle;
          }
        } else {
          if (R === 6 || R === 7) {
            XLSX.utils.sheet_add_aoa(worksheet, [[""]], {
              origin: cell_ref,
            });
            worksheet[cell_ref].s = headerStyle;
          }
        }
      }
    }

    worksheet["!merges"] = [
      {
        s: { r: 0, c: 0 }, // Vị trí ô bắt đầu merge (A0)
        e: { r: 0, c: 3 }, // Vị trí ô kết thúc merge (A4)
      },
      {
        s: { r: 1, c: 0 },
        e: { r: 1, c: 3 },
      },
      {
        s: { r: 4, c: 0 },
        e: { r: 4, c: 12 },
      },
      // ô sau khi được merge sẽ lấy value của ô trái và ô trên cùng
      {
        s: { r: 6, c: 0 },
        e: { r: 7, c: 0 },
      },
      {
        s: { r: 6, c: 1 },
        e: { r: 7, c: 1 },
      },
      {
        s: { r: 6, c: 2 },
        e: { r: 7, c: 2 },
      },
      {
        s: { r: 6, c: 3 },
        e: { r: 6, c: 7 },
      },
      {
        s: { r: 6, c: 8 },
        e: { r: 6, c: 12 },
      },
      {
        s: { r: yearRow - 1, c: 8 },
        e: { r: yearRow - 1, c: 12 },
      },
      {
        s: { r: truongdonviRow - 1, c: 0 },
        e: { r: truongdonviRow - 1, c: 4 },
      },
      {
        s: { r: truongdonviRow - 1, c: 8 },
        e: { r: truongdonviRow - 1, c: 12 },
      },
      {
        s: { r: chukyRow - 1, c: 0 },
        e: { r: chukyRow - 1, c: 4 },
      },
      {
        s: { r: chukyRow - 1, c: 8 },
        e: { r: chukyRow - 1, c: 12 },
      },
    ];

    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, `${fileName}.xlsx`);
  };

  return (
    <div>
      <Button
        style={{ opacity: "0.8" }}
        variant="contained"
        color="success"
        onClick={handleExportExcel}
      >
        Export Excel
      </Button>
    </div>
  );
}
