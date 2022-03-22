import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Searchbar } from "react-native-paper";

import { API_KEY, CATEGORIES } from "../utils/constans";
import Article from "../Classes/Article";
import { ArticlesColors, COLORS } from "../../assets/colors";

import ArticleComponent from "../Components/ArticleComponent";
import {
  fetchArticlesFailed,
  fetchArticlesSuccess,
  fetchingArticles,
} from "../Actions/ArticleActions";
import Category from "../Components/Category";

const HomeScreen = ({ navigation }) => {
  const loading = useSelector((state) => state.loading);
  const errorMsg = useSelector((state) => state.errorMsg);
  const articels = useSelector((state) => state.articels);
  const dispatch = useDispatch();

  const [filteredArticles, setFilteredArticles] = useState([]);
  const [searchText, setSearchText] = useState("");
  const fetchData = async () => {
    try {
      dispatch(fetchingArticles());

      const results = await axios.get(
        `https://newsapi.org/v2/everything?q=Apple&from=2022-03-22&sortBy=popularity&apiKey=${API_KEY}`
      );
      const articlesData = results.data.articles;

      const articles = [];
      for (let i = 0; i < articlesData.length; i++) {
        const article = new Article(
          articlesData[i].title,
          articlesData[i].author,
          articlesData[i].description,
          articlesData[i].content,
          new Date(articlesData[i].publishedAt),
          articlesData[i].urlToImage,
          ArticlesColors.random()
        );

        articles.push(article);
      }

      dispatch(fetchArticlesSuccess(articles));
      setFilteredArticles(articles);
    } catch (err) {
      console.log(err);
      dispatch(fetchArticlesFailed("Failed to fetch articales!!"));
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleArticlePress = (article) => {
    navigation.navigate("ArticleScreen", { article: article.toDict() });
  };
  const handleSearch = (value) => {
    setSearchText(value);
    if (value == "") {
      setFilteredArticles(articels);
    } else {
      setFilteredArticles(
        articels.filter((article) =>
          article.title.toLowerCase().startsWith(value.toLowerCase())
        )
      );
    }
  };

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <View style={styles.searchWrapper}>
        <Searchbar
          placeholder="Search"
          onChangeText={handleSearch}
          value={searchText}
        />
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginVertical: 10 }}
      >
        {CATEGORIES.map((value, index) => (
          <TouchableOpacity
            onPress={() => {}}
            key={index.toString()}
            style={{ marginHorizontal: 5 }}
          >
            <Category name={value} />
          </TouchableOpacity>
        ))}
      </ScrollView>

      {loading && (
        <View style={styles.loadingWrapper}>
          <ActivityIndicator size={"large"} color={COLORS.primary} />
        </View>
      )}
      {errorMsg != "" && <Text>{errorMsg}</Text>}
      {filteredArticles.length > 0 && (
        <FlatList
          contentContainerStyle={{ marginHorizontal: 10 }}
          showsVerticalScrollIndicator={false}
          data={filteredArticles}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <TouchableOpacity onPress={() => handleArticlePress(item)}>
              <ArticleComponent article={item} />
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  searchWrapper: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  loadingWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export { HomeScreen };
