import QuestionCreationComp from "../components/QuestionCreation";

function Modal({component,customClass, modalHeading}) {
    return(
        <div >

  <div class="relative z-10" style={{ fontFamily: "'Inter', sans-serif" }} aria-labelledby="dialog-title" role="dialog" aria-modal="true">

    <div class="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>

        
    <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
      <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <div class={`relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all ${customClass ? customClass :"sm:my-8 sm:w-full sm:max-w-lg h-[450px]"}`}>
          <div class="bg-white">
            <div className="m-4 text-center">
              <h1>{modalHeading ? modalHeading: "Fill the Data"}</h1>
            </div>
            <div class=" flex items-center justify-center ">

              {/* <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"> */}
                {component}
              {/* </div> */}
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            {/* <button type="button" class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto">Deactivate</button>
            <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button> */}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    )
}

export default Modal;