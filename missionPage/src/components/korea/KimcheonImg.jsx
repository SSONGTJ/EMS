import { Popover } from "@mui/material";
import { useRef, useState } from "react";
import styled from "styled-components";

const Title = styled.h3`
  text-align: center;
`;

const KimcheonImg = () => {
  const images = [
    {
      url: "./src/img/kimcheon/img00.jpg",
      alt: "Image 0",
    },
    {
      url: "./src/img/kimcheon/img01.jpg",
      alt: "Image 1",
    },
    {
      url: "./src/img/kimcheon/img02.jpg",
      alt: "Image 1",
    },
    {
      url: "./src/img/kimcheon/img03.jpg",
      alt: "Image 1",
    },
    {
      url: "./src/img/kimcheon/img04.jpg",
      alt: "Image 1",
    },
    {
      url: "./src/img/kimcheon/img05.jpg",
      alt: "Image 1",
    },
    {
      url: "./src/img/kimcheon/img06.jpg",
      alt: "Image 1",
    },
    {
      url: "./src/img/kimcheon/img07.jpg",
      alt: "Image 1",
    },
    {
      url: "./src/img/kimcheon/img08.jpg",
      alt: "Image 1",
    },
    {
      url: "./src/img/kimcheon/img09.jpg",
      alt: "Image 1",
    },
    {
      url: "./src/img/kimcheon/img10.jpg",
      alt: "Image 1",
    },
    {
      url: "./src/img/kimcheon/img11.jpg",
      alt: "Image 1",
    },
    {
      url: "./src/img/kimcheon/img12.jpg",
      alt: "Image 1",
    },
    {
      url: "./src/img/kimcheon/img13.jpg",
      alt: "Image 1",
    },
    {
      url: "./src/img/kimcheon/img14.jpg",
      alt: "Image 1",
    },
    {
      url: "./src/img/kimcheon/img15.jpg",
      alt: "Image 1",
    },
    {
      url: "./src/img/kimcheon/img16.jpg",
      alt: "Image 1",
    },
    {
      url: "./src/img/kimcheon/img17.jpg",
      alt: "Image 1",
    },
    {
      url: "./src/img/kimcheon/img18.jpg",
      alt: "Image 1",
    },
    {
      url: "./src/img/kimcheon/img19.jpg",
      alt: "Image 1",
    },
  ];

  const videos = [
    {
      url: "./src/img/kimcheon/kimcheon_video.mp4",
      alt: "선교 영상",
    },
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

  const [modalAnc, setModalAnc] = useState(null);
  const [modalImgUrl, setModalImgUrl] = useState(null);
  const [imgText, setImageText] = useState(null);
  const openImgModal = Boolean(modalAnc);

  const handleOpenModal = (imgUrl, text) => {
    setModalAnc(true);
    setImageText(text);
    setModalImgUrl(imgUrl);
  };
  const handleCloseModal = () => {
    setModalAnc(null);
    setImageText(null);
    setModalImgUrl(null);
  };

  return (
    <>
      <div
        style={{
          maxWidth: "100%",
          padding: "0 20px",
        }}
      >
        <article>
          <Title>김천 선교 소개</Title>
          <br />
          <div>
            {videos.map((video, index) => (
              <div key={index}>
                <br />
                <iframe
                  width="100%"
                  height="500"
                  src={video.url}
                  title={video.alt}
                  frameBorder="0"
                  allow="fullscreen"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        </article>

        <br />
        <Title>김천 사진 ( 클릭하시면 크게 볼 수 있어요! )</Title>
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
                padding: "50px 0",
                margin: "0 20px",
              }}
              onMouseOver={() => {
                if (scrollRef.current) {
                  scrollRef.current.children[index].style.transform =
                    "scale(1.1)";
                }
              }}
              onMouseOut={() => {
                if (scrollRef.current) {
                  scrollRef.current.children[index].style.transform =
                    "scale(1)";
                }
              }}
            >
              <img
                src={image.url}
                alt={image.alt}
                style={{
                  width: "300px",
                  height: "300px",
                  scrollSnapAlign: "center",
                  cursor: "pointer",
                  margin: "0 10px",
                  borderRadius: "5px",
                }}
                loading="lazy"
                onClick={() => handleOpenModal(image.url, image.text)}
              />
            </div>
          ))}
        </div>
      </div>
      <Popover
        open={openImgModal}
        onClose={handleCloseModal}
        anchorReference="anchorPosition"
        anchorPosition={{
          left: window.innerWidth / 2,
          top: window.innerHeight / 2,
        }}
        anchorOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
        style={{
          width: "90%",
          borderRadius: "5px",
        }}
      >
        <div>
          <img
            src={modalImgUrl}
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "100%",
              borderRadius: "5px",
            }}
          />
          <p style={{ textAlign: "center", margin: "10px 0" }}>{imgText}</p>
        </div>
      </Popover>
    </>
  );
};
export { KimcheonImg };
