import {useEffect,useState} from "react"
import axios from "axios"
const ChatScreen = () => {

	const [chats,setChats] = useState([])

	const fetchChats = async () =>{
		const {data} = await axios.get("/api/chat")
		setChats(data)
	}

	useEffect(() =>{
		fetchChats()
	},[])

	return (
		<h1>{chats.map((chat) => (
			<div key={chat._id}>
				{chat.chatName}
			</div>
		))}</h1>
	)
}

export default ChatScreen