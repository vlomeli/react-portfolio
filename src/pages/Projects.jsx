import Card from '../components/Card';
import CardData from '../components/CardData';

export default function Projects() {
    return (
        <>
        <div className='project-cards'>
            <h1>MY PROJECTS</h1>
            <Card details={CardData} />
        </div>
        </>
    );
}
