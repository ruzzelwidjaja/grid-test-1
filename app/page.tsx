'use client'

import MyGridLayout from '@/components/grid-layout'

export default function Home() {
  return (
    <main className="flex bg-[#f7f2f2] min-h-screen flex-col p-10">
      <div className=" ">
        <div className="mx-auto mt-[-10px] pb-20 max-w-[1200px]">
          <MyGridLayout />
        </div>
      </div>
    </main>
  )
}
