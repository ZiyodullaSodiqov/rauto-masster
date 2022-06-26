import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminHeader from "../../components/admin_header/admin_header";
import AdminCards from "../../components/card_pages/card_pages";

function CardsAdmin() {
  const navigate = useNavigate()
  useEffect(() => {
    if (!!!localStorage.getItem('token')) navigate('/login')
  }, [localStorage.getItem('token')])

  return (
    <div className="d-flex">
      <AdminHeader />
      <AdminCards />
    </div>
  );
}

export default CardsAdmin;
