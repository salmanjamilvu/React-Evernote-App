import React, {useState, useContext} from 'react'
import { Button, Input, Form } from 'antd'
import ShowNodes from './ShowNodes'
import {contextProvider} from '../Context'

const Sidebar = () => {
    const formRef = React.createRef()
    const [state, setState] = useState(false)
    const [node, setNode] = useState("")
    const {handleNameValue} = useContext(contextProvider)
    const handleFormSubmit = () =>{
        formRef.current.resetFields()
        setState(false)
        handleNameValue(node)
        setNode("")
    }
    return (
        <div className="sroll_container">
            <Button type="primary" block onClick={()=>setState(true)}>New Node</Button>
            <Form style={{ display : state ? 'block':'none'}} className='mt-10' onFinish={handleFormSubmit} ref={formRef} >
                <Form.Item name="node" rules={[{ required: true, message: 'Please input the Node!' }]}>
                    <Input placeholder="Node" onChange={(e)=>setNode(e.target.value)} />
                </Form.Item>
                <Form.Item className="mt-10">
                    <Button type="primary" htmlType='submit' block>Submit</Button>
                </Form.Item>
            </Form>
            <ShowNodes />
        </div>
    )
}

export default Sidebar
