import Title from '../../../../components/Title';
import SeeBtn from '../../../../components/SeeBtn';

const data = [
    {
        id: 0,
        category: 'Pop',
        image: 'https://static.vecteezy.com/system/resources/previews/005/766/266/non_2x/90s-and-80s-background-template-with-retro-style-textures-and-abstract-shapes-aesthetic-fashion-background-and-eighties-graphic-rock-and-pop-music-party-event-background-template-vector.jpg',
    },
    {
        id: 1,
        category: 'Pop',
        image: 'https://static.vecteezy.com/system/resources/previews/005/766/266/non_2x/90s-and-80s-background-template-with-retro-style-textures-and-abstract-shapes-aesthetic-fashion-background-and-eighties-graphic-rock-and-pop-music-party-event-background-template-vector.jpg',
    },
    {
        id: 2,
        category: 'Pop',
        image: 'https://static.vecteezy.com/system/resources/previews/005/766/266/non_2x/90s-and-80s-background-template-with-retro-style-textures-and-abstract-shapes-aesthetic-fashion-background-and-eighties-graphic-rock-and-pop-music-party-event-background-template-vector.jpg',
    },
    {
        id: 3,
        category: 'Pop',
        image: 'https://static.vecteezy.com/system/resources/previews/005/766/266/non_2x/90s-and-80s-background-template-with-retro-style-textures-and-abstract-shapes-aesthetic-fashion-background-and-eighties-graphic-rock-and-pop-music-party-event-background-template-vector.jpg',
    },
    {
        id: 4,
        category: 'Pop',
        image: 'https://static.vecteezy.com/system/resources/previews/005/766/266/non_2x/90s-and-80s-background-template-with-retro-style-textures-and-abstract-shapes-aesthetic-fashion-background-and-eighties-graphic-rock-and-pop-music-party-event-background-template-vector.jpg',
    },
    {
        id: 5,
        category: 'Pop',
        image: 'https://static.vecteezy.com/system/resources/previews/005/766/266/non_2x/90s-and-80s-background-template-with-retro-style-textures-and-abstract-shapes-aesthetic-fashion-background-and-eighties-graphic-rock-and-pop-music-party-event-background-template-vector.jpg',
    },
];

function Category() {
    return (
        <div className="mt-4 w-11/12 pb-48  h-1/2">
            <Title>Categories </Title>
            <SeeBtn className="mr-8">See all</SeeBtn>
            <div className="w-full grid grid-cols-2 gap-3 mt-3">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className=" text-5xl  ml-10x h-20 bg-cover flex items-center flex-row justify-center rounded-lg"
                        style={{ backgroundImage: `url(${item.image})` }}
                    >
                        <span className="font-Karla text-white">{item.category}</span>
                    </div>
                ))}
            </div>
            <div className="h-24 "></div>
        </div>
    );
}

export default Category;
