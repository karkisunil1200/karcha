import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useContext } from "react";
import { ExpensesContext } from "../store/expenses-context";

const AllExpenses = () => {
  const expenseCtx = useContext(ExpensesContext);

  return (
    <ExpensesOutput
      fallbackText="No registered expenses found"
      expenses={expenseCtx.expenses}
      expensesPeriod="Total"
    />
  );
};

export default AllExpenses;

const styles = StyleSheet.create({});
