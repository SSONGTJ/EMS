import {
  Input,
  Button,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Popover,
  FormLabel,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { PropTypes } from "prop-types";
import { axiosClient } from "../util/axiosClient";
import CheckIcon from "@mui/icons-material/Check";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
`;

const FormWrap = styled.form`
  margin: 20px 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NameInput = styled(Input)`
  width: 20%;
`;

const FormInput = styled(Input)`
  width: 60%;
`;

const QnAForm = ({ selectedItem, userName }) => {
  const [name, setName] = useState("");
  const [count, setCount] = useState(1);
  const [qnaId, setQnaId] = useState(0);
  const [content, setContent] = useState("");
  const [region, setRegion] = useState("");
  const [comment, setComment] = useState("");
  const [qnaList, setQnaList] = useState([]);
  const [modalAnc, setModalAnc] = useState(null);
  const answerModal = Boolean(modalAnc);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosClient.post(`/board`, {
        id: count,
        region_id: selectedItem,
        region: region,
        name: name,
        content: content,
      });
      setName("");
      setContent("");
      setCount(count + 1);
      alert("정상적으로 등록됨.");
      getQnaList();
    } catch (error) {
      alert("정상적으로 등록되지 않았습니다.");
    }
  };

  useEffect(() => {
    switch (selectedItem) {
      case 0:
        setRegion("공통");
        break;
      case 1:
        setRegion("몽골");
        break;
      case 2:
        setRegion("일본");
        break;
      case 3:
        setRegion("안산");
        break;
      case 4:
        setRegion("일산");
        break;
      case 5:
        setRegion("김천");
        break;
      default:
        break;
    }
    setCount(count);
  }, [selectedItem, region]);

  const getQnaList = async () => {
    const response = await axiosClient.get("/board");
    setQnaList(response.data);
  };

  useEffect(() => {
    getQnaList();
  }, [selectedItem]);

  const handleOpenModal = (e, id) => {
    setModalAnc(e.currentTarget);
    setQnaId(id);
  };
  const handleCloseModal = () => {
    setModalAnc(null);
    setQnaId(0);
  };

  const handleAnswer = async (e) => {
    e.preventDefault();
    try {
      await axiosClient.patch(`/board/${qnaId}`, {
        comment: comment,
      });
      getQnaList();
      handleCloseModal();
      setComment("");
    } catch (error) {
      alert("정상적으로 등록되지 않았습니다.");
    }
  };

  const deleteOne = async (e, id) => {
    e.preventDefault();
    try {
      await axiosClient.delete(`/board/${id}`);
      getQnaList();
    } catch (error) {
      alert("삭제 실패");
    }
  };

  return (
    <>
      <Container>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                style={{
                  width: "15%",
                  fontWeight: "bold",
                  fontSize: "16px",
                  textAlign: "center",
                }}
              >
                번호
              </TableCell>
              <TableCell
                style={{
                  width: "20%",
                  fontWeight: "bold",
                  fontSize: "16px",
                  textAlign: "center",
                }}
              >
                이름
              </TableCell>
              <TableCell
                style={{
                  fontWeight: "bold",
                  fontSize: "16px",
                  textAlign: "center",
                }}
              >
                내용
              </TableCell>
              <TableCell
                style={{
                  width: "10%",
                  fontWeight: "bold",
                  fontSize: "16px",
                  textAlign: "center",
                }}
              >
                삭제
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {qnaList
              .filter((item) => item.region_id === selectedItem)
              .map((item, idx) => (
                <React.Fragment key={idx}>
                  <TableRow>
                    <TableCell style={{ width: "15%", textAlign: "center" }}>
                      {idx + 1}
                    </TableCell>
                    <TableCell style={{ width: "20%", textAlign: "center" }}>
                      {item.name}
                    </TableCell>
                    <TableCell
                      style={{ textIndent: "10px", cursor: "pointer" }}
                      onClick={(e) => handleOpenModal(e, item.id)}
                    >
                      {item.content}
                    </TableCell>
                    {userName === "admin" ? (
                      <>
                        <TableCell>
                          <Button onClick={(e) => deleteOne(e, item.id)}>
                            삭제
                          </Button>
                        </TableCell>
                      </>
                    ) : (
                      <>
                        <TableCell></TableCell>
                      </>
                    )}
                  </TableRow>
                  {item.comment && (
                    <>
                      <TableRow
                        key={`${idx}-comment`}
                        style={{
                          backgroundColor: "#fafafa",
                        }}
                      >
                        <TableCell style={{ textAlign: "center" }}>
                          <CheckIcon />
                        </TableCell>
                        <TableCell
                          colSpan={3}
                          style={{
                            textAlign: "center",
                          }}
                        >
                          {item.comment}
                        </TableCell>
                      </TableRow>
                    </>
                  )}
                </React.Fragment>
              ))}
          </TableBody>
        </Table>

        <FormWrap onSubmit={handleSubmit}>
          <input type="hidden" value={region} />
          <NameInput
            placeholder="이름!"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <FormInput
            placeholder="질문!"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
          <Button type="submit">등록하기</Button>
        </FormWrap>
      </Container>

      <Popover
        open={answerModal}
        onClose={handleCloseModal}
        anchorEl={modalAnc}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        PaperProps={{ style: { maxWidth: "80%", width: "fit-content" } }}
      >
        {userName === "admin" ? (
          <>
            <FormWrap
              style={{ width: "auto", margin: "0", padding: "5px 10px" }}
              onSubmit={handleAnswer}
            >
              <FormLabel>답변 :</FormLabel>
              <FormInput
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <Button type="submit">답변 달기</Button>
            </FormWrap>
          </>
        ) : (
          <>
            <div style={{ padding: "20px" }}>
              답변을 달려면 관리자로 로그인 바랍니다!
            </div>
          </>
        )}
      </Popover>
    </>
  );
};
QnAForm.propTypes = {
  selectedItem: PropTypes.number.isRequired,
  userName: PropTypes.string.isRequired,
};
export { QnAForm };
