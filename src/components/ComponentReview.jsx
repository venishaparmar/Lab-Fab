const ComponentReview = () => {
    return (
        <>
            <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl mr-2 ml-2">
                <div className="flex flex-row justify-between">
                    <div className="p-6">
                        <h5 className="block mb-2 text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                            Venisha Parmar from Sem 6
                        </h5>
                        <p className="block text-base antialiased font-light leading-relaxed text-inherit">
                            Component Name to be Issue : <b>DPCM Trainer</b>
                        </p>
                    </div>
                    <div className="p-6 pt-0 mt-2">
                        <button className="align-middle select-none  w-40 font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-base py-3 px-6 rounded-lg text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none" type="button">
                            Accept
                        </button>
                        <button className="align-middle select-none ml-2 w-40  font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-base py-3 px-6 rounded-lg text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none bg-red-500 hover:bg-red-400" type="button">
                            Reject
                        </button>
                    </div>
                </div>
            </div>


        </>

    )
}

export default ComponentReview
