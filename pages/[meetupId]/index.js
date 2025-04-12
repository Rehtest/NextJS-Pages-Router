import { useRouter } from "next/router"

import MeetupDetail from "@/components/meetups/MeetupDetail";

export default function MeetupDetailsPage() {
    const router = useRouter();
    const meetupId = router.query.meetupId;

    return (
        <MeetupDetail image="https://www.nps.gov/common/uploads/cropped_image/primary/D284C30B-C5BA-C78D-F8C1B621D3323E4F.jpg?width=1300&quality=90&mode=crop" title="Hello" address="Hello" description="yo"/>
    )
}