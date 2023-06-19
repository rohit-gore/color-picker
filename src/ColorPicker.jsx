import { useState } from "react"

const ColorPicker = ({ colors, setBg, currentBg }) => {
    const [show, setShow] = useState(false)
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', boxShadow: 'gray 0px 0px 10px 0px', width: '150px', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ display: "flex", alignItems: 'center', justifyContent: 'center', cursor: 'pointer', background: currentBg, width: '100%', height: '30px', color: currentBg === '#ffffff' ? 'black' : 'white' }} onClick={() => setShow(!show)}>
                <p style={{ margin: 0 }}>Pick a Color</p>
                <img style={{ rotate: show ? '180deg' : '0deg' }} src={currentBg === '#ffffff' ? 'https://img.icons8.com/material/20/sort-down--v2.png' : 'https://img.icons8.com/material/20/ffffff/sort-down--v2.png'} alt="" />
            </div>
            {show && <div style={{ display: "flex", flexWrap: 'wrap', width: '100px', gap: '5px', padding: '0px 0px 10px 0px' }}>
                {colors.map((value, i) => (
                    <div key={i} style={{ width: '15px', height: '15px', background: value, border: '1px solid black', cursor: 'pointer' }} onClick={() => { setBg(value); setShow(!show) }}></div>
                ))}
            </div>}
        </div>
    )
}

export default ColorPicker