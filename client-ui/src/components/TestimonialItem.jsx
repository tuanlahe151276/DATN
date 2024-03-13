import { AvatarDefault } from "../assets/images";
import Rating from "./Rating";

export default function TestimonialItem({ item }) {
  return (
    <div className="basis-full max-w-full px-[15px] mb-5 md:basis-1/2 md:max-w-[50%] xl:basis-1/3 xl:max-w-[100%/3]">
      <div className="shadow p-5 rounded-md">
        <div className="flex items-center gap-x-2">
          <img
            src={item?.avatar || AvatarDefault}
            alt="avatar"
            className="w-10 h-10 object-cover rounded-full"
          />
          <aside className="flex flex-col gap-y-1">
            <span className="text-sm font-semibold">Cô Minh Thu</span>
            <Rating star={item?.rate || 5} />
          </aside>
        </div>
        <div className="text-sm text-justify mt-2">
          {item?.description && <p>{item?.description}</p>}
          {!item?.description && (
            <p>
              Nhà tôi đang sống đã xây dựng cách đây 7 năm, phục vụ phần lớn cho
              nhu cầu của các con trai tôi. Tuy nhiên, giờ chúng đã làm việc
              định cư ở xa nên không còn sống chung. Thấy nhà còn trống tận 4
              phòng lớn nên hồi tháng 11 năm ngoái, vợ chồng chúng tôi quyết
              định cho thuê để nhà được vui vẻ hơn. Ông nhà tôi được bạn bè giới
              thiệu nên cũng thử đăng tin lên website phongtro123.com, đâu tầm 2
              ngày thì đã có 3 cháu sinh viên đến hỏi thăm và dọn vào ở. Sau đó
              3 ngày thì một chàng thanh niên đang đi làm tại Bình Thạnh cũng
              lại thuê nốt căn cuối. Vợ chồng tôi cũng vui mừng vì chưa đầy 1
              tuần mà đã cho thuê xong toàn bộ phòng trong nhà. Nói không phải
              khen, chứ bạn bè tôi đăng căn nào lên đây cũng tìm được khách tốt
              tới thuê.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
