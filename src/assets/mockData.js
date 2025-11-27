// dummyData.js
// Online poster URLs used for movies
export const movies = [
  {
    movie_id: "f3c1d8b2-4b7f-4ab1-9a75-81c7a3c90410",
    title: "Avengers: Endgame",
    genre: "Action, Adventure",
    director: "Anthony Russo, Joe Russo",
    cast: "Robert Downey Jr., Chris Evans, Scarlett Johansson",
    duration: 181,
    description:
      "The Avengers assemble once more to undo Thanos' actions and restore balance to the universe.",
    release_date: "2019-04-26",
    poster_url:
      "https://image.tmdb.org/t/p/original/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
  },
  {
    movie_id: "e84db94e-51cf-41ad-b76d-6e77e42f0f31",
    title: "Joker",
    genre: "Drama, Thriller",
    director: "Todd Phillips",
    cast: "Joaquin Phoenix",
    duration: 122,
    description:
      "A gritty character study of Arthur Fleck, a man disregarded by society who transforms into the criminal mastermind known as the Joker.",
    release_date: "2019-10-04",
    poster_url:
      "https://image.tmdb.org/t/p/original/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
  },
  {
    movie_id: "c1a2b3d4-e5f6-4123-9987-abcdef123456",
    title: "Inception",
    genre: "Sci-Fi, Action",
    director: "Christopher Nolan",
    cast: "Leonardo DiCaprio, Joseph Gordon-Levitt",
    duration: 148,
    description:
      "A thief who steals corporate secrets through dream-sharing technology must plant an idea into a CEO's mind.",
    release_date: "2010-07-16",
    poster_url:
      "https://image.tmdb.org/t/p/original/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg",
  },
  {
    movie_id: "b2b3b4b5-c6c7-48d0-aaaa-bbbbbbbbbbbb",
    title: "Interstellar",
    genre: "Sci-Fi, Drama",
    director: "Christopher Nolan",
    cast: "Matthew McConaughey, Anne Hathaway",
    duration: 169,
    description:
      "A team of explorers travel through a wormhole in space to ensure humanity's survival.",
    release_date: "2014-11-07",
    poster_url:
      "https://image.tmdb.org/t/p/original/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
  },
  {
    movie_id: "d4d5d6d7-e8f9-4123-1111-222222222222",
    title: "Parasite",
    genre: "Drama, Thriller",
    director: "Bong Joon-ho",
    cast: "Song Kang-ho, Lee Sun-kyun",
    duration: 132,
    description:
      "Greed and class discrimination threaten the newly formed relationship between the wealthy Park family and the destitute Kim clan.",
    release_date: "2019-05-30",
    poster_url:
      "https://image.tmdb.org/t/p/original/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
  },
  {
    movie_id: "e5e6e7e8-f9f0-4123-3333-444444444444",
    title: "The Batman",
    genre: "Action, Crime",
    director: "Matt Reeves",
    cast: "Robert Pattinson, Zoë Kravitz, Paul Dano",
    duration: 175,
    description:
      "Batman uncovers corruption in Gotham and faces the Riddler, a serial killer targeting the city elite.",
    release_date: "2022-03-04",
    poster_url:
      "https://image.tmdb.org/t/p/original/74xTEgt7R36Fpooo50r9T25onhq.jpg",
  },
  {
    movie_id: "f6f7f8f9-0a0b-4123-5555-666666666666",
    title: "Mission: Impossible - Dead Reckoning",
    genre: "Action, Adventure",
    director: "Christopher McQuarrie",
    cast: "Tom Cruise",
    duration: 163,
    description:
      "Ethan Hunt and team race to stop a dangerous global threat controlled by an advanced AI.",
    release_date: "2023-07-12",
    poster_url:
      "https://image.tmdb.org/t/p/original/5Le8zb4B1gqK5mCw2mWQwQJkR0E.jpg",
  },
  {
    movie_id: "a7a8a9aa-bbcb-4123-7777-888888888888",
    title: "Dune: Part Two",
    genre: "Sci-Fi, Adventure",
    director: "Denis Villeneuve",
    cast: "Timothée Chalamet",
    duration: 155,
    description:
      "Paul Atreides unites with Chani and the Fremen to seek revenge against those who destroyed his family.",
    release_date: "2024-11-01",
    poster_url:
      "https://image.tmdb.org/t/p/original/8g18jFHCLXn1czFzZtF8P6Y0W3V.jpg",
  },
];

