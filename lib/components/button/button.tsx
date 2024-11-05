import './button.scss'

type ButtonProps = Readonly<{
    children: string,
    color?: 'default' | 'secondary' | 'error' | 'warning' | 'success' | 'disabled' | undefined,
    fill?: 'solid' | 'outline' | 'none' | undefined,
    disabled?: boolean,
    size?: 'small' | 'medium' | 'large' | undefined,
    uppercase?: string,
    maxWidth?: number,
    minWidth?: number,
    customBGColor?: string,
    customColor?: string,
    customBorderColor?: string,
    buttonClick?: React.MouseEventHandler<HTMLButtonElement>
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
        customBorderColor,
        buttonClick
    } = props

    return (
        <button style={{ minWidth: minWidth ? minWidth + 'px' : '', maxWidth: maxWidth ? maxWidth + 'px' : '', backgroundColor: customBGColor, color: customColor, borderColor: customBorderColor }} className={[color, fill, size, uppercase ? 'text-uppercase' : ''].join(' ')} onClick={buttonClick} disabled={disabled ? disabled : undefined}>{children}</button>
    )
}