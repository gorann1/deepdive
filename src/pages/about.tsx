import React from 'react'

import { MyPage } from '@/components/common/types'

const AboutPage: MyPage = () => {
  return (
    <main>
      <h2>AboutPage</h2>
    </main>
  )
}

export default AboutPage
AboutPage.Layout = "Main";
// HomePage.Layout = "OtherLayout"; -> error Type '"OtherLayout"' is not assignable to type '"Main" | "Admin" | undefined'.

