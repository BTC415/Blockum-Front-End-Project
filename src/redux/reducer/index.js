import { combineReducers } from "redux";
import appReducer from "./appsReducer";
import authReducer from "./authReducer";
import dashBoardReducer from "./dashboardReducer";
import headerReducer from "./headerReducer";
import tableReducer from "./tableReducer";
import themeReducer from "./themeReducer";
import utilsReducer from "./utilsReducer";
import widgetReducer from "./widgetReducer";

export default combineReducers({
  utils: utilsReducer,
  header: headerReducer,
  theme: themeReducer,
  dashboard: dashBoardReducer,
  apps: appReducer,
  widget: widgetReducer,
  auth: authReducer,
  table: tableReducer,
});
