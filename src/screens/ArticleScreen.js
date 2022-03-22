import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { COLORS } from "../../assets/colors";
import { Header } from "../Components/Header";
const ArticleScreen = ({ navigation, route }) => {
  const article = route.params.article;
  return (
    <View style={styles.container}>
      <Header goBack={() => navigation.goBack()} />
      <View style={styles.wrapper}>
        <ScrollView style={{ backgroundColor: article.color, padding: 10 }}>
          <Image source={{ uri: article.imageUrl }} style={styles.image} />
          <Text style={styles.title}>{article.title}</Text>
          <Text style={styles.author}>{article.author}</Text>

          <Text style={styles.date}>{article.publishedDate}</Text>
          <Text style={styles.descriptionTitle}>Description:</Text>
          <Text style={styles.description}>{article.description}</Text>
          <Text style={styles.descriptionTitle}>Content:</Text>
          <Text style={styles.content}>{article.content}</Text>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 50,
    borderRadius: 10,
    overflow: "hidden",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: COLORS.text,
  },
  date: {
    color: COLORS.lightText,
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  author: {
    color: COLORS.text,
    fontWeight: "bold",
    fontSize: 16,
  },
  descriptionTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginVertical: 5,
  },
});
export { ArticleScreen };
