import React from "react";
import ClubList from "./ClubList";
import { clubs } from "fakedb.json";

const fakeDB = clubs.creative;

const bgUrl = "https://i.imgur.com/8Ab90of.png";

export default ({ match }) => (
  <ClubList match={match} title="창체동아리" bgImg={bgUrl} data={fakeDB} />
);
