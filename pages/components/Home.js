import React, { useRef, useState } from 'react'
import { DocumentDuplicateIcon as DocumnetDuplicate } from '@heroicons/react/solid'
import { DocumentDuplicateIcon, DownloadIcon } from '@heroicons/react/outline'
import { Triangle } from 'react-loader-spinner'

function Home() {
  const [choose, setChoose] = useState(0)
  let files = useRef(null)
  let scrollto = useRef(null)
  const [texts, setTexts] = useState('')
  const [viewResult, setViewResult] = useState(false)
  const [encrypted, setEncrypted] = useState('')
  const [loading, setloading] = useState(false)
  const [copys, setCopys] = useState(false)
  const [key, setKey] = useState(0)
  let userKey = useRef(null)

  function clearPage() {
    setTexts('')
    files.current.value = null
    setViewResult(false)
    setKey(0)
    setCopys(false)
  }

  function uploadFile(e) {
    let file = e.target.value
    if (file.includes('.txt')) {
      const reader = new FileReader()
      setTexts('')
      reader.onload = (e) => {
        const text = e.target.result
        setTexts(text)
      }
      reader.readAsText(e.target.files[0])
    } else {
      alert('Only .txt files are allowed ⚠️')
      files.current.value = null
    }
  }

  // Function to encrypt given string

  const encryptCode = async () => {
    function cesar() {
      let amount = Math.floor(Math.random() * 26 + 1)
      let str = texts

      // variable to store the result
      let res = ''
      // iterate over the string
      for (var i = 0; i < str.length; i++) {
        // Get the character that we are going to add
        var c = str[i]
        // Check if it's a letter
        if (c.match(/[a-z]/i)) {
          // Get the letter's code
          var code = str.charCodeAt(i)
          // Capital letters
          if (code >= 65 && code <= 90) {
            c = code + amount
            if (c > 90) {
              let temp = c - 90
              c = 65 + temp
            }
            c = String.fromCharCode(c)
          }
          // Lowercase letters
          else if (code >= 97 && code <= 122) {
            c = code + amount
            if (c > 122) {
              let temp = c - 122
              c = 97 + temp
            }
            c = String.fromCharCode(c)
          }
        }
        // Add the characterole.log()
        var code = str.charCodeAt(i)
        if (code >= 48 && code <= 57) {
          c = code + amount
          if (c > 57) {
            let temp = c - 57
            c = 48 + temp
          }

          c = String.fromCharCode(c)
        }

        res += c
      }

      setEncrypted(res)
      setKey(amount)
      setloading(false)
      setViewResult(true)
      scrollto.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      })
    }
    if (loading) return
    if (texts === '') {
      alert('Please enter some text to continue ⚠️')
    } else {
      setloading(true)
      setEncrypted('')
      setCopys(false)
      setTimeout(cesar, 1000)
    }
  }

  // Function to decrypt given string

  const decryptCode = async () => {
    function cesar() {
      let amount = userKey.current.value
      let str = texts

      // variable to store the result
      let res = ''
      // iterate over the string
      for (var i = 0; i < str.length; i++) {
        // Get the character that we are going to add
        var c = str[i]
        // Check if it's a letter
        if (c.match(/[a-z]/i)) {
          // Get the letter's code
          var code = str.charCodeAt(i)
          // Capital letters
          if (code >= 65 && code <= 90) {
            c = code - amount
            if (c < 65) {
              let temp = 65 - c
              c = 90 - temp
            }
            c = String.fromCharCode(c)
          }
          // Lowercase letters
          else if (code >= 97 && code <= 122) {
            c = code - amount
            if (c < 97) {
              let temp = 97 - c
              c = 122 - temp
            }
            c = String.fromCharCode(c)
          }
        }
        // Add the characterole.log()
        var code = str.charCodeAt(i)
        if (code >= 48 && code <= 57) {
          c = code - amount
          if (c < 48) {
            let temp = 48 - c
            c = 57 - temp
          }

          c = String.fromCharCode(c)
        }

        res += c
      }

      setEncrypted(res)
      setKey(amount)
      setloading(false)
      setViewResult(true)
      scrollto.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      })
    }

    if (loading) return

    if (texts === '') {
      alert('Please enter some text to continue ⚠️')
    } else if (!userKey.current.value) {
      alert('Please enter key to continue ⚠️')
    } else if (userKey.current.value <= 0) {
      alert("Key can't be less than or equal to zero ⚠️")
    } else {
      setloading(true)
      setTimeout(cesar, 1000)
    }
  }

  // console.log(userKey.current.value)

  // Function for allowing copying of output
  function copyText() {
    navigator.clipboard.writeText(`${encrypted}`)
    setCopys(true)
  }

  // Function to download file

  function downloadFile() {
    const element = document.createElement('a')
    const file = new Blob([`${encrypted}`], {
      type: 'text/plain',
    })
    element.href = URL.createObjectURL(file)
    element.download = 'encrypt-decrypt.txt'
    document.body.appendChild(element)
    element.click()
  }

  return (
    <>
      <div className="m-auto mt-40 max-w-7xl border-0 border-black ">
        {/*  */}

        <section className="flex w-[100%]  flex-col px-2 md:px-5 ">
          <div className="flex w-fit items-center  rounded-t-xl bg-black ">
            <p
              className={
                choose === 0
                  ? 'cursor-pointer rounded-t-xl bg-black bg-gradient-to-r from-cyan-500 to-blue-500 px-10 py-2 font-serif text-[1.4rem]  italic text-white md:px-14'
                  : ' cursor-pointer rounded-t-xl bg-black px-10 py-2 font-serif text-[1.4rem]  italic text-white md:px-14'
              }
              onClick={() => {
                setChoose(0)
              }}
            >
              Encode
            </p>
            <p
              className={
                choose === 1
                  ? 'cursor-pointer rounded-t-xl bg-black bg-gradient-to-r from-cyan-500 to-blue-500 px-10 py-2 font-serif text-[1.4rem]  italic text-white md:px-14'
                  : ' cursor-pointer rounded-t-xl bg-black px-10 py-2 font-serif text-[1.4rem]  italic text-white md:px-14'
              }
              onClick={() => {
                setChoose(1)
              }}
            >
              Decode
            </p>
          </div>

          <textarea
            value={texts}
            className="mt-1 h-[30rem] w-[100%] rounded-xl bg-white p-5 text-[1.3rem] font-semibold italic shadow-lg outline-none  md:h-[25rem] "
            placeholder="Enter text here ..."
            onChange={(e) => {
              setTexts(e.target.value)
            }}
          ></textarea>

          <p className="mt-5 text-[1.2rem] font-semibold italic text-black md:text-[1.3rem]">
            Upload File : (Max Size : 2MB)
          </p>

          <div className="mt-4 flex w-[100%] flex-col sm:flex-row sm:items-center  ">
            <section className=" w-[70%] rounded-lg bg-white px-2 py-3 shadow-lg md:w-[40%] ">
              <input
                ref={files}
                type="file"
                id="myfile"
                className="cursor-pointer  text-[1.3rem] italic text-black outline-none  "
                onChange={uploadFile}
              />
            </section>

            {choose === 0 && (
              <div className="mt-10 flex  w-[100%]  justify-around sm:mt-0  sm:w-[60%] sm:justify-end ">
                <p
                  className="w-[45%] cursor-pointer rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500 py-3 text-center font-serif text-[1.4rem] italic tracking-wider text-white sm:mr-10 sm:w-[40%]"
                  onClick={clearPage}
                >
                  Clear
                </p>
                <p
                  className=" w-[45%] cursor-pointer rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500 py-3 text-center font-serif text-[1.4rem] italic tracking-wider text-white sm:w-[40%] "
                  onClick={encryptCode}
                >
                  Submit
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Sections which depends upon what users choose decode or encode */}

        {choose === 1 && (
          <section className="mt-1 flex w-[100%]  flex-col    px-2   py-4 sm:mt-10 sm:flex-row sm:items-center  md:rounded-xl md:px-5 ">
            <input
              type="number"
              ref={userKey}
              className=" w-[70%] rounded-lg bg-white px-5 py-3 text-[1.4rem] font-semibold  italic text-slate-800 shadow-lg outline-none sm:w-[40%] "
              placeholder="Enter Key to decode "
            />

            <div className="mt-10 flex w-[100%] justify-around border-0 sm:mt-0 sm:w-[60%] sm:justify-end ">
              <p
                className="w-[45%] cursor-pointer rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500 py-3 text-center font-serif text-[1.4rem] italic tracking-wider text-white sm:mr-10 sm:w-[40%] "
                onClick={clearPage}
              >
                Clear
              </p>
              <p
                className=" w-[45%] cursor-pointer rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500 py-3 text-center font-serif text-[1.4rem] italic tracking-wider text-white sm:w-[40%] "
                onClick={decryptCode}
              >
                Submit
              </p>
            </div>
          </section>
        )}

        {/* Creating this section for result showing */}

        {viewResult && (
          <div className="mt-28 w-[100%] border-0  border-black">
            {/*  */}

            <section className="flex items-center justify-center">
              <div className="w-[2rem] border-[0.2rem] border-sky-500 bg-sky-600  sm:w-[4rem]"></div>
              <p className="mx-2 font-serif text-[2rem] font-semibold tracking-wide sm:text-[2.5rem]">
                Result
              </p>
              <div className="w-[2rem] border-[0.2rem] border-sky-500 bg-sky-600 sm:w-[4rem]"></div>
            </section>

            <section
              ref={scrollto}
              className="mt-9 mb-10 w-[100%] px-2 md:px-5"
            >
              <div className=" flex w-[100%]  items-center justify-between rounded-t-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-5">
                <DownloadIcon
                  className="h-9 cursor-pointer  text-slate-200"
                  onClick={downloadFile}
                />
                <p className="  py-4 text-center font-serif text-[1.4rem] italic text-white sm:text-[1.5rem] ">
                  {choose === 0
                    ? `Encoded Text ~ Key : ${key}`
                    : 'Decoded Text'}
                </p>

                {copys ? (
                  <DocumnetDuplicate
                    className="h-9 cursor-pointer text-slate-200"
                    onClick={copyText}
                  />
                ) : (
                  <DocumentDuplicateIcon
                    className="h-9 cursor-pointer text-slate-200"
                    onClick={copyText}
                  />
                )}
              </div>

              <p className=" mt-2 h-[25rem] max-h-[25rem] w-[100%] max-w-[100%]  overflow-x-auto whitespace-pre-line  rounded-b-3xl bg-white p-5 text-[1.3rem] font-semibold italic text-[#777]  shadow-lg outline-none scrollbar-hide  ">
                {encrypted}
              </p>
            </section>

            {/*  */}
          </div>
        )}

        {/*  */}
      </div>

      {loading && (
        <div className=" fixed top-[50%] left-[50%] flex w-fit translate-x-[-50%] translate-y-[-50%] transform items-center justify-center">
          <Triangle color="#000" height={80} width={80} />
        </div>
      )}
    </>
  )
}

export default Home
