import Card from '../components/Card';
import CardData from '../components/CardData';

export default function Projects() {
    return (
        <>
        <div className='project-cards'>
            <Card details={CardData} />
        </div>
        </>
    );
}
