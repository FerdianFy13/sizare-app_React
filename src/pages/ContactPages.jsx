import FormContact from "../components/contact/FormContact";
import FooterPage from "../components/partial/FooterPage";
import HeaderNavigation from "../components/partial/HeaderNavigation";

const ContactPages = () => {
  return (
    <div>
      <HeaderNavigation title="Contact" />
      <FormContact />
      <FooterPage />
    </div>
  );
};

export default ContactPages;
