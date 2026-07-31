import { useMemo } from "react";

export default function Stars() {

    const stars = useMemo(() => {

        return Array.from({ length: 120 }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            top: Math.random() * 100,
            size: Math.random() * 3 + 1,
            delay: Math.random() * 6,
            duration: Math.random() * 4 + 3,
        }));

    }, []);

    return (
        <div className="stars">

            {stars.map(star => (

                <span
                    key={star.id}
                    className="star"
                    style={{
                        left: `${star.left}%`,
                        top: `${star.top}%`,
                        width: star.size,
                        height: star.size,
                        animationDelay: `${star.delay}s`,
                        animationDuration: `${star.duration}s`
                    }}
                />

            ))}

        </div>
    );

}