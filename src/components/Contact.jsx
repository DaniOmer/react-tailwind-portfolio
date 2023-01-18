import React from 'react'

function Contact() {
  return (
    <div name='contact' className='w-full h-screen flex justify-center items-center p-4 dark:text-gray-300'>
        <form method='POST' action="https://getform.io/f/6ee77c86-f4e5-45ce-82a0-8337a719acff" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-3xl font-bold inline dark:text-gray-300'>Contact Me</p>
            </div>
            <input type="hidden" name="_gotcha" className='hidden' />
            <input className='bg-green-100 p-2 border-2 dark:text-black' type="text" placeholder="Name" name="name" required="required" />
            <input className='bg-green-100 my-4 p-2 dark:text-black' type="email" placeholder="Email" name="Email" required="required" />
            <textarea className='bg-green-100 p-2 dark:text-black' name='Message' rows="10" placeholder='Message' required="required"></textarea>
            <button className='bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white hover:bg-white hover:text-blackpx-4 py-2 px-6 my-8 mx-auto flex items-center border-none rounded-md'>Send</button>
        </form>

    </div>
  )
}

export default Contact