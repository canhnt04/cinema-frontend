import toast from "react-hot-toast";

const TOAST_COOLDOWN = 2000;

let last = {
  id: null,
  time: 0,
  message: null,
  type: null,
};

export const showToast = (
  message,
  { type = "error", duration = 1500 } = {}
) => {
  const now = Date.now();

  if (
    last.id &&
    last.message === message &&
    last.type === type &&
    now - last.time < TOAST_COOLDOWN
  ) {
    toast(message, { id: last.id, type, duration });
    last.time = now;
    return last.id;
  }

  const newToast = toast[type] ?? toast;
  const id = newToast(message, { duration });
  last = { id, time: now, message, type };
  return id;
};

export const clearToast = (id) => {
  if (id) toast.dismiss(id);
  if (!id || last.id === id)
    last = { id: null, time: 0, message: null, type: null };
};
