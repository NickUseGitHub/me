import React from 'react'
import Parallax from 'react-springy-parallax'

// import Link from '@components/Link'

function handleClick(parallaxLayer, page) {
  console.log('init parallaxLayer', parallaxLayer)

  return function(e) {
    e.preventDefault()
    console.log('onclick parallaxLayer', parallaxLayer)
    parallaxLayer.current.scrollTo(page)
  }
}

export default function Home() {
  const styles = {
    fontFamily: 'Menlo-Regular, Menlo, monospace',
    fontSize: 14,
    lineHeight: '10px',
    color: 'red',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
  let parallaxLayer = React.createRef()

  return (
    <Parallax pages={3} ref={parallaxLayer} horizontal>
      {/* <Parallax.Layer
        offset={0}
        speed={1}
        style={{ backgroundColor: '#243B4A' }}
      />
      <Parallax.Layer
        offset={1}
        speed={1}
        style={{ backgroundColor: '#805E73' }}
      />
      <Parallax.Layer
        offset={2}
        speed={1}
        style={{ backgroundColor: '#87BCDE' }}
      /> */}

      <Parallax.Layer
        offset={0}
        // speed={0.5}
        style={{
          ...styles,
          backgroundColor: '#243B4A',
        }}
        onClick={handleClick(parallaxLayer, 1)}
      >
        Click!
      </Parallax.Layer>

      <Parallax.Layer
        offset={1}
        // speed={-0.1}
        style={{
          ...styles,
          backgroundColor: '#805E73',
        }}
        onClick={handleClick(parallaxLayer, 2)}
      >
        Another page ...
      </Parallax.Layer>

      <Parallax.Layer
        offset={2}
        // speed={0.5}
        style={{
          ...styles,
          backgroundColor: '#87BCDE',
        }}
        onClick={handleClick(parallaxLayer, 0)}
      >
        The end.
      </Parallax.Layer>
    </Parallax>
  )
}
