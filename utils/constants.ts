import { Department } from "../models/department";

export const DEV_DEPARTMENTS: Department[] = [
  {
    name: {
      "zh-tw": "DIF(資訊管理與財務金融學系)",
      "en-us": "DIF(Department of Information Management and Finance)",
    },
    id: "2899D2A7-74F5-4778-9D0E-348CB10E9BCB",
    typeId: "*",
    categoryId: "*",
    collegeId: "*",
    grades: [],
  },
  {
    name: {
      "zh-tw": "DCP(資訊工程學系)",
      "en-us": "DCP(Department of Computer Science)",
    },
    id: "E2D47D2E-B529-4449-8619-8561D3401D32",
    typeId: "*",
    categoryId: "*",
    collegeId: "*",
    grades: [],
  },
];

export const COURSE_TYPE_COLORS: {
  [key: string]: string;
} = {
  必修: "#F44336",
  選修: "#3f51b5",
  通識: "#795548",
  軍訓: "#388E3C",
  教育: "#1DE9B6",
  其他: "#424242",
};
