import React,{forwardRef,useRef} from 'react'

const Child = forwardRef((props,ref) =>
{
    const inputREf = useRef(null)
    ref.current = inputREf.current;
    return (
        <div>
         <input type='text' ref={inputREf} />
        </div>
    )
});

export default Child
