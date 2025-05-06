import React from 'react'

const Modules = () => {
  return (
    <>
        <h2>React ES6 Modules</h2>
        <ul>
            <li>JavaScript Modules allow us to break up our code into separate files.</li>
            <li>This makes it easier to maintain the code-base.</li>
            <li>ES Modules rely on the <b>import</b> and <b>export</b> statements.</li>
        </ul>
        <h3>Export</h3>
        <p>We can export a function or a varible from any file.</p>
        <p>There are two types of exports: Named and Default.</p>
        <ul>
            <li>Default export - export default message;</li>
            <li>Named export - inline = export const age = 20;</li>
            <li>Named export - all at once = export &#123; name, age &#125; ;</li>
        </ul>
        <h3>Import</h3>
        <p>We can import Modules into a file in two ways, bsed on if they are named exports or default exports.</p>
        <p>Named exports must be destructured using curly braces. While Default exports do not.</p>
        <ul>
            <li>Named exports - import &#123; name, age &#125; from "./person.js";</li>
            <li>Default exports - import message from "./message.js";</li>
        </ul>
    </>
  )
}

export default Modules;