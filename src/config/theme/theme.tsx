import { StyleSheet } from "react-native";

export interface ThemeColors {
     primary: string;
     secondary: string;
     danger: string;
     text: string;
     background: string;
     cardBackground: string;
     buttonTextColor: string;
}

export const colors: ThemeColors = {
     primary: "#0E95EF",
     secondary: "#A08E98",
     danger: "#f194ff",

     text: "black",

     background: "#F3F2F7",
     cardBackground: "white",
     buttonTextColor: "white",
};

export type ButtonVariant = "primary" | "secondary" | 'danger';

export const Variant = {
     primary: colors.primary.toString(),
     secondary: colors.secondary,
     danger: colors.danger
};

export const globalStyles = StyleSheet.create({
     title: {
          fontSize: 30,
          fontWeight: "bold",
          //color: colors.text,
     },
     subTitle: {
          fontSize: 20,
          fontWeight: "bold",
          color: colors.text,
     },

     mainContainer: {
          flex: 1,
          backgroundColor: colors.background,
     },
     globalMargin: {
          paddingHorizontal: 20,
          flex: 1,
     },

     btnPrimary: {
          backgroundColor: colors.primary,
          borderRadius: 10,
          padding: 10,
          alignItems: "center",
     },
     btnPrimaryText: {
          color: colors.text,
          fontSize: 16,
     },
     imageContainer: {
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 0,
          height: 150,
          width: 'auto'
     },
     centerContext: {
          flexDirection: 'row',
          justifyContent: 'center',
     },
     row: {
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 4,
     },
});