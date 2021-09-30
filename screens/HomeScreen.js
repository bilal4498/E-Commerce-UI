import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  TextInput,
  FlatList,
  ScrollView,
  StatusBar,
  Touchable,
} from "react-native";
import Headertwo from "../components/Headers/Headertwo";
import Categories from "../components/Catogories";
import Featured from "../components/Featured";
import BestSell from "../components/BestSellsGrid";

const { width, height } = Dimensions.get("window");
const HomeScreen = (props) => {
  const [stateone, statedOne] = useState([
    {
      txt: "Woman",
      imgPath: require("../assets/images/drawable-xxxhdpi/girlone.png"),
    },
    {
      txt: "Man",
      imgPath: require("../assets/images/drawable-xxxhdpi/boyone.png"),
    },
    {
      txt: "Kids",
      imgPath: require("../assets/images/drawable-xxxhdpi/kids.png"),
    },
  ]);
  const [statetwo, statedTwo] = useState([
    {
      id: Math.random(),
      txt: "$55.00",
      txttwo: "Women T-Shirt",
      imgpath: require("../assets/images/drawable-xxxhdpi/featuredone.png"),
    },
    {
      id: Math.random(),
      txt: "$34.00",
      txttwo: "Men T-Shirt",
      imgpath: require("../assets/images/drawable-xxxhdpi/featuredtwo.png"),
    },
    {
      id: Math.random(),
      txt: "$34.00",
      txttwo: "Women T-Shirt",
      imgpath: require("../assets/images/drawable-xxxhdpi/featuredthree.png"),
    },
  ]);
  const [statethree, statedThree] = useState([
    {
      id: Math.random(),
      txt: "$24.00",
      txttwo: "Women T-Shirt",
      imgpath: require("../assets/images/drawable-xxxhdpi/sellGirl.png"),
    },
    {
      id: Math.random(),
      txt: "$44.00",
      txttwo: "Men T-Shirt",
      imgpath: require("../assets/images/drawable-xxxhdpi/sellboy.png"),
    },
    {
      id: Math.random(),
      txt: "$34.00",
      txttwo: "Women T-Shirt",
      imgpath: require("../assets/images/drawable-xxxhdpi/sellgirltwo.png"),
    },
  ]);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Headertwo
          handleSecondIconPress={() => props.navigation.navigate("CartScreen")}
        />
      </View>

      <View style={styles.TextInputCont}>
        <Image
          style={styles.Magnifier}
          resizeMode="contain"
          source={require("../assets/images/drawable-xxxhdpi/Search.png")}
        />
        <TextInput style={styles.inputtext} placeholder="Select Your Product" />
      </View>

      <View style={styles.CatTextCont}>
        <View style={styles.CatText}>
          <Text style={styles.CategoryText}> Categories</Text>
          <TouchableOpacity>
            <Text style={styles.SeeAllText}> See All</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <View style={styles.CateogoryFlatList}>
          <FlatList
            keyExtractor={(item) => item.txt}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={stateone}
            renderItem={({ item }) => <Categories x={item} />}
          />
        </View>
        <View style={styles.FeaturedCont}>
          <View style={styles.Featured}>
            <Text style={styles.FeaturedText}>Featured</Text>
            <TouchableOpacity
              onPress={() => props.navigation.push("FeaturedScreen")}
            >
              <Text style={styles.SeeAllText2}> See All </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.FeaturedFlatList}>
          <FlatList
            data={statetwo}
            keyExtractor={(index) => index.id}
            renderItem={({ item }) => <Featured x={item} />}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.SellContainer}>
          <View style={styles.SellTextContainer}>
            <Text style={styles.BestSellText}>Best Sell</Text>
            <TouchableOpacity>
              <Text style={styles.SeeAllText3}> See All</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.BestSellContainer}>
          <FlatList
            style={styles.BestSellFlatList}
            data={statethree}
            keyExtractor={(index) => index.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <BestSell z={item} />}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  TextInputCont: {
    height: height * 0.08,
    width: width * 0.92,
    flexDirection: "row",
    marginTop: height * 0.04,
    justifyContent: "space-between",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    shadowRadius: 7,
    shadowOpacity: 0.3,
    elevation: 2,
    borderRadius: width * 0.01,
    shadowOffset: {
      width: 0,
      height: 10,
    },
  },
  inputtext: {
    fontSize: width * 0.04,
    textAlign: "center",
    marginRight: width * 0.3,
    height: height * 0.07,
    marginLeft: width * 0.1,
  },
  Magnifier: {
    height: height * 0.06,
    width: width * 0.06,
    marginLeft: width * 0.05,
  },
  CatTextCont: {
    width: width * 1,
    height: height * 0.08,
    marginTop: height * 0.04,
  },
  CatText: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  CategoryText: {
    fontSize: width * 0.069,
    marginLeft: width * 0.05,
    color: "#434343",
  },
  SeeAllText: {
    fontSize: width * 0.035,
    marginRight: width * 0.07,
    color: "#656565",
  },
  FeaturedCont: {
    width: width * 1,
    height: height * 0.06,
    marginTop: height * 0.012,
  },
  Featured: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  FeaturedText: {
    fontSize: width * 0.069,
    marginLeft: width * 0.07,
    color: "#434343",
  },
  SeeAllText2: {
    fontSize: width * 0.035,
    marginRight: width * 0.07,
    color: "#656565",
    marginTop: height * 0.01,
  },
  CateogoryFlatList: {
    height: height * 0.12,
    marginLeft: width * 0.05,
  },
  FeaturedFlatList: {
    marginLeft: width * 0.05,
  },
  SellContainer: {
    height: height * 0.09,
    width: width * 1,
  },
  SellTextContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  BestSellText: {
    fontSize: width * 0.069,
  },
  SeeAllText3: {
    fontSize: width * 0.035,
    color: "#656565",
    marginTop: height * 0.01,
    marginLeft: width * 0.3,
  },
  BestSellFlatList: {
    marginLeft: width * 0.05,
  },
});

export default HomeScreen;
