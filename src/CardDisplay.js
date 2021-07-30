import React, { useState, useRef, useEffect} from "react";
import axios from "axios";
const CardDisplay = () => {
    const stackId = useRef()
    const remCard = useRef()
    const [cardStack, setCardStack] = useState([])
    useEffect(() => {
        const getStack = async () => {
            const res = await axios.get(`http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`)
            stackId.current = res.data.deck_id
        }
        getStack()
    },[stackId])

    const getCard = () => {
        const loadCard = async () => {
            const res = await axios.get(`http://deckofcardsapi.com/api/deck/${stackId.current}/draw/?count=1`)
            setCardStack(res.data)
            console.log(cardStack)
            remCard.current = cardStack["remaining"]
            console.log(remCard.current)
        }
        remCard.current === 49 ? console.log("done") : loadCard()
     }
    return (
        <div>
            <p>Hello World!</p>
            <button onClick={getCard}>Get Card</button>
        </div>
    )
}

export default CardDisplay;