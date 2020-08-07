import React, { Component } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import AppBar from "@material-ui/core/AppBar";
import { Toolbar } from "@material-ui/core";
import SideDrawer from "./SideDrawer";

export class Header extends Component {
  state = {
    drawerOpen: false,
    headerShow: false,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }
  handleScroll = () => {
    if (window.scrollY > 0) {
      this.setState({headerShow: true})
    } else {
      this.setState({headerShow: false})
    }
  }

  toggleDrawer = (v) => {
    this.setState({ drawerOpen: v });
  };
  render() {
    return (
      <div>
        <AppBar
          position="fixed"
          style={{
            backgroundColor: this.state.headerShow ? "grey" : "transparent",
            boxShadow: "none",
            padding: "10px 0px",
          }}
        >
          <Toolbar>
            <div className="header_logo">
              <div className="font_righteous header_logo_venue">
                THE VENUE
                <div className="header_logo_title">Musical Event</div>
              </div>
            </div>

            <IconButton
              onClick={this.toggleDrawer}
              aria-label="Menu"
              color="inherit"
            >
              <MenuIcon></MenuIcon>
            </IconButton>
            <SideDrawer
              open={this.state.drawerOpen}
              onClose={(v) => {
                this.toggleDrawer(v);
              }}
            ></SideDrawer>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Header;
