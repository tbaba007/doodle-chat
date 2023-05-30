import {screen,render} from '@testing-library/react'
import { getAllChatMessages } from '../../api/Services/Chat'

describe('chat component',()=>{
    test('it should fetch all messages',async()=>{
        const response=await getAllChatMessages();
        expect(response.length).toBeGreaterThan(0)
    })
})