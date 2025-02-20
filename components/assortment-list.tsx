import { useDispatch, useSelector } from "react-redux";
import { addAssortment } from "../redux/slices/assortmentSlice";
import { useEffect } from "react";
import { hardcodedData, imageSources } from "../consts/initial-state";
import { RootState } from "../redux/store/store";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import { TAssortmentItem } from "../types/types";
import ArrowIcon from "./arrow-icon";

const { width } = Dimensions.get("window");

const maxWideMobileWidth = 450;
const maxWidth = width > maxWideMobileWidth ? maxWideMobileWidth : width;

const AssortmentList = () => {
  const dispatch = useDispatch();
  const assortmentList = useSelector((store: RootState) => store.assortment);

  useEffect(() => {
    if (assortmentList.length === 0) {
      dispatch(addAssortment(hardcodedData));
    }
  }, [dispatch, hardcodedData]);

  const renderItem = ({ item }: { item: TAssortmentItem }) => (
    <View
      key={item.id}
      style={[
        tw`flex mb-4 rounded-lg items-start`,
        { width: "48%", marginHorizontal: "1%" },
      ]}
    >
      <Image
        source={imageSources[item.img]}
        style={tw`w-full h-28 mb-2 rounded`}
        resizeMode="cover"
      />
      <View style={tw`flex flex-row mb-2`}>
        <Text style={tw`font-bold text-white mr-1`}>{item.title}</Text>
        <Text style={tw`text-gray-400`}>{item.weight.toString()} г</Text>
      </View>

      <Text style={tw`text-gray-400 mb-2`} numberOfLines={2}>
        {item.ingredients}
      </Text>

      <TouchableOpacity
        style={tw`flex flex-row mt-2 p-2 bg-gray-600 rounded-lg items-center`}
      >
        <Text style={tw`text-white text-center font-bold mr-2`}>
          {item.price.toString()} ₽
        </Text>
        <ArrowIcon width={20} height={20} />
      </TouchableOpacity>
    </View>
  );

  return (
    <FlatList
      data={assortmentList}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      contentContainerStyle={{
        paddingHorizontal: 15,
        alignItems: "center",
        width: maxWidth,
      }}
    />
  );
};

export { AssortmentList };
