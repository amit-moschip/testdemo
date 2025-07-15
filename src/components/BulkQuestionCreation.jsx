import FormIndex from "../forms/FormIndex";
import Button from "../reusable_components/ButtonComp";

function BulkQuestionCreation() {

    const data = [
        {
            label: "Upload Excel File",
            name: "excel_file",
            value:"",
            icon: "",
            componentType: "UploadFile",
            placeholder: "",
            class: {
                DivClass: "flex items-center justify-center",
                LabelClass: "",
                InputClass: "bg-[#FFEDDF] flex item-center justify-center"
            }
        }
    ]

    const button = {
            buttonName: "Upload",
            type: "",
            class: {
                Divclass: "bg-black w-16 text-white p-2 m-2 fixed right-2 bottom-2",          
                textClassName: '',      
                iconClassName: ''
            }
        }

    return(
        <div>
            <div>
                <FormIndex formList={data}/>
            </div>

            <Button buttonValue={button}/>
        </div>
    )
}   

export default BulkQuestionCreation;