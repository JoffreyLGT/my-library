const fakeServerData = {
  name: "Joffrey",
  items: [
    {
      id: 1,
      name: "Sim City",
      platform: "PC"
    },
    {
      id: 2,
      name: "Doom",
      platform: "Xbox One",
      url:
        "https://www.mobygames.com/images/covers/l/330671-doom-xbox-one-front-cover.png"
    },
    {
      id: 3,
      name: "Super Mario Odyssey",
      platform: "Switch"
    },
    {
      id: 4,
      name: "Stardew Valley",
      platform: "Switch",
      url: "https://i.ebayimg.com/images/i/292386150442-0-1/s-l1000.jpg"
    },
    {
      id: 5,
      name: "Stellaris",
      platform: "PC",
      url:
        "https://vignette.wikia.nocookie.net/yogscast/images/e/e7/Stellaris_cover_art.jpg/revision/latest?cb=20160520205240"
    }
  ]
};

const fakePlatformsData = ["PC", "Xbox One", "Switch"];

const fakeAccounts = [
  {
    email: "joffrey@test.fr",
    password: "hello"
  }
];

export { fakeServerData, fakePlatformsData, fakeAccounts };
