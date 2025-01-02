
 
import { OrbitingCirclesDemoCyberSecurity } from "@/components/ui/orbitingcirclesdemocs";
import FooterComponent from "@/components/ui/Footer";
import CyberSecurityCard from "@/components/ui/CyberSecurityCard";

const Software = () => {
  const cyberSecurityData = [
    {
      image: '/assets/template-img/ses.png', title: 'Symantec Endpoint Protection', description: [
        '1. Advanced machine learning and behavior monitoring to detect and prevent zero-day attacks.',
        '2. Centralized management console for seamless monitoring and control of all endpoint devices.'
      ], designLink: ''
    },
    {
      image: '/assets/template-img/Carbon.png', title: 'Carbon Black App Control', description: [
        '1. Application whitelisting to prevent unauthorized and malicious applications from executing.',
        '2. Real-time file integrity monitoring to detect suspicious changes instantly.'
      ], designLink: ''
    },
    {
      image: '/assets/template-img/Tanium.png', title: 'Tanium', description: [
        '1. Real-time visibility into endpoints for enhanced management and threat response.',
        '2. Proactive vulnerability management and patching to keep systems secure and up-to-date.'
      ], designLink: ''
    },
    {
      image: '/assets/template-img/Microsoft.png', title: "Microsoft Defender for Endpoint (MDE)",
      description: [
        '1. Advanced threat detection using machine learning and behavioral analytics.',
        '2. Seamless integration with other Microsoft security solutions for end-to-end protection.'
      ], designLink: ''
    },
    {
      image: '/assets/template-img/sql.png', title: "SQL Injection Prevention",
      description: [
        '1. Implementation of robust security measures to protect against SQL injection attacks.',
        '2. Real-time monitoring and detection of malicious SQL queries.'
      ],
      designLink: ''
    },
    {
      image: '/assets/template-img/ddos.png', title: 'Distributed Denial-of-Service (DDoS) Protection',
      description: [
        '1. Advanced DDoS mitigation solutions to safeguard your digital assets from large-scale attacks.',
        '2. Real-time traffic monitoring and filtering to detect and block malicious activity.'
      ], designLink: ''
    },
    {
      image: '/assets/template-img/pen.png', title: 'Penetration Testing',
      description: [
        '1. Comprehensive assessment of your security posture through simulated attacks.',
        '2. Identification of vulnerabilities and security gaps across your network and applications.'
      ], designLink: ''
    },
  ];

  return (
    <>
      
      <div className="bg-black pt-9 ">
      <div className="flex justify-evenly items-center mx-3  pt-9">
        <OrbitingCirclesDemoCyberSecurity />

        <div className="text-xl md:text-4xl font-bold text-white md:text-left text-center w-60">
        &quot;Welcome to Our Cyber Security Section&quot;
        </div>
      </div>
        <div className="container  ">
        <div className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-white to-black-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black my-9 py-9">
          Projects
        </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cyberSecurityData.map((data, index) => (
              <div key={index}>
                <CyberSecurityCard card={data} />
              </div>
            ))}
          </div>
        </div>
        <FooterComponent />
      </div>
    </>
  );
};
export default Software;
