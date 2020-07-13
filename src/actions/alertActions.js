import { SHOW_ALERT, HIDE_ALERTS } from "../types";

export function showAlert(alert) {
  return (disptach) => {
    disptach(createAlert(alert));
  };
}

const createAlert = (alert) => ({
  type: SHOW_ALERT,
  payload: alert,
});
