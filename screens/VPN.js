import React, { Component } from "react";
import { Image, Modal, StyleSheet, ScrollView } from "react-native";
import { Block, Button, Text, Utils } from "expo-ui-kit";
//constants
import { images, theme, servers } from "../constants";
const { icons } = images;

//theme
const { rgba } = Utils;
const { SIZES, COLORS } = theme;

export default class VPN extends Component {
  state = {
    connected: false,
    server: null,
    show: false,
    automatic: {
      name: "Automatic",
      icon: icons.automatic
    }
  };
  handleConnect() {
    const { connected } = this.state;
    this.setState({ connected: !connected });
  }
  handleServer(server) {
    this.setState({ server, connected: false, show: false });
  }

  renderServers() {
    const { show, server, automatic } = this.state;
    const connection = server || automatic;

    return (
      <Modal visible={show} animationType="fade" transparent>
        <Block bottom color={rgba(COLORS.gray, 0.2)}>
          <Block flex={false} white middle padding={[SIZES.padding, 0]}>
            <Text center subtitle gray>
              Pick your server
            </Text>
            <ScrollView>
              {servers.map((item, index) => {
                const isConnected = connection.name === item.name;
                const isChecked = icons[isConnected ? "checked" : "unchecked"];
                return (
                  <Button
                    key={index}
                    transparent
                    onPress={() => {
                      this.handleServer(item);
                    }}
                  >
                    <Block
                      flex={false}
                      row
                      center
                      space="between"
                      margin={[SIZES.padding, SIZES.padding]}
                    >
                      <Block flex={false} row center>
                        <Image source={item.icon} />
                        <Text padding={[0, SIZES.h3]}>{item.name}</Text>
                      </Block>
                      <Image source={isChecked} />
                    </Block>
                  </Button>
                );
              })}
            </ScrollView>
          </Block>
        </Block>
      </Modal>
    );
  }
  renderServer() {
    const { server, automatic } = this.state;
    const connection = server || automatic;

    return (
      <Block flex={false} row center middle>
        <Image source={connection.icon} />
        <Text center margin={[0, 10, 0, 20]}>
          {connection.name}
        </Text>
        <Image source={images.icons.dropdown} />
      </Block>
    );
  }
  render() {
    const { connected } = this.state;

    return (
      <Block safe center space="between">
        <Block flex={false} padding={[SIZES.h3, 0]}>
          <Text title semibold margin={[25,0]}>
            VPN
          </Text>
        </Block>
        <Block flex={false} center>
          <Block
            flex={false}
            row
            center
            middle
            white
            shadow
            radius={SIZES.radius}
            padding={[SIZES.base, SIZES.padding]}
          >
            <Text subtitle semibold gray height={SIZES.h3} theme={theme}>
              {connected ? "Connected" : "Disconnected"}
            </Text>
            <Block
              flex={false}
              radius={SIZES.base}
              color={connected ? COLORS.success : rgba(COLORS.gray, 0.5)}
              style={styles.status}
            ></Block>
          </Block>

          <Image
            style={styles.image}
            source={images.icons[connected ? "online" : "offline"]}
          />

          <Button
            theme={theme}
            outlined={connected}
            style={[styles.connect, connected && styles.connected]}
            onPress={() => this.handleConnect()}
          >
            <Text
              caption
              white={!connected}
              center
              bold
              margin={[SIZES.padding / 2, 0]}
            >
              {connected ? "DISCONNECT" : "CONNECT NOW"}
            </Text>
          </Button>
        </Block>
        <Block flex={false} middle shadow white style={styles.servers}>
          <Button transparent onPress={() => this.setState({ show: true })}>
            {this.renderServer()}
          </Button>
        </Block>
        {this.renderServers()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  connect: {
    width: SIZES.width / 2
  },
  connected: {
    borderColor: COLORS.black
  },
  image: {
    width: 180,
    height: 180,
    marginVertical: 20
  },
  status: {
    width: SIZES.base,
    height: SIZES.base,
    marginLeft: SIZES.small
  },
  servers: {
    width: SIZES.width,
    height: SIZES.base * 9,
    shadowOffset: {
      width: 0,
      height: -5
    },
    shadowOpacity: 0.05,
    shadowRadius: SIZES.base / 2
  }
});
