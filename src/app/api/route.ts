import { NextResponse } from 'next/server'
import { JsonDB, Config } from 'node-json-db';

const db = new JsonDB(new Config("myDataBase", true, false, '/'));

interface JsonData {
    test: string;
    json: {
      test: string[];
      important: number;
    };
    new: string;
}

/**
 * 데이터 조회
 * @returns 
 */
export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url)    
        const id = searchParams.get('id');

        let dummyPath: string = '/dummy/';
        
        if(id) dummyPath += id;

        let data = await db.getObject<JsonData>(dummyPath);

        return NextResponse.json({ data });

    } catch(error) {
        console.error(error);

        return NextResponse.json({ error: true, msg: error });
    };
}

/**
 * 데이터 등록
 * @returns 
 */
export async function POST() {
    try {
        const dummyData: JsonData = {
            "test":"test",
            "json":{
               "test":[
                  "test",
                  "test1"
               ],
               "important":5
            },
            "new":"cool"
        };

        await db.push("/dummy", dummyData);

        return NextResponse.json({ error: false, msg: 'success' });

    } catch(error) {
        console.error(error);

        return NextResponse.json({ error: true, msg: error });
    };
}

/**
 * 데이터 수정
 * @returns 
 */
export async function PUT() {
    try {
        await db.push("/dummy/json/test[0]", "A-1");

        await db.push("/dummy/json/test[1]", "A-2");

        return NextResponse.json({ error: false, msg: 'success' });

    } catch(error) {
        console.error(error);

        return NextResponse.json({ error: true, msg: error });
    };
}

/**
 * 데이터 삭제
 * @returns 
 */
export async function DELETE() {
    try {
        await db.delete("/dummy");

        return NextResponse.json({ error: false, msg: 'success' });

    } catch(error) {
        console.error(error);

        return NextResponse.json({ error: true, msg: error });
    };
}