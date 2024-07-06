
const Footer = () => {
  return (
	<>
	
        <div className="flex gap-5 self-stretch py-8 pr-5 pl-20 mt-32 w-full bg-zinc-800 max-md:flex-wrap max-md:pl-5 max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col mx-auto pb-10 max-w-[1600px] min-w-[1100px] max-md:px-5 max-md:max-w-full">
                <div className="flex flex-wrap gap-5 justify-between text-sm text-white max-md:max-w-full">
                    <img
                        loading="lazy"
                        srcSet="https://s3-alpha-sig.figma.com/img/c893/aff7/4e95a6c2343887a2c618a82f142936cd?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RQiqxs9~Wuq8ADMG4EAym1SsiO7luy4~U66mxPNMCUDO8AlmvAQHh~EuygDJsDPMEKHS4Xae63B4W2j8gTQ6Db-koxTs9yqbScZgTTb3vtD7B9XaBYg2wEdk5F7FDv45kHRydUZSfAWCSuXq5RXVwbds5uxZ~fs7T4yLkIrO4u2eA6hjUGBQZEpKw0n0aleWPY-jU84n7jkbofuVIgkWUZDGO7N-7KrKZdXSXYh94W6NiEIxPtL84ZAjElBl~w9mRyUXrh4K44Y~xn8RrhsaSVnlJSyusl5AX0Dxuk-IoAUBsAx-4ePZs~Ac06dbjibVw8xBPsDmMEpZE8~JrXRPIw__"
                        className="shrink-0 self-start w-36 max-w-full aspect-[3.85]"
                    />
                    <div className="flex flex-col px-16 max-w-sm max-md:px-5">
                        <div className="justify-center px-10 py-2 font-medium tracking-wide leading-6 text-center bg-blue-600 rounded-lg border border-white border-solid max-md:px-5">
                            Schedule 1-on-1 Call Now
                        </div>
                        <div className="self-center leading-[143%]">
                            Speak with our Learning Advisor
                        </div>
                    </div>
                </div>

                <div className="shrink-0 mt-8 h-px border-t border-solid border-slate-200 max-md:max-w-full" />

                <div className="flex-wrap justify-center pt-8 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        <div className="flex flex-col w-[38%] max-md:ml-0 max-md:w-full grow self-stretch text-lg font-bold tracking-normal leading-6 text-white max-w-[432px]">
                            <div className="self-start ml-4 text-xl tracking-normal max-md:ml-2.5 font-normal">
                                Programs
                            </div>

                            {/* Program List */}
                            <div className="flex flex-col gap-2 mt-2">
                                {/* Program Item */}
                                <div className="flex justify-between items-center px-4 py-3.5 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                                    <div className="text-left">Data Science & AI</div>
                                    <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <line x1="12" y1="5" x2="12" y2="19" />
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                    </svg>
                                </div>

                                {/* Program Item */}
                                <div className="flex justify-between items-center px-4 py-3.5 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                                    <div className="text-left">Product Management</div>
                                    <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <line x1="12" y1="5" x2="12" y2="19" />
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                    </svg>
                                </div>

                                {/* Program Item */}
                                <div className="flex justify-between items-center px-4 py-3.5 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                                    <div className="text-left">Business Analytics</div>
                                    <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <line x1="12" y1="5" x2="12" y2="19" />
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                    </svg>
                                </div>

                                {/* Program Item */}
                                <div className="flex justify-between items-center px-4 py-3.5 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                                    <div className="text-left">Digital Transformation</div>
                                    <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <line x1="12" y1="5" x2="12" y2="19" />
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                    </svg>
                                </div>

                                {/* Program Item */}
                                <div className="flex justify-between items-center px-4 py-3.5 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                                    <div className="text-left">Business Management</div>
                                    <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <line x1="12" y1="5" x2="12" y2="19" />
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                    </svg>
                                </div>

                                {/* Program Item */}
                                <div className="flex justify-between items-center px-4 py-3.5 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                                    <div className="text-left">Project Management</div>
                                    <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <line x1="12" y1="5" x2="12" y2="19" />
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                    </svg>
                                </div>

                                {/* Program Item */}
                                <div className="flex justify-between items-center px-4 py-3.5 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                                    <div className="text-left">Strategy & Leadership</div>
                                    <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <line x1="12" y1="5" x2="12" y2="19" />
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                    </svg>
                                </div>

                                {/* Program Item */}
                                <div className="flex justify-between items-center px-4 py-3.5 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                                    <div className="text-left">Senior Management</div>
                                    <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <line x1="12" y1="5" x2="12" y2="19" />
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                    </svg>
                                </div>

                                {/* Program Item */}
                                <div className="flex justify-between items-center px-4 py-3.5 max-md:flex-wrap max-md:pr-5 max-md:max-w-full whitespace-nowrap">
                                    <div className="text-left">Fintech</div>
                                    <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <line x1="12" y1="5" x2="12" y2="19" />
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col ml-5 w-[60%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col self-stretch pt-2 max-md:mt-8 max-md:max-w-full">
                                <div className="text-xl tracking-normal leading-8 text-white max-md:max-w-full">
                                    Contact Us
                                </div>
                                <div className="mt-1 text-sm tracking-normal leading-5 text-white max-md:max-w-full">
                                    Email us (For Data Science Queries): admissions@accredian.com
                                </div>
                                <div className="mt-1 text-sm tracking-normal leading-5 text-white max-md:max-w-full">
                                    Email us (For Product Management Queries):pm@accredian.com
                                </div>
                                <div className="mt-1 text-sm tracking-normal leading-5 text-white max-md:max-w-full">
                                    Data Science Admission Helpline:+91 9079653292 (9 AM - 7 PM)
                                </div>
                                <div className="mt-1 text-sm tracking-normal leading-5 text-white max-md:max-w-full">
                                    Product Management Admission Helpline:+91 9625811095
                                </div>
                                <div className="mt-1 text-sm tracking-normal leading-5 text-white max-md:max-w-full">
                                    Enrolled Student Helpline: +91 7969322507
                                </div>
                                <div className="mt-1 text-sm tracking-normal leading-5 text-white max-md:max-w-full">
                                    Office Address: 4th Floor, 250, Phase IV, Udyog Vihar,
                                    Sector 18, Gurugram,
                                    <br />
                                    Haryana 122015
                                </div>
                                <div className="mt-1 text-lg tracking-normal leading-7 text-white max-md:max-w-full">
                                    Why Accredian
                                </div>
                                <div className="mt-1 text-xl font-light tracking-normal leading-8 text-white max-md:max-w-full">
                                    Follow Us
                                </div>
                                <div className="flex gap-4 self-start mt-1">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/dcfea3d186009cff5bb77877bad8d28b13d76f8da97cb2826443df4b7fb69374?apiKey=c6375cac8ec44817bda5a13b63196755&"
                                        className="shrink-0 aspect-[0.96] w-[27px]"
                                    />
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/56da70414ed1e3dba649421fa8467f3b07fe18d9c177087e7af5cd160c36133e?apiKey=c6375cac8ec44817bda5a13b63196755&"
                                        className="shrink-0 aspect-[0.96] w-[27px]"
                                    />
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/51859f006baff0ad7fcf0f1a5437d2c37779cabb06f64e6f8445252f44b87aa1?apiKey=c6375cac8ec44817bda5a13b63196755&"
                                        className="flex-1 shrink-0 w-full aspect-[0.96]"
                                    />
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4591df1fabe159b92bc9592eb206d5b32907560226b85109e770ea1cc00c2dd7?apiKey=c6375cac8ec44817bda5a13b63196755&"
                                        className="shrink-0 aspect-[0.96] w-[27px]"
                                    />
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f76273bc2faa9ab60652573dabba7768ac20d9bec4ce7cead63a2549f37b33a0?apiKey=c6375cac8ec44817bda5a13b63196755&"
                                        className="shrink-0 w-7 aspect-square"
                                    />
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex flex-col ml-5 w-[17%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col self-stretch pt-2 text-sm tracking-normal leading-5 text-white max-md:mt-8">
                                <div className="text-xl tracking-normal">Accredian</div>
                                <div className="mt-1">About</div>
                                <div className="mt-1">Career</div>
                                <div className="mt-1">Blog</div>
                                <div className="mt-1">Admission Policy</div>
                                <div className="mt-1">Referral Policy</div>
                                <div className="mt-1">Privacy Policy</div>
                                <div className="mt-1">Terms Of Service</div>
                                <div className="mt-1">Master FAQs</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="self-center mt-10 text-sm tracking-normal leading-5 text-center text-white max-md:max-w-full">
                    © 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights
                    Reserved
                </div>
            </div>
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb44cf56eda866e5a7e505f9ff93a142ab8a9279941109c1a85b7486f4f8744f?apiKey=c6375cac8ec44817bda5a13b63196755&"
                className="shrink-0 self-end aspect-square mt-[610px] w-[60px] max-md:mt-10"
            />
        </div>
    
</>
  )
}

export default Footer