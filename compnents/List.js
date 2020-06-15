import React, { Component } from "react";
import smiley from "../compnents/img/emoji.png";
import {
  View,
  Text,
  TextInput,
  FlatList,
  Button,
  AsyncStorage,
  Image,
  ScrollView,
  Alert,
  TouchableOpacity,
} from "react-native";
import s, { styles } from "./styles";
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
        () => {
          AsyncStorage.setItem(
            "taskkey",
            JSON.stringify(this.state.tasks),
            (err, res) => {
              if (err) console.log(err);
            }
          );
        }
      );
    }
  };

  deleteItem = (i) => {
    // playDeleteSound();
    if (i > -1) this.state.tasks.splice(i, 1);
    this.setState({ tasks: this.state.tasks });
    AsyncStorage.setItem(
      "taskkey",
      JSON.stringify(this.state.tasks),
      (err, res) => {
        if (err) console.log(err);
      }
    );
  };

  reset = () => {
    this.setState({ tasks: [] });
    AsyncStorage.setItem(
      "taskkey",
      JSON.stringify(this.state.tasks),
      (err, res) => {
        if (err) console.log(err);
      }
    );
  };

  componentDidMount() {
    AsyncStorage.getItem("taskkey", (err, res) => {
      console.log(JSON.parse(res));
      this.setState({ tasks: [...JSON.parse(res), ...this.state.tasks] });
    });
  }
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={[s.bgDark, styles.heading, styles.p5, styles.mT10]}>
          Stop When You Are{" "}
          <Text style={[s.textPrimary, s.fontWeightBold, { fontSize: 30 }]}>
            Done..!
          </Text>{" "}
        </Text>
        <TextInput
          placeholder="Enter Task..."
          onChangeText={(text) => this.setState({ task: text })}
          style={[
            styles.p3,
            styles.m3,
            styles.mY5,
            s.bgDark,
            { color: "white" },
          ]}
          value={this.state.task}
        ></TextInput>
        <View style={[s.container, styles.mB5]}>
          <Button onPress={this.addTask} title="Add Task"></Button>
        </View>
        {this.state.tasks.length ? (
          <FlatList
            data={this.state.tasks}
            renderItem={({ item, index }) => (
              <TouchableOpacity onPress={() => this.deleteItem(index)}>
                <Text
                  style={[
                    styles.m1,
                    styles.p1,
                    s.bgDark,
                    s.textLight,
                    styles.text20,
                    styles.textCursive,
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
            <Text
              style={[
                styles.mY20,
                styles.p5,
                s.textSuccess,
                styles.text20,
                styles.textCursive,
                s.border,
              ]}
            >
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
