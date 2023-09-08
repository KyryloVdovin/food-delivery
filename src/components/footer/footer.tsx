import { useEffect, useRef, useState } from 'react';
import './footer.css';
import footerLogo from '../../img/footer-logo.png';
import telegram from '../../img/icons/telegram.png';
import vk from '../../img/icons/vk.png';
import call from '../../img/icons/Call.png';

const Footer = ({ }) => {
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef(null);

    function onEntry(entries: any) {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
    }

    let options = {
        root: null,
        rootMargin: "0px",
        threshold: [0.8]
    };

    useEffect(() => {
        let observer = new IntersectionObserver(onEntry, options);
        if (containerRef.current) {
            observer.observe(containerRef.current);

            return () => {
                if (containerRef.current) observer.unobserve(containerRef.current);
            }
        }
    }, [containerRef, options]);

    return (
        <footer ref={containerRef} className={`footer ${isVisible ? 'element-show' : 'element-animation'}`}>
            <div className='footer-container'>
                <a href="#!" className="logo">
                    <img className="logo-img" src={footerLogo} alt="Invoriem logo" />
                </a>
                <div className='order-number'>
                    <p className='footer-block-title'>Order Number</p>
                    <div className='number'>
                        <img src={call} />
                        <span>+380960800222</span>
                    </div>
                </div>
                <div className='social-links'>
                    <p className='footer-block-title'>We are in social networks</p>
                    <ul>
                        <li>
                            <a href='#'>
                                <img src={telegram} />
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <img src={vk} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;