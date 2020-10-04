import React from "react";
import ClubList from "./ClubList";
import { clubsApi } from "fakeapi";

const fakeDB = clubsApi.freestandingList();

export default ({ match }) => (
  <ClubList
    match={match}
    title="자율동아리"
    subtitle="2020년 자율동아리 목록"
    data={fakeDB}
  />
);
