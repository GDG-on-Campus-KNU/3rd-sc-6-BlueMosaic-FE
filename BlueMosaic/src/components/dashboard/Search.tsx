import { useState } from 'react';
import styled from "@emotion/styled"
import SearchSVG from "../../assets/Search.svg"
import MicSVG from "../../assets/Mic.svg"
import CameraSVG from "../../assets/Camera.svg"
import TimeSVG from "../../assets/Time.svg"
import { UserApis } from '../../hooks/useUserQuery';
import { useStore } from 'zustand';
import { FriendInfoStore } from '../../stores/FriendStore';
import { FriendApis } from '../../hooks/useFriendQuery';

export const Search = () => {
  const [searchValue, setSearchValue] = useState('');
  const [searchList, setSearchList] = useState<string[]>([]);
  const [chooseFriend, setChooseFriend] = useState<string | null>(null);
  const friendInfo = useStore(FriendInfoStore);

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearchClick = async () => {
    try {
      const data = await UserApis.search(searchValue);
      if ( data === false ) {
        setSearchList((prevList) => [{ name: searchValue, exists: false }, ...prevList]);
      } else {
        setSearchList((prevList) => [{ name: searchValue, exists: true }, ...prevList]);
      }
    } catch (error) {
      console.error('Error searching for user:', error);
    }
    setSearchValue('');
  };

  const handleEnterKey = (e) => {
    if (e.key === 'Enter') {
      handleSearchClick();
    }
  };

  const handleAddFriend = async () => {
    try {
      await FriendApis.add();
    } catch (error) {
      console.error('Error adding friend:', error);
    }
  };

  const handleChooseFriend = async (item: string) => {
    setChooseFriend(item);
    console.log(friendInfo);
    try {
      const data = await UserApis.search(item);
      friendInfo.setFriendId(data[0].id);
      friendInfo.setFriendName(data[0].nickname);
      friendInfo.setProfileImageUrl(data[0].profileImageUrl);
    } catch (error) {
      console.error('Error fetching user information:', error);
    }
  };

  const handleFriendList = async () => {
    try {
      const data = await FriendApis.find();
      setSearchList(data.map((friend) => friend.nickname));
    } catch (error) {
      console.error('Error fetching friend list:', error);
    }
  };

  return (
    <>
      <SearchBar>
        <SearchListTop>
          <SearchIcons>
            <button onClick={handleSearchClick}>
              <img src={SearchSVG} alt="SearchSVG" />
            </button>
            <input
              placeholder="Search..."
              value={searchValue}
              onChange={handleInputChange}
              onKeyDown={handleEnterKey}
            />
            <ColorIcons>
              <img src={MicSVG} alt="MicSVG" />
              <img src={CameraSVG} alt="CameraSVG" />
            </ColorIcons>
          </SearchIcons>
        </SearchListTop>

        <Seperator />

        {searchList.map((item, index) => (
        <SearchList
          key={index}
          onClick={() => handleChooseFriend(item.name)}
          isSelected={chooseFriend === item.name}
          userExists={item.exists}
        >
          <img src={TimeSVG} alt="TimeSVG" />
          <p>{item.name}</p>
        </SearchList>
      ))}
      </SearchBar>

      <ButtomButtons>
        <button onClick={handleAddFriend}>Add Friend</button>
        <button onClick={handleFriendList}>Friend List</button>
      </ButtomButtons>
    </>
  );
};

const SearchBar = styled.div`
display: flex;
padding: 0.75rem 1rem;
flex-direction: column;
align-items: flex-start;
border-radius: 1.4375rem;
border: 1px solid #DFE1E5;
background: #FFF;
transition: width 0.3s;
width: 34.5rem;
gap: 0.75rem;
`

const SearchListTop = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
gap: 0.75rem;

button {
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  transition: filter 0.3s ease;

  &:hover {
    filter: brightness(70%); 
  }
}
`

const SearchIcons = styled.div`
display: flex;
width: 34.5rem;
align-items: center;

input{
  width: 29.25rem;
  border: none;
  outline: none; 
}
`

const ColorIcons = styled.div`
display: flex;
align-items: center;
gap: 1rem;
`

const ButtomButtons = styled.div`
  display: flex;
  width: 17.0625rem;
  align-items: center;
  gap: 0.75rem;

button{
  display: flex;
  width: 7.875rem;
  height: 2.25rem;
  padding: 0rem 1.125rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 0.25rem;
  border: 1px solid var(----googleWhiteGray-color, #F8F9FA);
  background: var(----googleWhiteGray-color, #F8F9FA);
  }
`
const SearchList = styled.div<{ isSelected: boolean; userExists: boolean }>`
  display: flex;
  width: 100%;
  height: 1.5rem;
  align-items: center;
  gap: 0.5rem;

  p {
    color: ${(props) => (props.isSelected ? '#000000' : props.userExists ? '#212121' : 'var(--googleGray-color)')};
    font-family: Roboto;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: ${(props) => (props.isSelected ? '600' : '400')};
    line-height: 1.125rem;
  }
`;


const Seperator = styled.div`
width: 34.5rem;
height: 0.0625rem;
background: #DFE1E5;
`