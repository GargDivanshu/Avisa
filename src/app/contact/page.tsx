import Navbar from './../components/Navbar';
import Footer from './../components/Footer';

export default function Page() {

    return (
        <main className="bg-white relative flex min-h-screen flex-col items-center md:px-36 px-6 md:pb-36">
        <Navbar/>

        <Footer/>
        </main>
    )
}