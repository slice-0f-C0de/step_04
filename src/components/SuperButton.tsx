import React from 'react';
import s from './SuperButton.module.css'

type PropsType = {
    callBack: () => void
    color?: string
    disabled?: boolean
    children?: React.ReactNode
}


export const SuperButton: React.FC<PropsType> = (props) => {
    const {
        callBack,
        children,
        color,
        disabled
    } = props

    const onClickHandler = () => {
        callBack()
    }

    // const finalClassName = s.button
    //     + (disabled
    //         ? ' ' + s.disabled
    //         : color === 'red'
    //             ? ' ' + s.red
    //             : color === 'secondary'
    //                 ? ' ' + s.secondary
    //                 : ' ' + s.default)
    //     + (className ? ' ' + className : '')

    // const finalClassName =`${s.button} ${s.default}`
    // const finalClassName =`${s.button}  ${color==='red' ? s.red : s.default}   ${disabled ? s.disabled : ''}`
    const finalClassName = `
     ${s.button} 
     ${color === 'red' ? s.red : color === 'secondary' ? s.secondary : s.default}  
      ${disabled ? s.disabled : ''
        }
      `


    return (
        <button onClick={onClickHandler} className={finalClassName}>{children}</button>
    );
};

//-------------------------------------------------------------------

// import React from 'react';
//
// type PropsType={
//     callBack:()=>void
//     color:string
//     children?:React.ReactNode
// }
//
//
// export const SuperButton:React.FC<PropsType> = ({callBack,
//                                                     children,
//                                                     ...props}) => {
//     const onClickHandler=()=>{
//         callBack()
//     }
//     return (
//         <button onClick={onClickHandler}>{children}</button>
//     );
// };
