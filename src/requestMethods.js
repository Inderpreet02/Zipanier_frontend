import axios from "axios";

const BASE_URL = "https://zipanier-backend.vercel.app/api"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjM2Y2Q0YWY0ODZhYThmZGJkOWUzMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NjcwMzkyMiwiZXhwIjoxNjU2OTYzMTIyfQ.UFm4JVFjJuIe2A0P9j2bbUDcZRawy1sjjTG72NZD4rk"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`}
})