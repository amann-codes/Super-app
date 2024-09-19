import RegistrationForm from "../components/RegistrationForm";
import image from "../components/reg.png";
export default function Registration() {
  return (
    <div className="flex flex-row w-full">
      <img src={image} className="w-[530px]" />
      <RegistrationForm />
    </div>
  );
}
