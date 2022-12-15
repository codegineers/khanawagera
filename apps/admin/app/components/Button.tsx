type ButtonType = {
	type: 'button' | 'submit' | 'reset'
	name?: string
	value?: string
	onClick?: () => void
	children: React.ReactElement
	primary: boolean
	small?: boolean
	outlined?: boolean
	full?: boolean
	rounded?: boolean
}

export default function Button({
	type,
	name,
	value,
	onClick,
	children,
	primary,
	small,
	outlined,
	full,
	rounded,
}: ButtonType) {
	return (
		<button
			type={type}
			name={name}
			value={value}
			onClick={onClick}
			className={`text-white text-ellipsis whitespace-nowrap w-48 py-2 px-4 border-2
        ${
					primary &&
					'bg-emerald-400 hover:bg-emerald-300 active:bg-emerald-500 border-emerald-400 hover:border-emerald-300 active:border-emerald-500'
				}
        ${small && 'w-32 py-1.5'}
        ${
					outlined &&
					'bg-white text-slate-400 hover:text-emerald-300 active:text-emerald-500 hover:border-emerald-300 active:border-emerald-500'
				}
        ${full && 'w-full'}
        ${rounded && 'rounded'}
        `}
		>
			{children}
		</button>
	)
}
