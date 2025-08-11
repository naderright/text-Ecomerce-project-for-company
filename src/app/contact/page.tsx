import Advantages from '@/components/Advantages'
import ContactPage from '@/components/Contact/Contact'
import HeroRoute from '@/components/HeroRoute'
import React from 'react'

function page() {
  return (
    <div>
    <HeroRoute
      title="Contact"
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Contact" }
      ]}
    />
    <ContactPage/>
    <Advantages/>
    </div>
  )
}

export default page
