import { NavLink } from "react-router-dom"
import eltroncsLogo from '../assets/images/eltroncsblack.png'
import { LocateIcon, Mail, MailIcon, Phone } from "lucide-react"
import { faApple, faFacebook, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Footer() {

  
  return (
    <>
    <footer className="bg-stone-100 p-10 md:p-10 lg:p-10 lg:pb-0">
        <div className="grid md:grid-cols-4 lg:grid-cols-4 gap-11">
        <div>
                <p className='mb-5 font-[500] text-[16px]'>Shop for anything electronics!</p>
                <p className='text-[14px]'>Welcome to eltroncs, your one-stop destination for the latest and greatest in technology.
                </p>
            </div>

            <div>
                <h1 className='text-[16px] font-[500]'>Quick Links</h1>
                <NavLink to="/" className="p-2 block duration-300 text-[14px] " title="About Us">Categories &#8599;</NavLink>
                <NavLink to="/" className="p-2 block  duration-300 text-[14px] " title='Academics'>Featured &#8599;</NavLink>
                <NavLink to="/" className="p-2 block duration-300 text-[14px] " title='Admissions'>FAQs &#8599;</NavLink>
                <NavLink to="/" className="p-2 block  duration-300 text-[14px] " title='Gallery'>Terms and Conditions &#8599;</NavLink>
                <NavLink to="/" className="p-2 block duration-300 text-[14px] " title='Contact Us'>Help Center &#8599;</NavLink>
            </div>

            <div>
                <h1 className='text-[16px] font-[500] mb-2'>Contact Information
                </h1>
                <div className='flex items-center gap-2'><Phone size={14} />: <p className="text-[14px]">+234 456 7890</p></div>
                <div className='flex items-center gap-2'><MailIcon size={14} />: <p className="text-[14px]">support@eltroncs.com</p></div>
                <div className='flex items-center gap-2'><LocateIcon size={14} />: <p className="text-[14px]">Lagos, Nigeria</p></div>
                
            </div>

            <div>
                <h1 className='text-[16px] font-[500] mb-2'>Social Media
                </h1>
                <p className="text-[14px] mb-4">Follow us on Social Media</p>
                <div className='flex items-center gap-4'>
                    <a href=""><FontAwesomeIcon icon={faInstagram} className="text-black text-2xl" /></a>
                    <a href=""><FontAwesomeIcon icon={faXTwitter} className="text-black text-2xl" /></a>
                    <a href=""><FontAwesomeIcon icon={faFacebook} className="text-black text-2xl" /></a>


                </div>
                
                
            </div>

        </div>

        <div className="pt-10" ><img src={eltroncsLogo} alt="" /></div>
        <div className='text-center mt-10 border-t-[1px] border-white/15 p-4'>
            <p className='text-[13px] md:text-md lg:text-md'> © {new Date().getFullYear()} eltroncs</p>
            </div>
    </footer>

    </>
  )
}

export default Footer
