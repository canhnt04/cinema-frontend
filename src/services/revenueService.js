import { get } from "./BaseService";

export const getRevenueService = ({ fromDate, toDate }) =>
  get("/revenues", { fromDate, toDate });
