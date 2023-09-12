'use client'

import Image from 'next/image'
import { useSpring, animated } from 'react-spring'

import * as S from './styles'

export default function Loading(): React.ReactElement {
  const contentAnimation = useSpring({
    from: { opacity: 0, y: 500 },
    to: { opacity: 1, y: 0 }
  })

  return (
    <S.Loading>
      <animated.div style={contentAnimation} className="l__content">
        <Image
          src="/logo_trinca.svg"
          width={200}
          height={200}
          alt="Logo Trinca"
        />
        <div className="lc__progress-bar">
          <div className="lcpb__bar" />
        </div>
      </animated.div>
    </S.Loading>
  )
}
