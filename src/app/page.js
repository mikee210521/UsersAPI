import styles from "./page.module.css";
import TittleTest from "@/components/TittleTest/TittleTest";
import Users from "@/components/Users/Users";
import MadeSection from "@/components/Footer/MadeSection";

export default function Home() {
  return (
    <>
        <div>
            <header>
                <TittleTest/>
            </header>
            <section>
                <Users/>
            </section>
            <footer>
                <MadeSection/>
            </footer>
        </div>
    </>
  );
}