// Theaters
export const theaters = [
  {
    theater_id: "c2b9f529-84ce-4b1a-9d84-50cd9319efb1",
    name: "CGV Vincom Center",
    address: "Vincom Center, Hanoi",
  },
  {
    theater_id: "1f2c2bb4-2a8c-4ed1-a523-63ad1e6d82c2",
    name: "Lotte Cinema Landmark",
    address: "Landmark 81, HCMC",
  },
  {
    theater_id: "3a3b3c3d-4d4e-4f4f-9f9f-777777777777",
    name: "Galaxy Nguyễn Du",
    address: "116 Nguyễn Du, Q1, HCMC",
  },
  {
    theater_id: "4a4b4c4d-5d5e-6f6f-8f8f-999999999999",
    name: "BHD Star Bitexco",
    address: "Bitexco Tower, HCMC",
  },
];

// Rooms (linked to theaters)
export const rooms = [
  {
    room_id: "b3fa70f8-6293-4b12-a41f-522b06df7d81",
    theater_id: "c2b9f529-84ce-4b1a-9d84-50cd9319efb1",
    name: "Room 1",
    type: "IMAX",
    capacity: 120,
  },
  {
    room_id: "dd312cb1-8ef9-4bec-a3da-a618f32f60a5",
    theater_id: "1f2c2bb4-2a8c-4ed1-a523-63ad1e6d82c2",
    name: "Room A",
    type: "Standard",
    capacity: 80,
  },
  {
    room_id: "r3c1-0001-1111-2222-333333333333",
    theater_id: "c2b9f529-84ce-4b1a-9d84-50cd9319efb1",
    name: "Room 2",
    type: "Standard",
    capacity: 100,
  },
  {
    room_id: "r3c1-0002-1111-2222-444444444444",
    theater_id: "3a3b3c3d-4d4e-4f4f-9f9f-777777777777",
    name: "Room B",
    type: "Premium",
    capacity: 70,
  },
  {
    room_id: "r3c1-0003-1111-2222-555555555555",
    theater_id: "4a4b4c4d-5d5e-6f6f-8f8f-999999999999",
    name: "Room VIP",
    type: "VIP",
    capacity: 40,
  },
  {
    room_id: "r3c1-0004-1111-2222-666666666666",
    theater_id: "1f2c2bb4-2a8c-4ed1-a523-63ad1e6d82c2",
    name: "Room C",
    type: "4DX",
    capacity: 60,
  },
  {
    room_id: "r3c1-0005-1111-2222-777777777777",
    theater_id: "c2b9f529-84ce-4b1a-9d84-50cd9319efb1",
    name: "Room 3",
    type: "Standard",
    capacity: 90,
  },
  {
    room_id: "r3c1-0006-1111-2222-888888888888",
    theater_id: "3a3b3c3d-4d4e-4f4f-9f9f-777777777777",
    name: "Room C",
    type: "Standard",
    capacity: 85,
  },
];

