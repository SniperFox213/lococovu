import { writable } from "svelte/store";

const store = () => {
  const { subscribe, update } = writable([
    {
      id: 0,
      
      nickname: "playing",
      avatar: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9a1f461-2fde-463b-908f-c82bd04cb609/db6cyso-9498e8e3-fb9d-45f5-8ebf-9bdfffffc749.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvYTlhMWY0NjEtMmZkZS00NjNiLTkwOGYtYzgyYmQwNGNiNjA5XC9kYjZjeXNvLTk0OThlOGUzLWZiOWQtNDVmNS04ZWJmLTliZGZmZmZmYzc0OS5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.hAChnz3Lt9CnrpnH1djuA0pqNHsVxdgybPwBHinkESE",

      status: {
        type: "playing",
        id: "8941284124"
      }
    },
    {
      id: 1,
      
      nickname: "online",
      avatar: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/164006253/original/529666081a7628b6449e68d4ebed5dfa02230494/make-cute-furry-icons.jpg",
      
      status: {
        type: "online",
      }
    },
    {
      id: 2,
      
      nickname: "away",
      avatar: "https://i.redd.it/g1thydyphei21.jpg",

      status: {
        type: "away"
      }
    },
    {
      id: 3,
      
      nickname: "offline",
      avatar: "https://i.redd.it/nnpc4i0n9rv31.png",

      status: {
        type: "offline"
      }
    }
  ]);

  return {
    subscribe

  };
};

export default store();