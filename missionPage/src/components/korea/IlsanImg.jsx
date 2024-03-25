import { Popover } from "@mui/material";
import { useRef, useState } from "react";
import styled from "styled-components";

const Title = styled.h3`
  text-align: center;
`;

const IlsanImg = () => {
  const images = [
    {
      url: "./src/img/ilsan/img01.jpg",
      alt: "Image 1",
      text: "그림자",
    },
    {
      url: "./src/img/ilsan/img02.jpg",
      alt: "Image 2",
      text: "아이들",
    },
    {
      url: "./src/img/ilsan/img03.jpg",
      alt: "Image 3",
      text: "비교하지 않아요!",
    },
    {
      url: "./src/img/ilsan/img04.jpg",
      alt: "Image 4",
      text: "내 이름은 박서준",
    },
    {
      url: "./src/img/ilsan/img05.jpg",
      alt: "Image 5",
      text: "이것은 무엇일까요?",
    },
    {
      url: "./src/img/ilsan/img06.jpg",
      alt: "Image 6",
      text: "단체샷",
    },
    {
      url: "./src/img/ilsan/img07.jpg",
      alt: "Image 7",
      text: "일산 팀원",
    },
  ];

  const videos = [
    {
      url: "./src/img/ilsan/ilsan_video.mp4",
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
          <Title>일산 선교 소개</Title>
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
        <Title>일산 사진 ( 클릭하시면 크게 볼 수 있어요! )</Title>
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
export { IlsanImg };
