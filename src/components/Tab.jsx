import { useState } from 'react';
import styled from 'styled-components';
import GridView from './GridView';
import TAB_ICON_LIST from '../contants/tab';

function Tab() {
  const [currentTab, setCurrentTab] = useState(0);
  return (
    <TabWrap>
      <TabRow>
        {TAB_ICON_LIST.map(({ icon, index }) => (
          <TabItem
            selected={currentTab === index}
            key={index}
            onClick={() => setCurrentTab(index)}
          >
            <img src={icon} />
          </TabItem>
        ))}
      </TabRow>
      <GridView>ddd</GridView>
    </TabWrap>
  );
}

export default Tab;
const TabWrap = styled.section``;

const TabRow = styled.section`
  width: 100%;
  height: auto;
  display: flex;
`;

const TabItem = styled.button`
  flex: 1;
  padding: 0.6rem 1rem;
  background: none;
  border: none;
  border-bottom: 2px solid ${({ selected }) => (selected ? '#000' : '#b3b3b3')};
  > img {
    max-width: 2rem;
    margin-top: 0.2rem;
    opacity: ${({ selected }) => (selected ? 1 : 0.3)};
  }
`;
