// assets
import {
  AppstoreAddOutlined,
  AntDesignOutlined,
  BarcodeOutlined,
  BgColorsOutlined,
  FontSizeOutlined,
  LoadingOutlined,
  FileImageOutlined ,
  FilePdfOutlined,
  LineChartOutlined,
  FileTextOutlined,
  ApiOutlined
} from '@ant-design/icons';
// icons
const icons = {
  FontSizeOutlined,
  BgColorsOutlined,
  BarcodeOutlined,
  AntDesignOutlined,
  LoadingOutlined,
  AppstoreAddOutlined,
  FileImageOutlined,
  FilePdfOutlined,
  LineChartOutlined,
  FileTextOutlined,
  ApiOutlined
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const utilities = {
  id: 'utilities',
  title: 'Utilities',
  type: 'group',
  children: [
    {
      id: 'util-typography',
      title: 'Parsing Image',
      type: 'item',
      url: '/parsing',
      icon: icons.FileImageOutlined
    },
    {
      id: 'util-color',
      title: 'Extract PDF',
      type: 'item',
      url: '/extract',
      icon: icons.FilePdfOutlined
    },
    {
      id: 'util',
      title: 'Visiualization',
      type: 'item',
      url: '/visual',
      icon: icons.LineChartOutlined
    },
    {
      id: 'util1',
      title: 'Contract reader',
      type: 'item',
      url: '/visual',
      icon: icons.FileTextOutlined
    },
    {
      id: 'util2',
      title: 'API Checker',
      type: 'item',
      url: '/visual',
      icon: icons.ApiOutlined
    },
    // {
    //   id: 'util-shadow',
    //   title: 'Shadow',
    //   type: 'item',
    //   url: '/shadow',
    //   icon: icons.BarcodeOutlined
    // },
    // {
    //   id: 'ant-icons',
    //   title: 'Ant Icons',
    //   type: 'item',
    //   url: '/icons/ant',
    //   icon: icons.AntDesignOutlined,
    //   breadcrumbs: false
    // }
  ]
};

export default utilities;
