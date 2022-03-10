const GRID_ICON = 'https://static.balaan.co.kr/mobile/img/icon/contents/tab-icon-01@2x.png';
const LIST_ICON = 'https://static.balaan.co.kr/mobile/img/icon/contents/tab-icon-02@2x.png';

const TAB_ICON_LIST = Object.freeze([
  { index: 0, icon: GRID_ICON },
  { index: 1, icon: LIST_ICON },
]);
TAB_ICON_LIST.forEach(Object.freeze);
export default TAB_ICON_LIST;
