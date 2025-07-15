const InputFile = ({formVal}) => { 
    return(
        <div className={`flex flex-col w-full${formVal.class.DivClass}`} style={{ fontFamily: "'Inter', sans-serif" }}>
            <div className="text-[12px] font-medium text-gray-700 text-center">{formVal.label}</div>
            <div className={`flex items-center justify-center m-4`}>
                <input 
                    type="file" 
                    id={formVal.name}
                    name={formVal.name}
                    placeholder={formVal.placeholder}   
                    className={`${formVal.class.InputClass}`}
                />
            </div>
        </div>
    )
}

export default InputFile;