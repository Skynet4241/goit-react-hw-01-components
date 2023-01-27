import styled from 'styled-components';

export const Wrap = styled.div`
  background-color: lightgoldenrodyellow;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 318px;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 5px;
`;

export const ProfileWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  padding: 40px 20px 20px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

export const Title = styled.h3`
  margin-bottom: 5px;
  font-size: 18px;
  font-family: 'Times New Roman', Times, serif;
  text-align: center;
`;

export const Text = styled.p`
  margin-bottom: 5px;
  font-family: 'Times New Roman', Times, serif;
  text-align: center;
  color: grey;
  :last-child {
    margin-bottom: 30px;
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 100%;
  background-color: blanchedalmond;
  border-radius: 5px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

export const SpanTitle = styled.span`
  font-family: 'Times New Roman', Times, serif;
  color: grey;
  margin-bottom: 5px;
`;

export const SpanText = styled.span`
  font-family: 'Times New Roman', Times, serif;
  font-weight: 700;
`;
