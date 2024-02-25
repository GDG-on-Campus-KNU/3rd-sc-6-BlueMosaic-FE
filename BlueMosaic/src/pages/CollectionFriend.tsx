import { useState, useEffect } from 'react';
import { Wrapper, Container } from "../styles/Layout"
import styled from "@emotion/styled"
import { Dashboard } from "../components/dashboard/dashboard"
import { MiniFrameSVG } from "../components/dashboard/MiniFrameSVG"
import HomeSVG from "../assets/HomeSVG.svg"
import { MarineApis } from '../hooks/useMarineQuery';
import Modal from '../components/Modal';
import { UserInfoStore } from '../stores/UserInfoStore';
import { ExchangeApis } from '../hooks/useExchangeQuery';

export const CollectionFriend = () => {
  const [mediaData, setMediaData] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await MarineApis.getCollectionDummy();
        console.log(response)
        setMediaData(response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  const handleClick = (item) => {
    setSelectedItem(item);
    setIsModalVisible(true);
  }

  const handleExchangeConfirm = () => {
    setIsModalVisible(false);
    const friendUserId = "2";
    // console.log("selectedItem", selectedItem);
    const res = ExchangeApis.exchange(friendUserId, selectedItem.imageId);
    setSelectedItem(null);
  }

  const handleExchangeCancel = () => {
    setIsModalVisible(false);
    setSelectedItem(null);
  }

  return (
    <Wrapper backgroundImage={HomeSVG} style={{ backgroundSize: 'cover' }}>
      <Container>
        <Dashboard currentPage="Collection">
          {/* Grid */}
          <GridContainer>
            { mediaData && mediaData.map((item, key) => (
              <MiniFrameSVG
                key={item.imageId}
                imageUrl={item.base64EncodedImage}
                text={item.className}
                date={item.date}
                handleCircleClickParent={() => handleClick(item)}
              />
            ))}
          </GridContainer>

           {/* Modal */}
            {isModalVisible && (
              <Modal
                message="Do you want to exchange?"
                onConfirm={handleExchangeConfirm}
                onCancel={handleExchangeCancel}
              />
            )}
        </Dashboard>
      </Container>
    </Wrapper>
  );
}

const GridContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  box-sizing: border-box;
  padding-left: 2rem;
  padding-right: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 16px;
  align-items: stretch;
  align-content: flex-start;
`;
