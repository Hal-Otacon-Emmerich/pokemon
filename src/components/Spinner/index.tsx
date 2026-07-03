import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd';

export default function Spinner() {
    return <Spin indicator={<LoadingOutlined spin />} />
}