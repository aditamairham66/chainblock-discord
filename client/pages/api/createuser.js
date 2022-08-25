import { client } from "../../lib/client"

export default async (req, res) => {
    const { userAddress } = req.body

    const user = {
        _type: 'users',
        _id: `${userAddress}-user`,
        name: 'unnamed',
        walletAddress: userAddress
    }
    try {
        await client.createIfNotExists(user)
    
        res.status(200).send('Successful')
    } catch (error) {
        console.error(error)
        res.status(500).send(error)
    }
}