// Seats (generate a reasonable set per room; smaller set for demo)
export const seats = [
  // Room b3fa70f8 (Room 1) rows A-D x 8 seats = 32
  ...Array.from({ length: 32 }).map((_, i) => {
    const row = String.fromCharCode(65 + Math.floor(i / 8)); // A-D
    const number = (i % 8) + 1;
    return {
      seat_id: `s-room1-${row}${number}`,
      room_id: "b3fa70f8-6293-4b12-a41f-522b06df7d81",
      seat_row: row,
      seat_number: number,
      seat_type: row === "A" || row === "B" ? "VIP" : "normal",
    };
  }),
  // Room dd312cb1 (Room A) rows A-C x 6 seats = 18
  ...Array.from({ length: 18 }).map((_, i) => {
    const row = String.fromCharCode(65 + Math.floor(i / 6)); // A-C
    const number = (i % 6) + 1;
    return {
      seat_id: `s-roomA-${row}${number}`,
      room_id: "dd312cb1-8ef9-4bec-a3da-a618f32f60a5",
      seat_row: row,
      seat_number: number,
      seat_type: row === "A" ? "VIP" : "normal",
    };
  }),
  // Room r3c1-0001 rows A-C x 8 seats = 24
  ...Array.from({ length: 24 }).map((_, i) => {
    const row = String.fromCharCode(65 + Math.floor(i / 8)); // A-C
    const number = (i % 8) + 1;
    return {
      seat_id: `s-room2-${row}${number}`,
      room_id: "r3c1-0001-1111-2222-333333333333",
      seat_row: row,
      seat_number: number,
      seat_type: "normal",
    };
  }),
  // Room r3c1-0002 small 12 seats
  ...Array.from({ length: 12 }).map((_, i) => {
    const row = String.fromCharCode(65 + Math.floor(i / 4)); // A-C
    const number = (i % 4) + 1;
    return {
      seat_id: `s-roomB-${row}${number}`,
      room_id: "r3c1-0002-1111-2222-444444444444",
      seat_row: row,
      seat_number: number,
      seat_type: "normal",
    };
  }),
  // Room r3c1-0003 VIP 10 seats
  ...Array.from({ length: 10 }).map((_, i) => {
    const row = String.fromCharCode(65 + Math.floor(i / 5)); // A-B
    const number = (i % 5) + 1;
    return {
      seat_id: `s-roomVIP-${row}${number}`,
      room_id: "r3c1-0003-1111-2222-555555555555",
      seat_row: row,
      seat_number: number,
      seat_type: "vip",
    };
  }),
  // Room r3c1-0004 12 seats
  ...Array.from({ length: 12 }).map((_, i) => {
    const row = String.fromCharCode(65 + Math.floor(i / 6)); // A-B
    const number = (i % 6) + 1;
    return {
      seat_id: `s-roomC-${row}${number}`,
      room_id: "r3c1-0004-1111-2222-666666666666",
      seat_row: row,
      seat_number: number,
      seat_type: "normal",
    };
  }),
  // Room r3c1-0005 16 seats
  ...Array.from({ length: 16 }).map((_, i) => {
    const row = String.fromCharCode(65 + Math.floor(i / 8)); // A-B
    const number = (i % 8) + 1;
    return {
      seat_id: `s-room3-${row}${number}`,
      room_id: "r3c1-0005-1111-2222-777777777777",
      seat_row: row,
      seat_number: number,
      seat_type: "normal",
    };
  }),
  // Room r3c1-0006 14 seats
  ...Array.from({ length: 14 }).map((_, i) => {
    const row = String.fromCharCode(65 + Math.floor(i / 7)); // A-B
    const number = (i % 7) + 1;
    return {
      seat_id: `s-roomC2-${row}${number}`,
      room_id: "r3c1-0006-1111-2222-888888888888",
      seat_row: row,
      seat_number: number,
      seat_type: "normal",
    };
  }),
];

