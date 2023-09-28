import { NextResponse } from "next/server";
import { connectDB, client } from "../../Utils/Mongoconn";
import GetData from "../../Utils/Mongoconn";

// export default  async function GetData() {
//   const db = client.db();
//   const data = await db.collection("portfolioDetails").find().toArray();
//   return data;
// }

export async function GET(req, res) {
  await connectDB();
  try {
    if (req.method === "GET") {
      const resumedata = await GetData();
      return NextResponse.json(resumedata);
    }
  } catch (error) {
    console.log(error);
  }
}
