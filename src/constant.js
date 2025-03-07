import logoImg from "./assets/logo/logo.png";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";

// all services
import { ReactComponent as allServiceIcon1 } from "./assets/svgs/services/Web Development.svg";
import { ReactComponent as allServiceIcon2 } from "./assets/svgs/services/App Development.svg";
import { ReactComponent as allServiceIcon3 } from "./assets/svgs/services/UIUX Design.svg";
import { ReactComponent as allServiceIcon4 } from "./assets/svgs/services/data-science.svg";
import { ReactComponent as allServiceIcon5 } from "./assets/svgs/services/Machine Learning Solutions.svg";
import { ReactComponent as allServiceIcon6 } from "./assets/svgs/services/Game Development.svg";

// app development services
import { ReactComponent as appServiceIcon1 } from "./assets/svgs/services/iOS App Development.svg";
import { ReactComponent as appServiceIcon2 } from "./assets/svgs/services/Android.svg";
import { ReactComponent as appServiceIcon3 } from "./assets/svgs/services/Flutter.svg";
import { ReactComponent as appServiceIcon4 } from "./assets/svgs/services/Hybrid App Development.svg";

// web development services
import { ReactComponent as webServiceIcon1 } from "./assets/svgs/services/E-Commerce Development.svg";
import { ReactComponent as webServiceIcon2 } from "./assets/svgs/services/Social Media Websites.svg";
import { ReactComponent as webServiceIcon3 } from "./assets/svgs/services/Web Development.svg";
import { ReactComponent as webServiceIcon4 } from "./assets/svgs/services/UIUX Design.svg";

export { logoImg };

export const companyDetails = {
  phone: "+918130969061",
  address: "ABC Street, City, Country",
  email: "info@codecrestai.com",
  whatsapplink:
    "https://api.whatsapp.com/send/?phone=8130969061&text&type=phone_number&app_absent=0",
  linkedin: "",
  instagram: "",
  twitter: "",
};

export const routes = [
  {
    path: "/",
    name: "Home",
    element: <Home />,
  },
  {
    path: "/about-us",
    name: "About Us",
    element: <AboutUs />,
  },
  {
    path: "/services",
    name: "Services",
    element: <Services />,
  },
  {
    path: "/blogs",
    name: "Blogs",
    element: <Blogs />,
  },
  {
    path: "/contact-us",
    name: "Contact Us",
    element: <ContactUs />,
  },
  {
    path: "/blogs/:id",
    name: "Blog Details",
    element: <BlogDetails />,
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-commerce Websites",
    icon: webServiceIcon1,
    description:
      "Empowering your online business with tailored ecommerce solutions. Our platforms boost customer engagement, streamline operations, and drive revenue growth. ",
  },
  {
    id: 2,
    title: "Social Media Websites",
    icon: webServiceIcon2,
    description:
      "Get custom social media websites that captivate and engage your audience, driving growth and brand loyalty effortlessly",
  },
  {
    id: 3,
    title: "Landing Websites",
    icon: webServiceIcon3,
    description:
      " Creating high-converting landing pages that capture attention and drive action. Tailored designs that showcase your brand’s message and maximize conversions.",
  },
  {
    id: 4,
    title: "Custom Websites",
    icon: webServiceIcon4,
    description:
      "Delivering tailor-made websites designed to meet your unique business needs. Our solutions blend creativity and functionality for an exceptional online experience.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    icon: appServiceIcon1,
    description:
      "Our skilled developers work with both Swift and Objective-C to build robust and efficient apps. We optimize your app for performance, speed, and responsiveness.",
  },
  {
    id: 2,
    title: "Android App Development",
    icon: appServiceIcon2,
    description:
      "We design and develop tailor-made Android apps that align with your vision and business goals.Proficient in both Java and Kotlin, we build robust and efficient apps.",
  },
  {
    id: 3,
    title: "Flutter App Development",
    icon: appServiceIcon3,
    description:
      "Flutter allows you to build apps for both iOS and Android using a single codebase. While Flutter's default web app architecture presents challenges, we can overcome them with smart strategies. ",
  },
  {
    id: 4,
    title: "Hybrid App Development",
    icon: appServiceIcon4,
    description:
      "We build feature-rich hybrid apps tailored to your business needs. We create mobile-friendly apps that work seamlessly across iOS and Android devices.",
  },
];

