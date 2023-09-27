import Content from './Content';
import TopList from './TopList';

function Home() {
    return (
        <nav className="flex flex-row w-full h-screen ">
            <Content />
            <TopList />
        </nav>
    );
}

export default Home;
