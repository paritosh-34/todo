const todosData = {
  collections: [
    {
      id: 1,
      name: "Work",
      color: "#5d26ca",
      todos: [
        {
          id: 1,
          heading: "Take out the trash",
          desc: "This should be done fast.",
          date: new Date(2020, 5, 20),
          time: {
            from: new Date(2020, 5, 20, 6, 24, 0),
            to: new Date(2020, 5, 20, 7, 45, 0),
          },
          completed: true,
        },
        {
          id: 2,
          heading: "Grocery shoppping",
          desc:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium odio quia doloribus accusamus illum dolorem, dolores minima ad. At, ratione provident recusandae incidunt eaque consequuntur cupiditate exercitationem eligendi ipsum, veniam suscipit assumenda aspernatur vitae tempora! Quibusdam esse ipsa assumenda, adipisci eos dolores nostrum, modi sapiente libero totam quaerat minima magni? ",
          date: new Date(2020, 5, 20),
          time: {
            from: new Date(2020, 5, 20, 6, 24, 0),
            to: new Date(2020, 5, 20, 7, 45, 0),
          },
          completed: false,
        },
        {
          id: 3,
          heading: "Clean gecko tank",
          desc: "This should be done fast.",
          date: new Date(2020, 5, 20),
          time: {
            from: new Date(2020, 5, 20, 6, 24, 0),
            to: new Date(2020, 5, 20, 7, 45, 0),
          },
          completed: false,
        },
        {
          id: 4,
          heading: "Mow lawn",
          desc: "This should be done fast.",
          date: new Date(2020, 5, 20),
          time: {
            from: new Date(2020, 5, 20, 6, 24, 0),
            to: new Date(2020, 5, 20, 7, 45, 0),
          },
          completed: true,
        },
        {
          id: 5,
          heading: "Catch up on Arrested Develepment",
          desc: "This should be done fast.",
          date: new Date(2020, 5, 20),
          time: {
            from: new Date(2020, 5, 20, 6, 24, 0),
            to: new Date(2020, 5, 20, 7, 45, 0),
          },
          completed: false,
        },
      ],
    },
    {
      id: 2,
      name: "Shopping",
      color: "#f5a92f",
      todos: [
        {
          id: 1,
          heading: "Dal",
          desc: "",
          date: new Date(2020, 5, 20),
          time: {
            from: new Date(2020, 5, 20, 6, 24, 0),
            to: new Date(2020, 5, 20, 7, 45, 0),
          },
          completed: true,
        },
        {
          id: 2,
          heading: "Channa",
          desc: "",
          date: new Date(2020, 5, 20),
          time: {
            from: new Date(2020, 5, 20, 6, 24, 0),
            to: new Date(2020, 5, 20, 7, 45, 0),
          },
          completed: false,
        },
        {
          id: 3,
          heading: "Toothpaste",
          desc: "This should be done fast.",
          date: new Date(2020, 5, 20),
          time: {
            from: new Date(2020, 5, 20, 6, 24, 0),
            to: new Date(2020, 5, 20, 7, 45, 0),
          },
          completed: false,
        },
        {
          id: 4,
          heading: "Hajmola",
          desc: "",
          date: new Date(2020, 5, 20),
          time: {
            from: new Date(2020, 5, 20, 6, 24, 0),
            to: new Date(2020, 5, 20, 7, 45, 0),
          },
          completed: true,
        },
        {
          id: 5,
          heading: "Chips",
          desc: "",
          date: new Date(2020, 5, 20),
          time: {
            from: new Date(2020, 5, 20, 6, 24, 0),
            to: new Date(2020, 5, 20, 7, 45, 0),
          },
          completed: false,
        },
      ],
    },
    {
      id: 3,
      name: "EveryDay",
      color: "#f45c33",
      todos: [
        {
          id: 1,
          heading: "Take out the trash",
          desc: "This should be done fast.",
          date: new Date(2020, 5, 20),
          time: {
            from: new Date(2020, 5, 20, 6, 24, 0),
            to: new Date(2020, 5, 20, 7, 45, 0),
          },
          completed: true,
        },
        {
          id: 2,
          heading: "Grocery shoppping",
          desc:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium odio quia doloribus accusamus illum dolorem, dolores minima ad. At, ratione provident recusandae incidunt eaque consequuntur cupiditate exercitationem eligendi ipsum, veniam suscipit assumenda aspernatur vitae tempora! Quibusdam esse ipsa assumenda, adipisci eos dolores nostrum, modi sapiente libero totam quaerat minima magni? ",
          date: new Date(2020, 5, 20),
          time: {
            from: new Date(2020, 5, 20, 6, 24, 0),
            to: new Date(2020, 5, 20, 7, 45, 0),
          },
          completed: false,
        },
        {
          id: 3,
          heading: "Clean gecko tank",
          desc: "This should be done fast.",
          date: new Date(2020, 5, 20),
          time: {
            from: new Date(2020, 5, 20, 6, 24, 0),
            to: new Date(2020, 5, 20, 7, 45, 0),
          },
          completed: false,
        },
        {
          id: 4,
          heading: "Mow lawn",
          desc: "This should be done fast.",
          date: new Date(2020, 5, 20),
          time: {
            from: new Date(2020, 5, 20, 6, 24, 0),
            to: new Date(2020, 5, 20, 7, 45, 0),
          },
          completed: true,
        },
        {
          id: 5,
          heading: "Catch up on Arrested Develepment",
          desc: "This should be done fast.",
          date: new Date(2020, 5, 20),
          time: {
            from: new Date(2020, 5, 20, 6, 24, 0),
            to: new Date(2020, 5, 20, 7, 45, 0),
          },
          completed: false,
        },
      ],
    },
    {
      id: 4,
      name: "Ideas",
      color: "#43c8dd",
      todos: [
        {
          id: 1,
          heading: "Take out the trash",
          desc: "This should be done fast.",
          date: new Date(2020, 5, 20),
          time: {
            from: new Date(2020, 5, 20, 6, 24, 0),
            to: new Date(2020, 5, 20, 7, 45, 0),
          },
          completed: true,
        },
        {
          id: 2,
          heading: "Grocery shoppping",
          desc:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium odio quia doloribus accusamus illum dolorem, dolores minima ad. At, ratione provident recusandae incidunt eaque consequuntur cupiditate exercitationem eligendi ipsum, veniam suscipit assumenda aspernatur vitae tempora! Quibusdam esse ipsa assumenda, adipisci eos dolores nostrum, modi sapiente libero totam quaerat minima magni? ",
          date: new Date(2020, 5, 20),
          time: {
            from: new Date(2020, 5, 20, 6, 24, 0),
            to: new Date(2020, 5, 20, 7, 45, 0),
          },
          completed: false,
        },
        {
          id: 3,
          heading: "Clean gecko tank",
          desc: "This should be done fast.",
          date: new Date(2020, 5, 20),
          time: {
            from: new Date(2020, 5, 20, 6, 24, 0),
            to: new Date(2020, 5, 20, 7, 45, 0),
          },
          completed: false,
        },
        {
          id: 4,
          heading: "Mow lawn",
          desc: "This should be done fast.",
          date: new Date(2020, 5, 20),
          time: {
            from: new Date(2020, 5, 20, 6, 24, 0),
            to: new Date(2020, 5, 20, 7, 45, 0),
          },
          completed: true,
        },
        {
          id: 5,
          heading: "Catch up on Arrested Develepment",
          desc: "This should be done fast.",
          date: new Date(2020, 5, 20),
          time: {
            from: new Date(2020, 5, 20, 6, 24, 0),
            to: new Date(2020, 5, 20, 7, 45, 0),
          },
          completed: false,
        },
      ],
    },
  ],
};

export default todosData;
