import { Heart} from "lucide-react"


function WishList() {

  
  return (
    <>
    <main className="pt-32 p-10 h-lvh">
      <h1 className="text-xl font-extrabold"><div className="flex items-center  gap-4">Your WishLists <Heart /></div> </h1>
      <div className="rounded-md border-[2px] my-10 border-gray-100 p-20 flex justify-center items-center">
        <h1 className="text-sm text-gray-400">There are no items in your WishLists</h1>
      </div>

    </main>
    </>
  )
}

export default WishList
