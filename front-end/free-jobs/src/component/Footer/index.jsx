import {
  FaFacebook,
  FaLinkedin,
  FaYoutube,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import playstore from "../../assets/image/google-play.png";
import appstore from "../../assets/image/app-store.png";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className=" text-text-color">
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
                <div className="text-xl font-bold">Download</div>
                <ul className="flex flex-col gap-2">
                  <FooterLinkItem linkTo={"/terms"}>
                    <img src={appstore} />
                  </FooterLinkItem>
                  <FooterLinkItem linkTo={"/privacy-policy"}>
                    <img src={playstore} />
                  </FooterLinkItem>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t-[1px]">
        <div className="max-w-screen-2xl mx-auto">
          <div className="px-20 flex justify-between items-center py-9">
            <div className="text-xs">
              © {new Date().getFullYear()} Free Jobs. All Right Reserved.
            </div>
            <div className="flex gap-4">
              <Link className="p-3 hover:text-theme-color">
                <FaFacebook />
              </Link>
              <Link className="p-3 hover:text-theme-color">
                <FaLinkedin />
              </Link>
              <Link className="p-3 hover:text-theme-color">
                <FaTwitter />
              </Link>
              <Link className="p-3 hover:text-theme-color">
                <FaInstagram />
              </Link>
              <Link className="p-3 hover:text-theme-color">
                <FaYoutube />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLinkItem({ linkTo, label, children }) {
  return (
    <li className="hover:text-theme-color">
      <Link to={linkTo}>
        {label}
        {children}
      </Link>
    </li>
  );
}
