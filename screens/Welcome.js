import React, { Component } from "react";
import { StyleSheet, Image, ScrollView } from "react-native";
import { Block, Button, Text, Utils } from "expo-ui-kit";

//constants
import { background } from "../constants/images";

//theme
const { theme, rgba } = Utils;
const { SIZES, COLORS } = theme;

const backgrounds = [
  {
    title: "Secured, forever.",
    description:
      "Curabitur lobortis id lorem id bibendum. Ut id consectetur magna.Quisque volutpat augue enim, pulvinar lobortis.",
    img: background.welcome
  },
  {
    title: "Secured, forever.",
    description:
      "Curabitur lobortis id lorem id bibendum. Ut id consectetur magna.Quisque volutpat augue enim, pulvinar lobortis.",
    img: background.encrypted
  },
  {
    title: "Secured, forever.",
    description:
      "Curabitur lobortis id lorem id bibendum. Ut id consectetur magna.Quisque volutpat augue enim, pulvinar lobortis.",
    img: background.privacy
  }
];

export default class Welcome extends Component {
  renderImages() {
    return (
      <ScrollView
        horizontal
        pagingEnabled
        scrollEnabled
        decelerationRate={0}
        scrollEventThrottle={16}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
      >
        {backgrounds.map((item, index) => (
          <Block
            center
            key={`img-${index}`}
            bottom
            style={{ width: SIZES.width }}
          >
            <Image
              source={item.img}
              resizeMode="center"
              style={{
                width: SIZES.width / 1.5,
                height: "100%"
              }}
            />
          </Block>
        ))}
      </ScrollView>
    );
  }

  renderDots() {
    return (
      <Block flex={false} row center middle margin={[20, 0, 40, 0]}>
        <Block
          color={COLORS.gray}
          flex={false}
          gray
          margin={[0, 6]}
          radius={8}
          style={{ width: 8, height: 8 }}
        />
        <Block
          color={rgba(COLORS.gray, 0.5)}
          flex={false}
          gray
          margin={[0, 6]}
          radius={8}
          style={{ width: 8, height: 8 }}
        />
        <Block
          color={rgba(COLORS.gray, 0.5)}
          flex={false}
          gray
          margin={[0, 6]}
          radius={8}
          style={{ width: 8, height: 8 }}
        />
      </Block>
    );
  }

  render() {
    const { navigation } = this.props;

    return (
      <Block safe>
        <Block center middle>
          {this.renderImages()}
        </Block>
        <Block flex={false} center bottom margin={60}>
          <Text h3 semibold>
            Secured, forever.
          </Text>
          <Text center caption gray margin={[10, 0]}>Curabitur lobortis id lorem id bibendum. Ut id consectetur magna.Quisque volutpat augue enim, pulvinar lobortis.</Text>
          {this.renderDots()}
          <Button
            primary
            style={{ borderRadius: 30 }}
            onPress={() => navigation.navigate("VPN")}
          >
            <Text center white caption bold margin={[6, 26]}>
              GET STARTED
            </Text>
          </Button>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({});