// Showtimes (link movies <-> rooms). Use ISO-like strings (no timezone)
export const showtimes = [
  // Avengers showtimes
  {
    showtime_id: "fa199cc5-1a9d-4a26-a689-c4081e77095b",
    movie_id: "f3c1d8b2-4b7f-4ab1-9a75-81c7a3c90410",
    room_id: "b3fa70f8-6293-4b12-a41f-522b06df7d81",
    start_time: "2025-01-20T19:00:00",
    end_time: "2025-01-20T22:00:00",
    price: 120000,
  },
  {
    showtime_id: "st-2-avengers",
    movie_id: "f3c1d8b2-4b7f-4ab1-9a75-81c7a3c90410",
    room_id: "r3c1-0001-1111-2222-333333333333",
    start_time: "2025-01-21T16:00:00",
    end_time: "2025-01-21T19:00:00",
    price: 100000,
  },
  // Joker
  {
    showtime_id: "4e2a9ecf-365e-4eaf-ac73-fcc6b63a4ae8",
    movie_id: "e84db94e-51cf-41ad-b76d-6e77e42f0f31",
    room_id: "dd312cb1-8ef9-4bec-a3da-a618f32f60a5",
    start_time: "2025-01-21T20:00:00",
    end_time: "2025-01-21T22:05:00",
    price: 100000,
  },
  // Inception
  {
    showtime_id: "st-inception-1",
    movie_id: "c1a2b3d4-e5f6-4123-9987-abcdef123456",
    room_id: "r3c1-0001-1111-2222-333333333333",
    start_time: "2025-02-10T18:30:00",
    end_time: "2025-02-10T21:00:00",
    price: 90000,
  },
  // Interstellar
  {
    showtime_id: "st-interstellar-1",
    movie_id: "b2b3b4b5-c6c7-48d0-aaaa-bbbbbbbbbbbb",
    room_id: "r3c1-0001-1111-2222-333333333333",
    start_time: "2025-02-11T19:00:00",
    end_time: "2025-02-11T22:00:00",
    price: 110000,
  },
  // Parasite
  {
    showtime_id: "st-parasite-1",
    movie_id: "d4d5d6d7-e8f9-4123-1111-222222222222",
    room_id: "r3c1-0002-1111-2222-444444444444",
    start_time: "2025-02-12T17:00:00",
    end_time: "2025-02-12T19:15:00",
    price: 85000,
  },
  // The Batman
  {
    showtime_id: "st-batman-1",
    movie_id: "e5e6e7e8-f9f0-4123-3333-444444444444",
    room_id: "r3c1-0003-1111-2222-555555555555",
    start_time: "2025-02-13T20:00:00",
    end_time: "2025-02-13T23:00:00",
    price: 130000,
  },
  // Mission
  {
    showtime_id: "st-mission-1",
    movie_id: "f6f7f8f9-0a0b-4123-5555-666666666666",
    room_id: "r3c1-0004-1111-2222-666666666666",
    start_time: "2025-02-14T19:30:00",
    end_time: "2025-02-14T22:15:00",
    price: 125000,
  },
  // Dune
  {
    showtime_id: "st-dune-1",
    movie_id: "a7a8a9aa-bbcb-4123-7777-888888888888",
    room_id: "r3c1-0005-1111-2222-777777777777",
    start_time: "2025-02-15T18:00:00",
    end_time: "2025-02-15T20:35:00",
    price: 140000,
  },
  // Extra showtimes to have variety (some repeats)
  {
    showtime_id: "st-extra-1",
    movie_id: "f3c1d8b2-4b7f-4ab1-9a75-81c7a3c90410",
    room_id: "r3c1-0006-1111-2222-888888888888",
    start_time: "2025-02-16T14:00:00",
    end_time: "2025-02-16T17:00:00",
    price: 95000,
  },
  {
    showtime_id: "st-extra-2",
    movie_id: "c1a2b3d4-e5f6-4123-9987-abcdef123456",
    room_id: "b3fa70f8-6293-4b12-a41f-522b06df7d81",
    start_time: "2025-02-16T21:00:00",
    end_time: "2025-02-17T00:00:00",
    price: 100000,
  },
  {
    showtime_id: "st-extra-3",
    movie_id: "d4d5d6d7-e8f9-4123-1111-222222222222",
    room_id: "r3c1-0001-1111-2222-333333333333",
    start_time: "2025-02-17T15:30:00",
    end_time: "2025-02-17T17:45:00",
    price: 80000,
  },
  {
    showtime_id: "st-extra-4",
    movie_id: "e5e6e7e8-f9f0-4123-3333-444444444444",
    room_id: "dd312cb1-8ef9-4bec-a3da-a618f32f60a5",
    start_time: "2025-02-17T19:30:00",
    end_time: "2025-02-17T22:30:00",
    price: 120000,
  },
];

