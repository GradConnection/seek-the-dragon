import React, { useContext, useState } from "react"
import { ContextApp } from "/reducers"
import Head from "next/head"
import Image from "next/image"
import babyDragon from "../../public/dragon_baby.png"
import toddlerDragon from "../../public/dragon_toddler.png"
import teenDragon from "../../public/dragon_teen.png"
import adultDragon from "../../public/dragon_adult.png"

const Dragon = ({ width = "300px", height = "300px" }) => {
  const { state, dispatch } = useContext(ContextApp)

  let level = state.profile.level
  let name = state.profile.name

  let dragonImage = babyDragon
  if (level <= 2) {
    dragonImage = babyDragon
  } else if (level > 2 && level <= 5) {
    dragonImage = toddlerDragon
  } else if (level > 5 && level <= 7) {
    dragonImage = teenDragon
  } else if (level > 7) {
    dragonImage = adultDragon
  }

  let levelWidth = 40 + level * 5
  if (levelWidth > 100) {
    levelWidth = 100
  }

  return (
    <div>
      <div className={"dragon-box m-3"} style={{ width, height }}>
        <div style={{ width: `${levelWidth}%` }}>
          <Image src={dragonImage} alt={dragonImage} />
        </div>
      </div>
    </div>
  )
}

export default Dragon
