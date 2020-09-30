import React from "react";
import ClubList from "./ClubList";
import { clubs } from "fakedb.json";

const fakeDB = clubs.freestading;

export default () => <ClubList title="자율동아리" data={fakeDB} />;
