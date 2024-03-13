import ContactUs from "./ContactUs";
import CustomerFeedback from "./CustomerFeedback";
import HotNews from "./HotNews";
import MethodPayment from "./MethodPayment";

export default function PriceEx() {
  return (
    <div className="w-full">
      <HotNews />
      <CustomerFeedback />
      <MethodPayment />
      <ContactUs />
    </div>
  );
}
