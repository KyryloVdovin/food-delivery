import { useEffect } from 'react';
import './copy-right.css';

const CopyRight = ({ }) => {
    useEffect(() => {
    }, []);

    return (
        <section className="copy-right">
            <div className="copy-right-data">
                © YouMeal, 2023
            </div>
            <div className="copy-right-dev">
                Developer: Kyrylo Vdovin
            </div>
        </section>
    )
}

export default CopyRight;