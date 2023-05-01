import { StyleSheet, Text, View } from "react-native";

type Props = {
  subTitle: string;
};

function Subtitle(props: Props) {
  const { subTitle } = props;
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{subTitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  subTitleContainer: {
    padding: 6,
    marginHorizontal: 12,
    marginVertical: 4,
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2
  },
  subTitle: {
    color: "#e2b497",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center"
  }
});

export default Subtitle;
