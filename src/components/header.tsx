import { UserButton, auth } from "@clerk/nextjs";
import Link from "next/link";

export default async function Header(){
    const { userId } = auth();
    return (
        <div className="bg-blue-600 text-neutral-100">
            <div className="container mx-auto flex items-centre justify-between py-4">
                <Link href="/"> Home</Link>
                <div>{userId ? (
                <div className="flex gap-4 items-center">
                    <Link href="/dashboard">Dashboard</Link>
                    <UserButton afterSignOutUrl = '/'/>
                </div>
                ) : (
                    <div className="flex gap-4 items-center">
                    <Link href="/sign-up">Sign up</Link>
                    <Link href="/sign-in">Sign in</Link>

                </div>
                )}
                </div>
            </div>
        </div>
    );
}
