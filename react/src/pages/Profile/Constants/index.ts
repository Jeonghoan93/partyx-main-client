import { users } from "src/services/api-examples/user";

export const popularHosts = [
  {
    host: users[0],
    name: "Jimmy",
    img: "https://media.licdn.com/dms/image/D4D03AQGIxd-BionXWQ/profile-displayphoto-shrink_800_800/0/1683486219744?e=1701302400&v=beta&t=iibgoRdGza1rALmAZhHlOm4SCme1chE4xsTtYnLT79g",
    desc: "Hosting best raves in town",
    hostedEvents: Array(677).fill({}), // Mock data with 677 events
  },
  {
    host: users[1],
    name: "Anna",
    img: "https://i.pravatar.cc/150",
    desc: "Master of ceremonies",
    hostedEvents: Array(543).fill({}), // Mock data
  },
  {
    host: users[2],
    name: "Robert",
    img: "https://i.pravatar.cc/151",
    desc: "Epic weekend parties",
    hostedEvents: Array(432).fill({}), // Mock data
  },
  {
    host: users[4],
    name: "Sophia",
    img: "https://i.pravatar.cc/152",
    desc: "Beach party lover",
    hostedEvents: Array(321).fill({}), // Mock data
  },
  {
    host: users[3],
    name: "Lucas",
    img: "https://i.pravatar.cc/153",
    desc: "Moonlight dance parties",
    hostedEvents: Array(210).fill({}), // Mock data
  },
];
