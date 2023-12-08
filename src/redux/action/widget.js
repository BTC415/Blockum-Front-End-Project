import axios from "axios";
import { WIDGET_BASIC } from "./type";

export const getWidgetBasic = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "https://api.npoint.io/fbc14eee7441f3b8877b/widgetBasic"
    );
    dispatch({
      type: WIDGET_BASIC,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
