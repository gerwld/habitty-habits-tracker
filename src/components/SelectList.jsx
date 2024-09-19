import React, { useCallback } from "react"
import { useTranslation } from "react-i18next"
import { Text, View, Pressable, FlatList, StyleSheet, Platform, ActivityIndicator } from "react-native"
import { Label } from "styles/crudtask"
import { Icon } from "@rneui/themed"
import { useCurrentTheme } from "hooks"

const SelectList = React.memo(({ showFetch, data, title, currentValue, setValue, color, theme, withoutTranslate }) => {
    const { t } = useTranslation()
    const [themeColors] = useCurrentTheme();

    const select = StyleSheet.create({
        item: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: themeColors.bgHighlight,

            borderWidth: 1,
            borderColor: `${themeColors.borderColor}`,
            borderLeftColor: "transparent",
            borderRightColor: "transparent",
            minHeight: 54,
            marginBottom: -1
        },
        text: {
            fontSize: 16,
            paddingLeft: 18,
            paddingRight: 10,
            color: themeColors.textColorHighlight,
        },
        maskText: {
            fontSize: 12,
            opacity: 0.6,
            paddingLeft: 18,
            paddingRight: 10,
            paddingTop: 2,
            color: themeColors.textColorHighlight,
        },
        checkmark: {
            marginRight: 10,
            alignItems: "center",
            justifyContent: "center"
        }
    })

    const keyExtractor = useCallback((item) => {
        return item.value
    })

    const ListItem = ({ showFetch, value, mask, name, onPress, color }) => {
        const [isLoader, setLoader] = React.useState(false);
        const onPressWithFetch = () => {
            if (currentValue !== value) {
                setTimeout(onPress, 10)
                if (!isLoader) {
                    setLoader(true)
                }

            }


        }

        return (
            <Pressable onPress={showFetch ? onPressWithFetch : onPress}>
                <View style={select.item}>
                    <View style={{ flexDirection: "column", alignItems: "flex-start", justifyContent: "center" }}>
                        <Text style={select.text}>{withoutTranslate ? name : t(value + "")}</Text>
                        {mask ? <Text style={select.maskText}>{mask}</Text> : null}
                    </View>
                    {isLoader
                        ? <View style={select.checkmark}><ActivityIndicator size={26} color={color ? color : "#5fb1e7"} /></View>
                        : null}

                    {currentValue === value
                        ?
                        (<View style={select.checkmark}>
                            <Icon style={{ pointerEvents: "none", height: 24 }} type="antdesign" size={24} name="check" color={color ? color : "#5fb1e7"} />
                        </View>)
                        : null}
                </View>
            </Pressable>
        )
    }

    return (
        <>
            <Label style={{ marginBottom: 7 }}>{title}</Label>

            <FlatList
                contentContainerStyle={{ paddingBottom: 10 }}
                keyExtractor={keyExtractor}
                data={data}
                {...(Platform.OS === 'android'
                    ? {
                        overScrollMode: 'always',
                        scrollEnabled: true
                    }
                    : { bounces: true })}
                renderItem={({ item }) => <ListItem {...{ ...item, color, showFetch, onPress: () => setValue(item.value) }} />
                }
            />
        </>
    )
});

export default SelectList;