// testimonials
// testimonials
export const testimonials = [
  {
    id: 1,
    name: "Samiksha Sharma",
    position: "Operations Manager at EcoFlow Systems",
    img: require("./assets/images/testimonial3.png"),
    desc: "“CodeCrestAI's web development service is top-notch. They built a responsive, user-friendly website that reflects our brand perfectly. Great job!”",
  },
  {
    id: 2,
    name: "Anubhav J.",
    position: "Marketing Director at PlayForge Studios",
    img: require("./assets/images/testimonial1.png"),
    desc: "“CodeCrestAI's AI solutions are cutting-edge, driving our business forward. Their app development team exceeded expectations. Highly recommended!”",
  },
  {
    id: 3,
    name: "Emily T",
    position: "Operations Manager at Health Innovations Group",
    img: require("./assets/images/testimonial2.png"),
    desc: "“The AI solutions from CodeCrestAI have revolutionized our operations. Their expertise and support are invaluable. A truly strategic partner.”",
  },
  {
    id: 4,
    name: "Aarav Kapoor",
    position: "Product Manager of Nexus Tech",
    img: require("./assets/images/testimonial4.jpg"),
    desc: "“CodeCrestAI's app development team delivered a seamless, feature-rich application on time and within budget. Fantastic experience overall”",
  },
  {
    id: 5,
    name: "Jessica M",
    position: "COO of Creative Solutions",
    img: require("./assets/images/testimonial5.jpg"),
    desc: "“Impressed with CodeCrestAI's creativity in app development. They turned our vision into reality flawlessly. Exceptional service!”",
  },
];

