import Category from "./Category"

const Categories = () => {

    const test = [1,2,3,4,5]

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            width: '80%',
            gap: '1rem'
        }}>
            {test.map((item, index) => (
               <Category key={index} item={item} />
            ))}
        </div>
    )
};

export default Categories;