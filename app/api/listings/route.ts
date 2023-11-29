import getCurretUser from "@/app/actions/getCurrentUser";
import db from "@/app/libs/db";
import { NextResponse } from "next/server"

export async function POST(
    req : Request
) {
    const currentUser = await getCurretUser()

    if(!currentUser) {
        return NextResponse.error()
}
    const body = await req.json();
    const {
        title,
        description,
        imageSrc,
        roomCount,
        bathroomCount,
        guestCount,
        price,
        location,
        category
    } = body

    Object.keys(body).forEach((value : any) => {
        if(!body[value]) {
            NextResponse.error()
        }
    })

    const listing = await db.listing.create({
        data : {
            title,
            description,
            imageSrc,
            category,
            roomCount,
            bathroomCount,
            guestCount,
            locationValue : location.value,
            price : parseInt(price, 10),
            userId : currentUser.id
        }
    })

    return NextResponse.json(listing)

}