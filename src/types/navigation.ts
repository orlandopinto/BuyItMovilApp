import type { RouteProp } from "@react-navigation/native";

export type MainStackParamList = {
     splashScreen: undefined;
     login: undefined;
     register: undefined;
     resetPassword: undefined;
     home: undefined;
     profile: undefined;
     dashboard: undefined;
     settings: undefined;
     alerts: undefined;
     detailsproduct: undefined
}



export type DetailsScreenRouteProp = RouteProp<MainStackParamList, 'splashScreen'>