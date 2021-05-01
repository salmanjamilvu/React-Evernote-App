import React, {useContext} from 'react'
import { List, Typography, Space } from 'antd'
import { DeleteFilled } from '@ant-design/icons';
import {contextProvider} from '../Context'

const { Link } = Typography;
const ShowNodes = () => {
    const {nodes, loader, handleDescription, deleteNode} = useContext(contextProvider)

    const data = []
    if(loader === true){
        nodes.map((node)=>(
            data.push({
                key: node.id,
                name: node.name,
                description: node.description
            })
        ))
    }
    return (
        <div>
        <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
            <List.Item className="title">
                <Space size={20}>
                    <Link onClick={()=>handleDescription(item.description ,item.key, item.name)}> {item.name} </Link>
                    <DeleteFilled onClick={()=>deleteNode(item.key)} />
                </Space>

          </List.Item>
        )}
      />
        </div>
    )
}

export default ShowNodes
