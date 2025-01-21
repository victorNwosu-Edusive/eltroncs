import { NavLink } from "react-router-dom"
import eltroncsLogo from '../assets/images/eltroncsblack.png'
import { LocateIcon, Mail, MailIcon, Phone, ShoppingBag, ShoppingBagIcon, ShoppingCart } from "lucide-react"
import { faApple, faFacebook, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Cart() {

  
  return (
    <>
    <main className="pt-32 p-10 h-lvh">
      <h1 className="text-xl font-extrabold"><div className="flex items-center  gap-4">Your Shopping Cart <ShoppingBag /></div> </h1>
      <div className="rounded-md border-[2px] my-10 border-gray-100 p-10 ">
        <h1 className="text-sm text-center mb-7 text-gray-400">There are no items in your cart</h1>
        <button className="bg-black mx-auto flex text-white text-sm px-5 p-2 rounded-md duration-300 hover:bg-gray-500">Start shopping</button>
      </div>

    </main>
    </>
  )
}

export default Cart
