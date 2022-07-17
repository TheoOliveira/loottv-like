import React, { Component, useEffect, useState } from 'react'
import styles from "./DatePicker.module.scss"
import "flatpickr/dist/themes/material_green.css";
import Flatpickr from "react-flatpickr";
import useGlobalState from '../../store/store'

export default function DatePicker() {
    const store = useGlobalState()
    return (
        <Flatpickr
            value={store.getDay}
            onChange={([value]) => store.setDay(value)}
        />
    )
}
