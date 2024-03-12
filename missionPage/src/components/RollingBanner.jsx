import { useRef } from "react";

const RollingBanner = () => {
  const images = [
    { url: "https://picsum.photos/id/1015/200/300/", alt: "Image 1" },
    { url: "https://picsum.photos/id/1018/400/600/", alt: "Image 2" },
    { url: "https://picsum.photos/id/1019/200/300/", alt: "Image 3" },
    { url: "https://picsum.photos/id/1020/200/300/", alt: "Image 4" },
    { url: "https://picsum.photos/id/1021/200/300/", alt: "Image 5" },
    { url: "https://picsum.photos/id/1021/200/300/", alt: "Image 5" },
    { url: "https://picsum.photos/id/1021/200/300/", alt: "Image 5" },
    { url: "https://picsum.photos/id/1021/200/300/", alt: "Image 5" },
    { url: "https://picsum.photos/id/1021/200/300/", alt: "Image 5" },
    { url: "https://picsum.photos/id/1021/200/300/", alt: "Image 5" },
  ];

  const scrollRef = useRef(null);

  const scrollToCenter = () => {
    if (scrollRef.current) {
      const containerWidth = scrollRef.current.offsetWidth;
      const scrollLeft = scrollRef.current.scrollLeft;
      const centerIndex = Math.floor((scrollLeft + containerWidth / 2) / 200);
      scrollRef.current.scrollTo({
        left: centerIndex * 200 - containerWidth / 2 + 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      style={{
        maxWidth: "100%",
        margin: "20px 0",
      }}
    >
      <div
        style={{
          display: "flex",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
        }}
        ref={scrollRef}
      >
        {images.map((image, index) => (
          <div
            key={index}
            onClick={scrollToCenter}
            style={{
              transform: "scale(1)",
              transition: "transform 0.2s",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
            }}
            onMouseOver={() => {
              if (scrollRef.current) {
                scrollRef.current.children[index].style.transform =
                  "scale(1.1)";
              }
            }}
            onMouseOut={() => {
              if (scrollRef.current) {
                scrollRef.current.children[index].style.transform = "scale(1)";
              }
            }}
          >
            <img
              src={image.url}
              alt={image.alt}
              style={{
                width: "250px",
                height: "400px",
                scrollSnapAlign: "center",
                cursor: "pointer",
                margin: "0 10px",
                borderRadius: "5px",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export { RollingBanner };
