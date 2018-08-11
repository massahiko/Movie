// In App.js in a new project

import React from "react";
import { createStackNavigator } from "react-navigation";
import App from "./AppComponent";
import Page2 from "./Page2";

export default createStackNavigator({
  HomeScren: App,
  Page2: Page2
});
