// src/components/shared/Footer.jsx
import { resourcesLinks, platformLinks, communityLinks } from "../../constants/index";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 transition-colors duration-300">
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-right" dir="rtl">
        
        {/* شعار ووصف */}
        <div>
          <div className="flex items-center mb-4">
            <img src={logo} alt="ملتقى WEBSCALE" className="h-10 w-10 ml-2" />
            <span className="font-bold text-lg">ملتقى WEBSCALE</span>
          </div>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
            ملتقى تقني يجمع الشركات الناشئة ورواد الأعمال لمناقشة أحدث حلول التكنولوجيا والابتكار.
          </p>
        </div>

        {/* الروابط - Resources */}
        <div>
          <h3 className="text-md font-semibold mb-4 text-neutral-800 dark:text-neutral-200">المصادر</h3>
          <ul className="space-y-2">
            {resourcesLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-600 dark:text-neutral-400 hover:text-[#FABC05] dark:hover:text-[#FABC05] transition-colors"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* الروابط - المنصة */}
        <div>
          <h3 className="text-md font-semibold mb-4 text-neutral-800 dark:text-neutral-200">المنصة</h3>
          <ul className="space-y-2">
            {platformLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-600 dark:text-neutral-400 hover:text-[#FABC05] dark:hover:text-[#FABC05] transition-colors"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* الروابط - المجتمع */}
        <div>
          <h3 className="text-md font-semibold mb-4 text-neutral-800 dark:text-neutral-200">المجتمع</h3>
          <ul className="space-y-2">
            {communityLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-600 dark:text-neutral-400 hover:text-[#FABC05] dark:hover:text-[#FABC05] transition-colors"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* الحقوق */}
      <div className="mt-10 border-t border-neutral-300 dark:border-neutral-700 py-4 text-center text-sm text-neutral-600 dark:text-neutral-400">
        جميع الحقوق محفوظة © {new Date().getFullYear()} ملتقى WEBSCALE
      </div>
    </footer>
  );
};

export default Footer;
