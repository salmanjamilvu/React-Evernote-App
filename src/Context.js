import React, { createContext, useState, useEffect } from 'react'
import firebase from 'firebase'
import {db} from './firebase'

export const contextProvider = createContext()

export const Provider = (props) =>{
    const [nodes, setNodes] = useState({
        id: '',
        name: '',
        description: ''
    })

    const [description, setDescription] = useState({
        id: '',
        name: '',
        description: ''
    })

    const [loader, setLoader] = useState(false)

    const handleNameValue = (value) =>{
        db.collection("nodes").add({
            name: value,
            currentTime: firebase.firestore.FieldValue.serverTimestamp(),
        })
    }

    const handleDescription = (value, id, name) =>{
        setDescription({
            id: id,
            name: name,
            description: value
        })
        console.log(id)
        console.log(value)
    }

    const deleteNode = (id) =>{
        db.collection("nodes").doc(id).delete().then(() => {
            console.log("success")
        }).catch((error) => {
            console.log(error)
        });
    }

    const updateNode = (id, value) =>{
        db.collection("nodes").doc(id)
        .update( {
            description: value,
            currentTime: firebase.firestore.FieldValue.serverTimestamp(),
        });
    }

    useEffect(() => {
        db.collection("nodes").orderBy("currentTime", "desc").onSnapshot((sna)=>{
            setNodes(sna.docs.map(doc=>(
                {
                    id: doc.id,
                    name: doc.data().name,
                    description: doc.data().description
                }
            )))
        })
        setLoader(true)
    }, [])
    return(
        <contextProvider.Provider value={{handleNameValue, nodes, loader, description, handleDescription, deleteNode, updateNode}}>
            {props.children}
        </contextProvider.Provider>
    )
}