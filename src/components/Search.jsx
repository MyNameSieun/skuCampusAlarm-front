import styled from 'styled-components';

const Search = () => {
  return (
    <SearchLayout>
      <SearchInput placeholder="검색어를 입력하세요..." />
      <SearchLayoutIconBox>
        <SearchLayoutIcon src="/images/search-white.png" alt="search-white" />
      </SearchLayoutIconBox>
    </SearchLayout>
  );
};

const SearchLayout = styled.div`
  width: 750px;
  height: 85px;
  display: flex;
  align-items: center;
  border-radius: 74px;
  margin: 60px auto;
  border: 5px solid #3b64e6;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;
const SearchLayoutIconBox = styled.div`
  background-color: #3b64e6;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
`;

const SearchLayoutIcon = styled.img`
  width: 24px;
  height: 24px;
`;
const SearchInput = styled.input`
  border: none;
  outline: none;
  flex: 1;
  font-size: 18px;
  color: #464646;
  margin-left: 30px;
  &::placeholder {
    color: #999999;
  }
`;

export default Search;
