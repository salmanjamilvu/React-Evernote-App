import React, {useState, useContext} from 'react'
import { Typography } from 'antd'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import {contextProvider} from '../Context'
const { Title } = Typography

const Content = () => {
    const {description, updateNode} = useContext(contextProvider)
    const [state, setState] = useState(description.description)
    const handleValue = (value) =>{
        setState(value)
        updateNode(description.id, value)
    } 
    console.log(description.description)
    return (
        <React.Fragment>
            <div className="header">
                {description.id ? (
                    <Title level={5}> {description.name} </Title>
                ) : (
                    <Title level={5}>Node</Title>
                )}
            </div>
            <ReactQuill style={{display : description.id ? 'block':'none', height: 400 }} theme="snow" value={state}  onChange={handleValue}/>
        </React.Fragment>
    )
}

export default Content
