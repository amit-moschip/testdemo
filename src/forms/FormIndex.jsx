import DropDownField from "./DropDownField";
import InputField from "./InputField";
import InputFile from "./InputFile";

const FormIndex = ({ formList, gridClass }) => {
    return (
        <div className={`grid ${gridClass}`}>
            {formList.map((formVal, index) => {
                switch (formVal.componentType) {
                    case "inputBox":
                        return <InputField key={index} formVal={formVal} />;
                    case "dropDownField":
                        return <DropDownField key={index} formVal={formVal} />;
                    case "UploadFile":
                        return <InputFile key={index} formVal={formVal} />;
                    default:
                        return null;
                }
            })}
        </div>
    );
};

export default FormIndex;
