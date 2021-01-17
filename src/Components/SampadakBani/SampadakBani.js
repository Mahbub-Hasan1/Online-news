import React from 'react';
import './SampadakBani.css';
import Sidebar from '../Home/Sidebar/Sidebar';
import Navbar from '../ShareComponents/Navbar/Navbar';
import Footer from '../ShareComponents/Footer/Footer';

const SampadakBani = () => {

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
                                    <h5 className="bani-img-name">মোঃ জাকির হোসেন</h5>
                                    <h5>“ সাধারন সম্পাদক ”</h5>
                                    <h5>“ঢাকাইয়া কেরানীগঞ্জ সমিতি”</h5>
                                </div>
                            </div>
                        </div>

                        <div className="sampadakBani-text-area">
                            <p>
                                সমস্ত প্রশংসা মহান আল্লাহ তায়ালার
                                মহান মুক্তিযুদ্ধে যাদের আত্ম ত্যাগের বিনিময়ে আমরা পেয়েছি স্বাধীনতা ও লাল সবুজের পতাকা, সেই সকল বীর সেনানী, শহীদ মুক্তিযোদ্ধা ও তাদের পরিবার বর্গদের জানাই সশ্রদ্ধ সালাম ।
                                ঢাকা তথা কেরানীগঞ্জের সর্বস্তরের মানুষের কল্যান ও অন্যায়, দূর্নীতি এবং অপকর্ম রোধে আমরা গঠন করেছি ঢাকাইয়া কেরানীগঞ্জ সিমিতি নামে একটি অরাজনৈতিক সামাজিক সংগঠন।
                                <br />
                                এ সংগঠনের মাধ্যমে শিক্ষা সংস্কৃতি ও ঐতিহ্য ধরে রাখতে আমরা দৃঢ় প্রতিজ্ঞাবদ্ধ । এছাড়া মানুষের কল্যানের জন্য শিক্ষা সংস্কৃতি ও ব্যবসা বানিজ্য এবং খেলাধুলাতে আমরা সাহায্য সহযোগীতার হাত বারিয়ে দিতে চাই ।
                                <br />
                                মানুষের পাশে থেকে তাদের সুখ দুঃখকে ভাগাভাগি করে নিয়ে সন্ত্রাস মাদক ও দারিদ্রমুক্ত সমাজ গড়তে  চাই ।
                                <br />
                                ঢাকাইয়া কেরানীগঞ্জ সিমিতির মাধ্যমে মানুষের সার্বিক কল্যান ও উন্নয়নের লক্ষ্যে সবাইকে সাথে নিয়ে এগিয়ে যেতে চাই। এসকল উন্নয়নমূলক কার্যক্রমকে এগিয়ে নিতে আপনাদের সকলের সাহায্য ও সহযোগীতা দরকার ।
                                <br />
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

export default SampadakBani;