import { useEffect } from "react";
import MyServiceData from "../components/MyServiceData"; // ✅ Импортируем MyServiceData
import UploadPhotos from "../components/UploadPhotos"; // ✅ Добавляем компонент загрузки фото
import "../styles/ServicePage.css";
import "../styles/uploadPhotos.css";


const ServicePage = () => {
    useEffect(() => {
        document.body.classList.add("service-page");
        return () => document.body.classList.remove("service-page"); // Удаляем при выходе
    }, []);

    return (
        <>
            <div className="service-container">
                <h2>Данные сервиса</h2>
                <MyServiceData /> {/* ✅ Компонент с данными сервиса */}
                <UploadPhotos /> {/* ✅ Компонент для загрузки и просмотра фото */}
            </div>
        </>
    );
};

export default ServicePage;