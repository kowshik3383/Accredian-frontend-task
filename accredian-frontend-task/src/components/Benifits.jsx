import React from 'react'

const Benifits = () => {
  return (
	<>
	
        <div className="flex flex-col items-center px-5 mt-28 w-full max-w-[1360px] max-md:mt-10 max-md:max-w-full">
            <div className="text-3xl font-semibold leading-10 text-center">
                What Are The <span className="text-blue-600">Referral Benefits?</span>
            </div>
            <div className="mt-14 max-w-full w-[1231px] max-md:mt-10">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[23%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow mt-8 text-lg font-semibold leading-7 uppercase max-md:mt-10">
                            <div className="flex gap-5 items-start px-3.5 py-4 text-white bg-blue-600 rounded-lg shadow-lg">
                                <div className="flex-auto">ALL PROGRAMS</div>
                                <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <polyline points="9 18 15 12 9 6" /></svg>
                            </div>

                            <div className="flex flex-col px-2 py-7 w-full text-gray-700 bg-white rounded-none shadow-lg">
                                <div className="flex gap-5 py-1 border-b border-gray-900 pb-2.5">
                                    <div className="flex-auto my-auto">Product Management</div>
                                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="9 18 15 12 9 6" />
                                    </svg>
                                </div>

                                <div className="flex gap-5 py-4 border-b border-gray-900 py-2.5">
                                    <div className="flex-auto my-auto">Strategy & Leadership</div>
                                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="9 18 15 12 9 6" />
                                    </svg>
                                </div>

                                <div className="flex gap-5 py-4 border-b border-gray-900 py-2.5">
                                    <div className="flex-auto my-auto">Business Management</div>
                                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="9 18 15 12 9 6" />
                                    </svg>
                                </div>

                                <div className="flex gap-5 justify-between py-4 border-b border-gray-900 py-2.5">
                                    <div className="my-auto">Fintech</div>
                                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="9 18 15 12 9 6" />
                                    </svg>
                                </div>

                                <div className="flex gap-5 py-4 border-b border-gray-900 py-2.5">
                                    <div className="flex-auto my-auto">Senior Management</div>
                                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="9 18 15 12 9 6" />
                                    </svg>
                                </div>

                                <div className="flex gap-5 py-4 border-b border-gray-900 py-2.5">
                                    <div className="flex-auto my-auto">Data Science</div>
                                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="9 18 15 12 9 6" />
                                    </svg>
                                </div>

                                <div className="flex gap-5 py-4 border-b border-gray-900 py-2.5">
                                    <div className="grow">Digital Transformation</div>
                                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="9 18 15 12 9 6" />
                                    </svg>
                                </div>

                                <div className="flex gap-5 py-4">
                                    <div className="flex-auto my-auto">Business Analytics</div>
                                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="9 18 15 12 9 6" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col ml-5 w-[77%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col max-md:mt-10 max-md:max-w-full">
                            {/* Header Row */}
                            <div className="grid grid-cols-3 items-center px-9 py-5 text-xl font-bold leading-6 text-blue-800 rounded-2xl bg-blue-600 bg-opacity-30 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                                <div className="header-cell">Programs</div>
                                <div className="header-cell text-center">Referrer Bonus</div>
                                <div className="header-cell text-center">Referee Bonus</div>
                            </div>

                            {/* Content Rows */}
                            {[
                                {
                                    imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/2a3e86ab768a9ae9bd8f34851a8e4e8210d5359e430e32156ada7b03bd847ebc?apiKey=c6375cac8ec44817bda5a13b63196755&",
                                    program: "Professional Certificate Program in Product Management",
                                    referrerBonus: "₹ 7,000",
                                    refereeBonus: "₹ 9,000",
                                },
                                {
                                    imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/06bc5842ad99ba224bca264d66e30f39876ee2d5382bdff80e1954f0912f8f72?apiKey=c6375cac8ec44817bda5a13b63196755&",
                                    program: "PG Certificate Program in Strategic Product Management",
                                    referrerBonus: "₹ 9,000",
                                    refereeBonus: "₹ 11,000",
                                },
                                {
                                    imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/6f1e803878d233b5186e6c73459b800516b2fa5318a216cec2f412862ccf804d?apiKey=c6375cac8ec44817bda5a13b63196755&",
                                    program: "Executive Program in Data Driven Product Management",
                                    referrerBonus: "₹ 10,000",
                                    refereeBonus: "₹ 10,000",
                                },
                                {
                                    imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/4788acfd5c4098fd3f3c22d812f314d8303ba558b3f59bde074323a82e57d9a1?apiKey=c6375cac8ec44817bda5a13b63196755&",
                                    program: "Executive Program in Product Management and Digital Transformation",
                                    referrerBonus: "₹ 10,000",
                                    refereeBonus: "₹ 10,000",
                                },
                                {
                                    imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/83858e81889a718a090adf1001bfcc2c73c65f752898024a755bbc685661085a?apiKey=c6375cac8ec44817bda5a13b63196755&",
                                    program: "Executive Program in Product Management",
                                    referrerBonus: "₹ 10,000",
                                    refereeBonus: "₹ 10,000",
                                },
                                {
                                    imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/682437900ff88059c67baeb4e3da9aea5a7bc6dd39fd39438dbfcc4be2aa9569?apiKey=c6375cac8ec44817bda5a13b63196755&",
                                    program: "Advanced Certification in Product Management",
                                    referrerBonus: "₹ 10,000",
                                    refereeBonus: "₹ 10,000",
                                },
                                {
                                    imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/7bc104ab5b585fb0e020c60c10f317df5849fe5f0f1f033df3dbf924dfc0c242?apiKey=c6375cac8ec44817bda5a13b63196755&",
                                    program: "Executive Program in Product Management and Project Management",
                                    referrerBonus: "₹ 10,000",
                                    refereeBonus: "₹ 10,000",
                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="grid grid-cols-3 gap-5 mx-8 py-4 items-center program-row"
                                >
                                    <div className="flex gap-3.5 items-center">
                                        <img
                                            loading="lazy"
                                            src={item.imgSrc}
                                            className="shrink-0 w-6 aspect-[1.33]"
                                        />
                                        <div>{item.program}</div>
                                    </div>
                                    <div className="text-center">{item.referrerBonus}</div>
                                    <div className="text-center">{item.refereeBonus}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>


            <div className="flex gap-5 justify-end self-end px-7 py-3.5 mt-6 mr-10 text-lg font-semibold leading-4 rounded-lg border border-solid border-zinc-400 text-gray-700 text-opacity-50 max-md:px-5 max-md:mr-2.5">
                <div>Show More</div>
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0088b98f57ef71e1cf90d3f43259da6a7449b605c771b1ce995e83040a80ac6d?apiKey=c6375cac8ec44817bda5a13b63196755&"
                    className="shrink-0 self-start aspect-[1.67] w-[15px]"
                />
            </div>
            <div className="justify-center items-center px-16 py-6 mt-6 max-w-full text-xl leading-6 text-center text-white bg-blue-600 rounded-lg w-[236px] max-md:px-5">
                Refer Now
            </div>


            <div className="mt-48 text-2xl font-semibold leading-9 max-md:mt-10">
                <div className="text-center">
                    Frequently Asked <span className="text-blue-600">Questions</span>
                </div>

                <div className="flex mt-16 max-w-full w-[1281px] max-md:flex-wrap max-md:mt-10">
                    {/* Tab Navigation */}
                    <div className="flex flex-col gap-2.5 max-md:w-full">
                        <div className="px-16 py-5 text-center capitalize bg-white rounded-lg border-2 border-solid border-slate-200 shadow-lg text-blue-600 leading-[169%] max-md:px-5">
                            Eligibility
                        </div>
                        <div className="px-16 py-5 text-center capitalize rounded-lg border-2 border-solid border-neutral-500 text-neutral-500 leading-[167%] max-md:px-5">
                            How to Use?
                        </div>
                        <div className="px-14 py-5 text-center capitalize rounded-lg border-2 border-solid border-neutral-500 text-neutral-500 leading-[167%] max-md:px-5  white-space: nowrap">
                            Terms & Conditions
                        </div>
                    </div>

                    {/* FAQ Content */}
                    <div className="flex flex-col ml-16 w-[76%] max-md:ml-0 max-md:w-full">
                        <div className="text-black text-opacity-90 max-md:mt-10 max-md:max-w-full">

                            <div className="flex items-center gap-5 mb-10">
                                <div className="flex-auto text-lg font-semibold leading-7 text-blue-600">
                                    Do I need to have prior Product Management and Project Management experience to enroll in the program?
                                </div>
                                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.40982 7.40997L5.99982 2.82997L10.5898 7.40997L11.9998 5.99997L5.99982 -2.67029e-05L-0.000183105 5.99997L1.40982 7.40997Z" fill="black" fill-opacity="0.54" />
                                </svg>

                            </div>

                            <div className="text-base leading-6 mb-10">
                                No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it suitable for individuals from any field of work.
                            </div>


                            <div className="flex items-center gap-5">
                                <div className="flex-auto text-lg font-semibold leading-7">
                                    What is the minimum system configuration required?
                                </div>
                                <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.5398 0.590027L6.94983 5.17003L2.35983 0.590027L0.949829 2.00003L6.94983 8.00003L12.9498 2.00003L11.5398 0.590027Z" fill="black" fill-opacity="0.54" />
                                </svg>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="flex flex-col justify-center self-stretch mt-32 bg-blue-600 rounded-xl border border-blue-600 border-solid max-md:mt-10 max-md:max-w-full">
                <div className="flex overflow-hidden relative flex-col gap-5 justify-end px-12 py-16 w-full min-h-[210px] max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8366270acf7d1b16848de9e6e3b65f49f0238b1a046fe38a2161244c137ad435?apiKey=c6375cac8ec44817bda5a13b63196755&"
                        className="object-cover absolute inset-0 size-full"
                    />
                    <div className="flex relative gap-5 max-md:flex-wrap">


                        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="80" height="80" rx="12" fill="#E2E8F0" fill-opacity="0.35" />
                            <rect x="4" y="4" width="72" height="72" rx="12" fill="white" />
                            <path d="M61 30.6667C63.5774 30.6667 65.6666 32.756 65.6666 35.3334V44.6667C65.6666 47.2441 63.5774 49.3334 61 49.3334H58.5222C57.374 58.5414 49.519 65.6667 40 65.6667V61C47.7319 61 54 54.732 54 47V33C54 25.2681 47.7319 19 40 19C32.268 19 26 25.2681 26 33V49.3334H19C16.4226 49.3334 14.3333 47.2441 14.3333 44.6667V35.3334C14.3333 32.756 16.4226 30.6667 19 30.6667H21.4777C22.626 21.4587 30.4809 14.3334 40 14.3334C49.519 14.3334 57.374 21.4587 58.5222 30.6667H61ZM30.1053 48.8315L32.579 44.8737C34.7304 46.2212 37.2742 47 40 47C42.7258 47 45.2696 46.2212 47.4209 44.8737L49.8947 48.8315C47.0261 50.6281 43.6344 51.6667 40 51.6667C36.3656 51.6667 32.9739 50.6281 30.1053 48.8315Z" fill="#1A73E8" />
                        </svg>

                        <div className="flex flex-col grow shrink-0 my-auto basis-0 w-fit max-md:max-w-full">
                            <div className="text-3xl font-semibold leading-9 text-white max-md:max-w-full">
                                Want to delve deeper into the program?
                            </div>
                            <div className="mt-4 text-lg font-medium leading-7 text-neutral-100 max-md:max-w-full">
                                Share your details to receive expert insights from our program
                                team!
                            </div>
                        </div>
                    </div>
                    <div className="flex relative gap-1.5 justify-center self-end px-9 py-4 mt-6 text-xl font-semibold leading-7 text-center text-blue-500 bg-white rounded-lg max-md:px-5">
                        <div className="grow my-auto">Get in touch</div>
                        <svg class="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <polyline points="9 18 15 12 9 6" /></svg>
                    </div>
                </div>
            </div>
        </div>

	
	</>
  )
}

export default Benifits