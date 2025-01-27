import React from "react";
import { Image, StyleSheet } from "react-native";
import ImageIcons from "./ImageIcons";

const CustomIcons = (props: any) => {
     switch (props.name) {
          case 'home':
               return <Image source={ImageIcons.homeOutline} style={styles.iconX25} />
          case 'dashboard':
               return <Image source={ImageIcons.dashboardOutline} style={styles.iconX22} />
          case 'search':
               return <Image source={ImageIcons.searchOutline} style={styles.iconX22} />
          case 'alerts':
               return <Image source={ImageIcons.alertOutline} style={styles.iconX25} />
          case 'profile':
               return <Image source={ImageIcons.profileOutline} style={styles.iconX22} />
          case 'settings':
               return <Image source={ImageIcons.settingsOutline} style={styles.iconX22} />
          default:
               return <Image source={ImageIcons.defaultIcon} style={styles.iconX22} />
     }
};

const styles = StyleSheet.create({
     iconX22: {
          height: 25,
          width: 25,
          tintColor: 'black'
     },
     iconX25: {
          height: 25,
          width: 25,
          tintColor: 'black'
     }
});

export default CustomIcons