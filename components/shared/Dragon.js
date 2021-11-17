import Head from 'next/head';
import Image from 'next/image';
import babyDragon from '../../public/dragon_baby.png'
import toddlerDragon from '../../public/dragon_toddler.jpeg'
import teenDragon from '../../public/dragon_teen.png'
import adultDragon from '../../public/dragon_adult.png'

const Dragon = ({level = 0, width = '300px', height = '300px' }) => {
    
let dragonImage = babyDragon
if (level <= 3) {
    dragonImage = babyDragon 
}
else if (level > 3 && level <= 7) {
    dragonImage = toddlerDragon
}
else if (level > 7 && level <= 12) {
    dragonImage = teenDragon
}
else if (level > 12) {
    dragonImage = adultDragon
}

let levelWidth = (40 + level * 10)
if (levelWidth > 100) {
    levelWidth = 100
}

  return (
    <div className={'dragon-box m-3'} style={{width, height}}>
        <div  style={{width: `${levelWidth}%`}}>
        <Image
            src={dragonImage}
            alt={dragonImage}
        />
        </div>
    </div>
  )
}

export default Dragon