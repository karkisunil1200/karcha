import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";

const ManageExpense = ({ route, navigation }) => {
  // iif there is a id then it loads differnetly than when it has id
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  // its like useEffect but better and smoother
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  return (
    <View>
      <Text>ManageExpenses</Text>
    </View>
  );
};

export default ManageExpense;

const styles = StyleSheet.create({});
