import styled from 'styled-components';

export const Block = styled.div`
  background-color: lightgoldenrodyellow;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 300px;
  width: 280px;
  margin: 0 auto;
  background-color: rgb(255, 255, 255);
  box-shadow: rgb(0 0 0 / 12%) 0px 1px 3px, rgb(0 0 0 / 14%) 0px 1px 1px,
    rgb(0 0 0 / 20%) 0px 2px 1px;
  border-radius: 5px;
  margin-bottom: 40px;
`;

export const ProfileWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 15px;
`;

export const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: lightgrey;
`;

export const ProfileTitle = styled.h3`
  margin-bottom: 5px;
  font-size: 18px;
  font-family: 'Times New Roman', Times, serif;
  text-align: center;
`;

export const ProfileText = styled.p`
  margin-bottom: 5px;
  font-family: 'Times New Roman', Times, serif;
  text-align: center;
  color: grey;
  :last-child {
    margin-bottom: 30px;
  }
`;

export const ProfileList = styled.ul`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: blanchedalmond;
  border-radius: 5px;
`;

export const ProfileItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  row-gap: 5px;
  width: 100%;
  border-right: 1px solid lightgrey;
`;

export const ProfileSpanTitle = styled.span`
  font-family: 'Times New Roman', Times, serif;
  color: grey;
`;

export const ProfileSpanText = styled.span`
  font-family: 'Times New Roman', Times, serif;
  font-weight: 700;
`;
