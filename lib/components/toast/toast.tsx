import './toast.scss'
import { useRef, RefObject } from "react"

export default function Toast({ ...props }) {
    const { message, type, state = 'close' } = props

    const toast = useRef<HTMLDivElement>(null)

    function dismiss(ref: RefObject<HTMLDivElement>) {
        console.log(ref);
        ref.current!.classList.remove('open');
        ref.current!.classList.add('close');
    }

    return (
        <div ref={toast} className={["toast", type + "-toast", state].join(' ')}>
            <div className="toast-interior">
                {message}
            </div>

            <a className="toast-close" onClick={() => dismiss(toast)}>

            </a>
        </div>

    )
}
