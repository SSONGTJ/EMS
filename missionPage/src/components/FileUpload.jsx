import { useState } from "react";

const defaultImage = "https://via.placeholder.com/400"; // 기본 이미지 URL

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(defaultImage); // 초기값으로 기본 이미지 설정

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    // 파일 선택 시 이미지 미리보기를 위한 작업
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const handleUpload = () => {
    // 파일 업로드 로직
    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);

      // 서버로 formData를 전송하는 로직을 작성하세요.
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <input
        type="file"
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
      {/* 이미지 미리보기 */}
      <div
        style={{
          position: "relative",
          width: "100%",
          cursor: "pointer",
          overflow: "hidden",
        }}
        onClick={() => document.querySelector('input[type="file"]').click()}
      >
        <img src={imagePreview} alt="Uploaded" style={{ width: "100%" }} />
        {/* 업로드 버튼 */}
        {!selectedFile && ( // 선택된 파일이 없을 때만 기본 이미지 표시
          <button
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: "1",
            }}
            onClick={(e) => {
              e.stopPropagation(); // 부모의 onClick 이벤트 전파 방지
              document.querySelector('input[type="file"]').click();
            }}
          >
            Upload
          </button>
        )}
      </div>
    </div>
  );
};

export default FileUpload;
