import { TestimonialItem } from "../../../components";

export default function CustomerFeedback() {
  return (
    <section className="p-0 mb-20 border-none bg-white rounded-lg w-full">
      <div className="w-full">
        <div className="mb-12 text-center mt-0 flex flex-col gap-y-3">
          <div className="text-[28px] font-bold m-0 p-0">
            Khách hàng nói về chúng tôi
          </div>
          <p>
            Sự hài lòng của khách hàng là động lực phát triển của
            Phongtro123.com
          </p>
        </div>
        <div className="w-full flex flex-wrap -mx-[15px]">
          <TestimonialItem />
          <TestimonialItem />
          <TestimonialItem />
          <TestimonialItem />
          <TestimonialItem />
          <TestimonialItem />
        </div>
      </div>
    </section>
  );
}
