import {User2Icon, UserPlus2Icon, Edit2Icon} from "lucide-react"

function UserProfile() {

  
  return (
    <>
    <main className="pt-32 p-10 h-lvh">
      <div className="border-[3px] border-gray-100 rounded-md p-12 md:block lg:block flex justify-center items-center">
        <div className="md:flex lg:flex md:grid-cols-2 lg:grid-cols-2  gap-10">
            <div>
                <div className=" bg-gray-200 rounded-full p-14">
                    <UserPlus2Icon size={40} ></UserPlus2Icon>
                </div>
            </div>
            <div>
                <p className="text-3xl font-bold">John doe</p>
                <p className="text-sm text-gray-500 mb-6">Joined March 2024</p>
                <a href="" className="bg-gray-100 duration-300 hover:bg-gray-200 px-4 p-2 text-sm flex rounded-3xl"><div className="flex justify-center items-center gap-2">Edit profile <Edit2Icon size={19}></Edit2Icon> </div></a>
            </div>
        </div>

      </div>

    </main>
    </>
  )
}

export default UserProfile
