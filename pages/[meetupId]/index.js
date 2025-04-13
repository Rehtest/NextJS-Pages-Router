import MeetupDetail from "@/components/meetups/MeetupDetail";

export default function MeetupDetailsPage(props) {
    return (
        <MeetupDetail id={props.meetupId} image="https://www.nps.gov/common/uploads/cropped_image/primary/D284C30B-C5BA-C78D-F8C1B621D3323E4F.jpg?width=1300&quality=90&mode=crop" title="Hello" address="Hello" description="yo"/>
    )
}

export async function getStaticPaths() {
    return {
        fallback: false,
        paths: [
            { params: { meetupId: 'm1' } },
            { params: { meetupId: 'm2' } },
        ]
    }
}

export async function getStaticProps(context) {
    // fetch data for a single meetup

    const meetupId = context.params.meetupId;

    console.log(meetupId)
    
    return {
        props: {
            meetupData: {}
        }
    }
}