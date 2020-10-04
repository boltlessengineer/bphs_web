import db from "fakedb.json";

export const clubsApi = {
  creativeList: () => db.clubs.creative,
  freestandingList: () => db.clubs.freestanding,
  clubDetail: (id) => db.clubs.creative.filter((club) => club.id === id)[0],
};
