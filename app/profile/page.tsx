import { ProfileData } from "@/types/ProfileData"
import Image from "next/image";
import { FaEnvelope, FaIdBadge } from "react-icons/fa6"
import { createAvatar } from '@dicebear/core';
import { initials } from "@dicebear/collection"
import { useAppSelector } from "../redux/hooks";
import NotAllowedPage from "../not-allowed";


export default function ProfilePage() {
    const data: ProfileData = useAppSelector((state) => state.data.profile);
    if(!data) {
        return <NotAllowedPage />
    }

    return (
        <div className="w-full py-6 space-y-3">
            <div className="container flex flex-col items-center justify-center px-4 space-y-2 md:px-6">
                <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                        <Image
                            alt="Avatar"
                            height={192}
                            width={192}
                            className="rounded-full border shadow-md"
                            src={createAvatar(initials, {seed: data.facultyName}).toDataUriSync()}
                        />
                    </div>
                    <h1 className="text-3xl font-bold text-center">{data.facultyName}</h1>
                    <div className="flex flex-col">
                        <div>
                            <div className="inline-flex font-semibold text-md">
                                <FaEnvelope className="mr-1" />
                                <span className="inline">
                                    Email
                                </span>
                            </div>
                            <div>{data.facultyEmail}</div>
                        </div>
                        <div>
                            <div className="inline-flex font-semibold">
                                <FaIdBadge className="mr-1" />
                                <span>
                                    Faculty ID
                                </span>
                            </div>
                            <div>{data.facultyID}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
