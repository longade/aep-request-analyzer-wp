import { useState } from "react";
import Navbar from "../Navbar/NavBar";
import Sidebar from "../Sidebar/Sidebar";

export default function Header() {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Navbar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
        </>
    );
}