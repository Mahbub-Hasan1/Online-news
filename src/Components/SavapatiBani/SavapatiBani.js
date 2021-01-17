import React from 'react';
import Sidebar from '../Home/Sidebar/Sidebar';
import Footer from '../ShareComponents/Footer/Footer';
import Navbar from '../ShareComponents/Navbar/Navbar';

const SavapatiBani = () => {
    return (
        <>
            <div className="container-sm">
                <Navbar />
                <div className="row">
                    <div className="col-sm-8 bani-content-div col-md-9">

                        <div className="row">
                            <div className="col-sm bani-img-div">
                                <img className="img-fluid" src="https://www.dhakacitycollege.edu.bd/images/geninfo/1574051920.jpg" alt="" />
                            </div>

                            <div className="col-sm d-flex align-items-center">
                                <div className="bani-img-title">
                                    <h5 className="bani-img-name">মোঃ সাহিদুল হক</h5>
                                    <h5>“ সভাপতি ”</h5>
                                    <h5>“ঢাকাইয়া কেরানীগঞ্জ সমিতি”</h5>
                                </div>
                            </div>
                        </div>

                        <div className="sampadakBani-text-area">
                            <p>
                                “ঢাকাইয়া কেরানীগঞ্জ সমিতি” আমার তথা আমাদের সকলের প্রানের স্পন্দন সৃজনশীল অহিংস অসাম্প্রদায়িক কেরানীগঞ্জ গঠন করা আমাদের মূল লক্ষ্য । ঢাকাইয়া কেরানীগঞ্জ সমিতির ভিত্তিপ্রস্তর হবে আমাদের কেরানীগঞ্জের প্রতিটি সন্তানের হৃদয়ে অদৃশ্য সেতু বন্ধন স্থাপন করা, যে বন্ধনের মাধ্যমে এগিয়ে যাবে আমাদের শিক্ষা, সংস্কৃতি, ক্রীড়া ও ব্যক্তি জীবনের উন্নয়ন । <br />
                                কেরানীগঞ্জের প্রতিটি সন্তানের সুশিক্ষা নিশ্চিত করার ক্ষেত্রে ঢাকাইয়া কেরানীগঞ্জ সমিতি দু হাত প্রসারিত করে এগিয়ে আসবে । আমরা প্রাধ্যান্য দিতে চাই আমাদের উত্তর প্রজন্মকে, তাদের জন্য সুশৃংখল সাংস্কৃতিক পরিবেশ নিশ্চিত করার মাধ্যমে নিশ্চিত করতে চাই তাদের যুগের সাথে তাল মিলিয়ে এগিয়ে যাওয়ায় । খেলাধুলাকে নতুন ভাবে এগিয়ে নিয়ে যেতে হবে, পরিত্যাক্ত মাঠ উন্নয়ন ও বছর ব্যাপি বিভিন্ন ধরনের খেলাধুলার আয়োজন করার মাধ্যমে ক্রীড়া প্রেমিদের পাশে থাকতে চায় ঢাকাইয়া কেরানীগঞ্জ সমিতি। ব্যক্তি জীবনের উন্নয়নে প্রতিটি ক্ষেত্রে কেরানীগঞ্জের মানুষের পাশে থেকে আমরা তাদের এগিয়ে নেওয়ার ক্ষেত্রে বদ্ধপরিকর। <br />
                                অসহায় দুস্থ মানুষের সেবায় ঢাকাইয়া কেরানীগঞ্জ সমিতি নিরলস ভাবে কাজ করে যাবে । সুস্থ্য সমাজ গঠনে মাদক ও অন্যায়ের বিরুদ্ধ্যে অতন্দ্র প্রহরির মত কাজ করবে ঢাকাইয়া কেরানীগঞ্জ সমিতি। সুন্দর, নিরাপদ ও আধুনিক কেরানীগঞ্জ গঠনে দল মতের উর্ধে কেরানীগঞ্জের স্বার্থে নিরলস ভাবে কাজ করাই হবে আমাদের মূল লক্ষ্য।
                            </p>
                            <h5 className="text-center">
                                “ সাধারন সম্পাদক ”
                        </h5>
                        </div>

                    </div>

                    <div className="col-sm-4 sidebar-div col-md-3">
                        <Sidebar />
                    </div>

                </div>

            </div>
            <Footer />
        </>
    );
};

export default SavapatiBani;