// all services
export const allServices = [
  {
    id: 1,
    title: "Web Development",
    link: "/web-development",
    description:
      "Design and develop responsive, SEO-friendly websites that effectively represent your brand and engage your audience.",
    icon: allServiceIcon1,
    detailHeading: "Web Development: Tailored Websites that Deliver Results",
    detailContent: `<p>At CodeCrestAI, we build more than just websites—we create digital experiences that empower businesses to thrive in a competitive online landscape. Whether you're a startup establishing your digital footprint or an enterprise seeking a robust, scalable platform, our web development services are tailored to your unique needs. Our expert team collaborates to:</p>
    <br/>
    <ol>
      <li><b>Develop Custom Websites:</b><br/>No cookie-cutter solutions here. We craft each site from the ground up, ensuring it perfectly reflects your brand and business objectives.</li>
      <br/>
      <li><b>Optimize for Speed and Security:</b><br/>Performance matters. We ensure your website loads swiftly and incorporates the latest security measures to safeguard your data and users.</li>
      <br/>
      <li><b>Ensure Scalability:</b><br/>As your business grows, your website should too. Our solutions are built to handle increased traffic and adapt seamlessly to your evolving needs.</li>
    </ol>
    <br/>
    <br/>
    <p>Whether you need an e-commerce platform, a corporate site, or a portfolio, our custom web development services enhance your online presence and drive user engagement.</p>`,
  },
  {
    id: 2,
    title: "App Development",
    link: "/app-development",
    description:
      "Develop robust, user-friendly mobile apps for iOS and Android platforms that meet your business needs.",
    icon: allServiceIcon2,
    detailHeading:
      "App Development: Powerful Mobile Solutions for Modern Businesses",
    detailContent: `<p>In a mobile-first world, having a well-designed app can set your business apart. At CodeCrestAI, we specialize in creating custom mobile applications that deliver seamless performance and engaging user experiences. Our app development services cover everything from initial concept to final deployment:</p>
      <br/>
      <ol>
        <li><b>iOS and Android Apps:</b><br/>Whether you're targeting iPhone enthusiasts or Android users, we develop native apps optimized for both platforms to ensure outstanding performance.</li>
        <br/>
        <li><b>Cross-Platform Solutions:</b><br/>Need to reach a broader audience with a unified codebase? We build cross-platform apps that run smoothly on both iOS and Android, reducing development time and cost without sacrificing quality.</li>
        <br/>
        <li><b>Feature Integration:</b><br/>From in-app purchases to push notifications and social media integration, we incorporate the features your app needs to engage users and drive results.</li>
      </ol>
      <br/>
      <br/>
      <p>We’re not just writing code—we’re building mobile experiences that solve real business challenges and delight users.</p>`,
  },
  {
    id: 3,
    title: "UX/UI Design",
    description:
      "Create intuitive and visually appealing user interfaces and experiences that enhance usability and customer satisfaction.",
    icon: allServiceIcon3,
    detailHeading: "UX/UI Design: Crafting Seamless and Engaging User Journeys",
    detailContent: `<p>At CodeCrestAI, we believe that a great digital product is nothing without an exceptional user experience. Our UX/UI design services focus on crafting intuitive, user-centered interfaces that make it effortless for your customers to engage with your business. Here's how we bring your vision to life:</p>
      <br/>
      <ol>
        <li><b>User-Centered Design:</b><br/>We take the time to understand your users—their needs, behaviors, and goals—to design interfaces that feel natural and engaging.</li>
        <br/>
        <li><b>Prototyping and Testing:</b><br/>Before anything goes live, we create interactive prototypes to gather feedback and ensure that the final design is both functional and delightful.</li>
        <br/>
        <li><b>Beautiful and Functional Interfaces:</b><br/>Our UI designers craft stunning visuals that not only capture attention but also provide a seamless, enjoyable experience.</li>
      </ol>
      <br/>
      <br/>
      <p>From websites to mobile apps, our designs drive higher engagement, satisfaction, and lasting loyalty.</p>`,
  },
  {
    id: 4,
    title: "Data Science Services",
    description:
      "Transform data into actionable insights with our comprehensive data science solutions that drive strategic decision-making.",
    icon: allServiceIcon4,
    detailHeading:
      "Data Science Services: Turning Data into Strategic Insights",
    detailContent: `<p>At CodeCrestAI, we harness the power of data to drive innovation and informed decision-making. Our data science services help you transform raw data into valuable insights that propel your business forward. Our expertise includes:</p>
    <br/>
    <ol>
      <li><b>Data Analysis and Visualization:</b><br/>We analyze your data to uncover trends and patterns, presenting complex information in clear, impactful visual formats.</li>
      <br/>
      <li><b>Predictive Analytics:</b><br/>Leveraging advanced statistical models and machine learning algorithms, we forecast trends and outcomes to keep you ahead of the curve.</li>
      <br/>
      <li><b>Custom Data Solutions:</b><br/>From data warehousing to bespoke analytics dashboards, we build solutions tailored to your business needs.</li>
    </ol>
    <br/>
    <br/>
    <p>Empower your business with data-driven strategies and unlock new growth opportunities with our comprehensive data science services.</p>`,
  },
];

// portfolio images (web development)
export const webPortfolio = [
  {
    id: 1,
    img: require("./assets/images/web_projects/1.webp"),
    title: "FE-Finance",
  },
  {
    id: 2,
    img: require("./assets/images/web_projects/2.webp"),
    title: "Ocxee",
  },
  {
    id: 3,
    img: require("./assets/images/web_projects/3.webp"),
    title: "Leaderbridge",
  },
  {
    id: 4,
    img: require("./assets/images/web_projects/4.webp"),
    title: "Gigzio",
  },
  {
    id: 5,
    img: require("./assets/images/web_projects/5.webp"),
    title: "FE Group",
  },
  {
    id: 6,
    img: require("./assets/images/web_projects/6.webp"),
    title: "V Talkz",
  },
];

// portfolio images (app development)
export const appPortfolio = [
  {
    id: 1,
    img: require("./assets/images/app_projects/1.webp"),
    title: "PartEx",
  },
  {
    id: 2,
    img: require("./assets/images/app_projects/2.webp"),
    title: "Find A Driver",
  },
  {
    id: 3,
    img: require("./assets/images/app_projects/3.webp"),
    title: "Artisan Express",
  },
  {
    id: 4,
    img: require("./assets/images/app_projects/4.webp"),
    title: "House of Deliverance",
  },
];