// Users
export const users = [
  {
    user_id: "6c5e3525-894b-4e40-9da6-4e4cd27314f9",
    full_name: "Nguyen Van A",
    email: "vana@example.com",
    phone: "0901234567",
    password_hash: "",
    avatar_url: "",
    role: "customer",
  },
  {
    user_id: "1a843db6-e1e9-4784-b7f9-6cce8bc0c255",
    full_name: "Admin",
    email: "admin@example.com",
    phone: "0900000000",
    password_hash: "",
    avatar_url: "",
    role: "admin",
  },
  {
    user_id: "u-3-2222-3333-4444-555555555555",
    full_name: "Tran Thi B",
    email: "b@example.com",
    phone: "0912345678",
    password_hash: "",
    avatar_url: "",
    role: "customer",
  },
  {
    user_id: "u-4-2222-3333-4444-666666666666",
    full_name: "Le Van C",
    email: "c@example.com",
    phone: "0909876543",
    password_hash: "",
    avatar_url: "",
    role: "customer",
  },
  {
    user_id: "u-5-2222-3333-4444-777777777777",
    full_name: "Pham Thi D",
    email: "d@example.com",
    phone: "0911223344",
    password_hash: "",
    avatar_url: "",
    role: "staff",
  },
  {
    user_id: "u-6-2222-3333-4444-888888888888",
    full_name: "Tran Admin",
    email: "tran.admin@example.com",
    phone: "0904445556",
    password_hash: "",
    avatar_url: "",
    role: "admin",
  },
  {
    user_id: "u-7-2222-3333-4444-999999999999",
    full_name: "Guest User",
    email: "guest@example.com",
    phone: "",
    password_hash: "",
    avatar_url: "",
    role: "customer",
  },
  {
    user_id: "u-8-2222-3333-4444-aaaaaaaaaaaa",
    full_name: "Staff Two",
    email: "staff2@example.com",
    phone: "0906667778",
    password_hash: "",
    avatar_url: "",
    role: "staff",
  },
];

