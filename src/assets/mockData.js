import muaDo from "./mua-do.jpg";
// Movies
export const movies = [
  {
    movie_id: 1,
    title: "Mưa đỏ",
    genre: "Hành động",
    duration: 125,
    description:
      "Kể về trận chiến cuối cùng chống lại thế lực xâm lược tàn bạo, khi bầu trời nhuốm màu đỏ máu bởi những cơn mưa lạ trút xuống khắp các thành phố. Đây không chỉ là một cuộc chiến sinh tồn, mà còn là hành trình của những con người bình thường buộc phải đứng lên bảo vệ quê hương.",
    release_date: "2025-04-26",
    poster_url: muaDo,
    director: "Anthony Russo, Joe Russo",
    cast: "Robert Downey Jr., Chris Evans, Scarlett Johansson",
  },
  {
    movie_id: 2,
    title: "The Batman",
    genre: "Action, Crime",
    duration: 175,
    description: "Bruce Wayne đối đầu với Riddler.",
    release_date: "2022-03-04",
    poster_url: muaDo,
    director: "Matt Reeves",
    cast: "Robert Pattinson, Zoë Kravitz, Paul Dano",
  },
  {
    movie_id: 3,
    title: "Parasite",
    genre: "Drama, Thriller",
    duration: 132,
    description: "Gia đình nghèo xâm nhập vào cuộc sống của nhà giàu.",
    release_date: "2019-05-30",
    poster_url: muaDo,
    director: "Bong Joon-ho",
    cast: "Song Kang-ho, Lee Sun-kyun, Cho Yeo-jeong",
  },
  {
    movie_id: 4,
    title: "Inside Out 2",
    genre: "Animation, Comedy",
    duration: 100,
    description: "Hành trình mới của các cảm xúc trong đầu Riley.",
    release_date: "2024-06-14",
    poster_url: muaDo,
    director: "Kelsey Mann",
    cast: "Amy Poehler, Phyllis Smith, Lewis Black",
  },
  {
    movie_id: 5,
    title: "Inside Out 2",
    genre: "Animation, Comedy",
    duration: 100,
    description: "Hành trình mới của các cảm xúc trong đầu Riley.",
    release_date: "2024-06-14",
    poster_url: muaDo,
    director: "Kelsey Mann",
    cast: "Amy Poehler, Phyllis Smith, Lewis Black",
  },
];

// theaters
export const theaters = [
  { theater_id: 1, name: "CGV Vincom", address: "Vincom Đồng Khởi, Q1, HCM" },
  {
    theater_id: 2,
    name: "Galaxy Nguyễn Du",
    address: "116 Nguyễn Du, Q1, HCM",
  },
  { theater_id: 3, name: "Lotte Cinema", address: "Gò Vấp, HCM" },
];

// Rooms
export const rooms = [
  { room_id: 1, theater_id: 1, name: "Room 1", capacity: 50 },
  { room_id: 2, theater_id: 1, name: "Room 2", capacity: 100 },
  { room_id: 3, theater_id: 2, name: "Room A", capacity: 70 },
  { room_id: 4, theater_id: 3, name: "Room VIP", capacity: 40 },
];

// Seats
export const seats = [
  {
    seat_id: 1,
    room_id: 1,
    seat_row: "A",
    seat_number: 1,
    seat_type: "Thường",
  },
  {
    seat_id: 2,
    room_id: 1,
    seat_row: "A",
    seat_number: 2,
    seat_type: "Thường",
  },
  { seat_id: 3, room_id: 1, seat_row: "B", seat_number: 1, seat_type: "VIP" },
  { seat_id: 4, room_id: 2, seat_row: "C", seat_number: 5, seat_type: "Đôi" },
  {
    seat_id: 5,
    room_id: 3,
    seat_row: "D",
    seat_number: 10,
    seat_type: "Thường",
  },
];

