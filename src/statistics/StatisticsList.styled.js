import styled from 'styled-components';

export const StatsSection = styled.section`
  margin: 0 auto;
  max-width: 400px;
  background-color: rgb(255, 255, 255);
  box-shadow: rgb(0 0 0 / 12%) 0px 1px 3px, rgb(0 0 0 / 14%) 0px 1px 1px,
    rgb(0 0 0 / 20%) 0px 2px 1px;
  border-radius: 0px 0px 4px 4px;
  margin-bottom: 40px;
`;

export const Heading = styled.h2`
  font-size: 30px;
  font-family: 'Times New Roman', Times, serif;
  text-align: center;
  margin-bottom: 10px;
`;

export const StatsTitle = styled.h2`
  font-size: 22px;
  font-family: 'Times New Roman', Times, serif;
  text-align: center;
  padding: 30px;
  text-transform: uppercase;
  color: gray;
`;

export const StatsList = styled.ul`
  display: flex;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  row-gap: 5px;
  padding: 10px;
  font-family: 'Times New Roman', Times, serif;
  color: white;
  background-color: LightSkyBlue;
  :hover {
    transform: scale(1.1);
  }
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :nth-child(2) {
    background-color: BlueViolet;
  }
  :nth-child(3) {
    background-color: LightCoral;
  }
  :nth-child(4) {
    background-color: MediumSeaGreen;
  }
  :nth-child(5) {
    background-color: GoldenRod;
  }
`;
