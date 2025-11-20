import toast from "react-hot-toast";

const TOAST_COOLDOWN = 800;
let last = { id: null, time: 0, message: null, type: null };

export const showToast = (message, { type = "error", duration } = {}) => {
  const now = Date.now();
  const sameToast =
    last.message === message &&
    last.type === type &&
    now - last.time < TOAST_COOLDOWN;

  if (sameToast) return last.id;

  const fn = toast[type] ?? toast;
  const id = duration ? fn(message, { duration }) : fn(message);
  last = { id, time: now, message, type };
  return id;
};
