import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import ExpenseItem from "./ExpenseItem";
import { GlobalStyles } from "../../constants/styles";

function renderExpenseItem(itemData) {
  return <ExpenseItem {...itemData.item} />;
}

const ExpensesList = ({ expenses }) => {
  return (
    <FlatList
      data={expenses}
      keyExtractor={(item) => item.id}
      renderItem={renderExpenseItem}
    />
  );
};

export default ExpensesList;
