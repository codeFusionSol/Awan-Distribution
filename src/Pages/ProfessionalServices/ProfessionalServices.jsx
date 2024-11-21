import "./ProfessionalServices.css";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import Topbar from "../../Components/Topbar/Topbar.jsx";
import Banner from "../../Components/Banner/Banner.jsx";
import Footer from "../../Components/Footer/Footer.jsx";

// image
import bannerImg from "../../../public/assets/services/Professional Services/ProfessionalServicesBanner.png";
import img from "../../../public/assets/services/Professional Services/ProfessionalServicesImg.png";

// horizontaly cards imgaes
import img1 from "../../../public/assets/services/Professional Services/1.png";
import img2 from "../../../public/assets/services/Professional Services/2.png";
import img3 from "../../../public/assets/services/Professional Services/3.png";
import img4 from "../../../public/assets/services/Professional Services/4.png";
import img5 from "../../../public/assets/services/Professional Services/5.png";
import img6 from "../../../public/assets/services/Professional Services/6.png";
import img7 from "../../../public/assets/services/Professional Services/7.png";
import img8 from "../../../public/assets/services/Professional Services/8.png";
import img9 from "../../../public/assets/services/Professional Services/9.png";
import img10 from "../../../public/assets/services/Professional Services/10.png";
import img11 from "../../../public/assets/services/Professional Services/11.png";
import img12 from "../../../public/assets/services/Professional Services/12.png";
import img13 from "../../../public/assets/services/Professional Services/13.png";
import img14 from "../../../public/assets/services/Professional Services/14.png";
import ImgWithText from "../../Components/ImgWithText/ImgWithText.jsx";

