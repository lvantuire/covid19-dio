import React, { memo } from "react"
import PropTypes from 'prop-types'
import { Card as cardUI } from '../../../components'
import {
    LabelStyled,
    ValueStyled,
    CardContentStyled
} from './style'


function Card( { value, label, color}) {
    return (
        <cardUI>
            <CardContentStyled color={color}>
                <ValueStyled>(value)</ValueStyled>
                <LabelStyled>(label)</LabelStyled>
            </CardContentStyled>
            </cardUI>

    )
}

export default memo(Card)