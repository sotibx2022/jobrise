import Link from 'next/link'
import React from 'react'
const page = () => {
  return (
    <section>
      <div>This is the main page of my job site.</div>
    <ul>
      <Link href="/jobseeker">Job Seeker</Link>
      <Link href='/employers'>For Employers</Link>
    </ul>
    </section>
  )
}
export default page