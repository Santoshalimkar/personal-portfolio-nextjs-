import { NextResponse } from 'next/server'
import { connectDB, client } from '../../Utils/Mongoconn' 


 

export default async function getData() {
    const db = client.db();
    const data = await db.collection('portfolioDetails').find().toArray();
    return data;
  }
  




export async function GET(req,res) {
    await connectDB();
    try {
            
        if (req.method === 'GET') {
            const resumedata = await getData();
            return NextResponse.json(resumedata)
          }
    } catch (error) {
        console.log(error)
        
    }
 
}