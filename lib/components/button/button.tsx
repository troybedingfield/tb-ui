import './button.scss'

type ButtonProps = Readonly<{
    children: string,
    color?: 'primary' | 'secondary' | 'error' | 'warning' | 'success' | 'disabled' | undefined,
    fill?: 'solid' | 'outline' | 'clear' | undefined,
    border?: 'true' | undefined,
    disabled?: boolean,
    size?: 'small' | 'medium' | 'large' | undefined,
    uppercase?: 'true' | undefined,
    maxWidth?: number,
    minWidth?: number,
    maxHeight?: number,
    minHeight?: number,
    customBGColor?: string,
    customColor?: string,
    customBorderColor?: string,
    buttonClick?: React.MouseEventHandler<HTMLButtonElement>
}>

export default function Button({ children, ...props }: ButtonProps) {
    const {
        color = 'primary',
        disabled,
        fill = 'solid',
        border,
        size = 'medium',
        uppercase,
        maxWidth,
        minWidth,
        maxHeight,
        minHeight,
        customBGColor,
        customColor,
        customBorderColor,
        buttonClick
    } = props

    return (
        <button style={{ minWidth: minWidth ? minWidth + 'px' : '', maxWidth: maxWidth ? maxWidth + 'px' : '', minHeight: minHeight ? minHeight + 'px' : '', maxHeight: maxHeight ? maxHeight + 'px' : '', backgroundColor: customBGColor, color: customColor, borderColor: customBorderColor }} className={[color, fill, size, border ? 'border' : '', uppercase ? 'text-uppercase' : ''].join(' ')} onClick={buttonClick} disabled={disabled ? disabled : undefined}>{children}</button>
    )
}