import { Heart} from "lucide-react"


function WishList() {

  
  return (
    <>
    <main className="pt-32 p-10 h-lvh">
      <h1 className="text-sm md:text-xl lg:text-xl font-extrabold"><div className="flex items-center  gap-4">Your WishLists <Heart size={18} /></div> </h1>
      <div className="rounded-md border-[2px] my-10 border-gray-100 p-20 flex justify-center items-center">
        <h1 className="text-[12px] text-center text-gray-400">There are no items in your WishLists</h1>
      </div>

    </main>
    </>
  )
}

export default WishList
