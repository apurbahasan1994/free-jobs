import {
  FaFacebook,
  FaLinkedin,
  FaYoutube,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="bg-gray-600 text-white">
      <div className="max-w-screen-2xl mx-auto">
        <div className="px-20">
          <div className="grid grid-cols-[1fr,3fr] pt-[100px] pb-[55px] gap-16">
            <div className="flex flex-col gap-y-4">
              <div className="text-3xl">Free Jobs</div>
              <div className="text-xl">
                <div>Call us</div>
                <div>+8801770877660</div>
              </div>
              <div className="text-sm">
                105/A, Road-8, Monsuarabad, Mohammadpur, Dhaka, Bangladesh
              </div>
            </div>
            <div className="grid grid-cols-4 justify-items-end">
              <div className="flex flex-col gap-4">
                <div className="text-xl font-bold">Useful Links</div>
                <ul className="flex flex-col gap-2">
                  <FooterLinkItem label="Services" linkTo={"/services"} />
                  <FooterLinkItem label="Browse Jobs" linkTo={"/browse-jobs"} />
                  <FooterLinkItem
                    label="Candidate Profiles"
                    linkTo={"/candidate-profiles"}
                  />
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <div className="text-xl font-bold">About Us</div>
                <ul className="flex flex-col gap-2">
                  <FooterLinkItem label="About us" linkTo={"/about"} />
                  <FooterLinkItem label="Contact" linkTo={"/contact"} />
                  <FooterLinkItem label="Blogs" linkTo={"/blog"} />
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <div className="text-xl font-bold">Legal</div>
                <ul className="flex flex-col gap-2">
                  <FooterLinkItem
                    label="Terms and Condtions"
                    linkTo={"/terms"}
                  />
                  <FooterLinkItem
                    label="Privacy Policy"
                    linkTo={"/privacy-policy"}
                  />
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <div className="text-xl font-bold">DownLoad</div>
                <ul className="flex flex-col gap-2">
                  <FooterLinkItem label="App Sotre" linkTo={"/terms"} />
                  <FooterLinkItem
                    label="Google Play"
                    linkTo={"/privacy-policy"}
                  />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t-[1px]">
        <div className="max-w-screen-2xl mx-auto">
          <div className="px-20 flex justify-between items-center py-9">
            <div>
              © {new Date().getFullYear()} Free Jobs. All Right Reserved.
            </div>
            <div className="flex gap-4">
              <Link className="p-3 hover:text-blue-color">
                <FaFacebook />
              </Link>
              <Link className="p-3 hover:text-blue-color">
                <FaLinkedin />
              </Link>
              <Link className="p-3 hover:text-blue-color">
                <FaTwitter />
              </Link>
              <Link className="p-3 hover:text-blue-color">
                <FaInstagram />
              </Link>
              <Link className="p-3 hover:text-blue-color">
                <FaYoutube />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLinkItem({ linkTo, label }) {
  return (
    <li className="hover:text-blue-color">
      <Link to={linkTo}>{label}</Link>
    </li>
  );
}
