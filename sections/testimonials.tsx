import { FaRegBuilding } from "react-icons/fa";
import { LiaHandsHelpingSolid } from "react-icons/lia";
import { FaChartLine } from "react-icons/fa";
import { VscSaveAs } from "react-icons/vsc";
import { GoLaw } from "react-icons/go";
import { TbPaywall } from "react-icons/tb";
import { MdLightbulbOutline } from "react-icons/md";
import { MdOutlineSupportAgent } from "react-icons/md";

const testimonials = [
  {
    title: "تأسيس الشّركات",
    text: "خبرة فائقة في تأسيس الشركات حيث نمتلك سنوات عديدة من الخبرة في تقديم خدمات تأسيس الشركات بمهنية عالية وفقًا للقوانين واللوائح السارية في السعودية.",
    img: <FaRegBuilding className="h-8 w-8" />,
    color: "red-500",
  },
  {
    title: "إدارة الخدمات الإلكترونيّة",
    text: "تسهيل إنجاز وتقديم المعاملات عبر المنصّات الإلكترونيّة، حيث يوجد لدينا أخصائيّون بخبراتٍ تتجاوز العقدين في آليّة تنفيذ وإجراء المعاملات الحكوميّة والقطاع الخاص",
    img: <LiaHandsHelpingSolid className="h-8 w-8" />,
    color: "blue-500",
  },
  {
    title: "خدمات المستثمرين",
    text: "فريقنا متخصص في مساعدة المستثمرين الأجانب على اجتياز عملية الحصول على رخصة الاستثمار MISA في السعودية ، من التقديم إلى المستندات اللازمة وصولاً للدعم المستمر.",
    img: <FaChartLine className="h-8 w-8" />,
    color: "amber-500",
  },
  {
    title: "تسجيل العلامة التّجاريّة",
    text: "نقدم خدماتنا الاحترافية في تسجيل العلامات التجارية لدى الهيئة السعودية للملكية الفكرية بهدف حماية هذه العلامات التجارية وصونها من جرائم التزوير والتقليد والمن",
    img: <VscSaveAs className="h-8 w-8" />,
    color: "green-500",
  },
  {
    title: "الخدمات القانونيّة",
    text: "خدمات قانونية رفيعة المستوى بأداء احترافي يساعدكم على الاختيار الأمثل والأكثر دقة لوضع الحجر القانونيّ الأساس لنجاحاتكم، وتقديم أفضل الحلول المبتكرة لاحتياجاتكم",
    img: <GoLaw className="h-8 w-8" />,
    color: "gray-500",
  },
  {
    title: "حماية الأجور WPS",
    text: "نحرص على إثبات وتوثيق التزام صاحب العمل بتطبيق نظام حماية الأجور مما يعينه على تجنّب مخالفات نظام العمل وقضايا الخلافات العمّالية المتعلّقة بالأجور.",
    img: <TbPaywall className="h-8 w-8" />,
    color: "amber-800",
  },
  {
    title: "استشارات ونصائح",
    text: "نصائح واستشارات دقيقة تعطي صورة واضحة وشاملة للمشكلة وتضع الحلول المناسبة والمبتكرة وتساهم بتطوير الأفكار الإبداعية وتحويلها إلى واقع ملموس عبر سبل للتطوير.",
    img: <MdLightbulbOutline className="text-lg" />,
    color: "purple-500",
  },
  {
    title: "الدّعم التّقنيّ والتّسويق",
    text: "تأسيس منصات إلكترونيّة متقدمة وفعالة لجميع المنشآت وتقديم جميع الخدمات المعلوماتيّة والإلكترونية متنوعة تتميز بدرجةٍ عاليةٍ من الأمان والخصوصيّة والكفاءة",
    img: <MdOutlineSupportAgent className="h-8 w-8" />,
    color: "blue-800",
  },
];
const firstColumn = testimonials.slice(0, 4);
const secondColumn = testimonials.slice(4, 8);
const Testimonials = () => {
  return (
    <section className="bg-white py-0 text-end m-5">
      <div className="container">
        <div className="text-2xl inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight me-10">
          <h1> What do we offer you</h1>
        </div>
        <div className="flex justify-center gap-6"></div>
        <div className="flex flex-row gap-6 m-5 [mask-image: linear-graient(to-bottom,transpapent,black_25%,black_75%,transpapent)]:">
          {firstColumn.map(({ title, text, img, color }) => (
            <div className="p-10 border border-[#222222]/10 rounded-3xl shadow-[0_7px_14px_#EAEAEA] max-w-xs w-full ">
              <div className={`flex flex-row justify-between text-[${color}]`}>
                <div>{img}</div>
                <div className="text-lg font-bold tracking-tight leading-5">
                  {title}
                </div>
              </div>
              <div className="flex items-center gap-2 mt-5 text-end">
                <div>{text}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-row gap-6 m-5 [mask-image: linear-graient(to-bottom,transpapent,black_25%,black_75%,transpapent)]:">
          {secondColumn.map(({ title, text, img, color }) => (
            <div className="p-10 border border-[#222222]/10 rounded-3xl shadow-[0_7px_14px_#EAEAEA] max-w-xs w-full ">
              <div className={`flex flex-row justify-between text-${color}`}>
                <div>{img}</div>
                <div className="text-lg font-bold tracking-tight leading-5">
                  {title}
                </div>
              </div>
              <div className="flex items-center gap-2 mt-5 text-end">
                <div>{text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
