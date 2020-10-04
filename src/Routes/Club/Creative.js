import React from "react";
import ClubList from "./ClubList";
import { clubsApi } from "fakeapi";

const fakeDB = clubsApi.creativeList();

const bgUrl = "https://i.imgur.com/8Ab90of.png";

export default ({ match }) => (
  <ClubList
    match={match}
    title="창체동아리"
    subtitle="2020년 창체동아리 목록"
    bgImg={bgUrl}
    data={fakeDB}
  />
);
