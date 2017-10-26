import Button from 'common/components/Button'
import DefaultLayout from 'common/layouts/DefaultLayout'
import Input from 'common/components/Input'
import React from 'react'
import Textarea from 'common/components/Textarea'

const HomeView = () => {
  return (
    <DefaultLayout>
      <div style={{ height: 1000 }}>
        <div>Home</div>
        <Button>Test</Button>
        <Input placeholder="Enter some text" />
        <Textarea placeholder="Enter some text" rows="4" />
      </div>
    </DefaultLayout>
  )
}

export default HomeView
