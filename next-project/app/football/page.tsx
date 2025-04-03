"use client"; // Required for useState and useEffect in Next.js

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Football() {
    const [leagues, setLeagues] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const API_KEY = "2e73521261184664a75e8461edffad99"; // Replace with your actual API key

    useEffect(() => {
        async function getData() {
            try {
                const response = await fetch(
                    "https://api.football-data.org/v4/competitions",
                    {
                        method: "GET",
                        headers: {
                            "X-Auth-Token": API_KEY, // Authentication header for Football-Data.org
                        },
                    }
                );

                console.log("Response Status:", response.status);

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                console.log(data);

                if (data && data.competitions && Array.isArray(data.competitions)) {
                    setLeagues(data.competitions); // Set leagues data
                } else {
                    setError("No leagues data found in the response");
                }
            } catch (err) {
                console.error("Error fetching data:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        getData();
    }, []);

    return (
        <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
            <h1 className="text-4xl font-bold text-center text-indigo-600 mb-6">
                API Futebol
            </h1>

            {loading ? (
                <p className="text-xl text-gray-600">A carregar...</p>
            ) : error ? (
                <p className="text-xl text-red-500">Erro: {error}</p>
            ) : (
                <ul className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-4">
                    {leagues.map((league) => (
                        <li
                            key={league.id}
                            className="py-3 px-4 border-b border-gray-200 hover:bg-gray-50 transition-colors"
                        >
                            <span className="font-semibold text-gray-700">
                                {league.name}
                            </span>{" "}
                            - <span className="text-gray-500">{league.area.name}</span>
                        </li>
                    ))}
                </ul>
            )}

            <button className="mt-6 py-2 px-4 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700 transition">
                <Link href="/">Voltar à página anterior</Link>
            </button>
        </main>
    );
}

