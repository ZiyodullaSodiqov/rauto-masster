import AdminHeader from "../../components/admin_header/admin_header";
import AddCardForm from "../../components/add_card_form/add_card_form";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function AddCard() {
  const navigate = useNavigate()
  useEffect(() => {
    if (!!!localStorage.getItem('token')) navigate('/login')
  }, [localStorage.getItem('token')])

  return (
    <>
      <AdminHeader />
      <AddCardForm />
    </>
  );
}

export default AddCard;
