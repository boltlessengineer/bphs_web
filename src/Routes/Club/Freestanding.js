import React from "react";
import ClubList from "./ClubList";

const fakeDB = [
  {
    title: "2020년 자율동아리 목록",
    sections: [
      {
        subtitle: "이공계",
        clublist: [
          {
            name: "웹테이커",
            tag: [],
          },
          {
            name: "화하학~",
            tag: [],
          },
          {
            name: "기하학!",
            tag: [],
          },
        ],
      },
      {
        subtitle: "인문계",
        clublist: [
          {
            name: "저자를 매우 철학",
            tag: [],
          },
        ],
      },
    ],
  },
];

export default () => <ClubList title="자율동아리" data={fakeDB} />;
