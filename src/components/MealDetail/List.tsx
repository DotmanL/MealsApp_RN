import { View, Text, StyleSheet } from "react-native";

type Props = {
  selectedData: string[];
};

function List(props: Props) {
  const { selectedData } = props;
  return (
    <>
      {selectedData.map((data: any) => (
        <View style={styles.lisItem} key={data}>
          <Text style={styles.itemText}>{data as string}</Text>
        </View>
      ))}
    </>
  );
}

const styles = StyleSheet.create({
  lisItem: {
    borderRadius: 6,
    paddingVertical: 4,
    paddingHorizontal: 6,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#e2b497"
  },
  itemText: {
    color: "#351401",
    textAlign: "center"
  }
});

export default List;
