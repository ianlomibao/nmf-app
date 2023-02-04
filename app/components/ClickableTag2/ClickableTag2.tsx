import React from "react";
import { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import Text from "../Text";
import styles from "./ClickableTag2.styles";

type Props = {
    text: string;
    isSelected: boolean;
    onPress: () => void;
};

const ClickableTag2: React.FC<Props> = ({text, isSelected, onPress}) => (
    <TouchableOpacity onPress={onPress}>
        <View style={[styles.textBox, isSelected ? styles.selected : styles.unselected ]}>
            <Text.Secondary style={[styles.text, isSelected ? styles.selectedText : styles.unselectedText ]}>{text}</Text.Secondary>
        </View>
    </TouchableOpacity>
);

export default ClickableTag2;