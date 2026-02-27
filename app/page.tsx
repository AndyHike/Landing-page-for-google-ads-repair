import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { ValueProps } from '../components/ValueProps';
import { Accessories } from '../components/Accessories';
import { MapSection } from '../components/MapSection';
import { Footer } from '../components/Footer';

export default function Home() {
    return (
        <>
            <Navbar />
            <main className="flex-grow">
                <Hero />
                <ValueProps />
                <Accessories />
                <MapSection />
            </main>
            <Footer />
        </>
    );
}
