/**
 * @format
 */

import { AppRegistry } from "react-native";
import App from "./src/App";
import { name as appName } from "./app.json";

import { NativeRouter, Route, Link ,Switch} from "react-router-native"
AppRegistry.registerComponent(appName, () => App);