// Tickets (some booked/paid/cancelled)
export const tickets = [
  {
    ticket_id: "cfe89d64-bdbd-4efc-bb0d-3ed175f5ae5a",
    showtime_id: "fa199cc5-1a9d-4a26-a689-c4081e77095b",
    seat_id: "s-room1-A1",
    user_id: "6c5e3525-894b-4e40-9da6-4e4cd27314f9",
    type: "adult",
    booking_time: "2025-01-20T18:10:00",
    expire_time: "2025-01-20T18:30:00",
    status: 1, // 1 = booked/active
  },
  {
    ticket_id: "t-2-0001-1111-2222-000000000001",
    showtime_id: "4e2a9ecf-365e-4eaf-ac73-fcc6b63a4ae8",
    seat_id: "s-roomA-A1",
    user_id: "6c5e3525-894b-4e40-9da6-4e4cd27314f9",
    type: "adult",
    booking_time: "2025-01-21T19:30:00",
    expire_time: "2025-01-21T19:50:00",
    status: 0, // 0 = pending
  },
  {
    ticket_id: "t-3-0001-1111-2222-000000000002",
    showtime_id: "st-inception-1",
    seat_id: "s-room2-B3",
    user_id: "u-3-2222-3333-4444-555555555555",
    type: "child",
    booking_time: "2025-02-10T17:50:00",
    expire_time: "2025-02-10T18:10:00",
    status: 2, // 2 = cancelled
  },
  {
    ticket_id: "t-4-0001-1111-2222-000000000003",
    showtime_id: "st-batman-1",
    seat_id: "s-roomVIP-A1",
    user_id: "u-4-2222-3333-4444-666666666666",
    type: "adult",
    booking_time: "2025-02-13T18:50:00",
    expire_time: "2025-02-13T19:10:00",
    status: 1,
  },
  {
    ticket_id: "t-5-0001-1111-2222-000000000004",
    showtime_id: "st-dune-1",
    seat_id: "s-room3-A2",
    user_id: "u-5-2222-3333-4444-777777777777",
    type: "adult",
    booking_time: "2025-02-15T17:30:00",
    expire_time: "2025-02-15T17:50:00",
    status: 1,
  },
  // couple more tickets for testing
  {
    ticket_id: "t-6-0001-1111-2222-000000000005",
    showtime_id: "st-extra-1",
    seat_id: "s-roomC-A1",
    user_id: "u-7-2222-3333-4444-999999999999",
    type: "adult",
    booking_time: "2025-02-16T13:30:00",
    expire_time: "2025-02-16T13:50:00",
    status: 1,
  },
  {
    ticket_id: "t-7-0001-1111-2222-000000000006",
    showtime_id: "st-extra-2",
    seat_id: "s-room1-B5",
    user_id: "u-8-2222-3333-4444-aaaaaaaaaaaa",
    type: "adult",
    booking_time: "2025-02-16T20:20:00",
    expire_time: "2025-02-16T20:40:00",
    status: 0,
  },
  {
    ticket_id: "t-8-0001-1111-2222-000000000007",
    showtime_id: "st-extra-3",
    seat_id: "s-room2-C2",
    user_id: "6c5e3525-894b-4e40-9da6-4e4cd27314f9",
    type: "adult",
    booking_time: "2025-02-17T14:40:00",
    expire_time: "2025-02-17T15:00:00",
    status: 1,
  },
  {
    ticket_id: "t-9-0001-1111-2222-000000000008",
    showtime_id: "st-extra-4",
    seat_id: "s-roomA-B2",
    user_id: "u-3-2222-3333-4444-555555555555",
    type: "adult",
    booking_time: "2025-02-17T18:00:00",
    expire_time: "2025-02-17T18:20:00",
    status: 1,
  },
  {
    ticket_id: "t-10-0001-1111-2222-000000000009",
    showtime_id: "st-mission-1",
    seat_id: "s-roomC2-A3",
    user_id: "u-6-2222-3333-4444-888888888888",
    type: "adult",
    booking_time: "2025-02-14T18:30:00",
    expire_time: "2025-02-14T18:50:00",
    status: 1,
  },
  {
    ticket_id: "t-11-0001-1111-2222-000000000010",
    showtime_id: "st-parasite-1",
    seat_id: "s-roomB-A2",
    user_id: "u-7-2222-3333-4444-999999999999",
    type: "adult",
    booking_time: "2025-02-12T16:30:00",
    expire_time: "2025-02-12T16:50:00",
    status: 1,
  },
  {
    ticket_id: "t-12-0001-1111-2222-000000000011",
    showtime_id: "st-inception-1",
    seat_id: "s-room2-A1",
    user_id: "u-5-2222-3333-4444-777777777777",
    type: "adult",
    booking_time: "2025-02-10T18:00:00",
    expire_time: "2025-02-10T18:20:00",
    status: 1,
  },
];

