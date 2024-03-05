import { FC } from 'react'

import cn from './Hero.module.scss'
import HeroIntro from './HeroIntro'
import HeroHighlighted from './HeroHighlighted'
import HeroInfoMobile from './HeroInfoMobile'

const Hero: FC = () => {
  return (
    <section className={cn['hero']}>
      <div className={cn['hero__content']}>
        <HeroIntro />
        <HeroHighlighted />
        <HeroInfoMobile />
      </div>
    </section>
  )
}

export default Hero
