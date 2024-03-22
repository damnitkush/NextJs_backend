import { NextResponse } from "next/server"
import { users } from "@/lib/db";
export async function GET(request,par) {

    console.log(par.params.id);
    const singleData = users.filter((item) => item.id == par.params.id)

    if(singleData.length === 0){
        return NextResponse.json({message:"no data found"})
    }
  return NextResponse.json(singleData);
}
//request likhna padega
 