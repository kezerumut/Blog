import { Form, Item } from "devextreme-react/form";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { Button } from "devextreme-react";

export default function Login() {
  return (
    <div className="login-container">
      <Nav />
      <div>
        <h1>Kullanıcı Girişi</h1>
        <Form>
          <Item
            dataField="username"
            label="Kullanıcı Adı"
            editorType="dxTextBox"
          />
          <Item dataField="password" label="Şifre" editorType="dxTextBox" />
          <Item
            editorType="dxButton"
            editorOptions={{
              text: "Giriş Yap",
              type: "success",
              useSubmitBehavior: true,
              onClick: () => { alert("Giriş butonuna tıklandı!"); }
            }}
          />
        </Form>
       
      </div>
      <Footer />
    </div>
  );
}
