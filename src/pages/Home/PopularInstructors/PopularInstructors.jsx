import popularInstructorsData from '../../../../public/popularInstructorsData.json';
import SectionTitle from '../../../components/SectionTitle';
import CardInstructors from './CardInstructors';

const PopularInstructors = () => {
    const sortedInstructors = popularInstructorsData.sort((a, b) => b.totalStudents - a.totalStudents);

    const topInstructors = sortedInstructors.slice(0, 6);

    return (
        <>
            <SectionTitle
                heading={'popular instructors'}
            >
            </SectionTitle>
            <div className="grid grid-cols-3 gap-4 my-16">
                {
                    topInstructors.map((selectedInstructors) => <CardInstructors
                        key={selectedInstructors._id}
                        instructorsData={selectedInstructors}
                    ></CardInstructors>)
                }
            </div>
        </>
    );
};

export default PopularInstructors;