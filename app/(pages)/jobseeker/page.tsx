import EmailInput from '@/app/components/form/inputs/EmailInput'
import PasswordInput from '@/app/components/form/inputs/PasswordInput'
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import NumberInput from '@/app/components/form/inputs/NumberInput'
import Wrapper from '@/app/components/structure/Wrapper'
import Center from '@/app/components/structure/Center'
const page = () => {
  return (
    <Center>
      <Wrapper>
        <h2>Job Seeker</h2>
        <Tabs defaultValue="email">
          <TabsList>
            <TabsTrigger value="email">Login with Email</TabsTrigger>
            <TabsTrigger value="phone">Login with Phone Number</TabsTrigger>
            <TabsTrigger value="pin">Login with PIN</TabsTrigger>
          </TabsList>
          <TabsContent value="email">
            <EmailInput />
            <PasswordInput />
            <button>Submit</button>
          </TabsContent>
          <TabsContent value="phone">
            <NumberInput numberName='Phone Number' />
            <PasswordInput />
            <button>submit</button>
          </TabsContent>
          <TabsContent value="pin">
            <NumberInput numberName='Pin Number' />
            <button>submit</button>
          </TabsContent>
        </Tabs>
      </Wrapper>
    </Center>
  )
}
export default page