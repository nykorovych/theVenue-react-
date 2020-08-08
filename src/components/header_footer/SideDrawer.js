import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import { scroller } from "react-scroll";

const SideDrawer = (props) => {
  const scrollToElement = (element) => {
    scroller.scrollTo(element, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -170
    });
    props.onClose(false)
  };
  console.log(props);
  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => {
        props.onClose(false);
      }}
    >
      <List component="nav">
        <ListItem button>Event starts</ListItem>
        <ListItem button>Venue INFO</ListItem>
        <ListItem button onClick={() => scrollToElement("highlights")}>
          Highlignts
        </ListItem>
        <ListItem button>Pricing</ListItem>
        <ListItem button autoFocus>
          Location
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideDrawer;
