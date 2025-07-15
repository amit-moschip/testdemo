const InputField = ({ formVal }) => {
    const inputPaddingLeft = formVal.icon ? 'pl-10' : 'pl-3';
  
    return (
      <div className="mb-1">
        {formVal.label && (
          <label className={`block font-medium mb-1 text-start ${formVal.class.labelClassName}`}>
            {formVal.label}
          </label>
        )}
        <div className="relative">
          {formVal.icon && (
            <img
              src={formVal.icon}
              alt=""
              className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${formVal.iconClassName}`}
            />
          )}
          <input
            type={formVal.type}
            placeholder={formVal.placeholder}
            value={formVal.value}
            onChange={formVal.onChange}
            className={`w-full ${inputPaddingLeft} pr-3 py-2 border rounded-md focus:outline focus:ring-2 focus:ring-slate-400 ${formVal.class.className}`}
            />

        </div>
      </div>
    );
  };
  
  export default InputField;
  