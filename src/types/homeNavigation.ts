import type { RouteProp } from "@react-navigation/native";

export type HomeStackParamList = {
     dashboard: undefined;
     settings: undefined;
     profile: undefined;
     details: undefined
}

export type Details_ScreenRouteProp = RouteProp<HomeStackParamList, 'details'>