// Showtimes
export const showtimes = [
  {
    showtime_id: 1,
    movie_id: 1,
    room_id: 1,
    start_time: "2025-10-02T14:00:00",
    end_time: "2025-10-02T17:00:00",
    price: 90000,
  },
  {
    showtime_id: 2,
    movie_id: 1,
    room_id: 2,
    start_time: "2025-10-03T19:00:00",
    end_time: "2025-10-02T22:00:00",
    price: 120000,
  },
  {
    showtime_id: 3,
    movie_id: 1,
    room_id: 3,
    start_time: "2025-10-5T15:00:00",
    end_time: "2025-10-03T17:30:00",
    price: 80000,
  },
  {
    showtime_id: 4,
    movie_id: 1,
    room_id: 3,
    start_time: "2025-10-01T15:00:00",
    end_time: "2025-10-03T17:30:00",
    price: 80000,
  },
  {
    showtime_id: 5,
    movie_id: 1,
    room_id: 3,
    start_time: "2025-10-04T15:00:00",
    end_time: "2025-10-03T17:30:00",
    price: 80000,
  },
  {
    showtime_id: 6,
    movie_id: 4,
    room_id: 4,
    start_time: "2025-10-04T10:00:00",
    end_time: "2025-10-04T12:00:00",
    price: 75000,
  },
];

// Users
export const users = [
  {
    user_id: 1,
    full_name: "Nguyễn Văn A",
    email: "a@gmail.com",
    phone: "0901234567",
    role: "customer",
  },
  {
    user_id: 2,
    full_name: "Admin",
    email: "admin@gmail.com",
    phone: "0907654321",
    role: "admin",
  },
  {
    user_id: 3,
    full_name: "Trần Thị B",
    email: "b@gmail.com",
    phone: "0912345678",
    role: "customer",
  },
];

// Tickets
export const tickets = [
  {
    ticket_id: 1,
    showtime_id: 1,
    seat_id: 1,
    user_id: 1,
    booking_time: "2025-10-01T12:00:00",
    expire_time: "2025-10-01T14:00:00",
    status: "booked",
  },
  {
    ticket_id: 2,
    showtime_id: 2,
    seat_id: 3,
    user_id: 1,
    booking_time: "2025-10-01T13:00:00",
    expire_time: "2025-10-01T15:00:00",
    status: "pending",
  },
  {
    ticket_id: 3,
    showtime_id: 3,
    seat_id: 5,
    user_id: 3,
    booking_time: "2025-10-02T09:00:00",
    expire_time: "2025-10-02T11:00:00",
    status: "cancelled",
  },
];

// Payments
export const payments = [
  {
    payment_id: 1,
    ticket_id: 1,
    amount: 90000,
    payment_method: "Credit Card",
    payment_time: "2025-10-01T12:05:00",
    status: "success",
  },
  {
    payment_id: 2,
    ticket_id: 2,
    amount: 120000,
    payment_method: "Momo",
    payment_time: "2025-10-01T13:10:00",
    status: "pending",
  },
  {
    payment_id: 3,
    ticket_id: 3,
    amount: 80000,
    payment_method: "ZaloPay",
    payment_time: "2025-10-02T09:15:00",
    status: "failed",
  },
];

export const dummyTrailers = [
  {
    image: "https://img.youtube.com/vi/WpW36ldAqnM/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=WpW36ldAqnM",
  },
  {
    image: "https://img.youtube.com/vi/-sAOWhvheK8/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=-sAOWhvheK8",
  },
  {
    image: "https://img.youtube.com/vi/1pHDWnXmK7Y/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=1pHDWnXmK7Y",
  },
  {
    image: "https://img.youtube.com/vi/umiKiW4En9g/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=umiKiW4En9g",
  },
];

