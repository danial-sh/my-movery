import React from "react";
import { useState } from "react";
import Select from "react-select";
import Detailmap from "./detailmap";
import DatePicker from "react-datepicker";
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import es from 'date-fns/locale/es';
import "react-datepicker/dist/react-datepicker.css";
export default function Maindetail() {
  const [me, setme] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const myoption = [
    { value: "yoga", label: "yoga" },
    { value: "Surf", label: "Surf" },
    { value: "fitness", label: "fitness" },
  ];
  registerLocale('es', es)
  const info = [
    {
      img: "images/main/yoga.svg",
      title: "Sportart",
      select: (
        <Select
          defaultValue={me}
          onChange={setme}
          options={myoption}
          className="select-option cursor"
        />
      ),
    },
    {
      img: "images/main/location.svg",
      title: "Reiseziel",
      select: (
        <Select
          defaultValue={me}
          onChange={setme}
          options={myoption}
          className="select-option cursor"
        />
      ),
    },
    {
      img: "images/main/datePicker.svg",
      title: "Sportart",
      select: (
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          locale={es}
          className="radius"
        />
      ),
    },
  ];
  return (
    <div className="main-detail d-flex align-center">
      <div className="detail-title-content color-text">
        <h3 className="detail-title">Erlebe. Aktiven. Urlaub.</h3>
        <p className="color-text">
          Surfen • Yoga • Wandern • Fitness • Kampfsport.
        </p>
      </div>
      <Detailmap data={info} />
    </div>
  );
}
