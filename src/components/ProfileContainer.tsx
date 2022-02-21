import React from "react"
import { Dimensions } from "react-native";
import styled from "styled-components/native";

export default function ProfileContainer() {
    const { width, height } = Dimensions.get("window");
    const f = (1 + Math.sqrt(5)) / 2;
    const deltaX = width / 2;
    const w = width - 32;
    const h = w * f;
    const a = Math.PI / 12;
    const A = width * Math.cos(a) + height * Math.sin(a);

    return (
        <StyledProfileContainer>

        </StyledProfileContainer>
    )
}

const StyledProfileContainer = styled.View`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;