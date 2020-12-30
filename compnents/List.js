import React, { Component } from "react";
import smiley from "../compnents/img/emoji.png";
import {
  View,
  Text,
  TextInput,
  FlatList,
  Button,
  Image,
  ScrollView,
  Alert,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { styles } from "./styles";
import Footer from "./Footer";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      tasks: [],
    };
  }

  addTask = () => {
    // playAddSound();
    if (!this.state.task) Alert.alert("Enter Task First...");
    else {
      this.setState(
        {
          tasks: [...this.state.tasks, this.state.task],
          task: "",
        },

        async () => {
          try {
            await AsyncStorage.setItem(
              "taskkey",
              JSON.stringify(this.state.tasks)
            );
          } catch (err) {
            console.log("Error in addTask: ", err);
          }
        }
      );
    }
  };

  deleteItem = async (i) => {
    // playDeleteSound();
    if (i > -1) this.state.tasks.splice(i, 1);
    this.setState({ tasks: this.state.tasks });
    try {
      await AsyncStorage.setItem("taskkey", JSON.stringify(this.state.tasks));
    } catch (err) {
      console.log("Error in Deleting item: ", err);
    }
  };

  reset = () => {
    this.setState({ tasks: [] }, async () => {
      await AsyncStorage.setItem("taskkey", JSON.stringify(this.state.tasks));
    });
  };

  async componentDidMount() {
    const res = await AsyncStorage.getItem("taskkey");
    if (res)
      this.setState({ tasks: [...JSON.parse(res), ...this.state.tasks] });
  }
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={[styles.bgDark, styles.heading, styles.p5, styles.mT10]}>
          Stop When You Are{" "}
          <Text style={[styles.textPrimary, { fontSize: 30 }]}>Done..!</Text>{" "}
        </Text>
        <TextInput
          placeholder="Enter Task..."
          onChangeText={(text) => this.setState({ task: text })}
          style={[styles.p3, styles.m3, styles.mY5, { color: "white" }]}
          value={this.state.task}
        ></TextInput>
        <View style={[styles.mB5]}>
          <Button onPress={this.addTask} title="Add Task"></Button>
        </View>
        {this.state.tasks.length ? (
          <FlatList
            data={this.state.tasks}
            renderItem={({ item, index }) => (
              <TouchableOpacity onPress={() => this.deleteItem(index)}>
                <Text
                  style={[
                    styles.textLight,
                    styles.bgDark,
                    styles.m1,
                    styles.p1,
                    styles.text20,
                  ]}
                >
                  {" "}
                  {index + 1}. {item}
                </Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
          ></FlatList>
        ) : (
          <View style={[styles.center, styles.container]}>
            <Image source={smiley} style={styles.imgSmall}></Image>
            <Text style={[styles.mY20, styles.p5, styles.text20]}>
              Yay..! Nothing To Do...
            </Text>
          </View>
        )}
        <View style={styles.mT15}>
          <Button title="Complete All" onPress={this.reset}></Button>
          <Footer></Footer>
        </View>
      </ScrollView>
    );
  }
}

export default List;
