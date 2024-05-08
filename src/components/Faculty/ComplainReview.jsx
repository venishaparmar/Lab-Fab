const ComplainReview = () => {
    return (
        <>
        <div className="relative flex flex-col mt-6 text-gray-700 shadow-outline bg-clip-border rounded-xl mr-4 ml-4 sm:h-80 border border-gray-300 shadow-sm">
            <div className="flex flex-row justify-between">
                {/* Left side content */}
                <div className="p-6">
                    <div className="flex items-center">
                        <h5 className="block mb-2 text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                            Complain from Venisha Parmar from Sem 6
                        </h5>
                    </div>
                    <p className="block text-base antialiased font-light leading-relaxed text-inherit">
                        Component Name :
                    </p>
                    {/* Add more details here */}
                    <p className="block text-base antialiased font-light leading-relaxed text-inherit">
                        Component ID: 
                    </p>
                    <p className="block text-base antialiased font-light leading-relaxed text-inherit">
                        Issue Description: 
                    </p>
                    <p className="block text-base antialiased font-light leading-relaxed text-inherit">
                        Lab Location: 
                    </p>
                    <p className="block text-base antialiased font-light leading-relaxed text-inherit">
                        Status: 
                    </p>
                    <p className="block text-base antialiased font-light leading-relaxed text-inherit">
                        Timestamp: 
                    </p>
                    <p className="block text-base antialiased font-light leading-relaxed text-inherit">
                        GR Number: 
                    </p>
                </div>
                {/* Right side image */}
                <div className="p-6 flex justify-end items-center">
                    <img src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0" alt="Placeholder" className="h-48 sm:h-64 w-48 sm:w-56 object-cover" />
                </div>
            </div>
        </div>
        {/* Second container */}
        <div className="relative flex flex-col mt-6 text-gray-700 shadow-outline bg-clip-border rounded-xl mr-4 ml-4 sm:h-80 border border-gray-300 shadow-sm">
                <div className="flex flex-row justify-between">
                    {/* Left side content */}
                    <div className="p-6">
                        <div className="flex items-center">
                            <h5 className="block mb-2 text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                Second Complain
                            </h5>
                        </div>
                        <p className="block text-base antialiased font-light leading-relaxed text-inherit">
                            Desktop ID: 
                        </p>
                        <p className="block text-base antialiased font-light leading-relaxed text-inherit">
                            Issue: 
                        </p>
                        <p className="block text-base antialiased font-light leading-relaxed text-inherit">
                            Lab Location: 
                        </p>
                        <p className="block text-base antialiased font-light leading-relaxed text-inherit">
                            GR Number: 
                        </p>
                        <p className="block text-base antialiased font-light leading-relaxed text-inherit">
                            Timestamp: 
                        </p>
                        <p className="block text-base antialiased font-light leading-relaxed text-inherit">
                            Status: 
                        </p>
                    </div>
                    {/* Right side image */}
                    <div className="p-6 flex justify-end items-center">
                        {/* Placeholder image */}
                        <img src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0" alt="Placeholder" className="h-48 sm:h-64 w-48 sm:w-56 object-cover" />
                    </div>
                </div>
            </div>

        </>
        
    );
}

export default ComplainReview;
