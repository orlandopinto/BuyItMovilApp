import React from "react";

const DrawerItems = (props: any) => {
     return (
          <props.Drawer.Screen
               name={props.name}
               component={props.component}
               options={{
                    headerShown: props.headerShown,
                    drawerItemStyle: { display: props.display ? 'display' : 'none', borderRadius: 5 },
                    drawerLabel: props.name,
                    title: props.name,
                    headerShadowVisible: false,

               }} />
     )
}

export default DrawerItems;
