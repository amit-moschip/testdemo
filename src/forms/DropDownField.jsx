const DropDownField = ({ formVal }) => {
    return(
        <div className={`w-full flex gap-4 p-0.5 mt-4 ${formVal.divClass}`} style={{ fontFamily: "'Inter', sans-serif" }}>
            {formVal.label && <div className={`px-3 border rounded-lg text-[12px] flex items-center ${formVal.labelClass}`}>{formVal.label}</div>}
            <div className="flex justify-center">
            <select 
                name={formVal.name} 
                id={formVal.name} 
                className={`text-center text-[12px] focus:outline-none ${formVal.selectClass}`}
                onChange={formVal.onChange}
                >
                {formVal.options.map((item) => (
                    <option key={item.value} value={item.value} className="text-[12px] ">{item.label}</option>
                ))}
            </select>
            </div>

        </div>
    )
}

export default DropDownField;