import React from 'react';
import Border from '../Components/Border';
import "../Style/User_register.css";

export default function Otp_screen() {
    return (
        <>
            <section className="bg-[#413D3D] min-h-screen flex items-center justify-center">
                <div className="bg-gray-100 flex rounded-3xl shadow-lg max-w-2xl p-4 items-center">
                    <div className="md:w-screen px-16">
                        <h1 className="font-bold text-2xl text-[#413D3D]">Verify Account</h1>
                        <Border/>
                        <br /><br />
                        <form action='' className='flex flex-col gap-4'>
                            <div className='flex flex-row h-50 justify-center'>
                                <input type="text" className='p-2 w-10 rounded-xl border-2 text-center' maxLength="1" />
                                <input type="text" className='p-2 w-10 rounded-xl border-2 text-center' maxLength="1"/>
                                <input type="text" className='p-2 w-10 rounded-xl border-2 text-center' maxLength="1"/>
                                <input type="text" className='p-2 w-10 rounded-xl border-2 text-center' maxLength="1" />
                            </div>

                            <button className="bg-[#413D3D] rounded-xl text-white hover:scale-105 duration-300 py-2">Submit</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}
