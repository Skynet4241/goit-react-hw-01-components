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
  :hover {
    transform: scale(1.1);
  }
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const FriendStatus = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ online }) => (online ? 'green' : 'red')};
`;

export const FriendName = styled.p`
  font-family: 'Times New Roman', Times, serif;
`;
