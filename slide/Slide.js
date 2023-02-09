import React from 'react';
import styles from './Slide.module.css';

const Slide = ({ slides }) => {
    const [index, setIndex] = React.useState(0);
    const [position, setPosition] = React.useState(0);

    const contentRef = React.useRef();
    React.useEffect(() => {
        const { width } = contentRef.current.getBoundingClientRect();
        setPosition(-(width * index))

    }, [index])
    
    function slidePrev() {
        if (index > 0) setIndex((prev) => prev - 1)
    }
    
    function slideNext() {
        if (index < slides.length - 1) setIndex((prev) => prev + 1)
    }

    
    return (
        <section className={styles.container}>
            <div 
                ref={contentRef}
                className={styles.content} 
                style={{transform: `translateX(${position}px)`}}>
                
                {slides.map((slide) => (
                    <div
                        key={slide.id}
                        className={styles.item}>
                            {slide.texto}
                    </div>
                ))}
            
            </div>
            <nav className={styles.nav}>
                <button onClick={slidePrev}>Anterior</button>
                <span>{index + 1}</span>
                <button onClick={slideNext}>Próximo</button>
            </nav>
        </section>
    )
}

export default Slide