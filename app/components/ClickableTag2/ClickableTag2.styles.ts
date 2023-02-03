import { StyleSheet } from "react-native";

import { Colors } from "style";

export default StyleSheet.create({
    textBox: {
        padding: 10,
        borderRadius: 5,
        margin: 10,
        borderWidth: 2,
        
    },
    selected: {
        backgroundColor: Colors.green10,
        borderColor: Colors.green50,
    },
    unselected: {
        backgroundColor: Colors.grey10,
        borderColor: Colors.grey10,
    },
    text: {
        fontSize: 16,
        textAlign: "center",
        fontWeight: "bold",
    },
    selectedText: {
        color: Colors.green50,
    },
    unselectedText: {
        color: Colors.grey70,
    },
});