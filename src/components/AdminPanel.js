import { Card, Container } from "react-bootstrap";
import UserListItem from "./UserListItem";
import usersJson from '../models/users.json';
import "./styles/AdminPanelStyle.css";

export default function AdminPanel() {
    const users = usersJson;
