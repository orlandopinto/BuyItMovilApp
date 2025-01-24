import type { RouteProp } from "@react-navigation/native";

export type MainStackParamList = {
     startScreen: undefined;
     login: undefined;
     register: undefined;
     resetPassword: undefined;
     home: undefined;
     profile: undefined;
     dashboard: undefined;
     settings: undefined;
     alerts: undefined
}



export type DetailsScreenRouteProp = RouteProp<MainStackParamList, 'startScreen'>