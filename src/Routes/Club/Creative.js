import React from "react";
import ClubList from "./ClubList";
import { clubs } from "fakedb.json";

const fakeDB = clubs.creative;

export default ({ match }) => (
  <ClubList match={match} title="창체동아리" data={fakeDB} />
);
