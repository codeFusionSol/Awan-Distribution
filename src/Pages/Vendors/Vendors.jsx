import "./Vendors.css";
import Topbar from "../../Components/Topbar/Topbar.jsx";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import Sidebar from "../../Components/SideBar/Sidebar.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import { useLocation } from "react-router-dom";

// import images and logo
import logo1 from "../../../public/assets/vendor/page1/logo.png";
import logo2 from "../../../public/assets/vendor/page2/logo.png";
import logo3 from "../../../public/assets/vendor/page3/logo.png";
import logo4 from "../../../public/assets/vendor/page4/logo.png";
import logo5 from "../../../public/assets/vendor/page5/logo.png";
import logo6 from "../../../public/assets/vendor/page6/logo.png";
import logo7 from "../../../public/assets/vendor/page7/logo.png";
import logo8 from "../../../public/assets/vendor/page8/logo.png";
import logo9 from "../../../public/assets/vendor/page9/logo.png";
import logo10 from "../../../public/assets/vendor/page10/logo.png";
import logo11 from "../../../public/assets/vendor/page11/logo.png";
import logo12 from "../../../public/assets/vendor/page12/logo.png";
import logo13 from "../../../public/assets/vendor/page13/logo.png";
import logo14 from "../../../public/assets/vendor/page14/logo.png";
import logo15 from "../../../public/assets/vendor/page15/logo.png";
import logo16 from "../../../public/assets/vendor/page16/logo.png";
import logo17 from "../../../public/assets/vendor/page17/logo.png";
import logo18 from "../../../public/assets/vendor/page18/logo.png";
import logo19 from "../../../public/assets/vendor/page19/logo.png";

// images
import img1 from "../../../public/assets/vendor/page1/img.png";
import img2 from "../../../public/assets/vendor/page2/img.png";
import img3 from "../../../public/assets/vendor/page3/img.png";
import img4 from "../../../public/assets/vendor/page4/img.png";
import img5 from "../../../public/assets/vendor/page5/img.png";
import img6 from "../../../public/assets/vendor/page6/img.png";
import img7 from "../../../public/assets/vendor/page7/img.png";
import img8 from "../../../public/assets/vendor/page8/img.png";
import img9 from "../../../public/assets/vendor/page9/img.png";
import img10 from "../../../public/assets/vendor/page10/img.png";
import img11 from "../../../public/assets/vendor/page11/img.png";
import img12 from "../../../public/assets/vendor/page12/img.png";
import img13 from "../../../public/assets/vendor/page13/img.png";
import img14 from "../../../public/assets/vendor/page14/img.png";
import img15 from "../../../public/assets/vendor/page15/img.png";
import img16 from "../../../public/assets/vendor/page16/img.png";
import img17 from "../../../public/assets/vendor/page17/img.png";
import img18 from "../../../public/assets/vendor/page18/img.png";
import img19 from "../../../public/assets/vendor/page19/img.png";
import { useEffect, useState } from "react";

