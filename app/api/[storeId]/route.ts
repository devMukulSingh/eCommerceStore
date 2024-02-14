import { NextRequest, NextResponse } from "next/server";

export async function POST(
    req:NextRequest,
    {params} : { params : {storeId: string}}
 ){
    
    try{
        const { storeId} = params;
        if (!storeId)  return NextResponse.json({ error:'StoreId is required'},{status:400});
        
        const response = NextResponse.json({ msg: 'storeId set'}, { status:200});
        response.cookies.set('storeId',storeId);
        
        return response;
    }
    catch(e){
        console.log(`Errro in POST storeId req ${e}`);
        return NextResponse.json({error:`Error in POST storeId req ${e}`});
    }

 }