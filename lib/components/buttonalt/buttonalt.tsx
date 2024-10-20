import { MouseEventHandler, ReactNode } from 'react'

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
    children: ReactNode,
    color?: string,
    fill?: ReactNode,
    disabled?: boolean,
    size?: ReactNode,
    uppercase?: ReactNode,
    maxWidth?: ReactNode,
    minWidth?: ReactNode,
    customBGColor?: string,
    customColor?: string,
    buttonClick?: MouseEventHandler<HTMLButtonElement>
}


export default function ButtonAlt({ children, ...props }: ButtonProps) {
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