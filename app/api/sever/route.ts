import axios from "axios"

export async function GET(){
    const res = await axios.post('https://mock-node-wgqbnxruha-as.a.run.app/broadcast',{
        
        "symbol": "ETH",
        "price": 4500,
        "timestamp": Date.now(),
        
    })
    return Response.json(res.data)
}

export async function POST(request:Request) {
    const {symbol,price,timestamp} = await request.json()
    const data = await axios.post('https://mock-node-wgqbnxruha-as.a.run.app/broadcast',{
        
        symbol: symbol,
        price: price,
        timestamp: timestamp,
        
    })
    console.log(data)
    const status = await axios.get(`https://mock-node-wgqbnxruha-as.a.run.app/check/${data.data.tx_hash}`)
    return Response.json(status.data)
}