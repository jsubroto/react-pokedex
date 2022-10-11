import { useEffect, useState } from 'react'
import { MoonSvg, SunSvg } from '../svg/index'

export const DarkModeToggle = () => {
  const [darkTheme, setDarkTheme] = useState(true)

	useEffect(() => {
		const root = window.document.documentElement
    if (!darkTheme) root.classList.add('dark')
    else root.classList.remove('dark')
	}, [darkTheme])

	return (
		<button onClick={() => setDarkTheme(!darkTheme)}>
			{darkTheme 
				? <MoonSvg />
				: <SunSvg />
			}
		</button>
	)
}
