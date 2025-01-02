import FooterComponent from "@/components/ui/Footer";
import { OrbitingCirclesDemoSoftware } from "@/components/ui/orbitingcirclesdemosoftware";
import Cards from "../../components/ui/Cards";

// import ContactPage from "../../app//page"

const Software = () => {
  const appCardData = [
    { image: '/assets/template-img/temp1.gif', title: 'Template', description: 'Inventory Management System', designLink: '../../Websites/inventory/index.html' },
    { image: '/assets/template-img/Ecommerce.gif', title: 'Template', description: 'E-Commerce App', designLink: '../../Websites/ECommerce/index.html' },
  ];




  return (

    <><div className=" bg-black pt-9">
      <div className="flex justify-evenly items-center mx-3  pt-9">
        <OrbitingCirclesDemoSoftware />

        <div className="text-xl md:text-4xl font-bold w-60 text-white md:text-left text-center">
        &quot;Welcome to Our Software developement Section&quot;
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
    </div>
    
      <FooterComponent></FooterComponent>
    </>
  );
};
export default Software;
