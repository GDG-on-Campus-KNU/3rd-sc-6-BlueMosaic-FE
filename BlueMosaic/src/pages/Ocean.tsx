import styled from "@emotion/styled"
import { Wrapper, Container } from "../styles/Layout"
import UploadBackGround from "../assets/UploadBackground.jpg"
import WaterWave from 'react-water-wave';
import { CamSVG } from "../components/CamSVG";
import { SmartphoneSVG } from "../components/SmartphoneSVG";
import { useState, ChangeEvent, FormEvent, useRef } from "react"
import { useNavigate } from "react-router-dom";
import { Toast } from "../components/Toast";
import { MarineApis } from "../hooks/useMarineQuery";
import { TrashInfoStore } from "../stores/TrashStore";

export const Ocean = () => {
  const [showSmartphone, setShowSmartphone] = useState(false);
  const [showToast, setShowToast] = useState(true);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [returndata, setReturndata] = useState();
  const [selectedImageUrl, setSelectedImageUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
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
      // const resFriend = MarineApis.uploadFriend(formData);
      // console.log(resFriend);
      const response = await MarineApis.upload(formData);
      console.log(response);
      console.log("Upload Response:", response);
      const formattedData = {
        score: response.score,
        total: response.total,
        names: response.marinelife.map(item => item.name).join(', '),
      };
      
      setReturndata(formattedData);
      console.log(formattedData);

      setShowSmartphone(true);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  const handleClickToast = () => {
    setShowToast(false);
  };

  const handleClickUpload = () => {
    setShowSmartphone(false);
  };

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); 
    }
  };

  const handleGoto = () => {
    navigate("/collection");
  };



  return(
    <WaterWave imageUrl={ UploadBackGround } style={{ backgroundSize: 'cover' }}>
      {({ pause, play }) => (
              <Wrapper>
                <Container>
                  
                { 
                  showSmartphone ? (
                    <SmartphoneWrapper>
                      <SmartphoneSVG handleClickParent="" imageUrl={selectedImageUrl} />
                      { showSmartphone && <Toast found={`I found ${returndata && returndata.names}`} points={`My total  score is ${returndata && returndata.total}`} handleClickUpload={handleClickUpload} handleGoto={handleGoto} button1={"Reupload"} button2={"Collection"} />}
                    </SmartphoneWrapper>
                  ) : (
                    <CamWrapper>
                      <CamSVG handleCircleClickParent={handleClick}/>
                      { showToast && <Toast found={'Information'} points={"Click the red button to upload the video and collect your drawings"} button1={"No thanks"} button2={"got it"} handleClickUpload={handleClickToast} handleGoto={handleClickToast}/> }
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
                    </CamWrapper>
                  )
                }
                </Container>
              </Wrapper>
            )}
    </WaterWave>
  )
}

const CamWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 

  SmartphoneSVG {
    width: 50%;
    height: 50%;
  }
`

const SmartphoneWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center; 

  CamSVG {
    width: 40%;
    height: 40%;
  }
`

const StyledButton = styled.button`
  background-color: var(--white-color); 
  color: var(--googleblue-color); 
  padding: 10px 15px;
  border: none; 
  border-radius: 4px; 
  cursor: pointer; 
  margin-top: 1rem;
  
  &:hover {
    filter: brightness(70%);
  }
`