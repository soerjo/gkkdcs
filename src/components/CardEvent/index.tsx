import React from "react";
import styles from "./styles.module.scss";
import { events as defaultData } from "../../data/dataCard";
import { shortingText } from "../../utils/stringEdit";

export interface IEvent {
  name: string;
  date: Date;
  image: any;
  detail?: any;
}

const CardEvent: React.FC<{ events?: IEvent[] }> = ({
  events = defaultData,
}) => {
  return (
    <div className={styles.Container}>
      <h3>Events:</h3>
      <div className={styles.containerCard}>
        <div className={styles.cardContainer}>
          {events.map((event, index) => (
            <div className={styles.card} key={index}>
              <div className={styles.banner}>
                <img src={event.image} alt={event.name} />
              </div>
              <div className={styles.details}>
                <div className={styles.title}>
                  {shortingText(event.name, 13)}
                </div>
                <p>{event.date.toLocaleDateString("en-US")}</p>
                {event.detail && <p>{event.detail}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardEvent;
