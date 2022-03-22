import { View, Text, StyleSheet, Image } from "react-native";
import { COLORS } from "../../assets/colors";
const ArticleComponent = ({ article = {} }) => {
  return (
    <View style={[styles.container, { backgroundColor: article.color }]}>
      <View style={styles.imageWrapper}>
        <Image source={{ uri: article.imageUrl }} style={styles.image} />
      </View>
      <View style={styles.infoWrapper}>
        <Text style={styles.title}>{article.title}</Text>
        <Text style={styles.date}>{article.publishedDate.toDateString()}</Text>
        <Text style={styles.description}>
          {article.description.slice(0, 80)}...
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    flexDirection: "row",
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  imageWrapper: {
    overflow: "hidden",
    marginHorizontal: 5,
  },
  infoWrapper: {
    flex: 1,
    margin: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  date: {
    fontSize: 16,
    color: COLORS.lightText,
    marginTop: 5,
  },
  description: {
    marginTop: 10,
    fontSize: 15,
  },
});
export default ArticleComponent;
