import React, { useState } from "react";
import FormIndex from "../forms/FormIndex";
import InputField from "../forms/InputField";
import DropDownField from "../forms/DropDownField";
import Button from "../reusable_components/ButtonComp";
function QuestionCreationComp() {

    const [questionType, setQuestionType] = useState("");
    console.log(questionType, "questiontypequestiontype")

    const [bool, setBool] = useState("");
    console.log(bool, "asdfasdfasdf")

    const data = [
        {
            label: "Question",
            name: "Question",
            placeholder: "Enter your Question",
            value: "",
            icon: "",
            componentType: "inputBox",
            InputdivClass: "w-60",
            labelClass: "bg-[#FFEDDF] w-[100px]",
            mainDivClass: "w-full h-full rounded-[10px] border border-[#0000004D]"
        },
        {
            label: "Select Question Type",
            name: "Question_type",
            value: questionType,
            icon: "",
            onChange: (e) => {
                setQuestionType(e.target.value);
            },
            componentType: "dropDownField",
            options: [
                { label: "Type", value: "" },
                { label: "MCQ", value: "mcq" },
                { label: "Short Answer", value: "short_ans" },
                { label: "Boolean", value: "bool" }
            ],
            divClass: "w-full rounded-md border border-[#0000004D]",
            labelClass: "bg-[#FFEDDF]",
            selectClass: "bg-white"
        }
    ]

    const renderQuestionType = () => {
        switch (questionType) {
            case "mcq":
                const data = {
                    label: "Option",
                    name: "Option",
                    placeholder: "Enter your Option",
                    value: "",
                    icon: "",
                    componentType: "inputBox",
                    InputdivClass: "w-60",
                    labelClass: "bg-[#FFEDDF] w-[150px]",
                    mainDivClass: "w-full rounded-[10px] border border-[#0000004D]`"
                }

                const mcq_answer = {
                    label: "Answer",
                    name: "answer",
                    icon: "",
                    placeholder: "Enter your answer",
                    value: "",
                    componentType: "inputBox",
                    InputdivClass: "w-60",
                    labelClass: "bg-[#FFEDDF] w-[150px]",
                    mainDivClass: "w-full rounded-[10px] border border-[#0000004D]`"
                }

                return (
                    <>
                        <div className="space-y-3 mt-4">
                            {[...Array(4)].map((itmm, i) => (
                            <InputField
                                key={i}
                                formVal={{
                                    ...data,
                                    label: `Option ${i + 1}`,
                                    name: `Option_${i + 1}`
                                }}
                            />
                            ))}

                             <InputField formVal={mcq_answer}/>

                        </div>

                        
                    </>
                );

            case "bool":
                const bool_data = {
                    label: "Select Answer",
                    name: "bool_answer",
                    value: "",
                    icon: "",
                    onChange: (e) => {
                        setBool(e.target.value)
                    },
                    componentType: "dropDownField",
                    options: [
                        { label: "Type", value: "" },
                        { label: "True", value: "true" },
                        { label: "False", value: "false" },
                    ],
                    divClass: "w-full rounded-md border border-[#0000004D] mt-4",
                    labelClass: "bg-[#FFEDDF]",
                    selectClass: "bg-white"
                }

                return (
                    <div>
                        <DropDownField formVal={bool_data} />
                    </div>
                )

            case "short_ans":
                const short_data = {
                    label: "Enter Answer",
                    name: "Answer",
                    placeholder: "Enter your Answer",
                    value: "",
                    icon: "",
                    componentType: "inputBox",
                    InputdivClass: "w-60",
                    labelClass: "bg-[#FFEDDF] w-[150px]",
                    mainDivClass: "w-full rounded-[10px] border border-[#0000004D] mt-4"
                }

                return <InputField formVal={short_data} />

            default:
                return null;
        }
    }

    const Buttons = [
        {
            buttonName: "Next",
            type: "",
            class: {
                Divclass: "bg-black w-16 text-white p-2 m-2 fixed left-4 bottom-4",          
                textClassName: '',      
                iconClassName: ''
            }
        },
        {
            buttonName: "Submit",
            type: "",
            class: {
                Divclass: "bg-black w-16 text-white p-2 m-2 fixed right-4 bottom-4",          
                textClassName: '',      
                iconClassName: ''
            }
        }
    ]

    return (
        <div className="w-[100%] mx-auto p-2 bg-white rounded-lg space-y-4">
            <div>
                <FormIndex
                    formList={data}
                />
                {renderQuestionType()}
            </div>
            
            {Buttons.map((item) => (
                 <Button buttonValue={item}/>
            ))}
        </div>
    )
}


export default QuestionCreationComp;