import { title } from "process";

type Props = {
  items: Array<{
    title: React.ReactNode;
    time: string;
    img: string;
    desc?: string;
    avatar?: string;
    unread: boolean;
  }>;
};
const NotificationPage = (props: Props) => {
  const star = (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.7698 9.57455L15.7733 13.0231L16.9909 18.1803C17.0581 18.4603 17.0408 18.7538 16.9412 19.024C16.8416 19.2941 16.6642 19.5287 16.4313 19.698C16.1985 19.8674 15.9207 19.9639 15.633 19.9755C15.3453 19.987 15.0607 19.913 14.815 19.7629L10.3301 17.0027L5.8425 19.7629C5.59687 19.9122 5.31257 19.9854 5.02539 19.9735C4.7382 19.9615 4.46098 19.8648 4.22863 19.6956C3.99628 19.5264 3.81919 19.2922 3.71966 19.0226C3.62013 18.753 3.60261 18.4599 3.6693 18.1803L4.89134 13.0231L0.894859 9.57455C0.677538 9.38672 0.520367 9.13903 0.442975 8.86242C0.365583 8.5858 0.371401 8.29251 0.459701 8.01918C0.548 7.74585 0.714869 7.50459 0.939468 7.32553C1.16407 7.14647 1.43644 7.03754 1.72257 7.01236L6.9624 6.58962L8.98373 1.69793C9.09314 1.43134 9.27935 1.2033 9.5187 1.04281C9.75804 0.882323 10.0397 0.796631 10.3279 0.796631C10.616 0.796631 10.8977 0.882323 11.1371 1.04281C11.3764 1.2033 11.5626 1.43134 11.672 1.69793L13.6925 6.58962L18.9323 7.01236C19.219 7.03661 19.4922 7.14492 19.7176 7.32374C19.943 7.50255 20.1106 7.74391 20.1995 8.01757C20.2883 8.29123 20.2944 8.58503 20.2171 8.86215C20.1397 9.13927 19.9822 9.3874 19.7644 9.57543L19.7698 9.57455Z"
        fill="#FD7612"
      />
    </svg>
  );
  const bgColor = true;

  const items = [
    {
      title: (
        <span>
          <span className="font-bold">Mark Webber</span>
          <span className="text-[#75787F] font-medium pl-2">
            reacted to your recent post
          </span>
          <span className="font-bold pl-2 text-[#63676F]">
            my first tournament today!
          </span>
        </span>
      ),
      time: "1m ago",
      img: "Images/avatar-mark-webber.webp",
      desc: "",
      unread: true,
    },
    {
      title: (
        <span>
          <span className="font-bold pr-2">Amber Gray</span>
          <span className="text-[#75787F] font-medium">followed you</span>
        </span>
      ),
      time: "5m ago",
      img: "/Images/avatar-angela-gray.webp",
      desc: "",
      unread: true,
    },
    {
      title: (
        <span>
          <span className="font-bold pr-2">Jacob Thompson</span>
          <span className="text-[#75787F] font-medium">
            has joined your group
          </span>
          <span className="text-[#102E64] font-bold pl-2">Chess Club</span>
        </span>
      ),
      time: "1 day ago",
      img: "/Images/avatar-jacob-thompson.webp",
      desc: "",
      unread: true,
    },
    {
      title: (
        <span className="">
          <span className="font-bold pr-2">Rizky Hasanuddin</span>
          <span className="text-[#75787F] font-medium">
            sent you a private message
          </span>
        </span>
      ),
      time: "5 days ago",
      img: "/Images/avatar-rizky-hasanuddin.webp",
      desc: "Hello, thanks for setting up the chess club. I've been a member for a few weeks now and i'm already having lots of fun and improving my game",
      unread: true,
    },
    {
      title: (
        <span>
          <span className="font-bold">Kimberly Smith</span>
          <span className="text-[#676A71] font-medium pl-2">
            Commented on your picture
          </span>
        </span>
      ),
      time: "1 week ago",
      avatar: "/Images/avatar-kimberly-smith.webp",
      img: "/Images/image-chess.webp",
      desc: "",
      unread: true,
    },

    {
      title: (
        <span>
          <span className="font-bold">Nathan Peterson</span>
          <span className="text-[#676A71] font-medium pl-2">
            reacted to your recent post
          </span>
          <span className="text-[#595C63] font-bold pl-2">
            5 end-game strategies to increase your win rate
          </span>
        </span>
      ),
      time: "2 weeks ago",
      img: "/Images/avatar-nathan-peterson.webp",
      desc: "",
      unread: true,
    },
    {
      title: (
        <span>
          <span className="font-bold">Ana Kim</span>
          <span className="text-[#676A71] pl-2 font-medium">
            left the group
          </span>
          <span className="text-[#102E64] font-bold pl-2">Chess Club</span>
        </span>
      ),
      time: "2 weeks ago",
      img: "/Images/avatar-anna-kim.webp",
      desc: "",
      unread: true,
    },
  ];
  return (
    <section className="bg-[#F9FAFE] min-h-dvh pt-6 lg:pt-10">
      <div className="bg-[#FFFFFF] rounded-xl max-w-screen-md mx-auto md:py-8 md:px-8">
        <div className="flex items-center justify-between mb-8">
          <h3 className="font-bold text-2xl text-black">
            Notifications
            <span className="bg-[#002A79] px-2 text-white rounded-sm ml-4">
              3
            </span>
          </h3>
          <p className="text-[#67686C] font-medium">Mark all as read</p>
        </div>

        <div className="flex flex-col gap-4">
          {items.map((item, index) => (
            <div
              key={index}
              className={`gap-4 p-4 rounded-2xl flex ${
                index < 3 ? "bg-[#F6FAFD]" : "bg-white"
              }`}
            >
              {/* first container */}
              <img
                src={item.img}
                alt="img"
                className="w-10 h-10 rounded-full"
              />
              {/* Second container */}
              <div className="grow">
                {/* title */}
                <div className="a">{item.title}</div>
                
                {/* tinme */}
                <div className="text-[#AAADB2]">{item.time}</div>
                {/* desc
                 */}
                {item.desc && (
                  <div className="w-full border border-[#E1E5E6] mt-4 p-4 text-[#848490] rounded-md">
                    {item.desc}
                  </div>
                )}
              </div>
              {/* third container */}
              {item.avatar && (
                <img
                  src={item.avatar}
                  alt=""
                 className="h-10 w-10 rounded-sm"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default NotificationPage;
