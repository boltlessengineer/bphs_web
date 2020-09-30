import React from "react";
import ClubList from "./ClubList";
import { clubs } from "fakedb.json";

const fakeDB = clubs.creative;

export default () => <ClubList title="창체동아리" data={fakeDB} />;
