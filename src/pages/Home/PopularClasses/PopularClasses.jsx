import popularClassesData from '../../../../public/popularClassesData.json';
import SectionTitle from '../../../components/SectionTitle';
import CardClass from './CardClass';

const PopularClasses = () => {
    const sortedClasses = popularClassesData.sort((a, b) => b.enrolledStudents - a.enrolledStudents);

    const topClasses = sortedClasses.slice(0, 6);

    return (
        <>
            <SectionTitle
                heading={'popular classes'}
            ></SectionTitle>

            <div className="grid grid-cols-3 gap-4 my-16">
                {topClasses.map((selectedClass) => <CardClass key={selectedClass._id} classData={selectedClass} />)}
            </div>
        </>
    );
};

export default PopularClasses;
