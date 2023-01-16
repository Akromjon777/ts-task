import { Person, PersonClass } from "../types";

const users: Person = {
  id: 1,
  name: "Eshmat",
  address: {
    city: "Tashkent",
    main: {
      district: "Olmazor",
      street: "100109",
      postal: "Paxtachila",
      living: {
        flat: 12,
        house: 10,
      },
    },
  },
  education: {
    school: {
      primary: {
        number: 41,
        grade: 3,
      },
      high: {
        number: 43,
        address: {
          street: "Uygur kocha",
          orientation: "Chorsu",
        },
      },
    },
  },
  family: {
    father: {
      name: "Toshmat",
      age: 67,
      war: {
        title: "WW2",
        year: 1943,
        organizer: {
          name: "Hitler",
          from: "Austria",
          born: 1897,
          hobby: {
            title: "Painter",
            action: ["Poland", "England"],
          },
        },
      },
    },
  },
};


const product: PersonClass = {
  id: 1,
  name: "Shim",
  price: "150 000",
  category: {
    id: 3,
    title: "Kiyimlar",
  },
  from: {
    country: "Turkey",
    origin: {
      from: "Qoqon",
      who: "Mastura xola",
    },
  },
  where: {
    market: {
      open: {
        title: "Chorsu",
        address: {
          title: "Chorsu bozor",
          orientation: "Chorsu Gosht bozor",
        },
      },
    },
  },
};

// console.log(users);
// console.log(product);