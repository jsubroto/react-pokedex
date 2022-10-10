import { buttonStyle, disabledButtonStyle } from "../styles"
import { PaginationProps } from "../types"

export const Pagination = ({
	handleClick,
	prevUrl,
	nextUrl
}: PaginationProps) => {
	return (
		<div className='flex justify-center'>
			<button 
				className={`${buttonStyle} ${prevUrl ?? disabledButtonStyle}`} 
				onClick={() => handleClick(prevUrl)} 
				disabled={!prevUrl}
			>
				Back
			</button>
			<button 
				className={`${buttonStyle} ${nextUrl ?? disabledButtonStyle}`} 
				onClick={() => handleClick(nextUrl)} 
				disabled={!nextUrl}
			>
				Next
			</button>
		</div>
	)
}