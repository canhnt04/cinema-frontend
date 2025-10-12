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
    actor: "Robert Downey Jr., Chris Evans, Scarlett Johansson",
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
    actor: "Robert Pattinson, Zoë Kravitz, Paul Dano",
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
    actor: "Song Kang-ho, Lee Sun-kyun, Cho Yeo-jeong",
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
    actor: "Amy Poehler, Phyllis Smith, Lewis Black",
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
    actor: "Amy Poehler, Phyllis Smith, Lewis Black",
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
