import React, { useState } from 'react'
import ColorPicker from './ColorPicker'

const App = () => {
  const colors = ['#FF2A00', '#000000', '#ffffff', '#FE7B00', '#FEE700', '#76FF04', '#0BB227', '#0BB2A0', '#06ABEE', '#0637EE', '#B707D6', '#D607B7', '#D60778', '#FF8F09']

  const [currentBg, setBg] = useState('#ffffff')
  return (
    <div style={{ display: 'flex',flexDirection:'column', alignItems: 'center',  }}>
      <h1>Color Picker</h1>
      <ColorPicker colors={colors} setBg={setBg} currentBg={currentBg} />
    </div>
  )
}

export default App