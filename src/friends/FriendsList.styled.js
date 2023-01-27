import styled from 'styled-components';

export const FriendList = styled.ul`
  display: flex;
  flex-direction: column;
  max-width: 250px;
  margin: 0 auto;
  gap: 10px;
  margin-bottom: 40px;
`;

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  gap: 10px;
  box-shadow: rgb(0 0 0 / 12%) 0px 1px 3px, rgb(0 0 0 / 14%) 0px 1px 1px,
    rgb(0 0 0 / 20%) 0px 2px 1px;
  border-radius: 0px 0px 4px 4px;
`;

export const FriendSpan = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ online }) => (online ? 'green' : 'red')};
`;
