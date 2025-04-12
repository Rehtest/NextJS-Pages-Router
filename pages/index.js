import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image:
            'https://www.nps.gov/common/uploads/cropped_image/primary/D284C30B-C5BA-C78D-F8C1B621D3323E4F.jpg?width=1300&quality=90&mode=crop',
        address: 'Some Address 5, 12345 Some City',
        description: 'This is a first meetup',
    },
    {
        id: 'm2',
        title: 'A Second Meetup',
        image:
            'https://dncdn.net/cdn-cgi/imagedelivery/LUK_QF9boQDdW8CU5UIajQ/www.yellowstonevacations.com/2023/08/Discover-Grand-Canyon-Gallery-1-scaled.jpeg/w=1500,h=1000',
        address: 'Some Address 10, 12345 Some City',
        description: 'This is a second meetup',
    },
    {
        id: 'm3',
        title: 'A Third Meetup',
        image:
            'https://images.unsplash.com/photo-1611794485509-701be5a5d4c5?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b2NlYW4lMjBibHVlfGVufDB8fDB8fHww',
        address: 'Some Address 15, 12345 Some City',
        description: 'This is a third meetup',
    },
]

export default function HomePage() {
    return (
        <MeetupList meetups={DUMMY_MEETUPS} />
    )
}