// Payments (some linked to tickets)
export const payments = [
  {
    payment_id: "46a7175c-07c1-4f7a-a7b9-928f30a18d67",
    ticket_id: "cfe89d64-bdbd-4efc-bb0d-3ed175f5ae5a",
    amount: 120000,
    payment_method: "credit_card",
    payment_time: "2025-01-20T18:20:00",
    status: 1, // 1 success
  },
  {
    payment_id: "pay-2-0001-1111-2222-000000000001",
    ticket_id: "t-2-0001-1111-2222-000000000001",
    amount: 100000,
    payment_method: "momo",
    payment_time: "2025-01-21T19:40:00",
    status: 0, // pending
  },
  {
    payment_id: "pay-3-0001-1111-2222-000000000002",
    ticket_id: "t-3-0001-1111-2222-000000000002",
    amount: 90000,
    payment_method: "credit_card",
    payment_time: "2025-02-10T17:55:00",
    status: 2, // failed/cancelled
  },
  {
    payment_id: "pay-4-0001-1111-2222-000000000003",
    ticket_id: "t-4-0001-1111-2222-000000000003",
    amount: 130000,
    payment_method: "credit_card",
    payment_time: "2025-02-13T19:00:00",
    status: 1,
  },
  {
    payment_id: "pay-5-0001-1111-2222-000000000004",
    ticket_id: "t-5-0001-1111-2222-000000000004",
    amount: 140000,
    payment_method: "zalopay",
    payment_time: "2025-02-15T17:40:00",
    status: 1,
  },
  {
    payment_id: "pay-6-0001-1111-2222-000000000005",
    ticket_id: "t-6-0001-1111-2222-000000000005",
    amount: 95000,
    payment_method: "credit_card",
    payment_time: "2025-02-16T13:40:00",
    status: 1,
  },
  {
    payment_id: "pay-7-0001-1111-2222-000000000006",
    ticket_id: "t-7-0001-1111-2222-000000000006",
    amount: 100000,
    payment_method: "momo",
    payment_time: null,
    status: 0,
  },
  {
    payment_id: "pay-8-0001-1111-2222-000000000007",
    ticket_id: "t-8-0001-1111-2222-000000000007",
    amount: 80000,
    payment_method: "credit_card",
    payment_time: "2025-02-17T14:50:00",
    status: 1,
  },
  {
    payment_id: "pay-9-0001-1111-2222-000000000008",
    ticket_id: "t-9-0001-1111-2222-000000000008",
    amount: 120000,
    payment_method: "momo",
    payment_time: "2025-02-17T18:10:00",
    status: 1,
  },
  {
    payment_id: "pay-10-0001-1111-2222-000000000009",
    ticket_id: "t-10-0001-1111-2222-000000000009",
    amount: 125000,
    payment_method: "credit_card",
    payment_time: "2025-02-14T18:45:00",
    status: 1,
  },
];

// Bills (link payment -> bill -> user)
export const bills = [
  {
    bill_id: "deb6c4ca-054e-4af4-95ab-44e7931a4af0",
    payment_id: "46a7175c-07c1-4f7a-a7b9-928f30a18d67",
    user_id: "6c5e3525-894b-4e40-9da6-4e4cd27314f9",
    total_amount: 120000,
  },
  {
    bill_id: "bill-2-0001-1111-2222-000000000001",
    payment_id: "pay-4-0001-1111-2222-000000000003",
    user_id: "u-4-2222-3333-4444-666666666666",
    total_amount: 130000,
  },
  {
    bill_id: "bill-3-0001-1111-2222-000000000002",
    payment_id: "pay-5-0001-1111-2222-000000000004",
    user_id: "u-5-2222-3333-4444-777777777777",
    total_amount: 140000,
  },
  {
    bill_id: "bill-4-0001-1111-2222-000000000003",
    payment_id: "pay-6-0001-1111-2222-000000000005",
    user_id: "u-7-2222-3333-4444-999999999999",
    total_amount: 95000,
  },
];

// Optional: simple dummy trailers and casts arrays similar to your existing format
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
];

export const dummyCastsData = [
  {
    name: "Robert Downey Jr.",
    profile_path:
      "https://image.tmdb.org/t/p/original/1YjdSym1jTG7xjHSI0yGGWEsw5i.jpg",
  },
  {
    name: "Chris Evans",
    profile_path:
      "https://image.tmdb.org/t/p/original/3bOGNsHlrswhyW79uvIHH1V43JI.jpg",
  },
  {
    name: "Joaquin Phoenix",
    profile_path:
      "https://image.tmdb.org/t/p/original/4M0ZJgZsXyMRQG3qF6h7U3A1j4p.jpg",
  },
];

// handy export all
export default {
  movies,
  theaters,
  rooms,
  seats,
  showtimes,
  users,
  tickets,
  payments,
  bills,
  dummyTrailers,
  dummyCastsData,
};
