export const sampleChats = [
  {
    avatar: ["https://images4.alphacoders.com/233/233958.jpg"],
    name: "John Doe",
    _id: "1",
    groupChat: false,
    members: ["1", "2"],
  },
  {
    avatar: [
      "https://c.ndtvimg.com/2023-12/28l5ahjo_nostradamus_625x300_31_December_23.jpeg",
    ],
    name: "Nostradamus",
    _id: "2",
    groupChat: false,
    members: ["1", "2"],
  },
];

export const sampleUsers = [
  {
    avatar: "https://images4.alphacoders.com/233/233958.jpg",
    name: "John Doe",
    _id: "1",
  },
  {
    avatar: "https://images4.alphacoders.com/233/233958.jpg",
    name: "John Doe",
    _id: "2",
  },
];

export const sampleNofications = [
  {
    sender: {
      avatar: "https://images4.alphacoders.com/233/233958.jpg",
      name: "John Doe",
    },
    _id: "1",
  },
  {
    sender: {
      avatar: "https://images4.alphacoders.com/233/233958.jpg",
      name: "John Doe",
    },
    _id: "2",
  },
];

export const sampleMessage = [
  {
    attachments: [],
    content: "This is the test sample message",
    _id: "fskjlsfd",
    sender: {
      _id: "user._id",
      name: "Sender",
    },
    chat: "chatId",
    createdAt: "2024-02-12T10:41:30.630Z",
  },
  {
    attachments: [
      {
        public_id: "ashdfdf",
        url: "https://images4.alphacoders.com/233/233958.jpg",
      },
    ],
    _id: "fskjlsfdfdf",
    sender: {
      _id: "fjslfd",
      name: "Sender",
    },
    chat: "chatIdfd",
    createdAt: "2024-02-12T10:41:30.630Z",
  },
];

export const dashboardData = {
  users: [
    {
      name: "John Doe",
      avatar: "https://images4.alphacoders.com/233/233958.jpg",
      _id: "1",
      username: "john_doe",
      friends: 20,
      groups: 7,
    },
    {
      name: "Sonam",
      avatar: "https://images4.alphacoders.com/233/233958.jpg",
      _id: "2",
      username: "sundar_sonam",
      friends: 10,
      groups: 4,
    },
  ],

  chats: [
    {
      name: "Lode ka group",
      avatar: ["https://images4.alphacoders.com/233/233958.jpg"],
      _id: "1",
      groupChat: false,
      members: [
        { _id: "1", avatar: "https://images4.alphacoders.com/233/233958.jpg" },
        { _id: "2", avatar: "https://images4.alphacoders.com/233/233958.jpg" },
      ],
      totalMembers: 2,
      totalMessages: 20,
      creator: {
        name: "John Dow",
        avatar: "https://images4.alphacoders.com/233/233958.jpg",
      },
    },
    {
      name: "Friends forever",
      avatar: ["https://images4.alphacoders.com/233/233958.jpg"],
      _id: "2",
      groupChat: false,
      members: [
        { _id: "1", avatar: "https://images4.alphacoders.com/233/233958.jpg" },
        { _id: "2", avatar: "https://images4.alphacoders.com/233/233958.jpg" },
      ],
      totalMembers: 4,
      totalMessages: 60,
      creator: {
        name: "John Dow",
        avatar: "https://images4.alphacoders.com/233/233958.jpg",
      },
    },
  ],
  Messages: [
    {
      attachments: [],
      content: "Ha bhai kaha hai?",
      _id: "fjdkslfjsdf",
      sender: {
        avatar: "https://images4.alphacoders.com/233/233958.jpg",
        name: "Chutiya",
      },
      chat: "chatId",
      groupChat: false,
      createdAt: "2024-02-12T10:41:30.6302",
    },
    {
      attachments: [
        {
          public_id: "asjkds",
          url: "https://images4.alphacoders.com/233/233958.jpg",
        },
      ],
      content: "",
      _id: "dlrksjdrsr",
      sender: {
        avatar: "https://images4.alphacoders.com/233/233958.jpg",
        name: "Chutiya 2",
      },
      chat: "chatId",
      groupChat: true,
      createdAt: "2024-02-12T10:41:30.6302",
    },
  ],
};
