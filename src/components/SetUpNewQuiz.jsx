import FormIndex from "../forms/FormIndex";
import Button from "../reusable_components/ButtonComp";

function SetUpNewQuiz() {

    const data = [
        {
            label: "Title",
            name: "title",
            placeholder: "Enter the title",
            value: "",
            icon: "",
            componentType: "inputBox",
            InputdivClass: "",
            labelClass: "bg-[#FFEDDF]",
            mainDivClass: "w-full h-full rounded-[10px] border border-[#0000004D] col-span-3"
        },
        {
            label: "Duration (in minutes)",
            name: "duration",
            value: "",
            icon: "",
            componentType: "dropDownField",
            options: [
                { label: "10", value: "10" },
                { label: "20", value: "20" },
                { label: "30", value: "30" }
            ],
            divClass: "w-full rounded-md border border-[#0000004D]",
            labelClass: "bg-[#FFEDDF] w-[40%]",
            selectClass: "bg-white"
        },
        {
            label: "No. Of Questions",
            name: "number_of_ques",
            value: "",
            icon: "",
            componentType: "dropDownField",
            options: [
                { label: "5", value: "5" },
                { label: "10", value: "10" },
                { label: "20", value: "20" }
            ],
            divClass: "w-full rounded-md border border-[#0000004D]",
            labelClass: "bg-[#FFEDDF] w-[40%]",
            selectClass: "bg-white"
        },
        {
            label: "Score per Question",
            name: "score",
            value: "",
            icon: "",
            componentType: "dropDownField",
            options: [
                { label: "1", value: "1" },
                { label: "2", value: "2" },
                { label: "5", value: "5" }
            ],
            divClass: "w-full rounded-md border border-[#0000004D]",
            labelClass: "bg-[#FFEDDF] w-[40%]",
            selectClass: "bg-white"
        },
        {
            label: "Description",
            name: "description",
            placeholder: "Enter Description",
            value: "",
            icon: "",
            componentType: "inputBox",
            InputdivClass: "",
            labelClass: "bg-[#FFEDDF]",
            mainDivClass: "w-full rounded-[10px] border border-[#0000004D] col-span-3"
        },
        {
            label: "Use Question Bank",
            name: "q_bank",
            value: "",
            icon: "",
            componentType: "dropDownField",
            options: [
                { label: "Question Bank 1", value: "1" },
                { label: "Question Bank 2", value: "2" },
                { label: "Question Bank 3", value: "5" }
            ],
            divClass: "w-full rounded-md border border-[#0000004D]",
            labelClass: "bg-[#FFEDDF]",
            selectClass: "bg-white"
        },
        {
            label: "Randomize Question order",
            name: "question_order",
            value: "",
            icon: "",
            componentType: "dropDownField",
            options: [
                { label: "True", value: "true" },
                { label: "False", value: "false" }
            ],
            divClass: "w-full rounded-md border border-[#0000004D]",
            labelClass: "bg-[#FFEDDF]",
            selectClass: "bg-white"
        },
        {
            label: "Reveal answers afer Qestion",
            name: "score",
            value: "",
            icon: "",
            componentType: "dropDownField",
            options: [
                { label: "Yes", value: "1" },
                { label: "No", value: "2" },
            ],
            divClass: "w-full rounded-md border border-[#0000004D]",
            labelClass: "bg-[#FFEDDF]",
            selectClass: "bg-white"
        }
    ]

    const Buttons = [
        {
            buttonName: "Next",
            type: "",
            class: {
                Divclass: "bg-black w-16 text-white p-2 m-2 fixed left-4 bottom-4",          
                textClassName: '',      
                iconClassName: ''
            }
        }
    ]

    return (
        <div>
            <div className="p-4 space-y-6 w-full">
                <FormIndex formList={data} gridClass={"grid-cols-3 gap-6"}/>
            </div>
            <Button buttonValue={Buttons[0]}/>

        </div>

    );
}

export default SetUpNewQuiz;
