import { View, SafeAreaView, Dimensions } from "react-native";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import { AssortmentList } from "./components/assortment-list";
import tw from "tailwind-react-native-classnames";

const App = () => (
  <Provider store={store}>
    <SafeAreaView style={[tw`flex-1 bg-gray-800 justify-center items-center`]}>
      <AssortmentList />
    </SafeAreaView>
  </Provider>
);

export default App;
