import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const SideDrawer = (props) => {
    console.log(props)
  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => {
        props.onClose(false);
      }}
    >
        <List component='nav'>
            <ListItem button autoFocus>
                Event starts
            </ListItem>
            <ListItem button >
                Venue INFO
            </ListItem>
            <ListItem button >
                Highlignts
            </ListItem>
            <ListItem button >
                Pricing
            </ListItem>
            <ListItem button autoFocus>
                Location
            </ListItem>
            
        </List>
    </Drawer>
  );
};

export default SideDrawer;
