import { RectangleVertical } from "lucide-react";
import { dummyData } from "./data";

const Avatar = () => {
  return (
    <div className="content mx-7 mt-5">
      <div className="flex flex-col md:flex-row justify-between mb-4">
        <h2 className="text-2xl font-medium">Activities</h2>
        <ul className="flex flex-col md:flex-row text-xl gap-4 text-black">
          <li className="nav-item text-xl">
            <a className="nav-link text-black text-sm" href="#">
              Today
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-black text-sm" href="#">
              Yesterday
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-black text-sm" href="#">
              This Week
            </a>
          </li>
        </ul>
      </div>

      <div className="w-full">
        {dummyData.map((item) => (
          <div
            key={item.id}
            className="timeline-item flex items-start mb-10 border-l"
          >
            <div className="avatar mr-3 ">
              {item.avatarColor ? (
                <div
                  className={`avatar-title text-sm ${item.avatarColor} text-white -ml-6 rounded-full w-12 h-12 flex items-center justify-center`}
                >
                  {item.avatar}
                </div>
              ) : (
                <div className="text-sm -ml-6  w-12 h-12">
                  <img
                    src={item.avatar}
                    className="rounded-full "
                    alt="avatar"
                  />
                </div>
              )}
            </div>
            <div className="w-full">
              <h6 className="flex justify-between mb-5 mt-3  text-sm">
                <div>
                  <a href="#" className="text">
                    {item.user}
                  </a>{" "}
                  {item.type === "link"
                    ? "shared a link"
                    : "uploaded new files"}
                </div>
                <div className="text-gray-500">{item.time}</div>
              </h6>
              {item.type === "link" && (
                <>
                  <p className="text-gray-800 text-xl">{item.content}</p>
                  <span className="text-blue-500 text-xl">{item.url}</span>
                </>
              )}
              {item.avatars && (
                <div className="flex text-sm -space-x-3">
                  {item.avatars.map((avatar, index) => (
                    <figure
                      key={index}
                      className="avatar hover:z-20"
                      title={avatar.title}
                    >
                      {avatar.src ? (
                        <img
                          src={avatar.src}
                          className="rounded-full text-sm w-12 h-12 border-2 border-white cursor-pointer"
                          alt={avatar.title}
                        />
                      ) : (
                        <div
                          className={`avatar-title flex items-center text-sm justify-center ${avatar.color} text-white rounded-full  w-12 h-12 border-2 border-white cursor-pointer`}
                        >
                          {avatar.letter}
                        </div>
                      )}
                    </figure>
                  ))}
                </div>
              )}
              {item.type === "file" && (
                <>
                  {item.files.map((file, index) => (
                    <div
                      key={index}
                      className="card card-body mb-5 flex justify-between border px-3 py-4 rounded"
                    >
                      <div className="flex items-center text-sm ">
                        <a href="#" className="flex items-center">
                          <RectangleVertical
                            className={`w-4 h-4 cursor-pointer mr-3`}
                          />{" "}
                          {file.name}
                        </a>
                        <span className="ml-3 text-base text-black">
                          {file.size}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <RectangleVertical
                          className={`w-4 h-4 cursor-pointer mr-3`}
                        />{" "}
                      </div>
                    </div>
                  ))}
                </>
              )}
              {item.type === "image" && (
                <div className="flex flex-wrap -m-2">
                  {item.images.map((image, index) => (
                    <div key={index} className="w-1/6 p-2">
                      <figure>
                        <div className="text">
                          <img
                            src={image}
                            className="w-full rounded-lg"
                            alt="image"
                          />
                        </div>
                      </figure>
                    </div>
                  ))}
                </div>
              )}
              {item.type === "video" && (
                <div className="relative pb-9/16" style={{ paddingBottom: '20.25%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-2/5 h-full bg-red-500"
                    src={item.videoUrl}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="YouTube video"
                  ></iframe>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Avatar;
