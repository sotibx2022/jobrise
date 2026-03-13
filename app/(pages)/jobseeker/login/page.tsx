'use client'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Wrapper from '@/app/components/structure/Wrapper'
import Center from '@/app/components/structure/Center'
import EmailLogin from '@/app/components/form/loginform/EmailLogin'
import PhoneLogin from '@/app/components/form/loginform/PhoneLogin'
import PinLogin from '@/app/components/form/loginform/PinLogin'
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
            <EmailLogin />
          </TabsContent>
          <TabsContent value="phone">
            <PhoneLogin />
          </TabsContent>
          <TabsContent value="pin">
            <PinLogin />
          </TabsContent>
        </Tabs>
      </Wrapper>
    </Center>
  )
}
export default page