import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  FlatList,
  Button
} from "react-native";

import Movies from "./src/shared/movies";
import axios from "axios";

export default class App extends React.Component {
  static navigationOptions = {
    title: "Home",
    headerRight: (
      <Button
        onPress={() => alert("This is a button!")}
        title="Info"
        color="blue"
      />
    )
  };

  state = {
    movies: [],
    loading: true,
    pageNumber: 1
  };

  componentDidMount() {
    this.getTheMovieDb();
  }

  getTheMovieDb() {
    let url =
      "https://api.themoviedb.org/3/movie/popular?api_key=8c3b4d0bdbabc6e6647dae9d1f09ef48&page=" +
      this.state.pageNumber;
    axios.get(url).then(({ data }) => {
      var actualMovies = this.state.movies;
      var movesConcatenated = actualMovies.concat(data.results);

      console.log(data.results.length - 1);

      setTimeout(() => {
        this.setState({
          movies: movesConcatenated,
          loading: false
        });
      }, 2000);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          title={"Go to Page 2"}
          onPress={() => this.props.navigation.navigate("Page2", { id: 10 })}
        />

        <View style={styles.header}>
          <Image
            style={styles.imageMenu}
            resizeMode={"cover"}
            source={{
              uri:
                "https://paragondigital.com/wp-content/uploads/Menu-Icon2.jpg"
            }}
          />
          <Image
            style={styles.imageMenu}
            resizeMode={"cover"}
            source={{
              uri:
                "https://previews.123rf.com/images/tuktukdesign/tuktukdesign1606/tuktukdesign160600119/59070200-user-icon-man-profile-businessman-avatar-person-icon-in-vector-illustration.jpg"
            }}
          />
        </View>
        <View style={styles.search}>
          <TextInput style={styles.boxInput} placeholder="Search" />
        </View>

        {this.state.loading ? (
          <Text>Loading...</Text>
        ) : (
          <FlatList
            data={this.state.movies}
            renderItem={({ item }) => <Movies movie={item} />}
            keyExtractor={item => item.id.toString()}
            onEndReached={() => {
              this.setState({ pageNumber: this.state.pageNumber + 1 });
            }}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 10
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
  }
});
