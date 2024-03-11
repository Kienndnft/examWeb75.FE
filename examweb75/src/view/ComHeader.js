import { Typography } from 'antd';
import { SearchOutlined, MenuOutlined } from '@ant-design/icons';

const { Text } = Typography;

const ComHeader = () => {
  return (
    <div
      style={{
        height: '80px',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px',
        alignItems: 'center',
        borderBottom: '1px solid lightgray',
        margin: '0px 20px 20px 20px',
      }}
    >
      <div>
        <MenuOutlined style={{ fontSize: '25px' }} />
      </div>
      <div>
        <Text style={{ fontSize: '1.3rem' }}>MOVIE UI</Text>
      </div>
      <div>
        <SearchOutlined style={{ fontSize: '25px' }} />
      </div>
    </div>
  );
};

export default ComHeader;
