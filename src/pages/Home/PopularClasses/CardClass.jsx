const CardClass = ({ classData }) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
                <img src={`/images/${classData.picture}`} alt={classData.className} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{classData.className}</h2>
                <p>Instructor: {classData.instructorName}</p>
                <p>Enrolled Students: {classData.enrolledStudents}</p>
                <p>Price: ${classData.price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default CardClass;
