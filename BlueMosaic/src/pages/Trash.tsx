import { useState, ChangeEvent, FormEvent } from 'react';
import styled from "@emotion/styled"
import { Wrapper, Container} from "../styles/Layout"
import HomeSVG from "../assets/HomeSVG.svg"
import WaterWave from 'react-water-wave';
import PolaroidSVG from "../assets/Polaroid.svg"
import imageUrl from "../assets/UploadBackground.jpg"
import { Frame } from "../components/FrameSVG";
import { Toast } from "../components/Toast";
import { MediaApis } from "../hooks/useMediaQuery";

export const Trash = () => {
  const [showFrame, setShowFrame] = useState(false);

  const handleClick = () => {
    setShowFrame(true);
  };

  return(
    <WaterWave imageUrl={ HomeSVG } style={{ backgroundSize: 'cover' }}>
      {({ pause, play }) => (
              <Wrapper>
                <Container>
                  <FileUpload/>
                  <PolaroidWrapper>
                    { showFrame ||  <img src={PolaroidSVG} alt="PolaroidSVG" onClick={handleClick}/> }
                    { showFrame && <Frame imageUrl={imageUrl} text="cod"/> }
                    { showFrame && <Toast found={'cod'} points={"1234"}/>}
                  </PolaroidWrapper>
                </Container>
              </Wrapper>
            )}
    </WaterWave>
  )
}


function FileUpload() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  // 파일 선택 핸들러
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
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

    console.log("File Size:", selectedFile.size);
    console.log("File Name:", selectedFile.name);

    console.log("formData:", formData);


    try {
      const response = await MediaApis.upload(formData);
      console.log("Upload Response:", response);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <form onSubmit={handleUpload}>
      <input 
        id='image'
        type='file'
        multiple
        onChange={handleFileChange}
      />
      <button type='submit'>제출</button>
    </form>
  );
}

export default FileUpload;


const PolaroidWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 

  img {
    width: 70%;
    height: 70%;
  }
`