import Cards from "../../components/ui/Cards";
 
import { OrbitingCirclesDemoApp } from "@/components/ui/orbitingcirclesdemoaapp";
import FooterComponent from "@/components/ui/Footer";

const App = () => {
  const appCardData = [
    { image: '/assets/template-img/Messaging-app.gif', title: 'Template 1', description: 'Messaging Application', designLink: '../../Messaging-App/index.html' },
    { image: '/assets/template-img/WomenSafety.gif', title: 'Template 2', description: 'Women Safety Application', designLink: '../../WomenSafetyApp/index.html' },
    { image: '/assets/template-img/Avira-fashions.gif', title: 'Template 3', description: 'Avira-fashions', designLink: '../../Avira-Fashions/index.html' },

  ];




  return (

    <><div className=" bg-black pt-9">
      <div className="flex justify-evenly items-center mx-3  pt-9">
        <OrbitingCirclesDemoApp />

        <div className="text-xl md:text-4xl font-bold w-60 text-white md:text-left text-center">
        &quot;Welcome to Our App Devlopement Section&quot;
        </div>
      </div>
      <div className="container mx-auto">
        <div className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-white to-black-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black my-9 py-9">
          Projects
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {appCardData.map((data, index) => (
            <div key={index} className="">
              <Cards card={data} />
            </div>
          ))}
        </div>
      </div>
      {/* <div
        style={{
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'black',
          padding: '40px',
          borderRadius: '0.75rem',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      > */}
        {/* <div
          style={{
            fontSize: '24px',
            fontWeight: 'bold',
            marginBottom: '20px',
            color: '#ffffff',
            textAlign: 'center',
          }}
        >
          Get started
        </div>
        <div
          style={{
            fontSize: '44px',
            fontWeight: 'bold',
            marginBottom: '20px',
            color: '#ffffff',
            textAlign: 'center',
          }}
        >
          See if you qualify <span style={{ color: '#ffd143' }}>today</span>
        </div> */}
        {/* <div
          style={{
            position: 'relative',
            width: '100%',
            backgroundColor: '#5423e7',
            padding: '20px',
            borderRadius: '0.75rem',
          }}
        > */}
      {/* <iframe
            src="https://outlook.office365.com/book/AviraWorldTechnologyConsultationBooking@aviraworld.co.in/"
            width="100%"
            height="700px"
            frameBorder="0"
            title="Select a Date & Time - Calendly"
          /> */}
      {/* </div> */}
      </div>
      <FooterComponent></FooterComponent>
    {/* </div> */}
    </>
  );
};
export default App;
