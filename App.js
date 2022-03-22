import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";

import MainNavigation from "./src/Navigation/MainNavigation";
import store from "./src/Store/Store";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </Provider>
  );
}
