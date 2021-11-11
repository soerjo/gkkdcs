import React from "react";
import { IDataImage } from "../../interfaces/IDataImage";
import { IoIosArrowDropleftCircle as Kiri } from "react-icons/io";
import { IoIosArrowDroprightCircle as Kanan } from "react-icons/io";
import styles from "./style.module.scss";

interface IJumbotron {
  dataImage: IDataImage[];
}

const Jumbotron: React.FC<IJumbotron> = ({ dataImage }) => {
  const [indexDisplay, setIndexDisplay] = React.useState(0);
  const [display, setDisplay] = React.useState(dataImage[0]);

  React.useEffect(() => {
    let next = setInterval(() => {
      setIndexDisplay((prv) => {
        if (prv < dataImage.length - 1) return prv + 1;
        return 0;
      });
    }, 15000);
    setDisplay(dataImage[indexDisplay]);

    return () => clearInterval(next);
  }, [indexDisplay, dataImage]);

  const nextBtn = () => {
    if (indexDisplay < dataImage.length - 1) {
      handleChange(indexDisplay + 1);
    } else {
      handleChange(0);
    }
  };

  const prevBtn = () => {
    if (indexDisplay > 0) {
      handleChange(indexDisplay - 1);
    } else {
      handleChange(dataImage.length - 1);
    }
  };

  const handleChange = (index: number) => {
    setDisplay(dataImage[index]);
    setIndexDisplay(index);
  };

  return (
    <div className={styles.jumbotron}>
      <div className={styles.tools}>
        <Kiri className={styles.arrow} onClick={prevBtn} />
        <div className={styles.dot}>
          {dataImage.map((data, index) =>
            data.image === display.image ? (
              <div key={index} className={styles.titikActive} />
            ) : (
              <div
                key={index}
                className={styles.titik}
                onClick={() => handleChange(index)}
              />
            )
          )}
        </div>
        <Kanan className={styles.arrow} onClick={nextBtn} />
      </div>
      <a href={display.path}>
        <img
          src={display.image}
          alt={display.title}
          onClick={() => console.log("ke click!")}
        />
      </a>
    </div>
  );
};

export default Jumbotron;
