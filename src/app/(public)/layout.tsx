'use client'

import Image from 'next/image'
import { useSpring, animated } from 'react-spring'

import * as S from './styles'

export default function PublicLayout({
  children
}: {
  children: React.ReactNode
}) {
  const AnimatedImage = animated(Image)

  const titleAnimation = useSpring({
    from: { opacity: 0, y: -300 },
    to: { opacity: 1, y: 0 }
  })

  const footerAnimation = useSpring({
    from: { opacity: 0, y: 300 },
    to: { opacity: 1, y: 0 }
  })

  return (
    <S.Layout>
      <div className="b__header">
        <animated.h1 style={titleAnimation} className="bh__title">
          Agenda de Churras
        </animated.h1>
      </div>

      <div className="b__page-container">{children}</div>

      <footer className="b__footer">
        <AnimatedImage
          style={footerAnimation}
          width={50}
          height={50}
          src="/logo_trinca.svg"
          alt="Trinca's logo"
        />
      </footer>
    </S.Layout>
  )
}
