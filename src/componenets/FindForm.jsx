import React from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
import {useState} from "react";
import MySelect from "./UI/select/MySelect";
import FromTo from "./UI/fromTo/FromTo";

    const FindForm = ({takeParams}) => {
        const [car, setCar] = useState({mark: "", model: "",body: "",gearbox: "",year_from: "", year_to:"",
        engine:"", drive: "", mileage_from: "", mileage_to: "", v_from:"", v_to: "", price_from: "", price_to: ""})

    const makeUrl = (e) => {
        e.preventDefault()
        takeParams(car.year_from)
    }

    return (
        <form>
            <MyInput
                value={car.mark}
                onChange={e => setCar({...car, mark: e.target.value})}
                type="text"
                placeholder="Введите марку автомобиля"
                text_="Марка автомобиля"
            />
            <MyInput
                value={car.model}
                onChange={e => setCar({...car, model: e.target.value})}
                type="text"
                placeholder="Введите марку автомобиля"
                text_="Модель автомобиля"
            />
            <MySelect
                value={car.body}
                text_="Кузов автомобился"
                onChange={e => setCar({...car, body: e.target.value})}>
                <option disabled>Выберите кузов</option>
                <option value="">-</option>
                <option value="1">Седан</option>
                <option value="2">Хэтчбэк</option>
                <option value="3">Хэтчбэк 3 дв.</option>
                <option value="4">Хэтчбэк 5 дв.</option>
                <option value="5">Лифтбек</option>
                <option value="6">Внедорожник</option>
                <option value="7">Внедорожник 3 дв.</option>
                <option value="8">Внедорожник 5 дв.</option>
                <option value="9">Универсал</option>
                <option value="10">Купе</option>
                <option value="11">Минивэе</option>
                <option value="12">Пикап</option>
                <option value="13">Лимузин</option>
                <option value="14">Фургон</option>
                <option value="15">Кабриолет</option>
            </MySelect>
            <MySelect value={car.gearbox}
                      onChange={e => setCar({...car, gearbox: e.target.value})}
                      text_="Коробка передач автомобиля">
                <option disabled>Выберите тип коробки передач</option>
                <option value="">-</option>
                <option value="1">Автомат</option>
                <option value="2">Автоматичесская</option>
                <option value="3">Робот</option>
                <option value="4">Вариатор</option>
                <option value="5">Механическая</option>
            </MySelect>
            <FromTo
                t1="Год от"
                t2="до"
                pr1= {car.year_from}
                pr2= {e => setCar({...car, year_from: e.target.value})}
                pr3= {car.year_to}
                pr4= {e => setCar({...car, year_to: e.target.value})}
            />
            <MySelect value={car.engine}
                      onChange={e => setCar({...car, engine: e.target.value})}
                      text_="Двигатель автомобиля">
                <option disabled>engine</option>
                <option value="">-</option>
                <option value="1">Бензин</option>
                <option value="2">Дизель</option>
                <option value="3">Гибрид</option>
                <option value="4">Электро</option>
                <option value="5">Турбированный</option>
                <option value="6">Атмосферный</option>
                <option value="7">Газобалонное оборудование</option>
            </MySelect>
            <MySelect value={car.drive}
                      onChange={e => setCar({...car, drive: e.target.value})}
                      text_="Привод автомобиля">
                <option disabled>drive</option>
                <option value="">-</option>
                <option value="1">Передний</option>
                <option value="2">Задний</option>
                <option value="3">Полный</option>
            </MySelect>
            <FromTo
                t1="Пробег от"
                t2="до"
                pr1= {car.mileage_from}
                pr2= {e => setCar({...car, mileage_from: e.target.value})}
                pr3= {car.mileage_to}
                pr4= {e => setCar({...car, mileage_to: e.target.value})}
            />
            <FromTo
                t1="Объём двигателя от"
                t2="до"
                pr1= {car.v_from}
                pr2= {e => setCar({...car, v_from: e.target.value})}
                pr3= {car.v_to}
                pr4= {e => setCar({...car, v_to: e.target.value})}
            />
            <FromTo
                t1="Цена от"
                t2="до"
                pr1= {car.price_from}
                pr2= {e => setCar({...car, price_from: e.target.value})}
                pr3= {car.price_to}
                pr4= {e => setCar({...car, price_to: e.target.value})}
            />
            <MyButton onClick={makeUrl}>Find</MyButton>
        </form>
    );
};

export default FindForm;