const dummyCastsData = [
  {
    name: "Milla Jovovich",
    profile_path:
      "https://image.tmdb.org/t/p/original/usWnHCzbADijULREZYSJ0qfM00y.jpg",
  },
  {
    name: "Dave Bautista",
    profile_path:
      "https://image.tmdb.org/t/p/original/snk6JiXOOoRjPtHU5VMoy6qbd32.jpg",
  },
  {
    name: "Arly Jover",
    profile_path:
      "https://image.tmdb.org/t/p/original/zmznPrQ9GSZwcOIUT0c3GyETwrP.jpg",
  },
  {
    name: "Amara Okereke",
    profile_path:
      "https://image.tmdb.org/t/p/original/nTSPtzWu6deZTJtWXHUpACVznY4.jpg",
  },
  {
    name: "Fraser James",
    profile_path:
      "https://image.tmdb.org/t/p/original/mGAPQG2OKTgdKFkp9YpvCSqcbgY.jpg",
  },
  {
    name: "Deirdre Mullins",
    profile_path:
      "https://image.tmdb.org/t/p/original/lJm89neuiVlYISEqNpGZA5kTAnP.jpg",
  },
  {
    name: "Sebastian Stankiewicz",
    profile_path:
      "https://image.tmdb.org/t/p/original/hLN0Ca09KwQOFLZLPIEzgTIbqqg.jpg",
  },
  {
    name: "Tue Lunding",
    profile_path:
      "https://image.tmdb.org/t/p/original/qY4W0zfGBYzlCyCC0QDJS1Muoa0.jpg",
  },
  {
    name: "Jacek Dzisiewicz",
    profile_path:
      "https://image.tmdb.org/t/p/original/6Ksb8ANhhoWWGnlM6O1qrySd7e1.jpg",
  },
  {
    name: "Ian Hanmore",
    profile_path:
      "https://image.tmdb.org/t/p/original/yhI4MK5atavKBD9wiJtaO1say1p.jpg",
  },
  {
    name: "Eveline Hall",
    profile_path:
      "https://image.tmdb.org/t/p/original/uPq4xUPiJIMW5rXF9AT0GrRqgJY.jpg",
  },
  {
    name: "Kamila Klamut",
    profile_path:
      "https://image.tmdb.org/t/p/original/usWnHCzbADijULREZYSJ0qfM00y.jpg",
  },
  {
    name: "Caoilinn Springall",
    profile_path:
      "https://image.tmdb.org/t/p/original/uZNtbPHowlBYo74U1qlTaRlrdiY.jpg",
  },
  {
    name: "Jan Kowalewski",
    profile_path:
      "https://image.tmdb.org/t/p/original/snk6JiXOOoRjPtHU5VMoy6qbd32.jpg",
  },
  {
    name: "Pawel Wysocki",
    profile_path:
      "https://image.tmdb.org/t/p/original/zmznPrQ9GSZwcOIUT0c3GyETwrP.jpg",
  },
  {
    name: "Simon Lööf",
    profile_path:
      "https://image.tmdb.org/t/p/original/cbZrB8crWlLEDjVUoak8Liak6s.jpg",
  },
  {
    name: "Tomasz Cymerman",
    profile_path:
      "https://image.tmdb.org/t/p/original/nTSPtzWu6deZTJtWXHUpACVznY4.jpg",
  },
];

