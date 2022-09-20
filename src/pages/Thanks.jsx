import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';
import { SmileOutlined } from '@ant-design/icons';

const Thanks = ({ message }) => {
  return (
    <div className='flex h-screen justify-center items-center'>
      <Result
        icon={<SmileOutlined />}
        title={message}
        extra={<Link to='/reports'>
          <Button type='primary' size='large' shape='round'>Reports</Button>
        </Link>}
      />
    </div>
  );
}

export default Thanks;
