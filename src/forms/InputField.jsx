import React from "react";

const InputField = ({ formVal }) => {
    return(
        <div className={`flex p-0.5 ${formVal.mainDivClass}`}>
            <div className={`border border-gray-100 rounded-lg text-[12px] flex items-center justify-center px-6 ${formVal.labelClass}`}>{formVal.label}</div>
            <div className="w-full">
            <input
                id={formVal.name}
                name={formVal.name}
                // value={formVal.value}
                placeholder={formVal.placeholder}
                type="text"
                className={`w-full pl-3 flex focus:outline-none  text-[12px] ${formVal.InputdivClass}`}
             />
             </div>
        </div>
    )
}

export default InputField;