const Vendors = () => {
  const [signleVendor, setSignleVendor] = useState({});
  const data = [
    {
      logo: logo1,
      img: img1,
      location: "hewlett",
      p1: "HPE is the global edge-to-cloud company built to transform your business, How? By helping you connect, protect, analyze, and act on all your data and applications wherever they live, from edge to cloud, so you can turn insights into outcomes at the speed required to thrive in today’s complex world.",
      p2: "The Hewlett Packard Enterprise Company (HPE) is an American multinational enterprise information technology company based in Spring, Texas, United States.",
      bgColor: "#0096D6",
    },
    {
      logo: logo2,
      img: img2,
      location: "microsoft",
      p1: "Microsoft is an American multinational computer technology corporation whose history started in 1975. Formed by Harvard College dropouts, Bill Gates and his childhood friend Paul Allen, Microsoft has now become the biggest software company. It is also one of the most valuable companies in the world.",
      p2: "Microsoft enables digital transformation for the era of an intelligent cloud and an intelligent edge. Its mission is to empower every person and very organization on the planet to achieve more.",
      bgColor: "#7FBA00",
    },
    {
      logo: logo3,
      img: img3,
      location: "kaspersky",
      p1: "Kaspersky is a global company, with a global vision and a focus on internatinal markets. They operate in 200 countries and territories and have 34 offices in more than 30 countries. Their team consists of more than 4,000 highly-qualified specialists.",
      p2: "Kaspersky’s mission is to build a safer world and believe in a tomorrow where technology improves all of our lives. As the world has become more digitized and globalized, Kaspersky have become a technology leader with an advanced and comprehensive portfolio of security solutions and services. Now Kaspersky’s business focus is continuing to evolve from “cybersecurity” towards the wider concept of “cyber-immunity”",
      bgColor: "#016D5D",
    },
    {
      logo: logo4,
      img: img4,
      location: "micro",
      p1: "Trend Micro, a global cybersecurty leader, helps make the world safe for exchanging digital information. fueled by decades of experties, global threat reserch, and 500,000+ organizations and 250+ million individuals across clouds, networks, devices, and endpoint. ",
      bgColor: "#CB302B",
    },
    {
      logo: logo5,
      img: img5,
      location: "aruba",
      p1: "Aruba has repeatedly been recognized by third party analysts as a leader in Wi-Fi 6, switching, SD-Branch, and a visionay in Data Center networking. The world’s largest companies rely on Aruba to provide a secure, AI-powered edge services platform that spans across campus, branch, data center, and remote working enviroments.",
      bgColor: "#F5831F",
    },
    {
      logo: logo6,
      img: img6,
      location: "sangoma",
      p1: "Sangoma is a leading, global Communications as a Service (CaaS) provider that empowers businesses od all sizes to connect to the people and processes that matter. Since 1984, Sangoma has been recognized as a trusted leader in the communications industry and countinues to offer a stable, global presence, future-forward vision, and diverse portfolio pf solutions, service, and support",
      bgColor: "#158FCF",
    },
    {
      logo: logo7,
      img: img7,
      location: "oracle",
      p1: "Oracle is a computer technology corporation best known for its software products and servives. Through the company’s four main business segments, cloud and licenece, hardware, and services, Oracle sells its cloud-engineering services and system and database managemet system",
      bgColor: "#F80000",
    },
    {
      logo: logo8,
      img: img8,
      location: "hbc",
      p1: "H3C is an industry leader in the provision of digital solutions, and is commited to becoming the most trusted Partner of its customers in their quest for business innovation and digital transformation. H3C offers a full portfolio of Digital Infrastructure product, spanning across chip, compute. stage, networking, 5G, security, terminal and related domains, and provides a comprehensive one-stop digital platform that includes cloud computing, big data, artificial intelligence (AI), industrial internet, information security, intelligent connectivity, AI vision, and edge computing, as well as end-to-end technial services.",
      bgColor: "#ED1C24",
    },
    {
      logo: logo9,
      img: img9,
      location: "redhat",
      p1: "Red Hat Enterprise Linux is the leading platform for open source computing.",
      p2: "We’re the world’s leading provider of enterprise open source solutions. using a community-powered approach to deliver high-performing Linux, cloud, container, and kubernetes technologies. We help you standardize across enviroments, develop cloud-netive applications, and integrate, automate, secure, and manage complex enviroments with award-winning support, training, and consulting servuces. ",
      bgColor: "#EE0000",
    },
    {
      logo: logo10,
      img: img10,
      location: "veeam",
      p1: "Veeam is the leader in backup, recovery and data management solutions that deliver Modern Data Protection. Veeam provides a single platform for cloud, virtual, Physical, SaaS and Kubernetes enviroments, Veeam customers are confident that their apps and data are protected from ransomware, disaster and harmful actors and are always available with the most simple, flexible, reliable and powerful platform in the industry ",
      bgColor: "#00B336",
    },
    {
      logo: logo11,
      img: img11,
      location: "f5",
      p1: "F5, Inc. is an American technology company specializing in application security, multi-cloud management, online fraud prevention, application delivery networking, application availablity & performance, network security, and access & authorization ",
      bgColor: "#E21D38",
    },
    {
      logo: logo12,
      img: img12,
      location: "strke",
      p1: "Strike Ready is an extremely powerful SaaS-based platform that engages, supports, Knowledge, and automation. Strike Ready platform uses a patented Security Ontology Graph (SOG) that mimcs human’s (aka defender) thinking. It keeps itself up-to-date and shares the knowledge and skills that it has learned in real-time from intuitional knowledge and practical experiences of the defender’s around the world. No matter what defender you are SOC Analyst, Threat Intel Analyst, Security Engineer, Red Teamer, etc., you can leverage our technology. ",
      bgColor: "#73C7AD",
    },
    {
      logo: logo13,
      img: img13,
      location: "huawei",
      p1: "Founded in 1987, Huawei is a leading global provider of information and communications technology (ICT) infrastructure and smart devices. Huawei has approximately 197,000 employees and it operates in over 170 countries and regions, serving more than three billion people around the world. Huawei’s mission is to bring digital to every person, home and organization for a fully connected, intelligent world",
      bgColor: "#ED1F29",
    },
    {
      logo: logo14,
      img: img14,
      location: "rapid",
      p1: "Repid7 believes in simplifying complexities through shared visibility, analytics, and automation that unite your teams around challanges and successes of cybersecurity. Your security isn’t hypothetical. It should be a reality for all organization. That’s why Rapid7 is committed to helping you build security into the heart of your organization. Whether you’re looking for a comprehensive security platform, an assessment to better understand your security posture, or something in between, Rapid7 got your back.",
      bgColor: "#E95823",
    },
    {
      logo: logo15,
      img: img15,
      location: "panduit",
      p1: " Allthrough the world has dramatically changed since Panduit story began in 1955 when its founder Jack E.  Caveney invented the panduct wiring duct in his garage, Panduit spirit of discovery and can do attitude have remained. Choosing to innovate rather than imitate, Panduit continues to crerate leading edge physical electrical and network infrastructure solutions across a wide specturn of business enviroments. ",
      bgColor: "#00B09A",
    },
    {
      logo: logo16,
      img: img16,
      location: "sophos",
      p1: "Sophos is a worldwide leader in next-generation cybersecurity, protecting more than 500,000 organization and millions of consumers in more than 150  countries from today’s most advanced cyberthreats. Powered by threat intelligence. AI and machine learning from SophosLabs and SophosAI, Sophos delivers a board portfolio of advanced products and services to secure user, networks and endpoins against ransomware, malware, exploits, phishing and a wide range of other cuberattacks. ",
      bgColor: "#3062AE",
    },
    {
      logo: logo17,
      img: img17,
      location: "citrix",
      p1: "Citrix Virtual Apps and Desktops are virtualization solutions that give IT control of virtual machines, applications, licenising, and security while providing anywhere access for any device",
      p2: "Citrix is committed to delivering intelligent. unfied workspaces that allow individuals to take control of their work days and empower orgnizations to achieve more.",
      bgColor: "#000000",
    },
    {
      logo: logo18,
      img: img18,
      location: "apc",
      p1: "APC, a flagship brand of Schneider Elctric, provides clean battery back-up power, surge protection, and IT physical infrastructure.",
      p2: "For nearly four decades, APC has become the industry-standard for reliable power and physical IT infrastrucure. Now the leading name in IT departments large and small and among vast community of channel partners, APC history of innovation has pushed its products into the global spotlight with infrastructure, management, and data security solutions protecting organizations around the world.",
      bgColor: "#FF0000",
    },
    {
      logo: logo19,
      img: img19,
      location: "veritas",
      p1: "Veritas has helped guide enterprise customers through every disruptive tecnology shift of the past 30 years. Our intergrated approach to data management and protection is proven to deliver unmatched verssatility, perfomance, and cost savings across enviroments.",
      bgColor: "#AA252B",
    },
  ];
  const location = useLocation();
  let currentLocation = location.pathname.split("/")[2];
  console.log(currentLocation);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const filterData = data.filter(
      (item) => item.location === location.pathname.split("/")[2]
    );
    setSignleVendor(filterData[0]);
  }, [location.pathname]);

  return (
    <>
      <Topbar />
      <Navbar />
      <div className="container-fluid mx-0 px-0">
        <div className="row">
          <div className="col-lg-3 col-2 ms-0 ps-0">
            <Sidebar />
          </div>
          <div className="col-lg-9 col-10 d-flex justify-content-start align-items-center flex-column">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12 d-flex justify-content-center align-items-center">
                  <img
                    src={signleVendor?.logo}
                    className="vendorBigLogo"
                    alt="Vendor Logo"
                  />
                </div>
                <div className="col-12 mx-0 ">
                  <p className="vendorDesc d-flex justify-content-start align-items-center ">
                    {signleVendor?.p1}
                  </p>
                  {signleVendor?.p2 && (
                    <p className="vendorDesc d-flex justify-content-center align-items-center text-align-center text-align-md-left">
                      {signleVendor?.p2}
                    </p>
                  )}
                </div>
                <div className="col-12 d-flex justify-content-center align-items-center">
                  <img
                    src={signleVendor?.img}
                    className="vendorBigImg"
                    alt="Vendor"
                  />
                </div>
                <div className="col-12 d-flex justify-content-center align-items-center">
                  <button
                    className="vendorButton"
                    style={{
                      backgroundColor: signleVendor?.bgColor,
                    }}
                  >
                    Click here to visit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-1">
        <Footer />
      </div>
    </>
  );
};

export default Vendors;
