import { SmileOutlined } from '@ant-design/icons';
import { Button, Result, } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  window.document.title = 'React App — Home';

  return (
    <div className='flex h-screen justify-center items-center'>
      <Result
        icon={<SmileOutlined />}
        title={'Start survey'}
        extra={<Link to='/start'>
          <Button type='primary' size='large' shape='round'>Start</Button>
        </Link>}
      />
    </div>
  );
}

export default Home;
