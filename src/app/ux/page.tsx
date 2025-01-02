import Cards from "../../components/ui/Cards";
 
import { OrbitingCirclesDemoUx } from "@/components/ui/orbitingcirclesdemoux";
import FooterComponent from "@/components/ui/Footer";

const Ux = () => {
  const appCardData = [

    { image: '/assets/template-img/only-css-animation-01.gif', title: 'Template 1', description: 'Landing Page Loader', designLink: '../../Websites/ux1/index.html' },
    { image: '/assets/template-img/ScreenRecording2024-10-24235621-ezgif.com-video-to-gif-converter.gif', title: 'Template 2', description: 'Women Safety Application', designLink: '../../Websites/ux2/index.html' },

  ];




  return (

    <><div className=" bg-black pt-9">
      <div className="flex justify-evenly items-center mx-3  pt-9">
        <OrbitingCirclesDemoUx />

        <div className="text-xl md:text-4xl font-bold w-60 text-white md:text-left text-center">
        &quot;Welcome to Our UI/UX Devlopement Section&quot;
        </div>
      </div>
      <div className="container mx-auto ">
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
      <FooterComponent></FooterComponent>
    </div>
    </>
  );
};
export default Ux;
