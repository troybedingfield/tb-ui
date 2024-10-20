type ButtonProps = Readonly<{
    children: string,
    color?: string,
    fill?: string,
    disabled?: boolean,
    size?: string,
    uppercase?: string,
    maxWidth?: string,
    minWidth?: string,
    customBGColor?: string,
    customColor?: string,
    buttonClick?: undefined
}>

export default function Button({ children, ...props }: ButtonProps) {
    const {
        color = 'default',
        disabled,
        fill = 'solid',
        size = 'medium',
        uppercase,
        maxWidth,
        minWidth,
        customBGColor,
        customColor,
        buttonClick
    } = props

    return (
        <button style={{ minWidth: minWidth + 'px', maxWidth: maxWidth + 'px', backgroundColor: customBGColor, color: customColor }} className={[color, fill, size, uppercase ? 'text-uppercase' : ''].join(' ')} onClick={buttonClick} disabled={disabled ? disabled : undefined}>{children}</button>
    )
}