const ProfessionalServices = () => {
  const bigCardsData = [
    {
      img: img1,
      h2: "ERP Implementation",
      p: "Enterprise resource planning (ERP) is a platform companies use to manage and integrate the essential parts of their business. It helps organizations streamline their processes and improve the quality of data. We can assist in the planning stage, feasibility studies, recognizing gaps in existing systems, and propose new standard practices which integrate planning, purchasing, inventory, sales, marketing, finance, human resources, and more.",
    },
    {
      img: img2,
      h2: "Cybersecurity Assessment and Planning",
      p: "Conducting comprehensive cybersecurity assessments to identify vulnerabilities and risks within your infrastructure.",
      p2: "Develop customized cybersecurity strategies and roadmaps tailored for your organization’s specific objectives, risk tolerance, and regulatory requirements.",
    },
    {
      img: img3,
      h2: "Continuous Monitoring and Threat Detection",
      p: "Implement advanced threat detection tools and technologies to continuously monitor our clients' networks, endpoints, and cloud environments.",
      p2: "Provide real-time alerts and notifications for suspicious activities or potential security incidents. Offer 24/7 Security Operations Center (SOC) services to monitor, analyze, and respond to security events promptly.",
    },
    {
      img: img4,
      h2: "Endpoint Security",
      p: "Deploy and manage endpoint protection solutions such as antivirus, antimalware, and endpoint firewall to safeguard our clients' organizations.",
      p2: "Implement data encryption and data loss prevention (DLP) measures to safeguard sensitive information.",
    },
    {
      img: img5,
      h2: "Network Security",
      p: "Design and implement robust network security architectures, including firewalls, intrusion detection/prevention systems (IDS/IPS), and secure VPNs.",
      p2: "Conduct regular network security assessments and penetration testing to identify and remediate vulnerabilities in our clients' network infrastructure.",
    },
    {
      img: img6,
      h2: "Identity and Access Management (IAM)",
      p: "Provide IAM solutions to manage user identities, access permissions, and authentication mechanisms effectively.",
      p2: "Implement multi-factor authentication (MFA) and single sign-on (SSO) capabilities to enhance security and user experience.",
      p3: "Offer privileged access management (PAM) solutions to control and monitor privileged accounts and activities.",
    },
    {
      img: img7,
      h2: "Incident Response and Forensics",
      p: "Develop incident response plans and playbooks to guide our clients' response to security incidents and data breaches.",
      p2: "Offer incident response retainers and services to provide immediate assistance during security incidents. Conduct digital forensics investigations to determine the root cause of security breaches and mitigate future risks.",
    },
    {
      img: img8,
      h2: "Security Awareness Training",
      p: "Deliver customized security awareness training programs to educate our clients' employees about cybersecurity best practices, social engineering tactics, and phishing awareness.",
      p2: "Provide simulated phishing exercises to test employees' awareness and response to phishing attacks.",
    },
    {
      img: img9,
      h2: "Compliance and Regulatory Support",
      p: "Assist our clients in achieving compliance with industry regulations and standards such as GDPR, HIPAA, PCI DSS, and SOC 2.",
      p2: "Conduct compliance assessments and audits to evaluate our clients' regulatory requirements and recommend remediation actions.",
    },
    {
      img: img10,
      h2: "Managed Security Services",
      p: "Offer comprehensive managed security services bundles that integrate various cybersecurity offerings into a single, integrated solution.",
      p2: "Provide proactive threat hunting, incident response coordination, and security advisory services as part of our managed security offerings.",
    },
    {
      img: img11,
      h2: "Cloud Security",
      p: "Offer cloud security assessments and consulting services to ensure the secure configuration and workload of cloud infrastructure and applications.",
      p2: "Implement cloud security solutions such as cloud access security brokers (CASB), cloud workload protection platforms (CWPP), and container security tools to protect cloud environments.",
    },
    {
      img: img11,
      h2: "Security Operations and Reporting",
      p: "Provide regular security reports and executive summaries to our clients, highlighting key security metrics, threat trends, and actionable insights.",
      p2: "Conduct security posture reviews and maturity assessments to help our clients improve their cybersecurity defenses over time.",
    },
    {
      img: img12,
      h2: "Cybersecurity Consulting and Advisory",
      p: "Offer strategic cybersecurity consulting services to help our clients develop cybersecurity strategies, governance frameworks, and risk management practices.",
      p2: "Provide virtual CISO (vCISO) services to serve as trusted advisors for our clients' security leaders without dedicated internal security leadership.",
    },
    {
      img: img13,
      h2: "Mobile Security",
      p: "Implement mobile device management (MDM) solutions to secure and manage mobile device applications, and data across our clients' organizations.",
      p2: "Conduct mobile security assessments and provide recommendations for securing mobile endpoints and preventing mobile-related threats.",
    },
    {
      img: img14,
      h2: "Third-Party Risk Management",
      p: "Assist our clients in assessing and managing cybersecurity risks associated with third-party vendors, suppliers, and partners.",
      p2: "Conduct vendor risk assessments and provide actionable recommendations to ensure third-party compliance with security requirements and best practices.",
    },
  ];

  const cardText = [
    "PCI DSS SERVICES",
    "OFFENSIVE SECURITY",
    "PEN TESTING",
    "DATA PROTECTION",
    "BACKUP AND RECOVERY",
    "ISO SERVICES",
    "SECURITY ACADEMY SOLUTIONS ",
    "AWAN ACADEMY FOR OFFERINGS",
  ];
  return (
    <>
      <Topbar />
      <Navbar />
      <Banner img={bannerImg} text="Professional Services" />
      <div className="container" style={{ marginTop: "100px" }}>
        <div className="row">
          <div className="col-12">
            <h2 className="categoryHeading text-center">
              MAPPING OUR SERVICES TO CATEGORIES
            </h2>
          </div>
          <div
            className="row cardsRow d-flex justify-content-center align-items-center"
            style={{ marginTop: "30px" }}
          >
            {cardText.map((card, index) => {
              return (
                <div className="col-lg-3 col-md-6 col-12 ms-md-5 mb-4 ProfessionalServicesCard">
                  {card}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <ImgWithText
        heading="Professional/Managed SERVICES"
        p1="Awan Distribution has a separate wing where IT industry's brand A
            vendors like ORACLE, SAP, TREND MICRO, F5, REDHAT, KASPERSKY, RAPID
            7 are being provided from pre-sales to implementation and post sales
            service."
        p2=" Awan Distribution is also ready to provide resident engineers and
            resources from our certified sources. Below are few classified
            services that AWAN is offering:"
        img={img}
      />

      <div class="container " style={{ marginTop: "100px" }}>
        <div className="row">
          {bigCardsData.map((card, index) => {
            return (
              <>
                <div className="col-lg-3 col-12 d-flex align-items-center justify-content-center mt-5 textWithImgTextDiv">
                  <img src={card.img} width="184px" alt="" />
                </div>
                <div className="col-lg-9 col-12 mt-5 textWithImgImgDiv">
                  <h2 className="ProfessionalServicesTextHeading">{card.h2}</h2>
                  <p className="ProfessionalServicesTextPara">{card.p}</p>{" "}
                  {card.p2 && (
                    <p className="ProfessionalServicesTextPara">{card.p2}</p>
                  )}
                </div>
                <hr style={{ width: "90%", margin: "auto" }} />
              </>
            );
          })}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProfessionalServices;
