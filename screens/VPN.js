import React, { Component } from "react";
import { Image, StyleSheet } from "react-native";
import { Block, Button, Text, Utils } from "expo-ui-kit";
import { images } from "../constants";

//theme
const { theme, rgba } = Utils;
const { SIZES, COLORS } = theme;

export default class VPN extends Component {
  render() {
    return (
      <Block safe center>
        <Block flex={false} padding={[20, 0]}>
          <Text title semibold>
            {" "}
            VPN{" "}
          </Text>
        </Block>
        <Block center middle>
          <Block
            flex={false}
            row
            center
            middle
            white
            shadow
            radius={SIZES.base * 2}
            padding={[SIZES.base, SIZES.padding]}
          >
            <Text subtitle semibold gray>
              CONNECTED
            </Text>
            <Block
              flex={false}
              radius={10}
              color={COLORS.success}
              style={styles.status}
            ></Block>
          </Block>

          <Image style={styles.image} source={images.icons.offline} />

          <Button outlined style={styles.connect}>
            <Text caption center bold margin={[10, 0]}>
              CONNECTED
            </Text>
          </Button>
        </Block>
        <Block
          flex={false}
          middle
          shadow
          white
          center
          style={{ width: "100%" }}
        >
          <Text>Servers</Text>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  connect: {
    width: SIZES.width / 2
  },
  image: {
    width: 180,
    height: 180,
    marginVertical: 20
  },
  status: {
    width: 8,
    height: 8,
    marginLeft: 10
  }
});
