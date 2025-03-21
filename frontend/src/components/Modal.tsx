import React, { useState } from "react";
import "../styles/Modal.css";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: (formData: any) => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onConfirm }) => {
    const [formData, setFormData] = useState({
        client_name: "",
        client_phone: "",
        car_brand: "",
        car_model: "",
        car_year: "",
        work_description: "",
        appointment_date: "",
    });

    if (!isOpen) return null;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: name === "car_year" ? Number(value) : value,
        }));
    };

    const handleSubmit = () => {
        const updatedFormData = {
            ...formData,
            car_year: Number(formData.car_year),
        };

        onConfirm(updatedFormData);
        window.location.reload(); // ⬅️ Обновление страницы после отправки
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Запись в автосервис</h2>

                <label>Имя:</label>
                <input
                    type="text"
                    name="client_name"
                    value={formData.client_name}
                    onChange={handleChange}
                />

                <label>Телефон:</label>
                <input
                    type="text"
                    name="client_phone"
                    value={formData.client_phone}
                    onChange={handleChange}
                />

                <label>Марка авто:</label>
                <input
                    type="text"
                    name="car_brand"
                    value={formData.car_brand}
                    onChange={handleChange}
                />

                <label>Модель авто:</label>
                <input
                    type="text"
                    name="car_model"
                    value={formData.car_model}
                    onChange={handleChange}
                />

                <label>Год выпуска:</label>
                <input
                    type="number"
                    name="car_year"
                    value={formData.car_year}
                    onChange={handleChange}
                />

                <label>Описание работ:</label>
                <textarea
                    name="work_description"
                    value={formData.work_description}
                    onChange={handleChange}
                ></textarea>

                <label>Дата записи:</label>
                <input
                    type="date"
                    name="appointment_date"
                    value={formData.appointment_date}
                    onChange={handleChange}
                />

                <div className="modal-buttons">
                    <button className="btn confirm-btn" onClick={handleSubmit}>
                        Записаться
                    </button>
                    <button className="btn cancel-btn" onClick={onClose}>
                        Отмена
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;