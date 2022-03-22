import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../../assets/colors";

const Category = ({ name }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.secondary,
    borderRadius: 5,
  },
  name: {
    fontSize: 18,
    padding: 5,
    color: COLORS.white,
    fontWeight: "bold",
  },
});
export default Category;