export const dummyShowsData = [
  {
    movie_id: "324544",
    id: 324544,
    title: "In the Lost Lands",
    description:
      "A queen sends the powerful and feared sorceress Gray Alys to the ghostly wilderness of the Lost Lands in search of a magical power, where she and her guide, the drifter Boyce, must outwit and outfight both man and demon.",
    poster_url:
      "https://image.tmdb.org/t/p/original/dDlfjR7gllmr8HTeN6rfrYhTdwX.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/op3qmNhvwEvyT7UFyPbIfQmKriB.jpg",
    genres: [
      { id: 28, name: "Action" },
      { id: 14, name: "Fantasy" },
      { id: 12, name: "Adventure" },
    ],
    genre: "hành động",
    director: "123",
    cast: "hehe",
    casts: dummyCastsData,
    release_date: "2025-02-27",
    original_language: "en",
    tagline: "She seeks the power to free her people.",
    vote_average: 6.4,
    vote_count: 15000,
    runtime: 102,
    duration: 105,
  },
  {
    movie_id: "1232546",
    id: 1232546,
    title: "Until Dawn",
    description:
      "One year after her sister Melanie mysteriously disappeared, Clover and her friends head into the remote valley where she vanished in search of answers. Exploring an abandoned visitor center, they find themselves stalked by a masked killer and horrifically murdered one by one...only to wake up and find themselves back at the beginning of the same evening.",
    poster_url:
      "https://image.tmdb.org/t/p/original/juA4IWO52Fecx8lhAsxmDgy3M3.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/icFWIk1KfkWLZnugZAJEDauNZ94.jpg",
    genres: [
      { id: 27, name: "Horror" },
      { id: 9648, name: "Mystery" },
    ],
    casts: dummyCastsData,
    release_date: "2025-04-23",
    original_language: "en",
    tagline: "Every night a different nightmare.",
    vote_average: 6.405,
    vote_count: 18000,
    runtime: 103,
  },
  {
    movie_id: "552524",
    id: 552524,
    title: "Lilo & Stitch",
    description:
      "The wildly funny and touching story of a lonely Hawaiian girl and the fugitive alien who helps to mend her broken family.",
    poster_url:
      "https://image.tmdb.org/t/p/original/mKKqV23MQ0uakJS8OCE2TfV5jNS.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/7Zx3wDG5bBtcfk8lcnCWDOLM4Y4.jpg",
    genres: [
      { id: 10751, name: "Family" },
      { id: 35, name: "Comedy" },
      { id: 878, name: "Science Fiction" },
    ],
    casts: dummyCastsData,
    release_date: "2025-05-17",
    original_language: "en",
    tagline: "Hold on to your coconuts.",
    vote_average: 7.117,
    vote_count: 27500,
    runtime: 108,
  },
  {
    movie_id: "668489",
    id: 668489,
    title: "Havoc",
    description:
      "When a drug heist swerves lethally out of control, a jaded cop fights his way through a corrupt city's criminal underworld to save a politician's son.",
    poster_url:
      "https://image.tmdb.org/t/p/original/ubP2OsF3GlfqYPvXyLw9d78djGX.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/65MVgDa6YjSdqzh7YOA04mYkioo.jpg",
    genres: [
      { id: 28, name: "Action" },
      { id: 80, name: "Crime" },
      { id: 53, name: "Thriller" },
    ],
    casts: dummyCastsData,
    release_date: "2025-04-25",
    original_language: "en",
    tagline: "No law. Only disorder.",
    vote_average: 6.537,
    vote_count: 35960,
    runtime: 107,
  },
  {
    movie_id: "950387",
    id: 950387,
    title: "A Minecraft Movie",
    description:
      "Four misfits find themselves struggling with ordinary problems when they are suddenly pulled through a mysterious portal into the Overworld: a bizarre, cubic wonderland that thrives on imagination. To get back home, they'll have to master this world while embarking on a magical quest with an unexpected, expert crafter, Steve.",
    poster_url:
      "https://image.tmdb.org/t/p/original/yFHHfHcUgGAxziP1C3lLt0q2T4s.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/2Nti3gYAX513wvhp8IiLL6ZDyOm.jpg",
    genres: [
      { id: 10751, name: "Family" },
      { id: 35, name: "Comedy" },
      { id: 12, name: "Adventure" },
      { id: 14, name: "Fantasy" },
    ],
    casts: dummyCastsData,
    release_date: "2025-03-31",
    original_language: "en",
    tagline: "Be there and be square.",
    vote_average: 6.516,
    vote_count: 15225,
    runtime: 101,
  },
  {
    movie_id: "575265",
    id: 575265,
    title: "Mission: Impossible - The Final Reckoning",
    description:
      "Ethan Hunt and team continue their search for the terrifying AI known as the Entity — which has infiltrated intelligence networks all over the globe — with the world's governments and a mysterious ghost from Hunt's past on their trail. Joined by new allies and armed with the means to shut the Entity down for good, Hunt is in a race against time to prevent the world as we know it from changing forever.",
    poster_url:
      "https://image.tmdb.org/t/p/original/z53D72EAOxGRqdr7KXXWp9dJiDe.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/1p5aI299YBnqrEEvVGJERk2MXXb.jpg",
    genres: [
      { id: 28, name: "Action" },
      { id: 12, name: "Adventure" },
      { id: 53, name: "Thriller" },
    ],
    casts: dummyCastsData,
    release_date: "2025-05-17",
    original_language: "en",
    tagline: "Our lives are the sum of our choices.",
    vote_average: 7.042,
    vote_count: 19885,
    runtime: 170,
  },
  {
    movie_id: "986056",
    id: 986056,
    title: "Thunderbolts*",
    description:
      "After finding themselves ensnared in a death trap, seven disillusioned castoffs must embark on a dangerous mission that will force them to confront the darkest corners of their pasts.",
    poster_url:
      "https://image.tmdb.org/t/p/original/m9EtP1Yrzv6v7dMaC9mRaGhd1um.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/rthMuZfFv4fqEU4JVbgSW9wQ8rs.jpg",
    genres: [
      { id: 28, name: "Action" },
      { id: 878, name: "Science Fiction" },
      { id: 12, name: "Adventure" },
    ],
    casts: dummyCastsData,
    release_date: "2025-04-30",
    original_language: "en",
    tagline: "Everyone deserves a second shot.",
    vote_average: 7.443,
    vote_count: 23569,
    runtime: 127,
  },
];

