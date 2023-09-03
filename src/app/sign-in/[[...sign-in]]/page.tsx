import { SignIn } from '@clerk/nextjs'

const Page = async ({ searchParams }: {searchParams: any}) => {
  const { redirectUrl } = searchParams;
  
  return (
    <section className='py-24'>
      <div className='container'>
        <div className='flex justify-center'>
          <SignIn redirectUrl={redirectUrl || '/'} />
        </div>
      </div>
    </section>
  )
}

export default Page