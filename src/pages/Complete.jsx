import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';
import { SmileOutlined } from '@ant-design/icons';

const Complete = () => {
  return (
    <div className='flex h-screen justify-center items-center'>
      <Result
        icon={<SmileOutlined />}
        title="Great, Thank you completing the survey!"
        extra={<Link to='/reports'>
          <Button type='primary' size='large' shape='round'>Reports</Button>
        </Link>}
      />
    </div>
  );
}

export default Complete;
