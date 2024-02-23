import { useState, ChangeEvent, FormEvent, useRef } from 'react';
import styled from "@emotion/styled"
import { Wrapper, Container} from "../styles/Layout"
import HomeSVG from "../assets/HomeSVG.svg"
import WaterWave from 'react-water-wave';
import PolaroidSVG from "../assets/Polaroid.svg"
import { Frame } from "../components/FrameSVG";
import { Toast } from "../components/Toast";
import { useNavigate } from 'react-router-dom';
import { WasteApis } from '../hooks/useWasteQuery';
WasteApis

export const Trash = () => {
  const [showFrame, setShowFrame] = useState(false);
  const [showToast, setShowToast] = useState(true);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedImageUrl, setSelectedImageUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null); // Ref for the file input
  const navigate = useNavigate();

  // 파일 선택 핸들러
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setSelectedFile(file);

      const imageUrl = URL.createObjectURL(file);
      setSelectedImageUrl(imageUrl);
    }
  };

  // 파일 업로드 핸들러
  const handleUpload = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selectedFile) {
      alert('파일을 선택해주세요.');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    // 폼 객체 key 값을 순회.
    const values = formData.values();
    for (const pair of values) {
      console.log(pair);
    }

    try {
      const response = await WasteApis.get(formData);
      //test
      //WasteApis.create();
      console.log("Upload Response:", response);
      setShowFrame(true);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  const handleClickUpload = () => {
    setShowFrame(false);
  };

  const handleClickToast = () => {
    setShowToast(false);
  };

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); 
    }
  };

  const handleGoto = () => {
    navigate("/collection");
  };

  return (
    <WaterWave imageUrl={HomeSVG} style={{ backgroundSize: 'cover' }}>
      {({ pause, play }) => (
        <Wrapper>
          <Container>
            <PolaroidWrapper>
              {showFrame || <img src={PolaroidSVG} alt="PolaroidSVG" onClick={handleClick} />}
              {showFrame && <Frame imageUrl={selectedImageUrl || ''} text="plastic bag" point='100'/>}
              <form onSubmit={handleUpload}>
                <input
                  id='image'
                  type='file'
                  multiple
                  onChange={handleFileChange}
                  style={{ display: 'none' }}
                  ref={fileInputRef}
                />
                <StyledButton type='submit'>submit</StyledButton>
              </form>
              { showToast && !showFrame && <Toast found={'Information'} points={"Click the red button to upload the picture and get score points"} button1={"No thanks"} button2={"got it"} handleClickUpload={handleClickToast} handleGoto={handleClickToast}/> }

              { showFrame && <Toast found={`I found ${"plastic bag"}`} points={`My total  score is ${100}`} handleClickUpload={handleClickUpload} handleGoto={handleGoto} button1={"Reupload"} button2={"Collection"} />}
            </PolaroidWrapper>
          </Container>
        </Wrapper>
      )}
    </WaterWave>
  );
};

const PolaroidWrapper = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 70%;
    height: 70%;
  }
`;

const StyledButton = styled.button`
  background-color: var(--googleblue-color); 
  color: white; 
  padding: 10px 15px;
  border: none; 
  border-radius: 4px; 
  cursor: pointer; 
  
  &:hover {
    filter: brightness(70%);
  }
`