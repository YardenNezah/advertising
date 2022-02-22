import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import NotFound from "../../components/NotFound/NotFound";
import Commercial from "../../components/Commercial/Commercial";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import './ClientPage.css';

const client = new W3CWebSocket("ws://127.0.0.1:8000");

const ClientPage = () => {
  const params = useParams();
  const [commercials, setCommercials] = useState(null);
  useEffect(() => {
    client.onopen = () => {
      console.log("WebSocket Client Connected");
      client.send(
        JSON.stringify({
          screenNumber: params.id
        })
      );
    };
  }, [client]);

  const getAdvertismentsHandler = useCallback(async () => {
    await axios
      .get(`http://localhost:8080/clients/${params.id}`)
      .then((res) => {
        setCommercials(res.data);
      })
      .catch(err => {
        console.log(err)
      })
  }, [params]);

  useEffect(() => {
    getAdvertismentsHandler();
  }, [getAdvertismentsHandler]);

  return (
    <div>
      <h2>Client Details For Page Number:</h2>
      <span class="page-id">{params.id}</span>
      {commercials ? <Commercial commercials={commercials} /> : <NotFound />}
      <Link className="back-home-btn" to="/"> Back to home page</Link>

    </div>
  );
};

export default ClientPage;
