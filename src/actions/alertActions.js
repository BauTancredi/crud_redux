import { SHOW_ALERT, HIDE_ALERT } from "../types";

export function showAlert(alert) {
  return (disptach) => {
    disptach(createAlert(alert));
  };
}

const createAlert = (alert) => ({
  type: SHOW_ALERT,
  payload: alert,
});

export function hideAlertAction() {
  return (disptach) => {
    disptach(hideAlert());
  };
}

const hideAlert = () => ({
  type: HIDE_ALERT,
});
