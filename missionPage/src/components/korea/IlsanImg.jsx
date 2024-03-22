import { Popover } from "@mui/material";
import { useRef, useState } from "react";
import styled from "styled-components";

const Title = styled.h3`
  text-align: center;
`;

const IlsanImg = () => {
  const images = [
    {
      url: "./src/img/ansan/img00.jpg",
      alt: "Image 0",
      text: "내가 바로 나소영",
    },
    {
      url: "./src/img/ansan/img01.jpg",
      alt: "Image 1",
      text: "물놀이",
    },
    {
      url: "./src/img/ansan/img02.jpg",
      alt: "Image 2",
      text: "2023 안산 선교팀",
    },
    {
      url: "./src/img/ansan/img03.jpg",
      alt: "Image 3",
      text: "동승혁",
    },
    {
      url: "./src/img/ansan/img04.jpg",
      alt: "Image 4",
      text: "너네 되게 빡빡했구나",
    },
    {
      url: "./src/img/ansan/img05.jpg",
      alt: "Image 5",
      text: "소개합니다! 안산의 아이들",
    },
    {
      url: "./src/img/ansan/img06.jpg",
      alt: "Image 6",
      text: "달란트잔치..",
    },
    {
      url: "./src/img/ansan/img07.jpg",
      alt: "Image 7",
      text: "에코백 꾸미기 로 보여짐",
    },
    {
      url: "./src/img/ansan/img08.jpg",
      alt: "Image 8",
      text: "에코백 꾸미기 로 보여짐2",
    },
    {
      url: "./src/img/ansan/img09.jpg",
      alt: "Image 9",
      text: "에코백 꾸미기 로 보여짐3",
    },
    {
      url: "./src/img/ansan/img10.jpg",
      alt: "Image 10",
      text: "기수가 왜 여기있지",
    },
    {
      url: "./src/img/ansan/img11.jpg",
      alt: "Image 11",
      text: "원석이형은 왜 여기있지",
    },
    {
      url: "./src/img/ansan/img12.jpg",
      alt: "Image 12",
      text: "밥!",
    },
    {
      url: "./src/img/ansan/img13.jpg",
      alt: "Image 13",
      text: "비싼데요? 3달란트",
    },
    {
      url: "./src/img/ansan/img14.jpg",
      alt: "Image 14",
      text: "공룡 가지고 놀 나이는 아닌데 말이지",
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
          <Title>안산 선교 소개</Title>
          <br />
          <div>
            안산선교는 경기도 안산시에 있는 다문화 아이들을 위해 여름 성경학교
            사역을 진행합니다. 성경학교는 한국어가 서툰 아이들을 위해, 더욱 쉽게
            접하고 배울 수 있도록 성경과 한국어 교육을 접목시킨 활동 위주로
            진행됩니다. 비록 문화와 사용하는 언어는 다르지만, 그들과 하나되는
            것에 장애물이 되진 않습니다. 선교지로 나아갈 때 그저 진심으로
            선교지와 그들을 대하는 마음만 있다면 누구나 쓰임받을 수 있다는 것을
            말씀드리고 싶습니다!
          </div>
        </article>

        <br />
        <Title>안산 사진 ( 클릭하시면 크게 볼 수 있어요! )</Title>
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
                  width: "400px",
                  height: "500px",
                  scrollSnapAlign: "center",
                  cursor: "pointer",
                  margin: "0 10px",
                  borderRadius: "5px",
                }}
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
