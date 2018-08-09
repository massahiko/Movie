import React from "react";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import moment from "moment";

export default class Movies extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.movie}>
          <View style={styles.image}>
            <Image
              style={styles.imageMovie}
              resizeMode={"cover"}
              source={{
                uri:
                  "https://image.tmdb.org/t/p/w500" +
                  this.props.movie.backdrop_path
              }}
            />
          </View>

          <View style={styles.information}>
            <View style={styles.perc}>
              <Image
                style={styles.imagePerc}
                resizeMode={"cover"}
                source={{ uri: this.props.movie.backdrop_path }}
              />
            </View>
            <View style={styles.descrip}>
              <View style={styles.title}>
                <Text style={styles.titleText}>
                  {this.props.movie.original_title}
                </Text>
              </View>
              <View style={styles.date}>
                <Text style={styles.dateText}>
                  {" "}
                  {moment(this.props.movie.release_date).format(
                    "DD/MM/YYYY"
                  )}{" "}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 18
  },
  header: {
    backgroundColor: "black",
    height: 50,
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingTop: 8,
    flexDirection: "row"
  },
  imageMenu: {
    width: 35,
    height: 35
  },
  search: {},
  boxInput: {
    paddingVertical: 0,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: "#DDD",
    height: 40,
    width: "100%"
  },
  movie: {
    flex: 0.8,
    paddingTop: 10,
    paddingHorizontal: 30
  },
  information: {
    flexDirection: "row",
    paddingTop: 5,
    borderWidth: 1,
    borderColor: "#DDD"
  },
  imageMovie: {
    width: 354,
    height: 200,
    alignItems: "center"
  },
  imagePerc: {
    width: 30,
    height: 30
  },
  descrip: {
    paddingHorizontal: 10
  },
  title: {},
  titleText: {
    fontSize: 14,
    fontWeight: "bold",
    alignItems: "center"
  },
  dateText: {
    fontSize: 10
  }
});

//npm install axios
//npm install
