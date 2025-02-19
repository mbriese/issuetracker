import {NextRequest, NextResponse} from "next/server";
import { z } from "zod";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const createIssueSchema
    = z.object({
    title: z.string().min(1).max(255),
    description: z.string().min(1),
    updatedAt: z.date().optional(),
    createdAt: z.date().optional(),
});

export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = createIssueSchema.safeParse(body);
    if (!validation.success) {
        return NextResponse.json(validation.error.errors, {status: 400});
    }

    const {title, description } = validation.data;
    const updatedAt = new Date();
    const createdAt = new Date();

    const newIssue = await prisma.issue.create({
        data: {
            title,
            description,
            updatedAt: updatedAt || new Date(),
            createdAt: createdAt || new Date(),
        }
    });
    return NextResponse.json(newIssue, { status: 201} );
}
