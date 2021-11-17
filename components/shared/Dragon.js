import Head from 'next/head';
import Image from 'next/image';
import babyDragon from '../../public/dragon_baby.png'
import toddlerDragon from '../../public/dragon_toddler.jpeg'
import teenDragon from '../../public/dragon_teen.png'
import adultDragon from '../../public/dragon_adult.png'

const Dragon = ({level = 9, width = '500px', height = '500px' }) => {
    
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

let levelWidth = (20 + level * 10)
if (levelWidth > 100) {
    levelWidth = 100
}

  return (
    <div className={'dragon-box'} style={{width, height}}>
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