

const CardInstructors = ({ instructorsData }) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
                <img src={`/images/${instructorsData.picture}`} alt={instructorsData.className} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{instructorsData.name}</h2>
                <p>Total Students: {instructorsData.totalStudents}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default CardInstructors;