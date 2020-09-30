import React from "react";
import ClubList from "./ClubList";

const fakeDB = [
  {
    title: "2020년 창체동아리 목록",
    sections: [
      {
        subtitle: "이공계",
        clublist: [
          {
            name: "MAKER",
            tag: [],
          },
          {
            name: "BLINK - Y",
            tag: [],
          },
          {
            name: "BLINK - U",
            tag: [],
          },
        ],
      },
      {
        subtitle: "인문계",
        clublist: [
          {
            name: "인문입문",
            tag: [],
          },
        ],
      },
    ],
  },
];

export default () => <ClubList title="창체동아리" data={fakeDB} />;
