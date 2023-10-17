

const SectionTitle = ({ heading }) => {
    return (
        <div className="text-center mx-auto w-4/12 my-12">
            <h2 style={{fontFamily: 'Lora, serif'}} className="text-neutral-500 font-semibold uppercase border-x-lime-700 border text-3xl mb-4 py-5">{heading}</h2>
        </div>
    );
};

export default SectionTitle;