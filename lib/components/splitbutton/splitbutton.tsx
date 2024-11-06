import { RefObject, useEffect, useRef, useState } from 'react';
import './SplitButton.scss'


type SplitButtonProps = Readonly<{
    children: string,
    dropdownItems?: Array<string>,
    // buttonClick?: React.MouseEventHandler<HTMLButtonElement>
    buttonClick?: (s: string) => void
}>



export default function SplitButton({ children, ...props }: SplitButtonProps) {
    const { dropdownItems, buttonClick } = props

    const [isOpen, setIsOpen] = useState(false);

    const [dropdownValue, setDropdownValue] = useState(dropdownItems![0]);

    console.log(dropdownValue);

    const dropdown = useRef<HTMLDivElement>(null);

    useOutsideClick(dropdown);

    function splitOpen() {
        setIsOpen(isOpen => !isOpen);

    }

    function handleDropdownClick(item: string) {
        // console.log(item)
        setDropdownValue(item);
        splitOpen();
    }

    /**
 * Hook that alerts clicks outside of the passed ref
 */
    function useOutsideClick(ref: RefObject<HTMLDivElement>) {

        useEffect(() => {
            function handleClickOutside(event: MouseEvent) {
                if (ref.current && !ref.current.contains(event.target as Node)) {
                    splitOpen();
                }
            }

            if (ref) {
                // Bind the event listener
                document.addEventListener("mousedown", handleClickOutside);
                return () => {
                    // Unbind the event listener on clean up
                    document.removeEventListener("mousedown", handleClickOutside);
                };
            }
        }, [ref])

    }

    return (
        <div className="split-container">
            <button className=""
                onClick={() => buttonClick!(dropdownValue)}>
                {children}
            </button>
            <div className="dropdown">
                <button onClick={splitOpen}>
                    <span className="down-arrow"></span>
                </button>
                {!isOpen ? null : (<div className="dropdown-content" ref={dropdown}>
                    {/* <a >
                    
                    </a> */}

                    {dropdownItems?.map((item: string, index: number) => {
                        return (<a key={index} onClick={() => handleDropdownClick(item)}>{item}</a>)
                    })}



                </div>)}
            </div>
        </div>
    )
}