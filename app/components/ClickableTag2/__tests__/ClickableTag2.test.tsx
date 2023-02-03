import React from "react";
import { create } from "react-test-renderer";

import ClickableTag2 from "../";

jest.unmock("../");

const foo = jest.fn();

it("renders selected ClickableTag", () => {
    const tree = create(<ClickableTag2 text={"Selected"} isSelected={true} onPress={foo}/>).toJSON();
    expect(tree).toMatchSnapshot();
});

it("renders unselected ClickableTag", () => {
    const tree = create(<ClickableTag2 text={"Unselected"} isSelected={false} onPress={foo}/>).toJSON();
    expect(tree).toMatchSnapshot();
});