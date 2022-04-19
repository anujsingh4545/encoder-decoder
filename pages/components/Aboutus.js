import React, { useRef } from 'react'
import { MailIcon } from '@heroicons/react/solid'
import emailjs from '@emailjs/browser'

function Aboutus() {
  let name = useRef(null)
  let email = useRef(null)
  let Suggestion = useRef(null)

  function clearSuggestion() {
    name.current.value = ''
    email.current.value = ''
    Suggestion.current.value = ''
  }

  function submitSuggestion() {
    emailjs
      .send(
        'anuj',
        'template_wah1rnd',
        {
          sender: `${name.current.value}`,
          message: `${Suggestion.current.value}`,
          from: `${email.current.value}`,
        },
        '80bpaghXcoMxa7-uz'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <div className="m-auto mt-40 w-[100%] max-w-7xl">
      <section className="m-auto w-[100%] min-w-[450px] max-w-7xl  px-8 ">
        {}

        <img
          src="/about.svg"
          alt=""
          className="m-auto  w-[80%] max-w-7xl  md:w-[60%] "
        />

        <h1 className="mt-24 font-serif text-[3rem] font-bold  tracking-wider text-sky-700">
          About
        </h1>

        <p className="mb-32 mt-5 font-sans text-[1.2rem] font-semibold italic text-black sm:text-[1.5rem]">
          Meet Encrypt-Decrypt, a simple online tool that does exactly what it
          says: decodes an ecoded text or encode an text quite easily.
          Encrypt-Decrypt encode your data without hassles or decode it into a
          human-readable format. <br />
          Encrypt-Decrypt encoding schemes are commonly used when there is a
          need to encode text to make it safe, especially when that data needs
          to be stored and transferred over media that are designed to deal with
          text.
          <br /> This encoding helps to ensure that the data remains intact
          without modification during transport . <br />
          <br />
          <br />
          Ways to use Encrypt-Decrypt tool :-
          <br />
          <br />
          <l>
            <li>
              Select either encode or decode section , whatever you need go for
              it. <br />
            </li>

            <li>
              Enter text in textbox, or either upload .txt file from below .,
              the text will be extracted from the file and will be shown on
              textbox , you can even modify it, if you wish. <br />
            </li>

            <li>
              When you are done with editing , just click on submit button to
              submit text or clear button to clear all text in one go. <br />
            </li>

            <li>
              If you are Decoding text, then in that case you even need to enter
              the key, it's must for decoding text.
              <br />
            </li>

            <li>
              A decoded or encoded text will be generated below. <br />
            </li>

            <li>
              You can either copy if by just clicking on right side copy icon,
              or even you can download .txt file by clicking on left side
              download icon, cheers. <br />
            </li>
          </l>
        </p>

        <h1 className="w-[100%] font-serif text-[3rem] font-bold tracking-wider text-sky-700 ">
          Contact us
        </h1>

        <p className="my-5 text-[1.3rem] font-semibold  italic text-black sm:text-[1.5rem]">
          You can contact via email or write sugesstions below for your issues
          related with our website . Possitive feedbacks are most welcome..,
          cheers 💙
        </p>

        <section className=" mt-10 w-[100%] flex-row  justify-between ">
          {}
          <div className=" my-3 flex w-fit items-center  ">
            <div className="mr-5 rounded-full  bg-[#7c7c7c2b] p-2 ">
              <MailIcon className=" h-8 text-orange-600" />
            </div>
            <p className="font-serif text-[1.3rem] font-semibold  italic tracking-wider text-black md:text-[1.4rem]">
              Chahatsharma7350@gmail.com
            </p>
          </div>

          <div className=" my-3 flex w-fit items-center ">
            <div className="mr-5 rounded-full  bg-[#7c7c7c2b] p-2 ">
              <MailIcon className=" h-8 text-orange-600" />
            </div>
            <p className="font-serif text-[1.3rem] font-semibold italic tracking-wider text-black md:text-[1.4rem]">
              yogi.kumar2002@gmail.com
            </p>
          </div>

          <div className=" my-3 flex w-fit items-center ">
            <div className="mr-5 rounded-full  bg-[#7c7c7c2b] p-2 ">
              <MailIcon className=" h-8 text-orange-600" />
            </div>
            <p className="font-serif text-[1.3rem] font-semibold italic tracking-wider text-black md:text-[1.4rem]">
              Jaspreetkbeas@gmail.com
            </p>
          </div>

          <div className=" my-3 flex w-fit items-center  ">
            <div className="mr-5 rounded-full  bg-[#7c7c7c2b] p-2 ">
              <MailIcon className=" h-8 text-orange-600" />
            </div>
            <p className="font-serif text-[1.3rem] font-semibold italic tracking-wider text-black md:text-[1.4rem]">
              deeplata906906@gmail.com
            </p>
          </div>

          {}
        </section>

        <h1 className="mt-20 w-[100%] font-serif text-[3rem] font-bold tracking-wider text-sky-700">
          Suggestion box
        </h1>

        <input
          ref={name}
          type="text"
          placeholder="Enter name ..."
          className="mt-8 w-[100%] rounded-t-xl bg-white px-5 py-3 text-[1.3rem] font-semibold italic shadow-lg outline-none "
        />

        <input
          ref={email}
          type="text"
          placeholder="Enter email ..."
          className="mt-1 w-[100%]  bg-white px-5 py-3 text-[1.3rem] font-semibold italic shadow-lg outline-none "
        />

        <textarea
          ref={Suggestion}
          className="mt-1 h-[15rem] w-[100%] rounded-b-xl bg-white p-5 text-[1.3rem] font-semibold italic shadow-lg outline-none  md:h-[15rem] "
          placeholder="Enter suggestions here ..."
        ></textarea>

        <div className="mb-20 mt-1 flex items-center justify-end">
          <p
            className="mx-5 cursor-pointer rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-10 py-1  text-[1.3rem] text-white"
            onClick={clearSuggestion}
          >
            Clear
          </p>
          <p
            className="cursor-pointer rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-10 py-1  text-[1.3rem]  text-white"
            onClick={submitSuggestion}
          >
            Submit
          </p>
        </div>
      </section>
    </div>
  )
}

export default Aboutus