export const dummyDateTimeData = {
  "2025-07-24": [
    { time: "2025-07-24T01:00:00.000Z", showId: "68395b407f6329be2bb45bd1" },
    { time: "2025-07-24T03:00:00.000Z", showId: "68395b407f6329be2bb45bd2" },
    { time: "2025-07-24T05:00:00.000Z", showId: "68395b407f6329be2bb45bd3" },
  ],
  "2025-07-25": [
    { time: "2025-07-25T01:00:00.000Z", showId: "68395b407f6329be2bb45bd4" },
    { time: "2025-07-25T03:00:00.000Z", showId: "68395b407f6329be2bb45bd5" },
    { time: "2025-07-25T05:00:00.000Z", showId: "68395b407f6329be2bb45bd6" },
  ],
  "2025-07-26": [
    { time: "2025-07-26T01:00:00.000Z", showId: "68395b407f6329be2bb45bd7" },
    { time: "2025-07-26T03:00:00.000Z", showId: "68395b407f6329be2bb45bd8" },
    { time: "2025-07-26T05:00:00.000Z", showId: "68395b407f6329be2bb45bd9" },
  ],
  "2025-07-27": [
    { time: "2025-07-27T01:00:00.000Z", showId: "68395b407f6329be2bb45bda" },
    { time: "2025-07-27T03:00:00.000Z", showId: "68395b407f6329be2bb45bdb" },
    { time: "2025-07-27T05:00:00.000Z", showId: "68395b407f6329be2bb45bdc" },
  ],
};

export const dummyDashboardData = {
  totalBookings: 14,
  totalRevenue: 1517,
  totalUser: 5,
  activeShows: [
    {
      _id: "68352363e96d99513e4221a4",
      movie: dummyShowsData[0],
      showDateTime: "2025-06-30T02:30:00.000Z",
      showPrice: "45,000 ",
      occupiedSeats: {
        A1: "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
        B1: "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
        C1: "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
      },
    },
    {
      _id: "6835238fe96d99513e4221a8",
      movie: dummyShowsData[1],
      showDateTime: "2025-06-30T15:30:00.000Z",
      showPrice: "50,000 ",
      occupiedSeats: {},
    },
    {
      _id: "6835238fe96d99513e4221a9",
      movie: dummyShowsData[2],
      showDateTime: "2025-06-30T03:30:00.000Z",
      showPrice: 81,
      occupiedSeats: {},
    },
    {
      _id: "6835238fe96d99513e4221aa",
      movie: dummyShowsData[3],
      showDateTime: "2025-07-15T16:30:00.000Z",
      showPrice: 81,
      occupiedSeats: {
        A1: "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
        A2: "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
        A3: "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
        A4: "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
      },
    },
    {
      _id: "683682072b5989c29fc6dc0d",
      movie: dummyShowsData[4],
      showDateTime: "2025-06-05T15:30:00.000Z",
      showPrice: 49,
      occupiedSeats: {
        A1: "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
        A2: "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
        A3: "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
        B1: "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
        B2: "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
        B3: "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
      },
      __v: 0,
    },
    {
      _id: "68380044686d454f2116b39a",
      movie: dummyShowsData[5],
      showDateTime: "2025-06-20T16:00:00.000Z",
      showPrice: 79,
      occupiedSeats: {
        A1: "user_2xl7eCSUHddibk5lRxfOtw9RMwX",
        A2: "user_2xl7eCSUHddibk5lRxfOtw9RMwX",
      },
    },
  ],
};

export const dummyBookingData = [
  {
    _id: "68396334fb83252d82e17295",
    user: { name: "GreatStack" },
    show: {
      _id: "68352363e96d99513e4221a4",
      movie: dummyShowsData[0],
      showDateTime: "2025-06-30T02:30:00.000Z",
      showPrice: 59,
    },
    amount: 98,
    bookedSeats: ["D1", "D2"],
    isPaid: false,
  },
  {
    _id: "68396334fb83252d82e17295",
    user: { name: "GreatStack" },
    show: {
      _id: "68352363e96d99513e4221a4",
      movie: dummyShowsData[0],
      showDateTime: "2025-06-30T02:30:00.000Z",
      showPrice: 59,
    },
    amount: 49,
    bookedSeats: ["A1"],
    isPaid: true,
  },
  {
    _id: "68396334fb83252d82e17295",
    user: { name: "GreatStack" },
    show: {
      _id: "68352363e96d99513e4221a4",
      movie: dummyShowsData[0],
      showDateTime: "2025-06-30T02:30:00.000Z",
      showPrice: 59,
    },
    amount: 147,
    bookedSeats: ["A1", "A2", "A3"],
    isPaid: true,
  },
];
